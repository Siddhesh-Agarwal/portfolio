import { Badge } from "@/components/ui/badge";

type ProjectTagProps = {
  tag: string;
};

function ProjectTag({ tag }: ProjectTagProps) {
  return (
    <Badge variant="secondary" className="rounded-sm leading-none font-mono font-semibold">
      {tag}
    </Badge>
  );
}

export { ProjectTag, type ProjectTagProps };
