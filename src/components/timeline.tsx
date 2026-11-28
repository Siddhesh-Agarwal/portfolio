import { type ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type TimelineItem = {
  key: string;
  content: ReactNode;
};

type Rail = {
  start: number;
  length: number;
  dotCenters: number[];
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function sameRail(a: Rail, b: Rail) {
  return (
    a.start === b.start &&
    a.length === b.length &&
    a.dotCenters.length === b.dotCenters.length &&
    a.dotCenters.every((center, index) => center === b.dotCenters[index])
  );
}

const emptyRail: Rail = {
  start: 0,
  length: 0,
  dotCenters: [],
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const containerRef = useRef<HTMLOListElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const railRef = useRef<Rail>(emptyRail);
  const frameRef = useRef<number | null>(null);
  const lastProgress = useRef(0);
  const lastActive = useRef(0);

  const [rail, setRail] = useState<Rail>(emptyRail);
  const [progress, setProgress] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    const centers = dotRefs.current
      .slice(0, items.length)
      .filter((dot): dot is HTMLSpanElement => dot !== null)
      .map((dot) => {
        const rect = dot.getBoundingClientRect();
        return rect.top + rect.height / 2 - containerTop;
      });

    if (centers.length === 0) {
      railRef.current = emptyRail;
      setRail(emptyRail);
      return;
    }

    const start = centers[0];
    const next: Rail = {
      start,
      length: centers[centers.length - 1] - start,
      dotCenters: centers,
    };

    railRef.current = next;
    setRail((current) => (sameRail(current, next) ? current : next));
  }, [items.length]);

  const update = useCallback(() => {
    frameRef.current = null;

    const container = containerRef.current;
    if (!container) return;

    const { start, length, dotCenters } = railRef.current;
    const scrollY = window.scrollY;
    const viewportMiddle = window.innerHeight / 2;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const containerTopPage = container.getBoundingClientRect().top + scrollY;

    // The reading line normally sits at the viewport middle. When the page ends
    // before the last marker can reach it, compress the final stretch so the
    // rail still completes at the bottom of the page.
    const firstScroll = containerTopPage + start - viewportMiddle;
    const lastScroll = Math.min(containerTopPage + start + length - viewportMiddle, maxScroll);
    const scrollSpan = lastScroll - firstScroll;
    const travelled = scrollSpan > 0 ? clamp((scrollY - firstScroll) / scrollSpan, 0, 1) : 0;
    const line = start + travelled * length;
    const filled = clamp(line - start, 0, length);
    const passed = dotCenters.filter((center) => center <= line + 0.5).length;

    if (Math.abs(filled - lastProgress.current) >= 0.5) {
      lastProgress.current = filled;
      setProgress(filled);
    }

    if (passed !== lastActive.current) {
      lastActive.current = passed;
      setActiveCount(passed);
    }
  }, []);

  const scheduleUpdate = useCallback(() => {
    if (frameRef.current !== null) return;
    frameRef.current = requestAnimationFrame(update);
  }, [update]);

  useLayoutEffect(() => {
    measure();
    update();
  }, [measure, update]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => {
            measure();
            scheduleUpdate();
          });
    observer?.observe(container);

    const handleResize = () => {
      measure();
      scheduleUpdate();
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", handleResize);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [measure, scheduleUpdate]);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 w-0.5 -translate-x-1/2 rounded-full bg-border"
        style={{ top: rail.start, height: rail.length }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 z-10 w-0.5 -translate-x-1/2 rounded-full bg-primary"
        style={{ top: rail.start, height: progress }}
      />

      <ol ref={containerRef} className="relative m-0 list-none p-0">
        {items.map((item, index) => {
          const active = index < activeCount;

          return (
            <li key={item.key} className="relative flex items-start">
              <span
                ref={(element) => {
                  dotRefs.current[index] = element;
                }}
                aria-hidden="true"
                className={`relative z-20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-background transition-colors duration-300 motion-reduce:transition-none ${
                  active ? "border-primary" : "border-border"
                }`}>
                <span
                  className={`h-3 w-3 rounded-full bg-primary transition-transform duration-300 motion-reduce:transition-none ${
                    active ? "scale-100" : "scale-0"
                  }`}
                />
              </span>
              <div className="ml-4 min-w-0 flex-1 pb-8 md:ml-6">{item.content}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
