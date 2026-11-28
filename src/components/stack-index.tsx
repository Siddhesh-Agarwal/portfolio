import type { ToolGroup } from "@/types";

export default function StackIndex({ groups }: { groups: ToolGroup[] }) {
  const count = groups.reduce((total, group) => total + group.tools.length, 0);

  return (
    <div className="mt-12 border-t border-border pt-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Stack</h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{count} tools</p>
      </div>
      <div className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <div key={group.name}>
            <h3 className="border-b border-border pb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {group.name}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {group.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <tool.icon
                    aria-hidden="true"
                    className="size-3.5 shrink-0 transition-colors group-hover:text-primary-strong"
                  />
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
