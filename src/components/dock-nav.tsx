import { Link, type LinkProps } from "@tanstack/react-router";
import type React from "react";
import type { SocialLink } from "@/types";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";
import { Dock, DockIcon } from "./ui/dock";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function DocNavLinkButton({ link, target }: { link: SocialLink; target: React.HTMLAttributeAnchorTarget }) {
  const [pathname, hash] = link.link.split("#");
  const isInternal = target === "_self" && pathname.startsWith("/");
  const icon = <link.icon className="text-foreground size-3 md:size-4" />;

  return (
    <DockIcon className="p-1">
      <Tooltip>
        <TooltipTrigger asChild>
          {isInternal ? (
            <Link
              to={pathname as LinkProps["to"]}
              hash={hash}
              target={target}
              aria-label={link.name}
              className={buttonVariants({ variant: "ghost", size: "icon" })}>
              {icon}
            </Link>
          ) : (
            <a
              href={link.link}
              target={target}
              aria-label={link.name}
              className={buttonVariants({ variant: "ghost", size: "icon" })}>
              {icon}
            </a>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{link.name}</p>
        </TooltipContent>
      </Tooltip>
    </DockIcon>
  );
}

export default function DockNav({ sectionNav, socialLinks }: { sectionNav: SocialLink[]; socialLinks: SocialLink[] }) {
  return (
    <Dock
      direction="middle"
      className="z-50 pointer-events-auto relative flex min-h-full h-full bg-transparent items-center px-0 md:px-2 bg-opacity-75">
      {sectionNav.map((value: SocialLink) => (
        <DocNavLinkButton link={value} key={value.name} target="_self" />
      ))}
      <Separator orientation="vertical" className="h-full" />
      {socialLinks.map((value: SocialLink) => (
        <DocNavLinkButton link={value} key={value.name} target="_blank" />
      ))}
      <Separator orientation="vertical" className="h-full" />
      <DockIcon>
        <Tooltip>
          <TooltipTrigger asChild>
            <ThemeToggle />
          </TooltipTrigger>
          <TooltipContent>
            <p>Theme</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>
    </Dock>
  );
}
