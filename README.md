# Dialog IX — Marketing Site (Next.js 14)

Dark, cinematic, premium website for Dialog IX. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui-style components, Framer Motion, next-seo, lenis, lucide-react, and react-wrap-balancer.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui-inspired components
- Framer Motion, Lenis (smooth scroll), react-wrap-balancer
- next-seo, lucide-react
- No DB; static pages + `/api/contact` mock webhook

## Getting Started (Windows-friendly)

Prereqs: Node 18+ and either pnpm or npm.

### Install
- pnpm: `pnpm install`
- npm: `npm install`

### Dev
- pnpm: `pnpm dev`
- npm: `npm run dev`

Open http://localhost:3000

### Build & Start
- pnpm: `pnpm build && pnpm start`
- npm: `npm run build && npm run start`

### Tests (Vitest)
- pnpm: `pnpm test`
- npm: `npm run test`

### Sitemap & Robots
- Update `SITE_URL` env if deploying somewhere not detected automatically
- Generate: `pnpm sitemap` or `npm run sitemap`
  - Outputs to `public/sitemap.xml` and `public/robots.txt`

## Environment
Create a `.env.local` based on `env.example`:

```
NEXT_PUBLIC_CALENDLY_URL=
CONTACT_WEBHOOK_URL=
```

- `CONTACT_WEBHOOK_URL`: If set, `/api/contact` POSTs payloads there; otherwise logs to server console and returns `{ ok: true }`.

## shadcn/ui Components
This repo vendors minimal shadcn-style primitives under `components/ui/*` (Button, Card, Accordion, Tabs, Input, Textarea, Label, Switch, Separator). No CLI step is required. If you want to add more shadcn components later via CLI:

1) Install CLI globally or use npx
```
npx shadcn-ui@latest init
```
2) Add components, e.g.:
```
npx shadcn-ui@latest add dialog toast dropdown-menu
```

We already have Tailwind + `tailwindcss-animate` configured.

## Fonts
- Using `next/font` to load Inter (body) and Outfit (display) in `app/layout.tsx`.
- No local font files are required, but if you prefer custom files, drop them in `public/fonts/` and load via CSS. Git LFS is configured for `*.woff2`, `*.ttf`, etc.

## Deploy (Vercel)
1) Push to GitHub
2) Import in Vercel → Framework: Next.js
3) Set env vars in Vercel Project Settings (from `.env.example`)
4) Build & deploy. Vercel’s default Next.js preset works.

## Accessibility & Performance
- Respects `prefers-reduced-motion`; disables heavy animations and Lenis when set
- Semantic HTML, focusable controls, alt text
- Lazy images via `next/image` (placeholder content uses text)
- Lighthouse targets ≥95 locally (Perf/Best/A11y)

## Where To Put Assets
- Place static assets in `public/`. Examples:
  - Logos: `public/logos/your-logo.svg`
  - OG images: `public/og.png`
- `.gitattributes` uses Git LFS for large assets (`*.png, *.jpg, *.webp, *.svg, *.woff2, *.ttf, *.otf`).

## Visual Toggles / Reduced Motion
- Smooth scroll (Lenis) auto-disables when `prefers-reduced-motion` is on
- Animated rays, grid shimmer, KPI counters, and background effects check `prefers-reduced-motion`
- To force-disable visuals locally, enable reduced motion in your OS or comment out `GradientRays`, `NoiseLayer`, and `LenisProvider` usage in `app/layout.tsx`.

## Project Structure
See the “Project file tree” in the request output. Key paths:
- `app/` — Routes and layouts
- `components/` — UI + sections and effects
- `lib/` — utils and motion, SEO config
- `app/api/contact/route.ts` — Zod validation + optional webhook POST
- `__tests__/` — Vitest tests

## Copy Placeholders
- Tagline: “Dialog IX — AI-native customer dialogue, on autopilot.”
- Subline: “Capture. Qualify. Schedule. Sync.”
- KPIs: “+38% booked calls”, “−27% CAC”, “2.1× reply rate”

## Notes
- This is a static marketing site. The `/api/contact` route is a mock that you can swap for a real endpoint.
- For Calendly CTA, set `NEXT_PUBLIC_CALENDLY_URL` or wire a route to your scheduler.
