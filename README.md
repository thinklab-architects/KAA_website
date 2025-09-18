
# KAA Website (Test)

以 Next.js 14 + Tailwind 建立的「高雄市建築師公會」測試站，採用 `next export` 可部署到 GitHub Pages。

## 本地開發
```bash
pnpm i   # 或 npm i / yarn
pnpm dev
```

## 產出靜態檔
```bash
pnpm build
# 產物在 out/ 可直接推到 gh-pages 分支或上傳靜態空間
```

## 結構
- app/            App Router 路由
- components/     共用元件
- data/           模擬資料（後續可改 CMS）
- public/         靜態檔案
- scripts/        輔助腳本
