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
        <div className="mb-6 text-center text-xl font-semibold">Capture • Qualify • Schedule • Sync</div>
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

