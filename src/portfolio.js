/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "AMiR",
  logo_name: "AMiR",
  nickname: "amiranmanesh",
  full_name: "Amirhossein Iranmanesh",
  subTitle:
    "Experienced Software Engineer and Blockchain Specialist with 6+ years of expertise in scalable backend systems, blockchain, and distributed architectures.",
  resumeLink:
    "https://drive.google.com/file/d/17HCKQFAcqZoSI9jTEsolAB_QuN0vhZSP/view?usp=sharing",
  mail: "mailto:iranmanesh.ah@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/amiranmanesh/",
  linkedin: "https://www.linkedin.com/in/amiranmanesh/",
  telegram: "https://t.me/iranmanesh_ah/",
  gmail: "iranmanesh.ah@gmail.com/",
};

const skills = {
  data: [
    {
      title: "Software Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Expert in building scalable and secure backend systems",
        "⚡ Proficient in blockchain development and distributed ledger technologies",
        "⚡ Skilled in designing microservices and distributed systems",
      ],
      softwareSkills: [
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#67d0de",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#007acc",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#376c99",
          },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "simple-icons:rust",
          style: {
            color: "#dea584",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ed",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326ce5",
          },
        },
        {
          skillName: "Postgres",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#149b4e",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#dc382d",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#756dda",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7277ad",
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
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Master Degree of Artificial Intelligence",
      subtitle: "Science and Research Branch, Azad University, Tehran, Iran",
      logo_path: "uni-azad.png",
      alt_name: "MSC AI",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Pursuing advanced studies in Artificial Intelligence with a focus on machine learning and deep learning.",
      ],
      website_link: "https://srbiau.ac.ir/",
    },
    {
      title: "Bachelor Degree of Computer Engineering",
      subtitle: "Semnan University, Semnan, Iran",
      logo_path: "semuni-logo.png",
      alt_name: "BSC CE",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Studied key topics like Data Structures, DBMS, AI, and Security.",
        "⚡ Served as a Teacher Assistant for C++ Programming for 2 years.",
      ],
      website_link: "https://ce.semnan.ac.ir/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Projects, and Leadership Roles",
  description:
    "I have extensive experience as a software engineer, focusing on backend development, blockchain technologies, and scalable system architecture. Over the years, I have taken on roles ranging from developer to technical lead, showcasing a commitment to innovation and excellence.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Experience",
      experiences: [
        {
          title: "Technical Manager",
          company: "Kuknos",
          company_url: "https://kuknos.org/",
          logo_path: "",
          duration: "May 2024 - Present",
          location: "Tehran, Iran",
          description:
            "Led a team of 15 engineers to deliver high-impact blockchain solutions, including decentralized applications (DApps) and advanced cryptographic systems. Focused on multi-blockchain integration and key stakeholder alignment to achieve strategic goals.",
          color: "#0071C5",
        },
        {
          title: "Technical Lead",
          company: "Kuknos",
          company_url: "https://kuknos.org/",
          logo_path: "",
          duration: "May 2023 - May 2024",
          location: "Tehran, Iran",
          description:
            "Spearheaded the development of Borna Blockchain, a CBDC platform using Hyperledger Fabric. Designed a Public Key Infrastructure (PKI) system for issuing digital certificates and deployed solutions for digitally signing promissory notes and contracts.",
          color: "#0071C5",
        },
        {
          title: "Backend Developer",
          company: "Kuknos",
          company_url: "https://kuknos.org/",
          logo_path: "",
          duration: "Sep 2021 - May 2023",
          location: "Tehran, Iran",
          description:
            "Engineered secure, scalable backends for blockchain-based applications. Enhanced security with Shamir's Secret Sharing algorithm for private key management and developed advanced authentication and federated identity microservices.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Freelance and Independent Projects",
      experiences: [
        {
          title: "Backend Team Lead",
          company: "Lendin",
          company_url: "https://lendin.com/",
          logo_path: "",
          duration: "Apr 2023 - Dec 2023",
          location: "Remote, Canada",
          description:
            "Orchestrated a team of three backend developers to create a peer-to-peer lending platform. Collaborated with UI/UX designers and DevOps teams to ensure a seamless product experience.",
          color: "#555733",
        },
        {
          title: "Backend Developer",
          company: "Stock Marketing Startup",
          company_url: "",
          logo_path: "",
          duration: "Oct 2020 - Jun 2021",
          location: "Tehran, Iran",
          description:
            "Built a real-time data pipeline to aggregate and analyze stock market data. Developed web crawlers to enhance data accuracy and contributed to building a trading bot prototype.",
          color: "#FF5733",
        },

        {
          title: "Mobile Developer",
          company: "Freelancer",
          company_url: "",
          logo_path: "",
          duration: "2017 - 2020",
          location: "Remote",
          description:
            "Designed and developed multiple Android and Flutter applications, focusing on user-friendly interfaces and scalable architectures. Delivered apps like Radgir, HighFollower, and Hesabchi.",
          color: "#20B2AA",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on a diverse range of projects over the years, leveraging cutting-edge technologies. My primary expertise lies in developing backend systems using Golang, building Android applications, and creating cross-platform solutions with Flutter. Below are some of the key projects I have worked on.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "7",
      name: "Lendin",
      url: "https://lendin.com/",
      description:
        "A peer-to-peer lending platform enabling seamless installment-based purchases.",
      languages: [
        {
          name: "Golang",
          iconifyClass: "logos-go",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Redis",
          iconifyClass: "logos-redis",
        },
      ],
    },
    {
      id: "6",
      name: "Torob Search Telegram Bot",
      url: "https://t.me/TorobSearchBot",
      description:
        "A Telegram Bot that uses Torob API to search for product prices among the online shops and show the results.",
      languages: [
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "Telegram",
          iconifyClass: "logos-telegram",
        },
      ],
    },
    {
      id: "5",
      name: "Radgir App",
      url: "https://radgir.net/",
      description:
        "Smart application to track post (and Tipax) packages with user-friendly Ui & featuring automation package tracking.",
      languages: [
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "SQLite",
          iconifyClass: "logos-sqlite",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
      ],
    },
    {
      id: "4",
      name: "HighFollower App",
      url: "https://highfollower.com/",
      description:
        "HighFollower is an Android application that helps to increase Instagram followers and interacting with Instagram APIs in the background.",
      languages: [
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
      ],
    },
    {
      id: "3",
      name: "Hesabchi App",
      url: "https://hesabchiapp.ir/",
      description:
        "Hesabchi is a tool to manage daily costs and shares between roommates and teams.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "logos-kotlin",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
      ],
    },
    {
      id: "2",
      name: "NerkhName App",
      url: "https://b2n.ir/g18277",
      description:
        "Real-time Currency exchange price status Android application.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "logos-kotlin",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
      ],
    },
    {
      id: "1",
      name: "Zooril App",
      url: "https://b2n.ir/p21933",
      description:
        "A smart Application for Zooril smart home kit's clients to control devices.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "logos-kotlin",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
      ],
    },
    {
      id: "0",
      name: "Aapks Store App",
      url: "https://aapks.com/",
      description:
        "AAPKS (Android APKs) is an App store application for android OS. It uses aptoide webservice.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "logos-kotlin",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
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
