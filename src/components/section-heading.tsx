export default function SectionHeading({
  eyebrow,
  title,
  description,
  level = 2,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  level?: 1 | 2;
}) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <header className="flex flex-col gap-3 border-t border-border pt-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      <Heading className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</Heading>
      {description && <p className="max-w-2xl text-base text-muted-foreground">{description}</p>}
    </header>
  );
}
