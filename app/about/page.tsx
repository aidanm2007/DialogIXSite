import { Section } from "@/components/Section";

export const metadata = { title: "About" };

export default function Page() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <h1 className="text-3xl font-semibold md:text-5xl">About Dialog IX</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Dialog IX builds AI-native conversation systems for customer acquisition. We care about trust, privacy, and
          measurable outcomes.
        </p>
      </Section>
      <Section>
        <h2 className="mb-3 text-2xl font-semibold">Trust & privacy</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Data minimization and encryption in transit</li>
          <li>Strict access controls and audit trails</li>
          <li>Webhook-based integrations by default</li>
        </ul>
      </Section>
    </div>
  );
}

