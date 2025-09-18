'use client';
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { EventItem } from "@/types/content";

const monthsFor = (dataset: EventItem[]) => {
  const unique = new Set<string>();
  dataset.forEach((event) => {
    const date = new Date(event.start);
    unique.add(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`);
  });
  return ["全部", ...Array.from(unique).sort()];
};

export function EventsClient({ dataset }: { dataset: EventItem[] }) {
  const months = useMemo(() => monthsFor(dataset), [dataset]);
  const [ym, setYm] = useState("全部");
  const items = useMemo(() => {
    if (ym === "全部") return dataset;
    return dataset.filter((event) => {
      const date = new Date(event.start);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}` === ym;
    });
  }, [dataset, ym]);

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">活動與學習</h1>
        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="event-month">月份</label>
          <select id="event-month" className="h-9 rounded-lg border px-2" value={ym} onChange={(e) => setYm(e.target.value)}>
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((event, index) => (
          <div key={event.id} className="border rounded-xl p-4">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-neutral-100">
              <Image src={`/images/event-${(index % 3) + 1}.svg`} alt="活動示意" fill className="object-cover" />
            </div>
            <div className="font-medium">
              <Link className="hover:underline" href={`/events/${event.id}/`}>{event.title}</Link>
            </div>
            <div className="text-xs text-neutral-500">{new Date(event.start).toLocaleString("zh-TW")} @ {event.venue}</div>
            {event.isCPD && event.credits ? <div className="text-xs mt-1">學分：{event.credits.hours} 小時 {event.credits.type}</div> : null}
            <Link href={`/events/${event.id}/`} className="inline-block mt-3 px-3 py-1 text-sm rounded-lg bg-black text-white">報名</Link>
          </div>
        ))}
      </div>
      <div className="text-sm text-neutral-600">iCal：<Link className="underline" href="/events/ical.ics">/events/ical.ics</Link></div>
    </div>
  );
}
