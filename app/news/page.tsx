"use client";
import news from "@/data/news.json";
import Link from "next/link";
import { useMemo, useState } from "react";

export const metadata = { title: "公告中心 - KAA" };

export default function NewsIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("全部");
  const cats = useMemo(() => ["全部", ...Array.from(new Set((news as any[]).map((n:any)=>n.category)))], []);
  const items = useMemo(() => {
    const src = (news as any[]).filter((n:any)=> (cat==="全部"||n.category===cat) && (!q || (n.title+n.summary).toLowerCase().includes(q.toLowerCase())));
    return src;
  }, [q, cat]);

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">公告中心</h1>
      <div className="flex flex-wrap items-center gap-2">
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="關鍵字搜尋" className="h-9 px-3 rounded-lg border" />
        <div className="flex flex-wrap gap-2 text-xs">
          {cats.map(c => (
            <button key={c} onClick={()=>setCat(c)} className={`px-2.5 py-1 rounded-full border ${cat===c?"bg-black text-white border-black":"bg-white hover:bg-neutral-50"}`}>{c}</button>
          ))}
        </div>
      </div>
      <ul className="grid gap-3">
        {items.map((n:any) => (
          <li key={n.id} className="border rounded-xl p-4">
            <Link href={`/news/${n.id}/`} className="font-medium hover:underline">{n.title}</Link>
            <div className="text-xs text-neutral-500">{n.published_at} ・ {n.category}</div>
            <p className="text-sm mt-1">{n.summary}</p>
          </li>
        ))}
      </ul>
      <div className="text-sm text-neutral-600">RSS：<a className="underline" href="/news/rss.xml">/news/rss.xml</a></div>
    </div>
  );
}

