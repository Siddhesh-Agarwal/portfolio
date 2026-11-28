import { Image } from "@unpic/react";
import MyPic from "@/assets/me.webp";
import HeroScene from "@/components/hero-scene";
import StackIndex from "@/components/stack-index";
import type { ToolGroup } from "@/types";

export default function IntroSection({ groups }: { groups: ToolGroup[] }) {
  return (
    <section className="container py-4 w-full">
      <div className="flex flex-col gap-10 px-4 md:flex-row md:items-center">
        <div className="flex flex-1 flex-col gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Software engineer</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Hi, I&apos;m Siddhesh!</h1>
          <p className="text-pretty leading-relaxed">
            I am a <strong>Hobbyist Developer</strong> with a keen interest in{" "}
            <strong>Web Development, DevOps and Gen AI</strong>. I have been programming for the past{" "}
            {new Date().getFullYear() - 2019} years, i.e. since I was 16. Currently, I&apos;m working on honing my
            skills in <strong>Golang</strong> and <strong>React Native</strong>. Always in search of fun projects.
          </p>
        </div>
        <div className="flex shrink-0 justify-center md:justify-end">
          <Image
            src={MyPic}
            alt="A picture of Me"
            width={208}
            height={208}
            layout="fixed"
            className="rounded-full ring-2 ring-primary ring-offset-1 ring-offset-primary-foreground"
          />
        </div>
      </div>
      <div className="px-4">
        <StackIndex groups={groups} />
      </div>
      <div className="mt-12 px-4">
        <div className="overflow-hidden rounded-2xl border border-border">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
