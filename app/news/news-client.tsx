'use client';
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Article } from "@/types/content";

const categoriesFor = (dataset: Article[]) => ["全部", ...Array.from(new Set(dataset.map((item) => item.category)))];

export function NewsClient({ dataset }: { dataset: Article[] }) {
  const categories = useMemo(() => categoriesFor(dataset), [dataset]);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("全部");
  const filtered = useMemo(() => {
    const query = keyword.trim().toLowerCase();
    return dataset.filter((item) => {
      const matchCategory = category === "全部" || item.category === category;
      const matchKeyword = !query || `${item.title}${item.summary ?? ""}`.toLowerCase().includes(query);
      return matchCategory && matchKeyword;
    });
  }, [category, dataset, keyword]);

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">公告中心</h1>
      <div className="flex flex-wrap items-center gap-2">
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="關鍵字搜尋" className="h-9 px-3 rounded-lg border" />
        <div className="flex flex-wrap gap-2 text-xs">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)} className={`px-2.5 py-1 rounded-full border ${category === cat ? "bg-black text-white border-black" : "bg-white hover:bg-neutral-50"}`}>{cat}</button>
          ))}
        </div>
      </div>
      <ul className="grid gap-3">
        {filtered.map((article) => (
          <li key={article.id} className="border rounded-xl p-4">
            <Link href={`/news/${article.id}/`} className="font-medium hover:underline">{article.title}</Link>
            <div className="text-xs text-neutral-500">{article.published_at} ・ {article.category}</div>
            <p className="text-sm mt-1">{article.summary}</p>
          </li>
        ))}
      </ul>
      <div className="text-sm text-neutral-600">RSS：<a className="underline" href="/news/rss.xml">/news/rss.xml</a></div>
    </div>
  );
}
