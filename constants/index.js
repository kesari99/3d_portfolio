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
  frontend: [
    {
      name: "React.js",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Framer Motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
  ],
  backendData: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgress.jpeg",
      link: "https://www.postgresql.org/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
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
};

const experiences = [
  {
    title: "SDE-1",
    company_name: "Repaio",
    icon: "/assets/company/repaio.png",
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
      "Built multilingual Voice AI agents for debt collection campaigns, integrating telephony, STT/TTS systems, and LLM workflows.",
      "Designed automated AI disposition pipelines that classify call outcomes and sync campaign insights back into CRM workflows.",
      "Integrated multi-account WhatsApp automation to support daily collections, follow-ups, and team operations.",
      "Connected TATA telephony services with the collections CRM to streamline recovery workflows for agents.",
    ],
  },

  {
    title: "Project Intern",
    company_name: "IF MedTech",
    icon: "/assets/company/ifmedtech.png",
    iconBg: "#E6DEDD",
    date: "January 2024 - March 2024",
    points: [
      "Developed robust Android applications focused on delivering seamless and intuitive user experiences.",
      "Established reliable connections using Bluetooth, Wi-Fi, and USB serial protocols to enable efficient device communication.",
      "Integrated advanced AI models into mobile apps to offer predictive insights and enhance automation features.",
      "Collaborated with multidisciplinary teams to optimize connectivity and overall app performance.",
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
      "A consumer-to-owner property management application that helps customers discover properties for sale or rent and connect directly with landowners. I built the full-stack workflow for listings, property details, user interactions, and database-backed property management.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/real_estate_thumbnail.png",
    source_code_link: "https://github.com/kesari99/real-estate-app.git",
    deployed_link: "",
  },
  {
    name: "School Management App",
    description:
      "Designed a complete school management platform for admins, teachers, students, and parents. The app supports role-specific dashboards, academic data management, and structured workflows for daily school operations.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma ORM",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/school_managment_app.png",
    source_code_link: "https://github.com/kesari99/school-managment-app.git",
    deployed_link: "",
  },
  {
    name: "Prompt Master",
    description:
      "A prompt management tool for organizing AI prompts by tags, search terms, and categories. I implemented sorting, filtering, and search flows so users can quickly find reusable prompts for different use cases.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/prompt_master_thumbnail.png",
    source_code_link: "https://github.com/kesari99/PromptMaster.git",
    deployed_link: "#",
  },
  {
    name: "Learning Management App",
    description:
      "A scalable learning management platform for creating, organizing, and delivering educational content. It includes course management, progress tracking, assignments, real-time updates, and animated learning interfaces for a smoother student experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },

      {
        name: "React Three Fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/learning_management_system.svg",
    source_code_link:
      "https://github.com/kesari99/learning-managment-system.git",
    deployed_link: "#",
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
