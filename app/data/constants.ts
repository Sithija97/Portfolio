export const PERSONAL = {
  name: "Sithija Shehara",
  title: "Full Stack Developer",
  bio: "I build scalable, performant web applications with React, Next.js, and modern backend technologies. Focused on clean architecture, thoughtful design, and delivering products that are both technically solid and genuinely useful.",
  email: "nsithijashehara@gmail.com",
  github: "https://github.com/Sithija97",
  linkedin: "https://www.linkedin.com/in/sithijashehara/",
  twitter: "https://x.com/sithijashehara",
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
  image: string;
  github: string;
  live: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack application built with Next.js and PostgreSQL. Features include real-time updates, authentication, and responsive design.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/project-1.png",
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description:
      "An open-source tool for developers. Built with React and Node.js, with over 1k stars on GitHub.",
    tags: ["React", "Node.js"],
    image: "/projects/project-2.png",
    github: "https://github.com/yourusername/project-two",
    live: "https://project-two.vercel.app",
  },
  {
    title: "Project Three",
    description:
      "A mobile-first e-commerce platform with payment integration and inventory management.",
    tags: ["React", "MongoDB", "Stripe"],
    image: "/projects/project-3.png",
    github: "https://github.com/yourusername/project-three",
    live: "https://project-three.vercel.app",
  },
];
