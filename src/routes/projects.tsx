import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeftIcon, Briefcase, HomeIcon, Info } from "lucide-react";

import PageLayout from "@/components/page-layout";
import ProjectsSection from "@/components/sections/project";
import { projectsOrTools } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const sectionNav = [
    {
      name: "Home",
      link: "/",
      icon: HomeIcon,
    },
    {
      name: "Introduction",
      link: "/#introduction",
      icon: Info,
    },
    {
      name: "Experience",
      link: "/#experience",
      icon: Briefcase,
    },
  ];

  return (
    <PageLayout sectionNav={sectionNav} className="pb-28 md:pb-32">
      <div className="px-4 pt-8 md:hidden">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeftIcon size={16} />
          Back to home
        </Link>
      </div>
      <section className="container min-w-full px-0 py-6 md:pb-12">
        <ProjectsSection details={projectsOrTools} />
      </section>
      <div className="flex justify-center px-4 pb-8 md:hidden">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeftIcon size={16} />
          Back to home
        </Link>
      </div>
    </PageLayout>
  );
}
