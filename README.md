# KAA Website

Next.js 14 + Tailwind scaffold for the KAA website, configured for static export with `next export` so it can deploy on GitHub Pages.

## Local development
```bash
pnpm i   # or npm i / yarn
pnpm dev
```

## Build & export
```bash
pnpm build
# static output will be generated in out/ for gh-pages or other static hosting
```

## Structure
- app/            App Router routes and layouts
- components/     Shared UI components
- data/           Mock content (ready to swap with a CMS or API)
- public/         Static assets
- scripts/        Utility scripts
