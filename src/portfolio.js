/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "anws",
  logo_name: "anws()",
  nickname: "anws",
  full_name: "Khaerul Anwar",
  subTitle:
    "Backend Developer, ERPNext Customization Expert | Always Building, 🔥 Always Learning.",
  resumeLink:
    "https://drive.google.com/file/d/1VszBfzJtIIpx5B_yy7fNVXR6Klh7UGAM/view?usp=drive_link",
  mail: "mailto:anwar.ispriyar@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/khaanw",
  linkedin: "https://www.linkedin.com/in/khaerul-anwar/",
  gmail: "anwar.ispriyar@gmail.com",
  gitlab: "https://gitlab.com/anws",
};

const skills = {
  data: [
    {
      title: "ERPNext Specialist",
      fileName: "FullStackImg",
      skills: [
        "⚡ Expert in customizing ERPNext modules (Selling, Buying, Stock, Accounting, CRM)",
        "⚡ Creating and modifying DocTypes, Custom Scripts, Print Formats, Workflows",
        "⚡ Developing custom ERPNext apps with deep integration to core system",
        "⚡ Building RESTful API endpoints and integrating with external services (e.g. payment, e-tax, principal)",
        "⚡ Automating background jobs with Frappe's scheduler and background workers",
        "⚡ Managing ERPNext multi-site environments with Docker and custom networks",
        "⚡ Handling real-world business logic and data sync across divisions and endpoints",
        "⚡ Debugging, testing, and maintaining ERPNext in production environments",
        "⚡ Experience with Dockerized ERPNext setup, version control (Git), and production deployment",
      ],

      softwareSkills: [
        {
          skillName: "ERPNext",
          fontAwesomeClassname: "simple-icons:erpnext",
          style: {
            color: "#1B74E4", // Bisa ganti sesuai preferensi, ERPNext belum ada icon resminya, biasanya pakai generic
          },
        },
        {
          skillName: "Frappe",
          fontAwesomeClassname: "simple-icons:frappe",
          style: {
            color: "#1B74E4", // Sama seperti ERPNext
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
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
          skillName: "Jinja",
          fontAwesomeClassname: "simple-icons:jinja",
          style: {
            color: "#B41717",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MariaDB",
          fontAwesomeClassname: "simple-icons:mariadb",
          style: {
            color: "#003545",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
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
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
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
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Filament",
          fontAwesomeClassname: "simple-icons:filament",
          style: {
            color: "#4f46e5",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "MariaDB",
          fontAwesomeClassname: "simple-icons:mariadb",
          style: {
            color: "#003545",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
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
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
        {
          skillName: "REST API",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universitas Budi Luhur",
      subtitle: "Bachelor in Information Technology",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I studied core subjects in programming and software development, including algorithms, database systems, web development, and object-oriented programming.",
        "⚡ I have completed several projects during my studies, focusing on system development, web applications, and database management. ",
        "⚡ I also actively worked on personal and collaborative projects to sharpen my skills in real-world scenarios.",
      ],
      website_link: "https://www.budiluhur.ac.id/",
    },
    // {
    //   title: "Dr. S. & S. S. Ghandhy College Of Engineering & Technology",
    //   subtitle: "Diploma in Information Technology",
    //   logo_path: "ssgandhy.png",
    //   alt_name: "SSGC",
    //   duration: "2018 - 2021",
    //   descriptions: [
    //     "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
    //     "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
    //     "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
    //     "⚡ I have secured 9.82 CGPA.",
    //   ],
    //   website_link: "http://www.ssgc.cteguj.in/",
    // },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "M0001: MongoDB Basics",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Hackathon",
    //   subtitle: "Hack The Mountains",
    //   logo_path: "hackathon1.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Cyber Security & Cyber Forensics",
    //   subtitle: "Workshop at IIT Bombay",
    //   logo_path: "iit.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
    //   alt_name: "Workshop",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
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
  title: "Professional Summary",
  description:
    "As a Backend Developer with over two years of experience, I've specialized in building scalable backend systems using Python (Frappe/ERPNext), Laravel, and Oracle EBS. I’ve developed custom modules, integrated external APIs, and optimized enterprise systems for financial and distribution workflows.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Backend Developer – ERPNext / Python",
          company: "PT Unirama Duta Niaga",
          company_url: "",
          logo_path: "crest.png",
          duration: "July 2023 – Present",
          location: "Jakarta Utara, DKI Jakarta - Indonesia",
          description: [
            "Developed and maintained ERP systems using ERPNext v14 and Frappe Framework, customizing doctypes, reports, and automating journal entries and ledgers for financial processes.",
            "Built custom modules such as e-Cash and Centralized Accounting to streamline financial processes and centralized journal posting.",
            "Customized doctypes, reports, and PDF print formats across finance, sales, and warehouse workflows.",
            "Designed and exposed RESTful APIs to integrate ERP with external CRM, WHM, and vendor systems, ensuring real-time master data sync (Customers, Items, Pricing).",
            "Developed custom APIs for mobile apps including HRMS, SFA, and warehouse modules.",
            "Implemented approval workflows with role-based routing for financial transactions and expense claims.",
            "Integrated ERPNext with vendor distribution platforms for automated order placement and stock updates.",
            "Ensured maintainable code using Git, Docker, and modular scripting.",
          ],
          color: "#e95420",
        },

        {
          title: "Web Developer – Laravel & MySQL",
          company: "PT Unirama Duta Niaga",
          company_url: "",
          logo_path: "crest.png",
          duration: "Mar 2022 – Jul 2023",
          location: "Jakarta Utara, DKI Jakarta - Indonesia",
          description: `
- Designed and deployed a custom Sales Force Automation (SFA) system web-based to support sales tracking and reporting across multiple regions.
- Developed backend features using Laravel, integrated secure CRUD operations, and implemented reusable components for rapid feature development.
- Designed responsive user interfaces with JavaScript, jQuery, and Bootstrap, improving user interaction across devices.
- Maintained clean code practices using Git, implemented versioning workflows, and optimized backend performance through schema design.`,
          color: "#f36f21",
        },
        {
          title: "Oracle EBS Technical Development",
          company: "PT Unirama Duta Niaga",
          company_url: "",
          logo_path: "crest.png",
          duration: "Dec 2019 – Mar 2022",
          location: "Jakarta Utara, DKI Jakarta - Indonesia",
          description: `
- Customized enterprise reports using PL/SQL, Oracle Reports, and Forms, tailored to support finance and logistics decision-making.
- Collaborated with technical teams to support data migration, testing, and user training across finance and logistics departments.
- Functional Analyst supporting and maintaining Oracle EBS, particularly in Distribution Modules (Order Management, Inventory, Procurement).`,
          color: "#a00000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects focus on building custom applications, developing RESTful APIs, and integrating external systems to support and automate business workflows. Most of my work involves creating tailored solutions using ERPNext and Frappe Framework to meet specific operational needs. Please note that not all of my projects are published on GitHub due to internal use and confidentiality.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hari-crop.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    // link: "https://twitter.com/Harikrushn9",
    // avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    // {
    //   id: "0",
    //   name: "Keep Calm and Carry On",
    //   url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
    //   description:
    //     "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "Augmented Reality",
    //       iconifyClass: "bi:badge-ar",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/keep-calm-and-carry-on",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //     {
    //       name: "Live Demo",
    //       url:
    //         "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "1",
    //   name: "YOG4LIFE SOCIAL APP",
    //   url: "https://github.com/kevalvavaliya/Yog4Life",
    //   description:
    //     "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/kevalvavaliya/Yog4Life",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "https://devfolio.co/projects/yoglife-b20d",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "2",
    //   name: "Adoptisity",
    //   url: "https://github.com/kevalvavaliya/Adoptisity",
    //   description:
    //     "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Wix",
    //       iconifyClass: "bxl:wix",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Adoptisity",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/adoptisity",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //     {
    //       name: "Live Demo",
    //       url: "https://rajmahadevwala1.wixsite.com/adoptisity",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "3",
    //   name: "FinSplit",
    //   url: "https://github.com/rajmahadev8/Fin-Split",
    //   description:
    //     "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/rajmahadev8/Fin-Split",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/finsplit",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "4",
    //   name: "Emosic",
    //   url: "https://github.com/kevalvavaliya/Emosic",
    //   description:
    //     "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/kevalvavaliya/Emosic",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/emosic",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   name: "Fileblok",
    //   url: "https://github.com/harikanani/Fileblok",
    //   description:
    //     "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "Storyblok",
    //       iconifyClass: "logos-storyblok-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Fileblok",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/fileblok",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "BAUDDIK-GEEKS PORTFOLIO",
    //   url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
    //   description:
    //     "Awesome Community Portfolio website for Bauddhik-Geeks community",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Live Demo",
    //       url: "https://bauddhikgeeks.co/",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Votechain",
    //   url: "https://github.com/abhigoyani/votechain",
    //   description:
    //     "Awesome Community Portfolio website for Bauddhik-Geeks community",
    //   languages: [
    //     {
    //       name: "Flask",
    //       iconifyClass: "logos-flask",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/abhigoyani/votechain",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Swag Store",
    //   url: "https://github.com/harikanani/e-commerce-frontend",
    //   description:
    //     "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "MedusaJS",
    //       iconifyClass: "logos-medusa-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/e-commerce-frontend",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "node-blockchain",
    //   url: "https://github.com/harikanani/node-blockchain",
    //   description:
    //     "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "TypeScript",
    //       iconifyClass: "skill-icons:typescript",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/node-blockchain",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "Know Me Well",
    //   url: "https://github.com/harikanani/personal-portfolio",
    //   description:
    //     "A simple command line interface based quiz app to know more about me :).",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "Repl.it",
    //       iconifyClass: "logos-replit-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/personal-portfolio",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Bloggify",
    //   url: "https://github.com/harikanani/Bloggify",
    //   description: "A Simple REST API for Blog Application.",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Bloggify",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "Stargazzers",
    //   url: "https://github.com/harikanani/stargazers",
    //   description: "An Unofficial API for GitHub Repo Stars Count",
    //   languages: [
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/stargazers",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "13",
    //   name: "GitHub Theme Portfolio",
    //   url: "https://github.com/harikanani/harikanani.github.io",
    //   description:
    //     "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "SCSS",
    //       iconifyClass: "vscode-icons:file-type-scss2",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/harikanani.github.io",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Live Demo",
    //       url: "https://harikanani.github.io/",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "COVID-19 Tracker",
    //   url: "https://github.com/harikanani/Covid19TrackerReact",
    //   description:
    //     "Simple Covid-19 Tracker made using React and deployed to Vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Covid19TrackerReact",
    //       iconifyClass: "ri:github-fill",
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
