import type { LinkInfo } from "@/types";
import { ProjectLinkIcon } from "./project-link-icon";

type ProjectLinkProps = {
  link: LinkInfo;
};

function ProjectLink({ link }: ProjectLinkProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${link.name} (opens in a new tab)`}
      className="inline-flex h-7 shrink-0 items-center gap-1.5 rounded-md border border-border px-2.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/60">
      <ProjectLinkIcon
        name={link.name}
        className="size-3 shrink-0 text-muted-foreground transition-colors group-hover/card:text-primary-strong"
      />
      {link.name}
    </a>
  );
}

export { ProjectLink, type ProjectLinkProps };
