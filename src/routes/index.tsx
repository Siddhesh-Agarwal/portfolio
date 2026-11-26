import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, FlaskConical, Info } from "lucide-react";

import PageLayout from "@/components/page-layout";
import ExperienceSection from "@/components/sections/experience";
import IntroSection from "@/components/sections/intro";
import { Button } from "@/components/ui/button";
import { experienceDetails } from "@/data/experience";
import { toolsKnown } from "@/data/intro";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const introId = "introduction";
  const experienceId = "experience";

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
      link: "/projects",
      icon: FlaskConical,
    },
  ];

  return (
    <PageLayout sectionNav={sectionNav}>
      <section className="container min-h-screen min-w-full px-0 grid place-items-center" id={introId}>
        <IntroSection links={toolsKnown} />
      </section>
      <section className="container min-h-screen min-w-full px-0 py-6 md:pb-12" id={experienceId}>
        <ExperienceSection details={experienceDetails} />
      </section>
      <div className="flex justify-center px-4 pb-8 md:hidden">
        <Button asChild variant="outline">
          <Link to="/projects">View all projects</Link>
        </Button>
      </div>
    </PageLayout>
  );
}
