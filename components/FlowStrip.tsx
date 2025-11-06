"use client";
import { motion } from "framer-motion";

export function FlowStrip() {
  const steps = ["Lead", "Chat", "Score", "Calendar", "CRM"];
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <div className="relative rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-center gap-3 text-sm">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduced ? 0 : i * 0.1 }}
              className="rounded-md bg-white/5 px-3 py-1.5"
            >
              {s}
            </motion.div>
            {i < steps.length - 1 && <span className="text-muted-foreground">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

