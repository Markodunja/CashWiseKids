# MoneySprout

A story-driven financial education platform for kids (5–14) and their parents. Kids grow a Money Tree on Sprout Island by completing quests; parents get a progress dashboard.

## Tech stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn-style UI, Framer Motion, Zustand, NextAuth.js, React Hook Form + Zod

## Setup

1. Install dependencies: `npm install`
2. Copy env: `cp .env.local.example .env.local`
3. Generate a secret: `openssl rand -base64 32` and set `NEXTAUTH_SECRET` in `.env.local`
4. Run dev: `npm run dev`

## MVP auth (no real backend)

- **Parent:** log in with email starting with `parent@` (e.g. `parent@test.com`) and any password.
- **Kid:** any other email (e.g. `kid@test.com`) and any password.

After login, parents are redirected to `/parent`, kids to the island home `/`.

## Implemented (MVP)

- **Landing:** Hero, how-it-works carousel, signup (3-step: parent → add child → welcome + first sprout animation), login, help
- **Kid:** Island home with Money Tree (level, fruits, greeting, today’s quest card, points), quests list with pillar filters, quest detail with story + choice mini-game + points, savings jars (drag-drop 10% chips between jars), goals/achievements/shop-virtual/profile placeholders
- **Parent:** Dashboard (per-child tree summary, “what learned” bullets, weekly stats), kids list, child detail, challenges/billing placeholders
- **Store:** Product grid (piggy bank, jars, goal board, book), add-to-cart, checkout placeholder
- **State:** Zustand (tree level, sprout points, jars, completed quests) with localStorage persistence; cart store for store page

## Routes

- **Public:** `/` (landing when not logged in), `/login`, `/signup`, `/help`
- **Kid:** `/`, `/quests`, `/quests/[id]`, `/goals`, `/savings`, `/achievements`, `/shop-virtual`, `/profile`
- **Parent:** `/parent`, `/parent/kids`, `/parent/[childId]`, `/parent/challenges`, `/parent/billing`, `/store`
