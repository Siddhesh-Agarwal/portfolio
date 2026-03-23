import { type ReactNode, useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function Timeline({ elements }: { elements: ReactNode[] }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      let progress = 0;
      const centerRelativeToTimeline = viewportCenter - timelineTop;
      progress = centerRelativeToTimeline / timelineHeight;

      progress = Math.max(0, Math.min(progress, 1));
      setScrollProgress(progress);
    };

    // Initial calculation
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      <div className="absolute left-4 top-4 h-[calc(100%-2rem)] -translate-x-1/2 w-0.5 bg-border" />

      <Progress
        value={scrollProgress * 100}
        orientation="vertical"
        className="absolute left-4 top-4 h-[calc(100%-2rem)] -translate-x-1/2 w-0.5 bg-transparent **:data-[slot=progress-indicator]:bg-primary **:data-[slot=progress-indicator]:shadow-[0_0_8px_rgba(59,130,246,0.5)]"
      />

      {elements.map((item, index) => (
        <div key={(item?.valueOf() || index).toString()} className="relative flex items-start group">
          <div
            className={`relative z-20 flex items-center justify-center w-8 h-8 bg-background border-2 rounded-full shrink-0 transition-colors duration-300 ${
              scrollProgress > (index + 0.5) / elements.length ? "border-primary" : "border-border"
            }`}>
            <div
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                scrollProgress > (index + 0.5) / elements.length ? "bg-primary" : "bg-border"
              }`}
            />
          </div>
          <div className="ml-6 pb-8 flex-1 min-w-0">{item}</div>
        </div>
      ))}
    </div>
  );
}
