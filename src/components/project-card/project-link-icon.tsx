import { SiGithub, SiPypi } from "@icons-pack/react-simple-icons";
import { ExternalLinkIcon } from "lucide-react";

type ProjectLinkIconProps = {
  name: string;
  className?: string;
};

function ProjectLinkIcon({ name, className }: ProjectLinkIconProps) {
  switch (name.trim().toLowerCase()) {
    case "github":
      return <SiGithub aria-hidden="true" className={className} />;
    case "pypi":
      return <SiPypi aria-hidden="true" className={className} />;
    default:
      return <ExternalLinkIcon aria-hidden="true" className={className} />;
  }
}

export { ProjectLinkIcon, type ProjectLinkIconProps };
