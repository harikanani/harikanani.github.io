// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
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
    "https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing",
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
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
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
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
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
        //   skillName: "Python",
        //   fontAwesomeClassname: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Life Long Learner",
      fileName: "MathematicsImg",
      skills: [
        "⚡ Experience working on team projects",
        "⚡ Experience in Agile/Scrum practices",
        "⚡ Whats next",
      ],
      softwareSkills: [
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
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
      title: "Temple University Japan Campus",
      subtitle: "Bachelor in International Business Studies",
      // logo_path: "",
      // alt_name: "",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ I have graduated with a Major in International Business and a Minor in Economics.",
      ],
      website_link: "https://www.tuj.ac.jp/",
    },
    {
      title: "Sabio",
      subtitle: "Coding Bootcamp",
      logo_path: "ssgandhy.png",
      alt_name: "SSGC",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://sabio.la/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
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
          title: "Web Support",
          company: "US Bank",
          company_url: "https://www.usbank.com/index.html",
          logo_path: "usbankLogo.png",
          duration: "May 2020 - September 2021",
          location: "Work From Home",
          description: `Answer incoming card member calls regarding online access and service questions or issues.  Maintain the highest level of professionalism by establishing a positive rapport with each card member while documenting and resolving technical issues.`,
          color: "#ee3c26",
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
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilepic.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "1",
      name: "Sabio Project",
      url: "",
      description: "stuff about project here",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "C#",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    // {
    //   id: "2",
    //   name: "Automate Discord Bot",
    //   url: "",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
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
