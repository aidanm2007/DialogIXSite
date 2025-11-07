"use client";
import { motion } from "framer-motion";

export function FlowStrip() {
  const steps = ["Lead", "Chat", "Score", "Calendar", "CRM"];
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <div className="card border border-white/5 bg-surface-700/70 p-4 md:p-6">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-muted-foreground">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduced ? 0 : i * 0.08 }}
              className="rounded-full border border-white/10 bg-background/40 px-4 py-1.5 text-foreground shadow-none"
            >
              {s}
            </motion.div>
            {i < steps.length - 1 && <span className="text-gold">{"\u2192"}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
