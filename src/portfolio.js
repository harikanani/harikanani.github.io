const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Tim",
  logo_name: "tim.a()",
  full_name: "Tim Amburn",
  subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://www.yumpu.com/en/document/read/66248654/timothy-amburn-resume",
  mail: "softwaredeveloper@tima.mailer.me",
};

const socialMediaLinks = {
  github: "https://github.com/TimA314",
  linkedin: "https://www.linkedin.com/in/timothy-amburn",
  email: "softwaredeveloper@tima.mailer.me",
  twitter: "https://twitter.com/TimAmburn",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications",
        "⚡ Creating application backend in Node & ASP.NET",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating / Managing / Analyzing databases using Microsoft SQL Server",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Microsoft SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: ".Net",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
      ],
    },
    {
      title: "What I can do",
      fileName: "MathematicsImg",
      skills: [
        "⚡ Skills to develop cross-browser applications targeting both desktop and mobile clients via responsive design.",
        "⚡ Team communication and development strategies such as Agile/Scrum Methodologies.",
        "⚡ Integrate current leading developer tools and APIs such as AWS, SendGrid, Google API's, Git, Trello, and Twilio, Browser Developer Tools and integrated developer environments (IDE’s) such as Visual Studio.",
        "⚡ Proficient in web development tools such as: ASP.net C#/.Net, RESTFUL API Design, MVC, Data Access, Object-Oriented Design, Data Structures, Data Access, Singleton, Caching Strategies, Database Design, Query Structure and Stored Procedures.",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      id: 0,
      title: "Temple University Japan Campus",
      subtitle: "Bachelor in International Business Studies",
      logo_path: "templeLogo.jpg",
      alt_name: "Temple Logo",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ Major in International Business and a Minor in Economics.",
      ],
      website_link: "https://www.tuj.ac.jp/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google IT Support Professional Certificate",
      subtitle: "Coursera",
      logo_path: "googleCertsIT.png",
      certificate_link:
        "https://www.credly.com/badges/773b04f3-3e85-4ea9-b56f-afcc8606869e?source=linked_in_profile",
      alt_name: "Google IT Support Professional",
      color_code: "#2a73cc",
    },
    {
      title: "CompTia A+ Certification",
      subtitle: "A+",
      logo_path: "compTIAA2Bce.png",
      certificate_link:
        "https://www.credly.com/badges/1c28758a-5763-4d81-b470-325ff55c6198?source=linked_in_profile",
      alt_name: "A+",
      color_code: "#fffbf3",
    },
    {
      title: "SQL Essential Training",
      subtitle: "SQL",
      logo_path: "sql-logo.jpg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/3bad36b46e1c854160459065654f93b14419856c30d2a783521ac26161ce18ae?trk=share_certificate",
      alt_name: "SQL",
      color_code: "#aaddd8",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "As a veteran I have developed a strong team focused work ethic and attention to detail. As a tech enthusiast I am always digging into the newest tech to see how it works and how it could be used. I've mostly done projects on my own and I am actively looking for work. I love to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Engineer",
          company: "World Print",
          company_url: "https://worldprints.azurewebsites.net/",
          logo_path: "worldprintlogo.png",
          duration: "Nov 2021 - Present",
          location: "Work From Home",
          description: `Full Stack Software Engineer. Responsible for development of venue components and assist in the development of events, and location components for a not-for-profit business software application`,
          color: "#010e75",
        },
        {
          title: "Web Support",
          company: "US Bank",
          company_url: "https://www.usbank.com/index.html",
          logo_path: "usbankLogo.png",
          duration: "May 2020 - September 2021",
          location: "Work From Home",
          description: `Answer incoming card member calls regarding service questions or issues.  Maintain the highest level of professionalism by establishing a positive rapport with each card member while documenting and resolving technical issues.`,
          color: "#1b3d00",
        },
        {
          title: "Aerospace Maintenance Technician",
          company: "US Air Force",
          company_url: "https://www.airforce.com/",
          logo_path: "usAirForceLogo.jpg",
          duration: "May 2008 - May 2016",
          location: "Global",
          description: `Developed and executed airfield management strategies, supervised and trained personnel in launching and recovery of mission critical aircraft. Traveled internationally collaborating and learning from foreign agencies Gained valuable skills in attention to detail and work ethics`,

          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2021 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest tools. I am most experienced in creating React Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Want to learn more",
    subtitle:
      "I don't blog frequently but when I find something awesome, I do try to share it so it can be helpful to others.",
    link: "https://twitter.com/TimAmburn",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "1",
      name: "CoinLand",
      url: "https://coin-land-01.web.app/",
      description:
        "A live full stack web app to view insightful news and stats for CryptoCurrencies. See up to date charts and stats for all of the top coins.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos-nodejs-icon",
        },
      ],
    },
    {
      id: "2",
      name: "Dev-Training-Ground",
      url: "https://github.com/TimA314/dev-training-ground",
      description:
        " A react web app that new developers can put their skills to work and gain experience in the open source proccess.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "WebScraper",
      url: "https://github.com/TimA314/webscraper",
      description:
        "A simple webscraper that can gather desired information from any website.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos-nodejs-icon",
        },
      ],
    },
    {
      id: "4",
      name: "AltIpsum",
      url: "https://github.com/TimA314/altipsum",
      description:
        "A website to generate a variety of Lorem Ipsum ranging from shakespear to the latest news.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "5",
      name: "Comic Book Galery",
      url: "https://github.com/TimA314/ComicBookGallery",
      description: "A practice gallery website made fully with C#.",
      languages: [
        {
          name: "C#",
          iconifyClass: "logos:c-sharp",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
