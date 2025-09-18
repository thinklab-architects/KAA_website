"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { Megaphone, CalendarDays, BookOpen, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import news from "@/data/news.json";
import events from "@/data/events.json";
import coursesData from "@/data/courses.json";
import awards from "@/data/awards.json";
import type { Article, EventItem, Course, AwardCycle, AwardWinner } from "@/types/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { MediaCard } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";

const newsDataset = news as Article[];
const eventDataset = events as EventItem[];
const courseDataset = coursesData as Course[];
const awardDataset = awards as AwardCycle[];

export default function Page() {
  const [newsCat, setNewsCat] = useState<string>("全部");
  const latestNews = useMemo(() => {
    const src = newsCat === "全部" ? newsDataset : newsDataset.filter((item) => item.category === newsCat);
    return src.slice(0, 4);
  }, [newsCat]);
  const categories = useMemo(() => ["全部", ...Array.from(new Set(newsDataset.map((n) => n.category)))], []);
  const upcoming = eventDataset.slice(0, 8);
  const topCourses = courseDataset.slice(0, 3);
  const featuredWinners = (awardDataset[0]?.winners ?? []).slice(0, 6) as AwardWinner[];
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid gap-16">
      {/* Hero：大字級敘事 + 影像 */}
      <Section className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5">
          <div className="section-label mb-2">Resources</div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">與 KAA 一起，推動更好的建築與城市</h1>
          <p className="mt-4 text-neutral-600">連結公告、活動、課程與專業資源，靈感與知識在此匯流。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/resources/" className="k-cta-primary">前往資源中心</Link>
            <Link href="/membership/" className="k-cta-secondary">加入會員</Link>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="relative rounded-2xl overflow-hidden border aspect-[16/9] bg-white">
            <Image src="/images/hero.svg" alt="Hero" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </Section>

      {/* 三入口卡片 */}
      <Section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <EntryCard href="/news/" icon={<Megaphone className="h-5 w-5" />} title="公告中心" desc="法規、公文、招標、轉達與新聞彙整" />
        <EntryCard href="/events/" icon={<CalendarDays className="h-5 w-5" />} title="活動與學習" desc="行事曆、報名與學分" />
        <EntryCard href="/resources/" icon={<BookOpen className="h-5 w-5" />} title="專業資源" desc="主題知識、表單下載與範本" />
      </Section>

      {/* 近期活動：水平滑動 */}
      <Section className="grid gap-4">
        <SectionHeading title="近期活動" right={<span className="text-sm text-neutral-600">iCal：<Link className="underline" href="/events/ical.ics">/events/ical.ics</Link></span>} />
        <div className="relative">
          <button aria-label="scroll left" onClick={() => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" })} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full border bg-white shadow"><ChevronLeft className="h-4 w-4" /></button>
          <div ref={scrollRef} className="overflow-x-auto">
            <div className="flex gap-4 min-w-max pr-4">
              {upcoming.map((event, index) => (
                <div key={event.id} className="min-w-[260px] border rounded-xl p-4">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-neutral-100">
                    <Image src={`/images/event-${(index % 3) + 1}.svg`} alt="活動示意" fill className="object-cover" />
                  </div>
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
      </Section>

      {/* 最新與熱門（分頁切換） */}
      <Section>
        <SectionHeading title="最新消息與活動" desc="快速瀏覽近期公告、活動與課程。" />
        <div className="mt-6">
          <Tabs
            tabs={[
              {
                id: "news",
                label: "最新公告",
                content: (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {latestNews.map((article, idx) => (
                      <MediaCard
                        key={article.id}
                        href={`/news/${article.id}/`}
                        src={`/images/award-${(idx % 3) + 1}.svg`}
                        alt="news"
                        title={article.title}
                        meta={`${article.published_at} ・ ${article.category}`}
                      />
                    ))}
                  </div>
                ),
              },
              {
                id: "events",
                label: "活動與學習",
                content: (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {upcoming.slice(0, 6).map((e, idx) => (
                      <MediaCard
                        key={e.id}
                        href={`/events/${e.id}/`}
                        src={`/images/event-${(idx % 3) + 1}.svg`}
                        alt="event"
                        title={e.title}
                        meta={`${new Date(e.start).toLocaleDateString("zh-TW")} ・ ${e.venue}`}
                      />
                    ))}
                  </div>
                ),
              },
              {
                id: "courses",
                label: "熱門課程",
                content: (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topCourses.map((c, idx) => (
                      <MediaCard
                        key={c.id}
                        href={`/courses/${c.id}/`}
                        src={`/images/course-${(idx % 3) + 1}.svg`}
                        alt="course"
                        title={c.title}
                        meta={`${c.format} ・ ${c.credits?.hours ?? 0} 小時 ${c.credits?.type ?? ""}`}
                      />
                    ))}
                  </div>
                ),
              },
            ]}
          />
        </div>
      </Section>

      {/* 得獎與合作 */}
      <Section className="grid gap-4">
        <SectionHeading label="Awards" title={<span className="flex items-center gap-2"><Trophy className="h-5 w-5" /> 得獎作品精選</span>} right={<Link href="/awards/" className="underline text-sm">更多 →</Link>} />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredWinners.map((winner, index) => (
            <MediaCard
              key={`${winner.title}-${index}`}
              href="/awards/"
              src={`/images/award-${(index % 3) + 1}.svg`}
              alt="award"
              title={winner.title}
              meta={`${winner.team} ・ ${winner.category}`}
            />
          ))}
        </div>
      </Section>

      {/* 合作與贊助（logo 牆） */}
      <Section className="grid gap-3">
        <SectionHeading title="合作與贊助" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="aspect-[3/1] rounded-lg border bg-neutral-50" />
          ))}
        </div>
      </Section>
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
