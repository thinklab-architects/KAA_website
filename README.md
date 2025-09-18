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

## Pages & Feeds
- `/news/` 公告中心（詳文：`/news/:id/`，RSS：`/news/rss.xml`）
- `/events/` 活動與學習（iCal：`/events/ical.ics`）
- `/courses/` 線上課程（KAAU placeholder）
- `/awards/` 設計獎（示意屆別與得獎列表）
- `/resources/` 專業資源（主題頁 placeholder）
- `/membership/` 會員與治理（placeholder）
- `/services/` 服務（收費標準、線上委託、常用表單）
- `/archive/` 封存庫（停更內容）
- `/about/` 關於

Note: For static export (GitHub Pages), dynamic news detail pages are pre-rendered via `generateStaticParams`.
