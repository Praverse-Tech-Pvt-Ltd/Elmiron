# — Full-Stack Monorepo

Production monorepo  pharmaceutical web presence.

| Site | URL | Description |
|------|-----|-------------|
| **Elmiron** | elmiron.com | Product site for Pentosan Polysulfate Sodium |
| **Missed Bladder** | missedbladder.com | Disease education hub |
| **Sanity Studio** | studio.elmiron.com | CMS for content editors |

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS with custom design tokens
- **CMS**: Sanity.io v3
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod + Resend
- **Database**: Supabase (registrations, submissions)
- **Deployment**: Vercel
- **Package Manager**: pnpm + Turborepo

---

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` in each app:

```bash
cp .env.example apps/elmiron/.env.local
cp .env.example apps/missed-bladder/.env.local
```

Fill in:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — from sanity.io/manage
- `SANITY_API_TOKEN` — from sanity.io/manage → API → Tokens
- `RESEND_API_KEY` — from resend.com
- `NEXT_PUBLIC_SUPABASE_URL` + keys — from supabase.com/dashboard

### 3. Set up Supabase

Run `supabase-setup.sql` in Supabase SQL Editor.

### 4. Set up Sanity

```bash
cd studio
npx sanity init   # Connect to your Sanity project
pnpm dev          # http://localhost:3333
```

Add your `SANITY_STUDIO_PROJECT_ID` in `studio/sanity.config.ts`.

---

## Development

```bash
# Run both apps simultaneously
pnpm dev

# Run individual apps
pnpm dev:elmiron        # http://localhost:3000
pnpm dev:missed-bladder # http://localhost:3001
```

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy Elmiron
cd apps/elmiron && vercel --prod
# Set domain: elmiron.com

# Deploy Missed Bladder
cd apps/missed-bladder && vercel --prod
# Set domain: missedbladder.com

# Deploy Sanity Studio
cd studio && npx sanity deploy
# Or: vercel --prod (set domain: studio.elmiron.com)
```

Add all env vars in Vercel dashboard → Project → Settings → Environment Variables.

---

## Folder Structure

```
project/
├── apps/
│   ├── elmiron/          ← Elmiron product site
│   └── missed-bladder/   ← Disease education hub
├── packages/
│   ├── ui/               ← Shared React components
│   ├── config/           ← Shared Tailwind + TS config
│   └── sanity-schemas/   ← Shared CMS schemas
├── studio/               ← Sanity Studio
└── supabase-setup.sql    ← Database schema
```

---

## Design System

| Token | Value |
|-------|-------|
| `sage` | `#8aab8a` |
| `sage-deep` | `#4a7a4a` |
| `sage-pale` | `#e8f0e8` |
| `cream` | `#f8f6f1` |
| `charcoal` | `#2c2c2a` |
| `muted` | `#6b6b68` |
| Heading font | Cormorant Garamond, weight 300 |
| Body font | DM Sans, weight 300/400/500 |

---

## Contact

The Company · contact@elmiron.com · +91 80972 53466

