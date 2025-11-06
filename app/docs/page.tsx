import { Section } from "@/components/Section";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata = { title: "Docs" };

const widgetSnippet = `<!-- Dialog IX Widget -->
<script>
  (function(){
    window.dialogix = window.dialogix || function(){ (window.dialogix.q = window.dialogix.q || []).push(arguments) };
    dialogix('init', { site: 'YOUR_SITE_ID' });
  })();
</script>
<script async src="https://cdn.dialogix.com/widget.js"></script>`;

const webhookPayload = `{
  "id": "lead_123",
  "name": "Jane Doe",
  "email": "jane@acme.com",
  "score": 82,
  "utm": { "source": "google", "campaign": "brand" },
  "events": [
    { "type": "message", "text": "Hi!", "ts": 1712345678 }
  ]
}`;

const eventsList = `lead_created, lead_scored, meeting_booked, transcript_ready`;

export default function Page() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Section>
        <h1 className="text-3xl font-semibold md:text-5xl">Quickstart</h1>
        <p className="mt-2 text-muted-foreground">Embed the widget and receive webhooks</p>
      </Section>
      <Section>
        <h2 className="mb-3 text-2xl font-semibold">1) Install widget</h2>
        <CodeBlock code={widgetSnippet} language="html" />
      </Section>
      <Section>
        <h2 className="mb-3 text-2xl font-semibold">2) Webhook payload</h2>
        <CodeBlock code={webhookPayload} language="json" />
      </Section>
      <Section>
        <h2 className="mb-3 text-2xl font-semibold">3) Events</h2>
        <CodeBlock code={eventsList} language="txt" />
      </Section>
    </div>
  );
}

