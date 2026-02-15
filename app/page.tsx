"use client";

import { ThemeToggle } from "./components/ThemeToggle";
import { TechBadge } from "./components/TechBadge";

export default function Home() {
  const projects = [
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <header className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        {/* Hero Section */}
        <section className="mb-28" id="hero">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-muted">
              Available for work
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hi, I&apos;m Your Name
          </h1>
          <p className="mb-4 font-mono text-lg text-muted">
            Full Stack Developer
          </p>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            I build modern web applications with a focus on clean code,
            performance, and user experience. Passionate about creating elegant
            solutions to complex problems.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Get in touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              View projects
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-28" id="about">
          <h2 className="mb-1 text-sm font-medium uppercase tracking-widest text-muted">
            About
          </h2>
          <div className="mb-6 h-px w-8 bg-border"></div>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              I&apos;m a developer with experience in building scalable web
              applications. My expertise lies in modern JavaScript frameworks
              and backend technologies.
            </p>
            <p>
              I enjoy working on challenging projects that push the boundaries
              of what&apos;s possible on the web. When I&apos;m not coding,
              you&apos;ll find me exploring new technologies or contributing to
              open source.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              // "SQL",
              // "HTML",
              "SCSS",
              "Tailwind CSS",
              "Git",
              "Docker",
              "React Native",
              "Expo",
            ].map((skill) => (
              <TechBadge key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-28" id="experience">
          <h2 className="mb-1 text-sm font-medium uppercase tracking-widest text-muted">
            Experience
          </h2>
          <div className="mb-8 h-px w-8 bg-border"></div>
          <div className="space-y-10">
            {[
              {
                title: "Senior Developer",
                company: "Company Name",
                period: "2023 — Present",
                description:
                  "Led development of key features for the main product. Improved performance by 40% and mentored junior developers.",
              },
              {
                title: "Full Stack Developer",
                company: "Previous Company",
                period: "2021 — 2023",
                description:
                  "Developed and maintained multiple web applications using React and Node.js. Collaborated with designers and product managers.",
              },
              {
                title: "Junior Developer",
                company: "First Company",
                period: "2019 — 2021",
                description:
                  "Started my career building responsive websites and learning modern web development practices.",
              },
            ].map((job) => (
              <div
                key={job.title}
                className="group relative grid gap-1 sm:grid-cols-[140px_1fr]"
              >
                <span className="font-mono text-xs text-muted/70">
                  {job.period}
                </span>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {job.title}
                  </h3>
                  <p className="mb-2 text-sm text-muted">{job.company}</p>
                  <p className="text-sm leading-relaxed text-muted">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-28" id="projects">
          <h2 className="mb-1 text-sm font-medium uppercase tracking-widest text-muted">
            Projects
          </h2>
          <div className="mb-8 h-px w-8 bg-border"></div>
          <div className="space-y-5">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:border-muted/50 hover:bg-card"
              >
                {/* Thumbnail */}
                <div className="aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted/10">
                  <div className="flex h-full w-full items-center justify-center text-muted/30">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-base font-medium text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 text-muted transition-colors hover:bg-background hover:text-foreground"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 text-muted transition-colors hover:bg-background hover:text-foreground"
                        aria-label={`${project.title} live demo`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-background px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20" id="contact">
          <h2 className="mb-1 text-sm font-medium uppercase tracking-widest text-muted">
            Contact
          </h2>
          <div className="mb-6 h-px w-8 bg-border"></div>
          <p className="mb-6 text-base leading-relaxed text-muted">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <div className="flex items-center gap-3">
            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="rounded-xl border border-border bg-card/50 p-3 text-muted transition-all hover:border-muted/50 hover:bg-card hover:text-foreground"
              aria-label="Email"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-card/50 p-3 text-muted transition-all hover:border-muted/50 hover:bg-card hover:text-foreground"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-card/50 p-3 text-muted transition-all hover:border-muted/50 hover:bg-card hover:text-foreground"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-card/50 p-3 text-muted transition-all hover:border-muted/50 hover:bg-card hover:text-foreground"
              aria-label="X (Twitter)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Your Name
            </p>
            <p className="font-mono text-xs text-muted/50">
              Built with Next.js
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
