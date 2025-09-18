"use client";
import events from "@/data/events.json";
import Link from "next/link";
import { useMemo, useState } from "react";

export const metadata = { title: "活動與學習 - KAA" };

export default function EventsIndex() {
  const [ym, setYm] = useState("全部");
  const months = useMemo(() => {
    const ys = new Set<string>();
    (events as any[]).forEach((e:any)=>{
      const d = new Date(e.start);
      ys.add(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`);
    });
    return ["全部", ...Array.from(ys).sort()];
  }, []);
  const items = useMemo(()=>{
    if (ym === "全部") return (events as any[]);
    return (events as any[]).filter((e:any)=>{
      const d = new Date(e.start);
      return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`===ym;
    });
  }, [ym]);

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">活動與學習</h1>
        <div className="flex items-center gap-2 text-sm">
          <label>月份</label>
          <select className="h-9 rounded-lg border px-2" value={ym} onChange={e=>setYm(e.target.value)}>
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((e:any) => (
          <div key={e.id} className="border rounded-xl p-4">
            <div className="font-medium">
              <Link className="hover:underline" href={`/events/${e.id}/`}>{e.title}</Link>
            </div>
            <div className="text-xs text-neutral-500">{new Date(e.start).toLocaleString("zh-TW")} @ {e.venue}</div>
            {e.isCPD ? <div className="text-xs mt-1">學分：{e.credits.hours} 小時 {e.credits.type}</div> : null}
            <Link href={`/events/${e.id}/`} className="inline-block mt-3 px-3 py-1 text-sm rounded-lg bg-black text-white">報名</Link>
          </div>
        ))}
      </div>
      <div className="text-sm text-neutral-600">iCal：<a className="underline" href="/events/ical.ics">/events/ical.ics</a></div>
    </div>
  );
}

