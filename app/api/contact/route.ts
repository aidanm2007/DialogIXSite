import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  useCase: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return new Response(JSON.stringify({ ok: false, errors: parsed.error.flatten() }), { status: 400 });
  }

  const payload = parsed.data;
  const url = process.env.CONTACT_WEBHOOK_URL;
  try {
    if (url) {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", payload }),
      });
    } else {
      console.log("CONTACT_WEBHOOK_URL not set. Payload:", payload);
    }
  } catch (e) {
    console.error("Webhook error", e);
  }

  return Response.json({ ok: true });
}

export type ContactPayload = z.infer<typeof ContactSchema>;

