import { EXPERIENCES } from "../../data/constants";

export function ExperienceSection() {
  return (
    <section className="mb-28" id="experience">
      <h2 className="mb-1 text-sm font-medium uppercase tracking-widest text-muted">
        Experience
      </h2>
      <div className="mb-8 h-px w-8 bg-border"></div>
      <div className="relative">
        {EXPERIENCES.map((job, index) => (
          <div
            key={`${job.company}-${job.period}`}
            className="group relative grid gap-1 pb-10 last:pb-0 sm:grid-cols-[140px_1fr]"
          >
            <span className="font-mono text-xs text-muted/70">
              {job.period}
            </span>
            <div className="relative pl-6">
              {/* Dot */}
              <div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-muted/50 bg-background"></div>
              {/* Dotted line */}
              {index < EXPERIENCES.length - 1 && (
                <div className="absolute left-[4.5px] top-4 bottom-[-40px] border-l-[1.5px] border-dotted border-muted/30"></div>
              )}
              <h3 className="text-base font-medium text-foreground">
                {job.title}
              </h3>
              <p className="mb-2 text-sm text-muted">{job.company}</p>
              <div className="space-y-1.5">
                {job.highlights.map((point) => (
                  <p key={point} className="text-sm leading-relaxed text-muted">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
