import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/date";
import type { Project } from "@/types";
import { ProjectLink } from "./project-link";
import { ProjectTag } from "./project-tag";

type ProjectCardProps = {
  data: Project;
};

function ProjectCard({ data }: ProjectCardProps) {
  return (
    <Card className="group/card border-border transition-colors hover:border-primary/30">
      <CardContent>
        <div className="mr-4 text-sm font-mono tracking-wide text-muted-foreground">{formatDate(data.date)}</div>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-2xl">{data.name}</CardTitle>
          <CardDescription className="text-lg">{data.desc}</CardDescription>
          <div className="flex flex-row flex-wrap gap-1.5 text-xs">
            {data.tags.map((tag) => (
              <ProjectTag tag={tag} key={tag} />
            ))}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2 border-t border-border/70 pt-3 transition-colors group-hover/card:border-primary/25">
            {data.links.map((link) => (
              <ProjectLink link={link} key={link.name} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { ProjectCard, type ProjectCardProps };
