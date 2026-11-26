import type { ReactNode } from "react";
import { socialLinks } from "@/data/socials";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";
import DockNav from "./dock-nav";

export default function PageLayout({
  sectionNav,
  children,
  className,
}: {
  sectionNav: SocialLink[];
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "bg-background text-foreground container-fluid p-0 min-h-screen w-full overflow-x-hidden",
        className ?? "pb-[75vh]",
      )}>
      <div className="max-w-4xl mx-auto">{children}</div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto hidden md:flex origin-bottom h-full max-h-14 mb-16">
        <DockNav sectionNav={sectionNav} socialLinks={socialLinks} />
      </div>
    </main>
  );
}
