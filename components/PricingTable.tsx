"use client";
import { useState } from "react";
import { pricingTiers } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function PricingTable() {
  const [annual, setAnnual] = useState(true);
  return (
    <div>
      <div className="mb-6 flex items-center justify-center gap-3 text-sm">
        <span className={!annual ? "text-foreground" : "text-muted-foreground"}>Monthly</span>
        <Switch checked={annual} onCheckedChange={setAnnual} aria-label="Toggle annual billing" />
        <span className={annual ? "text-foreground" : "text-muted-foreground"}>Annual</span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-accent">save ~20%</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {pricingTiers.map((t) => (
          <Card key={t.name} className={t.highlighted ? "border-accent/50" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {t.name}
                {t.highlighted && <span className="rounded bg-neon text-background px-2 py-0.5 text-xs">Popular</span>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">
                ${annual ? t.annual : t.monthly}
                <span className="ml-1 text-sm text-muted-foreground">/mo</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={t.highlighted ? "primary" : "default"}>
                Choose {t.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

