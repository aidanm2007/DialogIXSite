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
          ? "backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-white/10"
          : "bg-transparent"
      )}
      aria-label="Primary"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-neon-from to-neon-to" />
          Dialog IX
        </Link>
        <nav className="hidden gap-6 md:flex">
          {[
            ["Product", "/product"],
            ["Solutions", "/solutions"],
            ["Pricing", "/pricing"],
            ["Case Studies", "/case-studies"],
            ["Docs", "/docs"],
          ].map(([label, href]) => (
            <Link key={href} href={href as string} className="text-sm text-muted-foreground hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact">
            <Button variant="primary" size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

