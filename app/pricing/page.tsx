import { Section } from "@/components/Section";
import { PricingTable } from "@/components/PricingTable";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata = { title: "Pricing" };

export default function Page() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <h1 className="text-3xl font-semibold md:text-5xl">Pricing</h1>
        <p className="mt-2 text-muted-foreground">Simple plans that scale with you</p>
      </Section>
      <Section>
        <PricingTable />
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>
        <FAQAccordion />
      </Section>
    </div>
  );
}

