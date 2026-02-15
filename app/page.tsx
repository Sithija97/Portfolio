import { ThemeToggle } from "./components/ThemeToggle";
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "./components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
