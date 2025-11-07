"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-white/5 bg-surface-800/85 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-surface-800/75"
          : "bg-gradient-to-b from-background/80 to-background/10"
      )}
      aria-label="Primary"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-muted-foreground">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-gold via-gold-600 to-gold-700 text-background shadow-glow">
            IX
          </span>
          <span className="font-serif text-lg text-foreground">Dialog IX</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {[
            ["Product", "/product"],
            ["Solutions", "/solutions"],
            ["Pricing", "/pricing"],
            ["Case Studies", "/case-studies"],
            ["Docs", "/docs"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href as string}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

