import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata = { title: "Product" };

export default function Page() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <h1 className="text-3xl font-semibold md:text-5xl">Product</h1>
        <p className="mt-2 text-muted-foreground">Deep-dive into Dialog IX capabilities</p>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <FeatureCard title="Lead widget" description="Drop-in widget with premium UX and brandable surface." />
          <FeatureCard title="AI chat" description="Conversational capture and qualification with controllable tone." />
          <FeatureCard
            title="Auto-scoring"
            description="Score fit and intent using UTM, behavior, and answers."
            code={<CodeBlock code={`// Example scoring rule\nif (company_size > 50 && intent === 'demo') score += 20`} />}
          />
          <FeatureCard title="Scheduler" description="Instant booking with Calendly or native calendars." />
          <FeatureCard title="CRM sync" description="Sync enriched leads to your CRM with full context." />
          <FeatureCard
            title="UTM & reporting"
            description="Track campaign performance end-to-end via UTMs."
            code={<CodeBlock code={`{\n  utm_source: 'google',\n  session_duration: 142,\n  reply_depth: 4\n}`} />}
          />
        </div>
      </Section>
    </div>
  );
}

