import type { Metadata } from "next";

import { Section } from "@/components/Section";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = { title: "Solutions" };

export default function Page() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <h1 className="text-3xl font-serif tracking-tight text-gold md:text-5xl">Solutions</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">Tailored flows by industry</p>
      </Section>
      <Section>
        <SolutionsClient />
      </Section>
    </div>
  );
}

