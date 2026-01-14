import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, FlaskConical, Info } from "lucide-react";
import { useId } from "react";
import DockNav from "@/components/dock-nav";
import ExperienceSection from "@/components/sections/experience";
import IntroSection from "@/components/sections/intro";
import ProjectsSection from "@/components/sections/project";
import { experienceDetails } from "@/data/experience";
import { toolsKnown } from "@/data/intro";
import { projectsOrTools } from "@/data/projects";
import { socialLinks } from "@/data/socials";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const introId = useId();
  const experienceId = useId();
  const projectsId = useId();

  const sectionNav = [
    {
      name: "Introduction",
      link: `#${introId}`,
      icon: Info,
    },
    {
      name: "Experience",
      link: `#${experienceId}`,
      icon: Briefcase,
    },
    {
      name: "Projects",
      link: `#${projectsId}`,
      icon: FlaskConical,
    },
  ];

  return (
    <main className="container-fluid p-0 min-h-screen w-full overflow-x-hidden pb-[75vh]">
      <div className="max-w-4xl mx-0 md:mx-auto">
        <section className="container min-h-screen w-full px-0 grid place-items-center" id={introId}>
          <IntroSection links={toolsKnown} />
        </section>
        <section className="container min-h-screen min-w-full px-0 py-6 md:pb-12" id={experienceId}>
          <ExperienceSection details={experienceDetails} />
        </section>
        <section className="container min-h-screen min-w-full px-0 py-6 md:pb-12" id={projectsId}>
          <ProjectsSection details={projectsOrTools} />
        </section>
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto hidden md:flex origin-bottom h-full max-h-14 mb-16">
        <DockNav sectionNav={sectionNav} socialLinks={socialLinks} />
      </div>
    </main>
  );
}
