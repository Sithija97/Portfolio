import { PROJECTS } from "../../data/constants";
import { ImagePlaceholderIcon, GitHubIcon, ExternalLinkIcon } from "../Icons";

export function ProjectsSection() {
  return (
    <section className="mb-28" id="projects">
      <h2 className="mb-1 text-sm font-medium uppercase tracking-widest text-muted">
        Projects
      </h2>
      <div className="mb-8 h-px w-8 bg-border"></div>
      <div className="space-y-5">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:border-muted/50 hover:bg-card"
          >
            {/* Thumbnail */}
            <div className="aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted/10">
              <div className="flex h-full w-full items-center justify-center text-muted/30">
                <ImagePlaceholderIcon />
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
                    <GitHubIcon size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-muted transition-colors hover:bg-background hover:text-foreground"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLinkIcon size={16} />
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
  );
}
