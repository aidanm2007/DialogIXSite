"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  useCase: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  message: z.string().min(10),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });
  const onSubmit = async (values: ContactInput) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      alert("Thanks! We'll be in touch.");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Jane Doe" {...register("name")} />
        {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
      </div>
      <div className="grid gap-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="jane@company.com" {...register("email")} />
        {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
      </div>
      <div className="grid gap-1">
        <Label htmlFor="company">Company</Label>
        <Input id="company" placeholder="Acme Inc." {...register("company")} />
        {errors.company && <p className="text-xs text-red-400">{errors.company.message}</p>}
      </div>
      <div className="grid gap-1">
        <Label htmlFor="useCase">Use case</Label>
        <Input id="useCase" placeholder="Demo requests, lead routing, etc." {...register("useCase")} />
        {errors.useCase && <p className="text-xs text-red-400">{errors.useCase.message}</p>}
      </div>
      <div className="grid gap-1 md:grid-cols-2 md:gap-4">
        <div>
          <Label htmlFor="budget">Budget</Label>
          <Input id="budget" placeholder="$2k–$5k/mo" {...register("budget")} />
          {errors.budget && <p className="text-xs text-red-400">{errors.budget.message}</p>}
        </div>
        <div>
          <Label htmlFor="timeline">Timeline</Label>
          <Input id="timeline" placeholder="This quarter" {...register("timeline")} />
          {errors.timeline && <p className="text-xs text-red-400">{errors.timeline.message}</p>}
        </div>
      </div>
      <div className="grid gap-1">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Tell us about your goals…" {...register("message")} />
        {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
      </div>
      <div>
        <Button type="submit" disabled={isSubmitting} variant="primary">
          {isSubmitting ? "Sending…" : "Send"}
        </Button>
      </div>
    </form>
  );
}

export const contactSchemaForTest = contactSchema;

