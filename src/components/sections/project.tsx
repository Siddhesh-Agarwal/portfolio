import { ExternalLinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/date";
import type { LinkInfo, Project } from "@/types";
import { Card, CardAction, CardContent, CardDescription, CardTitle } from "../ui/card";

function ProjectTag({ tag }: { tag: string }) {
  return (
    <Badge variant={"secondary"} className="rounded-sm font-mono font-semibold">
      {tag}
    </Badge>
  );
}

function ProjectLink({ link }: { link: LinkInfo }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      className="px-2 flex gap-2 text-primary text-sm items-center hover:underline visited:underline">
      {link.name}
      <ExternalLinkIcon size={14} />
    </a>
  );
}

function ProjectCard({ data }: { data: Project }) {
  return (
    <Card className="border-border">
      <CardContent>
        <div className="text-muted-foreground text-xl font-mono mr-4">{formatDate(data.date)}</div>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-2xl">{data.name}</CardTitle>
          <CardDescription className="text-lg">{data.desc}</CardDescription>
          <div className="flex flex-row gap-2 text-xs flex-wrap">
            {data.tags.map((tag: string) => (
              <ProjectTag tag={tag} key={tag} />
            ))}
          </div>
          <div className="flex gap-6 items-center text-wrap font-semibold">
            {data.links.map((linkObj: LinkInfo) => (
              <CardAction key={`project-${linkObj.name}`}>
                <ProjectLink link={linkObj} key={linkObj.name} />
              </CardAction>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsSection({ details }: { details: Project[] }) {
  const sortedProjects = [...details].sort((a, b) => {
    if (a.date.year === b.date.year) {
      return b.date.month - a.date.month;
    }
    return b.date.year - a.date.year;
  });

  return (
    <div className="flex flex-col gap-4 w-full mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 semibold text-center text-foreground/90">Check out my latest work</h1>
      <h2 className="text-xl text-center text-foreground/75">
        I have worked on a variety of projects ranging over different tech stacks and topics. Here are all of them.
      </h2>
      <div className="flex flex-col gap-4">
        {sortedProjects.map((tool: Project) => (
          <ProjectCard key={tool.name} data={tool} />
        ))}
      </div>
    </div>
  );
}
