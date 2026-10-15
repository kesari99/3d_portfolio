export const site = {
  name: "Kesari Devaraya",
  title: "Kesari Devaraya - Full Stack Developer | AI Systems | Voice AI",
  tagline: "Full stack developer building AI-driven systems that solve real business problems.",
  greeting: "Hi, I'm Kesari",
  description:
    "Kesari Devaraya is a full stack developer building voice AI and automation systems at Repaio. Articles on engineering, AI agents and things learned along the way.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kesari-devaraya.vercel.app",
  email: "kesaridevaraya@gmail.com",
  // Profile photo shown in the hero.
  photo: "/assets/profile.jpg",
  ogImage: "/assets/profile.jpg",
  resume: "/document/full_stack_resume.pdf",
};

export const socials = {
  github: "https://github.com/kesari99",
  linkedin: "https://www.linkedin.com/in/kesari-devaraya/",
  leetcode: "https://leetcode.com/u/kesaridevaraya/",
};

// Each paragraph is a list of text / link parts so links can sit inline.
export type Part = string | { text: string; href: string };

export const past: Part[][] = [
  [
    "Currently SDE-1 at Repaio since June 2025, building multilingual Voice AI agents and WhatsApp automation for debt collection, from telephony and STT/TTS to LLM workflows and CRM sync. Before that, a project intern at IF MedTech building Android apps with embedded AI models.",
  ],
];

export type SkillItem = string | { name: string; href: string };

// Items with an href link to the matching note in /learning.
export const skills: SkillItem[][] = [
  ["TypeScript", "JavaScript", "Python", "Java", "Kotlin", "C"],
  [
    "LLM APIs",
    "voice agents",
    { name: "LiveKit", href: "/learning/ai-agent-building-blocks#livekit-the-real-time-voice-layer" },
    "STT/TTS",
    "telephony",
    "WhatsApp automation",
  ],
  ["React", "Next.js", "Tailwind", "Redux", "Node.js", "Express"],
  ["PostgreSQL", "MongoDB", { name: "Redis", href: "/learning/websockets-socket-io-redis-pubsub#redis-and-pubsub" }, "Prisma", "Firebase"],
  ["AWS S3", "AWS SQS", "Docker"],
  [
    "Git",
    "Postman",
    "distributed systems",
    "caching",
    "AI agent architectures",
  ],
];

export type Project = {
  name: string;
  description: string;
  keywords: string[];
  image: string;
  github: string;
};

export const projects: Project[] = [
  {
    name: "Learning Management App",
    description:
      "A scalable learning management platform for creating, organizing and delivering educational content, with course management, progress tracking, assignments and real-time updates.",
    keywords: ["React", "shadcn/ui", "Tailwind CSS", "Node.js", "React Three Fiber"],
    image: "/assets/projects/learning_management_system.svg",
    github: "https://github.com/kesari99/learning-managment-system",
  },
  {
    name: "School Management App",
    description:
      "A complete school management platform for admins, teachers, students and parents, with role-specific dashboards and structured workflows for daily school operations.",
    keywords: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "MongoDB"],
    image: "/assets/projects/school_managment_app.png",
    github: "https://github.com/kesari99/school-managment-app",
  },
  {
    name: "Real Estate Application",
    description:
      "A consumer-to-owner property application where customers discover properties for sale or rent and connect directly with landowners, with listings, property details and database-backed management.",
    keywords: ["React", "Node.js", "Tailwind CSS", "Firebase", "MongoDB"],
    image: "/assets/projects/real_estate_thumbnail.png",
    github: "https://github.com/kesari99/real-estate-app",
  },
];
