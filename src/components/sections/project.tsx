import { ProjectCard } from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import type { Project } from "@/types";

export default function ProjectsSection({ details }: { details: Project[] }) {
  const sortedProjects = [...details].sort((a, b) => {
    if (a.date.year === b.date.year) {
      return b.date.month - a.date.month;
    }
    return b.date.year - a.date.year;
  });

  return (
    <div className="flex flex-col gap-4 w-full mx-auto px-4">
      <SectionHeading
        level={1}
        eyebrow="Projects"
        title="Things I've built"
        description="A collection of projects across web, data, and infrastructure."
      />
      <div className="flex flex-col gap-4">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.name} data={project} />
        ))}
      </div>
    </div>
  );
}
