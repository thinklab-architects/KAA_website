import events from "@/data/events.json";
import Link from "next/link";
import type { EventItem } from "@/types/content";

const dataset = events as EventItem[];

export function generateStaticParams() {
  return dataset.map((event) => ({ id: event.id }));
}

export const metadata = { title: "活動內容 - KAA" };

export default function EventDetail({ params }: { params: { id: string } }) {
  const event = dataset.find((item) => item.id === params.id);
  if (!event) {
    return <div className="prose">找不到該活動。<Link href="/events/" className="underline ml-2">回活動列表</Link></div>;
  }

  return (
    <article className="prose max-w-none">
      <h1>{event.title}</h1>
      <p className="text-sm text-neutral-500">{new Date(event.start).toLocaleString("zh-TW")} @ {event.venue}</p>
      {event.isCPD && event.credits ? <p>學分：{event.credits.hours} 小時 {event.credits.type}</p> : null}
      <p>活動內容與議程（示意）。</p>
      <p className="mt-6"><Link href="/events/" className="underline">← 回活動列表</Link></p>
    </article>
  );
}
