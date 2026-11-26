import { Image } from "@unpic/react";
import Hero from "@/assets/hero.svg";
import MyPic from "@/assets/me.webp";
import StackIndex from "@/components/stack-index";
import type { ToolGroup } from "@/types";

export default function IntroSection({ groups }: { groups: ToolGroup[] }) {
  return (
    <section className="container py-4 w-full">
      <div className="grid gap-8 px-4 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={MyPic}
              alt="A picture of Me"
              width={44}
              height={44}
              layout="fixed"
              className="rounded-full ring-2 ring-primary ring-offset-1 ring-offset-primary-foreground"
            />
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Software engineer</p>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Hi, I&apos;m Siddhesh!</h1>
          <p className="text-pretty leading-relaxed">
            I am a <strong>Hobbyist Developer</strong> with a keen interest in{" "}
            <strong>Web Development, DevOps and Gen AI</strong>. I have been programming for the past{" "}
            {new Date().getFullYear() - 2019} years, i.e. since I was 16. Currently, I&apos;m working on honing my
            skills in <strong>Golang</strong> and <strong>React Native</strong>. Always in search of fun projects.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src={Hero}
            alt="Isometric illustration of my developer desk with dual monitors, a mechanical keyboard, a server rack, and a rubber duck."
            width={1200}
            height={860}
            className="block h-auto w-full"
          />
        </div>
      </div>
      <div className="px-4">
        <StackIndex groups={groups} />
      </div>
    </section>
  );
}
