"use client";
import { motion } from "framer-motion";

export function GradientRays() {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute -inset-32 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(124,77,255,0.15),rgba(0,229,255,0.15),transparent_70%)] blur-3xl"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    />
  );
}

