"use client";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 md:p-12">
      <AnimatedBg />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          <Balancer>Dialog IX — AI-native customer dialogue, on autopilot.</Balancer>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
          <Balancer>Capture. Qualify. Schedule. Sync.</Balancer>
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/contact"><Button variant="primary" className="min-w-36">Request access</Button></Link>
          <Link href="/product"><Button variant="ghost">Explore product</Button></Link>
        </div>
      </div>
    </div>
  );
}

function AnimatedBg() {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }
  return (
    <>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,77,255,0.25),transparent_50%),radial-gradient(circle_at_80%_0,rgba(0,229,255,0.15),transparent_40%)]"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-10"
        initial={{ backgroundPositionY: 0 }}
        animate={{ backgroundPositionY: 42 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />
    </>
  );
}

