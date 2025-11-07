"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { solutions } from "@/lib/utils";

export default function SolutionsClient() {
  const defaultTab = solutions[0].key;

  return (
    <div className="card p-6">
      <Tabs defaultValue={defaultTab}>
        <TabsList className="bg-surface-700/70">
          {solutions.map((s) => (
            <TabsTrigger key={s.key} value={s.key}>
              {s.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {solutions.map((s) => (
          <TabsContent key={s.key} value={s.key} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-gold">{"\u2022"}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-white/10 bg-surface-700/60 p-4">
                <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                  {s.flow.map((f, i) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="rounded-full border border-white/10 bg-background/60 px-4 py-1.5">
                        {f}
                      </div>
                      {i < s.flow.length - 1 && <span className="text-gold">{"\u2192"}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
