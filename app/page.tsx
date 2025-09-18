"use client";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Megaphone, CalendarDays, BookOpen, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import news from "@/data/news.json";
import events from "@/data/events.json";
import coursesData from "@/data/courses.json";
import awards from "@/data/awards.json";
import type { Article, EventItem, Course, AwardCycle, AwardWinner } from "@/types/content";

const newsDataset = news as Article[];
const eventDataset = events as EventItem[];
const courseDataset = coursesData as Course[];
const awardDataset = awards as AwardCycle[];
const newsCategories = ["全部", ...Array.from(new Set(newsDataset.map((item) => item.category)))];

export default function Page() {
  const [newsCat, setNewsCat] = useState<string>("全部");
  const latestNews = useMemo(() => {
    const src = newsCat === "全部" ? newsDataset : newsDataset.filter((item) => item.category === newsCat);
    return src.slice(0, 4);
  }, [newsCat]);
  const upcoming = eventDataset.slice(0, 8);
  const topCourses = courseDataset.slice(0, 3);
  const featuredWinners = (awardDataset[0]?.winners ?? []).slice(0, 6) as AwardWinner[];
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid gap-12">
      {/* Hero (AIA-inspired two-column) */}
      <section className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5">
          <div className="section-label mb-2">Resources</div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">與 KAA 一起建立專業知識</h1>
          <p className="mt-4 text-neutral-600">匯集公告、法規、活動與學習資源，協助會員在職涯各階段快速取得所需資訊。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/resources/" className="k-cta-primary">前往資源中心</Link>
            <Link href="/membership/" className="k-cta-secondary">加入會員</Link>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="hero-media rounded-2xl border aspect-[16/9] bg-white" />
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
          <div className="text-sm text-neutral-600">iCal：<Link className="underline" href="/events/ical.ics">/events/ical.ics</Link></div>
        </div>
        <div className="relative">
          <button aria-label="scroll left" onClick={() => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" })} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full border bg-white shadow"><ChevronLeft className="h-4 w-4" /></button>
          <div ref={scrollRef} className="overflow-x-auto">
            <div className="flex gap-4 min-w-max pr-4">
              {upcoming.map((event) => (
                <div key={event.id} className="min-w-[260px] border rounded-xl p-4">
                  <div className="font-medium">{event.title}</div>
                  <div className="text-xs text-neutral-600 mt-1">{new Date(event.start).toLocaleString("zh-TW")} @ {event.venue}</div>
                  {event.isCPD && event.credits ? (
                    <div className="text-xs mt-1">學分：{event.credits.hours} 小時 {event.credits.type}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <button aria-label="scroll right" onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full border bg-white shadow"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </section>

      {/* Latest news with category filter */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">最新公告</h2>
            <div className="flex gap-2 text-xs">
              {newsCategories.map((category) => (
                <button key={category} onClick={() => setNewsCat(category)} className={`px-2.5 py-1 rounded-full border ${newsCat === category ? "bg-black text-white border-black" : "bg-white hover:bg-neutral-50"}`}>{category}</button>
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {latestNews.map((article) => (
              <li key={article.id}>
                <Link href={`/news/${article.id}/`} className="hover:underline">{article.title}</Link>
                <div className="text-xs text-neutral-500">{article.published_at} - {article.category}</div>
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
            {topCourses.map((course) => (
              <div key={course.id} className="border rounded-xl p-4">
                <div className="font-medium">{course.title}</div>
                <div className="text-xs text-neutral-500">{course.format} ・ {course.credits?.hours} 小時 {course.credits?.type}</div>
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
          {featuredWinners.map((winner, index) => (
            <div key={`${winner.title}-${index}`} className="border rounded-xl p-4">
              <div className="font-medium">{winner.title}</div>
              <div className="text-xs text-neutral-600">{winner.team}（{winner.category}）</div>
            </div>
          ))}
        </div>
        <div><Link href="/awards/" className="underline text-sm">更多得獎作品 →</Link></div>
      </section>

      {/* Partners */}
      <section className="grid gap-3">
        <h2 className="text-xl font-semibold">合作與贊助</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="aspect-[3/1] rounded-lg border bg-neutral-50" />
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
