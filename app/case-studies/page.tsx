import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Case Studies" };

export default function Page() {
  const metrics = [
    { label: "+38% booked calls", detail: "Acme SaaS \u2014 6 weeks" },
    { label: "-27% CAC", detail: "DTC brand \u2014 3 months" },
    { label: "2.1x reply rate", detail: "B2B \u2014 Q1 cohort" },
  ];
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <h1 className="text-3xl font-serif tracking-tight text-gold md:text-5xl">Case Studies</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">Proof in metrics</p>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="card p-6 text-center">
              <div className="text-2xl font-semibold text-foreground">{m.label}</div>
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
