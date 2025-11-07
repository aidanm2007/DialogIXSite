"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { solutions } from "@/lib/utils";

export default function SolutionsClient() {
  const defaultTab = solutions[0].key;

  return (
    <Tabs defaultValue={defaultTab}>
      <TabsList>
        {solutions.map((s) => (
          <TabsTrigger key={s.key} value={s.key}>
            {s.label}
          </TabsTrigger>
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
                    {i < s.flow.length - 1 && (
                      <span className="text-muted-foreground">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
