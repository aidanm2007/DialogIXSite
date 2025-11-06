import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <h1 className="text-3xl font-semibold md:text-5xl">Contact</h1>
        <p className="mt-2 text-muted-foreground">Tell us about your goals</p>
      </Section>
      <Section>
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}

