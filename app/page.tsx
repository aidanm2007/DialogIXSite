import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { LogoRow } from "@/components/LogoRow";
import { Pillars } from "@/components/Pillars";
import { FlowStrip } from "@/components/FlowStrip";
import { KPIStrip } from "@/components/KPIStrip";

export default function Page() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <Hero />
      </Section>
      <Section>
        <LogoRow />
      </Section>
      <Section>
        <div className="mb-6 text-center text-xl font-serif uppercase tracking-[0.4em] text-gold">
          Capture{" \u2022 "}Qualify{" \u2022 "}Schedule{" \u2022 "}Sync
        </div>
        <Pillars />
      </Section>
      <Section>
        <FlowStrip />
      </Section>
      <Section>
        <KPIStrip />
      </Section>
    </div>
  );
}
