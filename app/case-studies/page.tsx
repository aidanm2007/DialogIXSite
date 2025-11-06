import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Case Studies" };

export default function Page() {
  const metrics = [
    { label: "+38% booked calls", detail: "Acme SaaS — 6 weeks" },
    { label: "-27% CAC", detail: "DTC brand — 3 months" },
    { label: "2.1× reply rate", detail: "B2B — Q1 cohort" },
  ];
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <h1 className="text-3xl font-semibold md:text-5xl">Case Studies</h1>
        <p className="mt-2 text-muted-foreground">Proof in metrics</p>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-white/10 bg-card/60 p-6 text-center">
              <div className="text-2xl font-semibold">{m.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{m.detail}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="primary">Get full PDF</Button>
        </div>
      </Section>
    </div>
  );
}

