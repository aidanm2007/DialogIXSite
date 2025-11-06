"use client";
import { useEffect, useState } from "react";
import { kpis } from "@/lib/utils";

export function KPIStrip() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {kpis.map((k) => (
        <div key={k.label} className="rounded-lg border border-white/10 bg-card/60 p-4 text-center">
          <div className="text-3xl font-semibold">
            <Counter target={k.value} suffix={k.suffix} />
          </div>
          <div className="mt-1 text-sm text-muted-foreground">{k.label}</div>
        </div>
      ))}
    </div>
  );
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVal(target);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    const from = 0;
    function tick(now: number) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Number((from + (target - from) * eased).toFixed(2)));
      if (p < 1) requestAnimationFrame(tick);
    }
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

