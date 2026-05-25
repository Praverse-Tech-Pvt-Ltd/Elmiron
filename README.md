# Elmiron Website

Production Next.js site for Elmiron.

| Site | URL | Description |
|------|-----|-------------|
| **Elmiron** | elmiron.in | Product site for Pentosan Polysulfate Sodium |

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod + Resend
- **Deployment**: Vercel
- **Package Manager**: pnpm + Turborepo

---

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example apps/elmiron/.env.local
```

Fill in:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `SANITY_API_TOKEN`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_EMAIL`

---

## Development

```bash
pnpm dev
pnpm dev:elmiron # http://localhost:3000
```

---

## Deployment

### Vercel

```bash
cd apps/elmiron && vercel --prod
```

Set domain: `elmiron.in`.

Add all env vars in Vercel dashboard: Project -> Settings -> Environment Variables.

---

## Folder Structure

```text
project/
├── apps/
│   └── elmiron/          <- Elmiron product site
├── packages/
│   ├── ui/               <- Shared React components
│   └── config/           <- Shared Tailwind + TS config
```

---

## Contact

The Company - elmiron@elmiron.in - +91 80972 53466
