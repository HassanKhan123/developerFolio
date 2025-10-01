/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hassan Khan",
  title: "Hi all, I'm Hassan",
  subTitle: emoji(
    "Passionate Full Stack Developer 🚀 with 5+ years of experience in building Web and Mobile apps using React, Next.js, Node.js, and React Native. Currently exploring Machine Learning and Data Science with tools like TensorFlow. Always exploring new tech and pushing boundaries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ctP95BrpzAjSBYa8FNqdo2ppt8AKxAZb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HassanKhan123",
  linkedin: "https://www.linkedin.com/in/devhassankhan/",
  gmail: "devhassankhan@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/M.H.Khan01",
  medium: "https://medium.com/@devhassankhan",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Building fast, responsive Web and Mobile UIs using React, Next.js, and React Native"
    ),
    emoji(
      "⚡ Creating intelligent apps with ML, NLP, and TensorFlow integrations"
    ),
    emoji(
      "⚡ Integration of third-party services like Firebase, AWS, and Web3 tools"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hochschule Fulda",
      logo: require("./assets/images/fuldaLogo.webp"),
      subHeader: "Master of Global Software Development",
      duration: "October 2023 - Present",
      desc: ""
      // descBullets: [""]
    },
    {
      schoolName: "University of Karachi",
      logo: require("./assets/images/kuLogo.jpg"),
      subHeader: "BS Software Engineering",
      duration: "February 2017 - Febraury 2021",
      desc: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "React Native / Mobile Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },

    {
      Stack: "AI/ML & Data Science",
      progressPercentage: "65%"
    },

    {
      Stack: "Web3 / Blockchain",
      progressPercentage: "60%"
    },
    {
      Stack: "DevOps & Cloud (AWS, GitHub Actions)",
      progressPercentage: "50%"
    },
    {
      Stack: "Database Management (SQL, MongoDB, Firebase)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Drox Labs",
      companylogo: require("./assets/images/drox.jpeg"),
      date: "Jan 2024 – June 2025",
      desc: "Worked on AI-powered voice assistant apps and real-time systems using cross-platform technologies.",
      descBullets: [
        "Developed a voice assistant app using React Native, Node.js, and Python",
        "Integrated real-time speech recognition and LLM-based NLP",
        "Designed modular, responsive UIs using React Hooks and Context API"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "BlockApex",
      companylogo: require("./assets/images/blockapex.png"),
      date: "June 2023 – Dec 2023",
      desc: "Focused on blockchain-integrated frontend systems with secure UX and cross-chain support.",
      descBullets: [
        "Built a multi-chain wallet extension using React.js, TypeScript, and Web3.js",
        "Implemented real-time transaction tracking and cross-chain sync",
        "Created responsive interfaces with accessibility in mind"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Xord",
      companylogo: require("./assets/images/xord.png"),
      date: "October 2020 – June 2023",
      desc: "Led development for blockchain wallets and smart UI components, integrating advanced tech like zkRollups and facial recognition.",
      descBullets: [
        "Developed React Native wallet with zkRollups and Optimism support",
        "Built interactive dashboards using React, Tailwind CSS, and WebGL",
        "Integrated OpenCV and TensorFlow for facial recognition attendance systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/storeit.png"),
      projectName: "StoreIt",
      projectDesc:
        "Storage and File Sharing Platform using Next.js, TailwindCSS and Appwrite.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://store-it-rust.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/signalist.png"),
      projectName: "Signalist",
      projectDesc:
        "Track real-time stock prices, get personalized alerts and explore detailed company insights.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stocks-app-sage.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 📜"),
  subtitle: "Certifications that I have done !",

  achievementsCards: [
    {
      title: "TensorFlow for Deep Learning Bootcamp",
      subtitle: "",
      image: require("./assets/images/tf.png"),
      imageAlt: "TensorFlow for Deep Learning Bootcamp",
      footerLink: []
    },
    {
      title: "Complete A.I. & Machine Learning, Data Science Bootcamp",
      subtitle: "",
      image: require("./assets/images/ai.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: []
    },

    {
      title: "SQL and PostgreSQL: The Complete Developer's Guide",
      subtitle: "",
      image: require("./assets/images/sql.png"),
      imageAlt: "PWA Logo",
      footerLink: []
    },
    {
      title: "MongoDB - The Complete Developer's Guide",
      subtitle: "",
      image: require("./assets/images/mongo.png"),
      imageAlt: "TensorFlow for Deep Learning Bootcamp",
      footerLink: []
    },
    {
      title: "NestJS: The Complete Developer's Guide",
      subtitle: "",
      image: require("./assets/images/nest.png"),
      imageAlt: "NestJS: The Complete Developer's Guide",
      footerLink: []
    },

    {
      title: "Typescipt Certification from Udmey",
      subtitle: "",
      image: require("./assets/images/typescript.png"),
      imageAlt: "PWA Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+491786474214",
  email_address: "devhassankhan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
