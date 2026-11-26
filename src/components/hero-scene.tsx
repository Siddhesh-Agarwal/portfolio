import { useEffect, useRef, useState } from "react";

import heroSvg from "@/assets/hero.svg?raw";

const INITIAL_SERVERS = [true, true, false, true, false, false, true];
const BASE_POWER = 120;
const SERVER_POWER = 82;
const BASE_TEMP = 24;
const SERVER_TEMP = 4.6;

function serverLabel(index: number, online: boolean) {
  return `Server ${index + 1}, ${online ? "online" : "offline"}. Click or press ${index + 1} to toggle.`;
}

export default function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const poweredRef = useRef(true);
  const serversRef = useRef<boolean[]>(INITIAL_SERVERS);
  const [powered, setPowered] = useState(true);
  const [servers, setServers] = useState<boolean[]>(INITIAL_SERVERS);
  const [announce, setAnnounce] = useState("Desk computer is on. Four of seven servers are running.");

  const running = servers.filter(Boolean).length;
  const watts = BASE_POWER + running * SERVER_POWER;
  const celsius = Math.round(BASE_TEMP + running * SERVER_TEMP);

  useEffect(() => {
    poweredRef.current = powered;
  }, [powered]);

  useEffect(() => {
    serversRef.current = servers;
  }, [servers]);

  // Keep the illustration as the source of truth, but inline it so its SVG
  // hooks can receive pointer and keyboard events.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const parsed = new DOMParser().parseFromString(heroSvg, "image/svg+xml");
    if (parsed.querySelector("parsererror")) return;

    host.replaceChildren(document.importNode(parsed.documentElement, true));

    const svg = host.querySelector("svg");
    if (!svg) return;

    svgRef.current = svg;
    svg.setAttribute("tabindex", "0");
    svg.setAttribute("role", "group");
    svg.setAttribute("focusable", "true");

    const flashTimers = new WeakMap<Element, number>();

    const flash = (element: Element | null | undefined) => {
      if (!element) return;

      element.classList.add("is-pressed");
      const previous = flashTimers.get(element);
      if (previous) window.clearTimeout(previous);

      const timer = window.setTimeout(() => {
        element.classList.remove("is-pressed");
        flashTimers.delete(element);
      }, 220);

      flashTimers.set(element, timer);
    };

    const flashNumberKey = (key: string) => {
      flash(svg.querySelector(`[data-key="${key}"]`));
    };

    const togglePower = () => {
      const next = !poweredRef.current;
      poweredRef.current = next;
      setPowered(next);
      setAnnounce(next ? "Desk computer on." : "Desk computer off. Press 1 to 7 to work with the servers.");
    };

    const toggleServer = (index: number) => {
      const previous = serversRef.current;
      const wasOnline = previous[index];
      const next = previous.map((online, position) => (position === index ? !online : online));
      serversRef.current = next;
      setServers(next);

      const name = `Server ${index + 1}`;
      const onlineCount = next.filter(Boolean).length;
      const nextWatts = BASE_POWER + onlineCount * SERVER_POWER;
      const nextCelsius = Math.round(BASE_TEMP + onlineCount * SERVER_TEMP);
      setAnnounce(
        `${name} ${wasOnline ? "off" : "on"}. ${onlineCount} of seven servers running. ${nextWatts} watts, ${nextCelsius} degrees.`,
      );
    };

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const key = event.target.closest("[data-key], [data-action]");
      if (key) {
        flash(key);
        return;
      }

      const server = event.target.closest("[data-server]");
      if (server) {
        const index = Number(server.getAttribute("data-server"));
        if (Number.isInteger(index)) toggleServer(index);
        return;
      }

      if (event.target.closest("[data-hero-power]")) togglePower();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.isComposing || event.metaKey || event.ctrlKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;

      const focusedServer = event.target.closest("[data-server]");
      if (focusedServer && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        const index = Number(focusedServer.getAttribute("data-server"));
        if (Number.isInteger(index)) toggleServer(index);
        return;
      }

      if (event.target.closest("[data-hero-power]") && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        togglePower();
        return;
      }

      if (/^[1-7]$/.test(event.key)) {
        event.preventDefault();
        if (!event.repeat) {
          toggleServer(Number(event.key) - 1);
          flashNumberKey(event.key);
        }
      }
    };

    const onPointerDown = () => {
      svg.focus({ preventScroll: true });
    };

    svg.addEventListener("click", onClick);
    svg.addEventListener("keydown", onKeyDown);
    svg.addEventListener("pointerdown", onPointerDown);

    return () => {
      svg.removeEventListener("click", onClick);
      svg.removeEventListener("keydown", onKeyDown);
      svg.removeEventListener("pointerdown", onPointerDown);
      svgRef.current = null;
    };
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    svg.classList.toggle("is-off", !powered);
    for (const monitor of svg.querySelectorAll("[data-hero-power]")) {
      monitor.setAttribute("aria-pressed", String(powered));
    }
  }, [powered]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    servers.forEach((online, index) => {
      const server = svg.querySelector(`[data-server="${index}"]`);
      if (!server) return;

      server.classList.toggle("is-on", online);
      server.setAttribute("aria-pressed", String(online));
      server.setAttribute("aria-label", serverLabel(index, online));

      const title = server.querySelector("title");
      if (title) title.textContent = `Server ${index + 1} — ${online ? "online" : "offline"}`;
    });

    for (const traffic of svg.querySelectorAll("[data-traffic]")) {
      const index = Number(traffic.getAttribute("data-traffic"));
      traffic.classList.toggle("is-on", Boolean(servers[index]));
    }

    svg.querySelector(".hero-switch")?.classList.toggle("is-busy", running > 2);

    const switchCount = svg.querySelector("#hero-switch-count");
    if (switchCount) switchCount.textContent = `${running} LINK${running === 1 ? "" : "S"}`;

    const powerValue = svg.querySelector("#hero-power-value");
    if (powerValue) powerValue.textContent = `${watts} W`;

    const tempValue = svg.querySelector("#hero-temp-value");
    if (tempValue) tempValue.textContent = `${celsius} C`;

    const serverCount = svg.querySelector("#hero-server-count");
    if (serverCount) serverCount.textContent = `${running} / 7 up`;
  }, [servers, running, watts, celsius]);

  return (
    <div className="hero-scene-frame">
      <div ref={hostRef} className="aspect-[1200/860] select-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-full" />
      <div className="flex w-full flex-col gap-1.5 border-t border-white/10 bg-[#1b2128] px-3 py-2.5 text-left font-mono">
        <div className="flex items-center justify-between gap-3 text-[8px] uppercase tracking-[0.14em] text-[#7c8a99] sm:text-[9px]">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#ff9a2e]" />
            rack {running}/7 · {watts}w · {celsius}c
          </span>
          <span className="hidden sm:inline">1–7 servers</span>
        </div>
        <div className="flex min-w-0 items-center gap-1.5 text-[10px] leading-none sm:text-[11px]">
          <span className="shrink-0 text-[#ff9a2e]">keys</span>
          <span className="truncate text-[#7c8a99]">light up on click · no input</span>
        </div>
      </div>
      <output className="sr-only" aria-live="polite" aria-atomic="true">
        {announce}
      </output>
      <p className="sr-only">
        Interactive illustration. Click the monitor to power the computer on or off, click the keyboard keys for light
        feedback, or press 1 through 7 to toggle the rack servers.
      </p>
    </div>
  );
}
