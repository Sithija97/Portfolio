import { PERSONAL } from "../../data/constants";
import { MailIcon, GitHubIcon, LinkedInIcon, XIcon } from "../Icons";

const SOCIAL_LINKS = [
  {
    href: `mailto:${PERSONAL.email}`,
    label: "Email",
    icon: <MailIcon />,
    external: false,
  },
  {
    href: PERSONAL.github,
    label: "GitHub",
    icon: <GitHubIcon size={20} />,
    external: true,
  },
  {
    href: PERSONAL.linkedin,
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    href: PERSONAL.twitter,
    label: "X (Twitter)",
    icon: <XIcon />,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section className="mb-20" id="contact">
      <h2 className="mb-1 text-sm font-medium uppercase tracking-widest text-muted">
        Contact
      </h2>
      <div className="mb-6 h-px w-8 bg-border"></div>
      <p className="mb-6 text-base leading-relaxed text-muted">
        I&apos;m always open to new opportunities and interesting projects. Feel
        free to reach out!
      </p>
      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="rounded-xl border border-border bg-card/50 p-3 text-muted transition-all hover:border-muted/50 hover:bg-card hover:text-foreground"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
