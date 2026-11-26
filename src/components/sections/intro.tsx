import { Image } from "@unpic/react";
import MyPic from "@/assets/me.webp";
import StackIndex from "@/components/stack-index";
import type { ToolGroup } from "@/types";

export default function IntroSection({ groups }: { groups: ToolGroup[] }) {
  return (
    <section className="container py-4 w-full">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="font-sans px-4 flex flex-col gap-6 w-full">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Hi, I&apos;m Siddhesh 👋🏻</h1>
          <div>
            <p className="text-pretty leading-relaxed">
              I am a <strong>Hobbyist Developer</strong> with a keen interest in{" "}
              <strong>Web Development, DevOps and Gen AI</strong>. I have been programming for the past{" "}
              {new Date().getFullYear() - 2019} years, i.e. since I was 16. Currently, I&apos;m working on honing my
              skills in <strong>Golang</strong> and <strong>React Native</strong>. Always in search of fun projects.
            </p>
          </div>
        </div>
        <Image
          src={MyPic}
          alt="A picture of Me"
          width={192}
          height={192}
          layout="fixed"
          className="rounded-full p-1 ring-2 ring-primary ring-offset-1 ring-offset-primary-foreground"
        />
      </div>
      <div className="px-4">
        <StackIndex groups={groups} />
      </div>
    </section>
  );
}
