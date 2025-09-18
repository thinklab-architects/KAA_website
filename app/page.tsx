"use client";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Megaphone, CalendarDays, BookOpen, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import news from "@/data/news.json";
import events from "@/data/events.json";
import coursesData from "@/data/courses.json";
import awards from "@/data/awards.json";

export default function Page() {
  const [newsCat, setNewsCat] = useState<string>("全部");
  const categories = useMemo(() => ["全部", ...Array.from(new Set((news as any[]).map((n:any)=>n.category)))], []);
  const latestNews = useMemo(() => {
    const src = newsCat === "全部" ? (news as any[]) : (news as any[]).filter((n:any)=>n.category===newsCat);
    return src.slice(0, 4);
  }, [newsCat]);
  const upcoming = (events as any[]).slice(0, 8);
  const topCourses = (coursesData as any[]).slice(0, 3);
  const featuredWinners = ((awards as any[])[0]?.winners ?? []).slice(0, 6);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid gap-10">
      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-700 text-white p-8 md:p-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">高雄市建築師公會</h1>
          <p className="mt-3 text-neutral-200">公告中心、活動與學習、專業資源與設計獎—以資料模型驅動的全新體驗。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/news/" className="px-4 py-2 rounded-lg bg-white text-neutral-900 text-sm font-medium">查看最新公告</Link>
            <Link href="/awards/" className="px-4 py-2 rounded-lg border border-white/40 text-sm">仁和賞與歷屆得獎</Link>
          </div>
        </div>
      </section>

      {/* Three Entry Cards */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <EntryCard href="/news/" icon={<Megaphone className="h-5 w-5" />} title="公告中心" desc="法規、公文、招標、轉達與新聞彙整" />
        <EntryCard href="/events/" icon={<CalendarDays className="h-5 w-5" />} title="活動與學習" desc="行事曆、報名與學分" />
        <EntryCard href="/resources/" icon={<BookOpen className="h-5 w-5" />} title="專業資源" desc="主題知識、表單下載與範本" />
      </section>

      {/* Events scroller */}
      <section className="grid gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">近期活動</h2>
          <div className="text-sm text-neutral-600">iCal：<a className="underline" href="/events/ical.ics">/events/ical.ics</a></div>
        </div>
        <div className="relative">
          <button aria-label="scroll left" onClick={() => scrollRef.current?.scrollBy({left:-320,behavior:"smooth"})} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full border bg-white shadow"><ChevronLeft className="h-4 w-4"/></button>
          <div ref={scrollRef} className="overflow-x-auto">
            <div className="flex gap-4 min-w-max pr-4">
              {upcoming.map((e:any) => (
                <div key={e.id} className="min-w-[260px] border rounded-xl p-4">
                  <div className="font-medium">{e.title}</div>
                  <div className="text-xs text-neutral-600 mt-1">{new Date(e.start).toLocaleString("zh-TW")} @ {e.venue}</div>
                  {e.isCPD ? (<div className="text-xs mt-1">學分：{e.credits.hours} 小時 {e.credits.type}</div>) : null}
                </div>
              ))}
            </div>
          </div>
          <button aria-label="scroll right" onClick={() => scrollRef.current?.scrollBy({left:320,behavior:"smooth"})} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full border bg-white shadow"><ChevronRight className="h-4 w-4"/></button>
        </div>
      </section>

      {/* Latest news with category filter */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">最新公告</h2>
            <div className="flex gap-2 text-xs">
              {categories.map((c) => (
                <button key={c} onClick={()=>setNewsCat(c)} className={`px-2.5 py-1 rounded-full border ${newsCat===c?"bg-black text-white border-black":"bg-white hover:bg-neutral-50"}`}>{c}</button>
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {latestNews.map((n:any) => (
              <li key={n.id}>
                <Link href={`/news/${n.id}/`} className="hover:underline">{n.title}</Link>
                <div className="text-xs text-neutral-500">{n.published_at} - {n.category}</div>
              </li>
            ))}
          </ul>
          <div className="mt-3"><Link href="/news/" className="underline">更多公告 →</Link></div>
        </div>
        {/* Courses */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="h-4 w-4" />
            <h2 className="text-xl font-semibold">線上課程 KAAU</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {topCourses.map((c:any) => (
              <div key={c.id} className="border rounded-xl p-4">
                <div className="font-medium">{c.title}</div>
                <div className="text-xs text-neutral-500">{c.format} ・ {c.credits.hours} 小時 {c.credits.type}</div>
              </div>
            ))}
          </div>
          <div className="mt-3"><Link href="/courses/" className="underline">全部課程 →</Link></div>
        </div>
      </section>

      {/* Featured awards */}
      <section className="grid gap-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          <h2 className="text-xl font-semibold">得獎作品精選</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredWinners.map((w:any, i:number) => (
            <div key={i} className="border rounded-xl p-4">
              <div className="font-medium">{w.title}</div>
              <div className="text-xs text-neutral-600">{w.team}（{w.category}）</div>
            </div>
          ))}
        </div>
        <div><Link href="/awards/" className="underline text-sm">更多得獎作品 →</Link></div>
      </section>

      {/* Partners */}
      <section className="grid gap-3">
        <h2 className="text-xl font-semibold">合作與贊助</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[3/1] rounded-lg border bg-neutral-50" />
          ))}
        </div>
      </section>
    </div>
  );
}

function EntryCard({ href, icon, title, desc }: { href: string; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Link href={href} className="border rounded-2xl p-5 hover:shadow-sm transition">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-neutral-100 text-neutral-700">{icon}</div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-neutral-600">{desc}</div>
        </div>
      </div>
    </Link>
  );
}

