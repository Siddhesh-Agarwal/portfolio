import { Image } from "@unpic/react";
import MyPic from "@/assets/me.webp";
import { HyperText } from "@/components/ui/hyper-text";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import type { ToolLink } from "@/types";

function ConcentricCircle({
  similarLinks,
  reverse,
  radius,
  speed,
}: {
  similarLinks: ToolLink[];
  reverse: boolean;
  radius: number;
  speed: number;
}) {
  return (
    <OrbitingCircles reverse={reverse} radius={radius} speed={speed} path>
      {similarLinks.map((similarLink: ToolLink) => (
        <div
          className="m-2 text-primary font-semibold inline-block text-xl w-fit cursor-pointer"
          key={similarLink.name}
          title={similarLink.name}>
          <similarLink.icon className="inline-block" />
        </div>
      ))}
    </OrbitingCircles>
  );
}

function ConcentricCircles({ text, links }: { text: string; links: ToolLink[][] }) {
  return (
    <div className="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-foreground to-background bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        {text}
      </span>
      {links.map((similarLinks, index) => {
        const reverse: boolean = index % 2 === 0;
        const radius: number = 64 * (1 + index);
        const speed: number = 0.5 * (2 + index);
        return (
          <ConcentricCircle
            key={`circle-${index + 1}`}
            similarLinks={similarLinks}
            reverse={reverse}
            radius={radius}
            speed={speed}
          />
        );
      })}
    </div>
  );
}

export default function IntroSection({ links }: { links: ToolLink[][] }) {
  return (
    <section className="container py-4 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center">
        <div className="font-sans px-4">
          <h1 className="text-5xl inline">
            <HyperText>Hi, I&apos;m Siddhesh 👋🏻</HyperText>
          </h1>
          <div className="grid grid-cols-1 gap-6 py-6 pr-8">
            <p className="text-justify">
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
      <ConcentricCircles text="My Tech Stack" links={links} />
    </section>
  );
}
