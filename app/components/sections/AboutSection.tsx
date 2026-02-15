import { SKILLS } from "../../data/constants";
import { TechBadge } from "../TechBadge";

export function AboutSection() {
  return (
    <section className="mb-28" id="about">
      <h2 className="mb-1 text-sm font-medium uppercase tracking-widest text-muted">
        About
      </h2>
      <div className="mb-6 h-px w-8 bg-border"></div>
      <div className="space-y-4 text-base leading-relaxed text-muted">
        <p>
          I&apos;m a Senior Software Engineer focused on building scalable,
          production-ready web applications using React, Next.js, and Node.js.
          My approach goes beyond implementation, I design systems with clean
          architecture, predictable patterns, and long-term maintainability in
          mind. I care deeply about performance, code quality, and structuring
          applications in a way that remains adaptable as they grow.
        </p>
        <p>
          I enjoy solving complex technical problems and turning them into
          intuitive, reliable user experiences. With a strong systems mindset
          and product awareness, I aim to build software that is both
          technically robust and genuinely useful. I&apos;m continuously
          exploring modern web architecture and AI-driven technologies, always
          refining my craft and pushing for better engineering standards.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <TechBadge key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}
