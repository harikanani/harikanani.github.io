import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  const style_img = style({
    width: "220px",
    height: "auto",
    borderRadius: " 50%",
    padding: "10px",
    border: `1px solid ${theme.accentColor}`,
    marginRight: "50px",
    boxShadow: `0px 0px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  });

  const card_body = style({
    borderBottom: `1px solid ${theme.accentColor}`,
    borderLeft: `1px solid ${theme.accentColor}`,
    borderRight: `1px solid ${theme.accentColor}`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${theme.accentColor}`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
  });

  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <div {...style_img}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(50%, 50%)",
            }}
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            {degree.descriptions.map((sentence) => {
              return (
                <p className="content-list" style={{ color: theme.text }}>
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: theme.accentColor,
                }}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
