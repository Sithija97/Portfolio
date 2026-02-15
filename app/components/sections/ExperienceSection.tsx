import { EXPERIENCES } from "@/app/data/constants";
import { SectionHeader } from "@/app/components/SectionHeader";

export function ExperienceSection() {
  return (
    <section className="mb-28" id="experience">
      <SectionHeader title="Experience" />
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
              <div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-muted/50 bg-background" />
              {index < EXPERIENCES.length - 1 && (
                <div className="absolute left-[4.5px] top-4 -bottom-10 border-l-[1.5px] border-dotted border-muted/30" />
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
