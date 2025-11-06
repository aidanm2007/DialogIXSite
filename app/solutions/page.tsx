"use client";
import { Section } from "@/components/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { solutions } from "@/lib/utils";

export const metadata = { title: "Solutions" };

export default function Page() {
  const defaultTab = solutions[0].key;
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <h1 className="text-3xl font-semibold md:text-5xl">Solutions</h1>
        <p className="mt-2 text-muted-foreground">Tailored flows by industry</p>
      </Section>
      <Section>
        <Tabs defaultValue={defaultTab}>
          <TabsList>
            {solutions.map((s) => (
              <TabsTrigger key={s.key} value={s.key}>{s.label}</TabsTrigger>
            ))}
          </TabsList>
          {solutions.map((s) => (
            <TabsContent key={s.key} value={s.key} className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <ul className="space-y-2 text-muted-foreground">
                  {s.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-center gap-3 text-sm">
                    {s.flow.map((f, i) => (
                      <div key={f} className="flex items-center gap-3">
                        <div className="rounded-md bg-white/5 px-3 py-1.5">{f}</div>
                        {i < s.flow.length - 1 && <span className="text-muted-foreground">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
    </div>
  );
}

