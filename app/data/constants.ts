export const PERSONAL = {
  name: "Sithija Shehara",
  title: "Full Stack Developer",
  bio: "I build scalable, performant web applications with React, Next.js, and modern backend technologies. Focused on clean architecture, thoughtful design, and delivering products that are both technically solid and genuinely useful.",
  email: "nsithijashehara@gmail.com",
  github: "https://github.com/Sithija97",
  linkedin: "https://www.linkedin.com/in/sithijashehara/",
  twitter: "https://x.com/sithijashehara",
  resumeFilename: "Sithija_Shehara_Resume.pdf",
} as const;

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "SCSS",
  "Tailwind CSS",
  "Git",
  "Docker",
  "React Native",
  "Expo",
] as const;

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Aventude",
    period: "May 2023 — Present",
    location: "Colombo, Sri Lanka",
    highlights: [
      "Built reusable React UI components, improving scalability and customization.",
      "Developed a rich text editor with Lexical framework and analytics dashboards.",
      "Optimized data fetching and rendering, cutting load times significantly.",
      "Mentored junior developers on React/Redux, boosting team productivity.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Aventude",
    period: "Mar 2022 — May 2023",
    location: "Colombo, Sri Lanka",
    highlights: [
      "Enhanced a low-code platform with React/TypeScript, improving usability and adoption.",
      "Contributed as a full-stack developer on a legal case management solution.",
      "Improved performance by profiling APIs and front-end rendering.",
      "Migrated large codebase to functional React components with hooks.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  github: string;
  live: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Lexical Rich Text Editor",
    description:
      "A React and TypeScript-based rich text editor built with Meta's Lexical framework. Features include text formatting, font customization, code blocks with syntax highlighting, lists, links, alignment controls, and undo/redo support.",
    tags: ["React", "TypeScript", "Lexical"],
    image: "/projects/project-1.png",
    github: "https://github.com/Sithija97/Lexical-rich-text-editor-typescript",
    live: "https://lexical-rich-text-editor-typescript.vercel.app/",
  },
  {
    title: "JS Event Loop Visualizer",
    description:
      "An interactive tool that visualizes how JavaScript handles async operations with the event loop, microtasks, and macrotasks through step-by-step simulations.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/project-2.png",
    github: "https://github.com/Sithija97/JS-Visualizer",
    live: "https://js-visualizer-jade.vercel.app/",
  },
  {
    title: "LinkedIn Clone",
    description:
      "A full-stack social media platform with user authentication, posting, commenting, and real-time interactions. Features user profiles, post feeds, like/unlike functionality, and comment management.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Clerk",
      "Cloudinary",
      "Tailwind CSS",
    ],
    image: "/projects/project-3.png",
    github: "https://github.com/Sithija97/linkedin-clone",
    live: "https://linkedin-clone-z.vercel.app/",
  },
];
