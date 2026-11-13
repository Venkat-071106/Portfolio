# Venkat — AI / ML Portfolio

A dark, animated single-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger, and Lenis. Content is centralized in [`content/data.ts`](./content/data.ts).

## Run locally

1. Install Node.js 20 or newer.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to `.env.local` and add the optional values below.
4. Run `npm run dev`, then open `http://localhost:3000`.

## Environment variables

| Variable | Needed? | Purpose |
| --- | --- | --- |
| `OPENAI_API_KEY` | Optional | Enables grounded LLM answers in “Ask about Venkat.” Without it, the keyword-based fallback answers from the same portfolio content. |
| `OPENAI_MODEL` | Optional | Model name for the OpenAI-compatible Chat Completions endpoint. Defaults to `gpt-4o-mini`. |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Optional for contact form | A Formspree form endpoint, such as `https://formspree.io/f/your-form-id`. Until configured, the page explains how to contact Venkat directly. |

The GitHub section calls GitHub's public API from the browser and shows a clear fallback if requests are unavailable or rate limited. It does not need a token.

## Deploy to Vercel

1. Push this folder to a Git repository and import it in Vercel.
2. Keep the default Next.js framework preset and build command (`npm run build`).
3. Add `OPENAI_API_KEY`, `OPENAI_MODEL` (optional), and `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Vercel Project Settings → Environment Variables.
4. Deploy. No custom server configuration is required.

The site currently uses `https://venkat-071106.vercel.app` as its canonical metadata base. Update the URL in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` after choosing the production domain.

## Source content & remaining TODOs

The resume is copied to `public/resume.pdf`; the portrait is served from `public/assets/venkat.png`. Edit all displayed professional details in `content/data.ts`.

- Add any LinkedIn-only details from the missing `content/notes.md`.
- Add GitHub links for Agribot, traffic monitoring, and DRSformer if they are public.
- Confirm any VLSI / CMOS / SRAM / FPGA / Verilog skills before publishing them as experience.
- Add verified datasets and measured outcomes for projects if you want numerical results shown.
- Confirm the purpose, evaluation, and your contribution for Vital AI Medical Assistant; its public repo has no README.
- Replace the canonical `venkat-071106.vercel.app` placeholder with the production domain after deployment.

## Accessibility & performance

The particle field pauses outside the viewport, canvas density is capped, the custom art is CSS/SVG-free drawing, and `prefers-reduced-motion` disables Lenis, GSAP reveals, and the canvas animation. Images use `next/image`. All overlays close with Escape and include accessible labels.
