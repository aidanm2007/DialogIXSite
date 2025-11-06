import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const site = {
  name: "Dialog IX",
  url: "https://dialogix.example",
  twitter: "@dialogix",
  description: "Dialog IX — AI-native customer dialogue, on autopilot.",
};

export const kpis = [
  { label: "+38% booked calls", value: 38, suffix: "%" },
  { label: "−27% CAC", value: -27, suffix: "%" },
  { label: "2.1× reply rate", value: 2.1, suffix: "×" },
];

export const pillars = [
  {
    title: "Capture",
    description: "Turn more visitors into leads with a premium widget.",
    icon: "mouse-pointer",
  },
  {
    title: "Qualify",
    description: "AI chat scores fit and intent in real time.",
    icon: "bot",
  },
  {
    title: "Schedule",
    description: "Auto-book meetings while momentum is high.",
    icon: "calendar",
  },
  {
    title: "Sync",
    description: "Stream to your CRM with full UTM context.",
    icon: "sync",
  },
];

export const solutions = [
  {
    key: "dtc",
    label: "DTC",
    bullets: [
      "Boost conversion from product pages",
      "Qualify high-intent shoppers",
      "Drive SMS/email capture",
    ],
    flow: ["Visitor", "Chat", "Offer", "Checkout"],
  },
  {
    key: "local",
    label: "Local Services",
    bullets: [
      "Route leads by location",
      "Auto-schedule site visits",
      "Sync to CRM + SMS",
    ],
    flow: ["Lead", "Chat", "Schedule", "CRM"],
  },
  {
    key: "b2b",
    label: "B2B SaaS",
    bullets: [
      "Capture demo requests",
      "Score ICP fit",
      "Book AE calendars",
    ],
    flow: ["Visitor", "Chat", "Score", "Calendar", "CRM"],
  },
  {
    key: "edu",
    label: "Education",
    bullets: [
      "Guide program discovery",
      "Qualify by goals",
      "Schedule advisor calls",
    ],
    flow: ["Prospect", "Chat", "Match", "Schedule"],
  },
];

export const pricingTiers = [
  {
    name: "Launch",
    monthly: 49,
    annual: 39,
    features: [
      "Lead widget",
      "AI chat (basic)",
      "Email notifications",
    ],
  },
  {
    name: "Growth",
    monthly: 149,
    annual: 119,
    features: [
      "Auto-scoring",
      "Scheduler",
      "CRM sync",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    monthly: 399,
    annual: 329,
    features: [
      "Advanced routing",
      "Custom actions",
      "Premium support",
    ],
  },
];

export const faqs = [
  {
    q: "How does the AI qualify leads?",
    a: "It uses your ICP and signals (UTM, behavior, answers) to score fit and urgency.",
  },
  { q: "Does it work with my CRM?", a: "Yes, we sync to major CRMs via API or webhook." },
  { q: "Can I control the tone?", a: "Absolutely. Provide guidelines; the model respects brand style." },
];

