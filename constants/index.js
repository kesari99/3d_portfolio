import GithubIcon from "../public/assets/icons/github.svg";
import LinkedInIcon from "../public/assets/icons/linkedin.svg";
import FrontendIcon from "../public/assets/icons/frontend.svg";
import LeaderShipIcon from "../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "../public/assets/icons/problem-solving.svg";
import BackendIcon from "../public/assets/icons/backend.svg";
import FullStackIcon from "../public/assets/icons/full-stack.svg";
import LeetCode from "../public/assets/icons/leetcode.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "Kotlin",
      icon: "/assets/tech/kotlin.jpeg",
      link: "https://kotlinlang.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
   
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "Postgress",
      icon: "/assets/tech/postgress.jpeg",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Project Intern",
    company_name: "IF MedTech",
    icon: "/assets/company/ifmedtech.png",
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Developed robust Android applications focused on delivering seamless and intuitive user experiences.",
      "Established reliable connections using Bluetooth, Wi-Fi, and USB serial protocols to enable efficient device communication.",
      "Integrated advanced AI models into mobile apps to offer predictive insights and enhance automation features.",
      "Collaborated with multidisciplinary teams to optimize connectivity and overall app performance."
    ],
  },

  {
    title: "Software Developer Intern",
    company_name: "Modgenice Technologies ",
    icon: "/assets/company/modgenics.png",
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Designed and implemented reusable form components using Formik and Yup, streamlining form handling and validation across multiple features to ensure consistency and reduce development time.",
      "Integrated RESTful APIs to facilitate dynamic data fetching and real-time updates, which enhanced the application’s responsiveness and robustness.",
      "Collaborated with cross-functional teams to refine user interface workflows and improve overall user experience through effective feedback and iterative design adjustments.",
      "Conducted comprehensive testing and debugging of both form components and API integrations, ensuring high-quality, reliable functionality in a fast-paced development environment."
    ],
  },

  {
    title: "Full Stack Developer Intern",
    company_name: "Health Mudhra",
    icon: "/assets/company/healthmudhra.png",
    iconBg: "#E6DEDD",
    date: "July 2024 - October 2024",
    points: [
      "Created a dynamic and responsive Material-UI table for efficient doctor and patient management with sorting, filtering, and pagination features.",
      "Built and customized reusable Material UI components to maintain a cohesive and modern interface across the application.",
      "Leveraged Material UI’s theming system to implement brand-aligned designs that ensure a consistent visual experience.",
      "Integrated Material UI components with dynamic state management for real-time interaction and optimized performance.",
      "Enhanced user engagement and accessibility by incorporating Material UI form elements and interactive animations using Framer Motion.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate Application",
    description:
      "A Comsumer to Owner Property Based Managment Application that allows customers to buy and rent properties and maintain contacts with land owners",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "FireBase",
        color: "orange-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/real_estate_thumbnail.png",
    source_code_link: "https://github.com/kesari99/real-estate-app.git",
    deployed_link: "",
  },
  {
    name: "School Managment App",
    description:
      "Designed a complemte school managment app that keeps tracks for admin, teacher, student and parent along with their individual functionalities",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "prismaORM",
        color: "orange-text-gradient",
      },
      {
        name: "mongoDB",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/school_managment_app.png",
    source_code_link: "https://github.com/kesari99/school-managment-app.git",
    deployed_link: "",
  },
  {
    name: "Promt Master",
    description:
      "Manage your AI promts based on tags and search functionalites.Implemented effective sorting, searching and filterting ability",
    tags: [
      {
        name: "javacript",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "monogoDb",
        color: "yellow-text-gradient",
      },
      
      
    ],
    image: "/assets/projects/prompt_master_thumbnail.png",
    source_code_link:
      "https://github.com/kesari99/PromptMaster.git",
    deployed_link:
      "#",
  },
  {
    name: "Learning Managment App",
    description: 
     "Learmin Management App is a modern, scalable platform designed to streamline the creation, organization, and delivery of educational content. The app offers intuitive course management, progress tracking, and dynamic interactive features—enhanced by smooth animations and tilt effects. It effectively bridges the gap between educators and learners, providing a centralized solution for managing courses, assignments, and real-time updates while ensuring a seamless and visually appealing experience.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "shadcnUI",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
     
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/inprogress.png",
    source_code_link:
      "https://github.com/kesari99/learning-managment-system.git",
    deployed_link:
      "#",
  },
  
  
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/kesari99",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/kesari-devaraya/",
  },
  {
    id: "x",
    icon: <LeetCode />,
    link: "https://leetcode.com/u/kesaridevaraya/",
  },
  
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
 
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
