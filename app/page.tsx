
import Link from "next/link";
import data from "@/data/mock.json";

export default function Page() {
  const latestNews = data.news.slice(0, 3);
  const upcoming = data.events.slice(0, 3);
  const courses = data.courses.slice(0, 3);

  return (
    <div className="grid gap-8">
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">最新公告</h2>
          <ul className="space-y-3">
            {latestNews.map(n => (
              <li key={n.id}>
                <Link href={`/news/${n.id}/`} className="hover:underline">{n.title}</Link>
                <div className="text-xs text-neutral-500">{n.published_at} · {n.category}</div>
              </li>
            ))}
          </ul>
          <div className="mt-3"><Link href="/news/" className="underline">更多公告 →</Link></div>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">近期活動</h2>
          <ul className="space-y-3">
            {upcoming.map(e => (
              <li key={e.id}>
                <span className="font-medium">{e.title}</span>
                <div className="text-xs text-neutral-500">{new Date(e.start).toLocaleString("zh-TW")} @ {e.venue}</div>
              </li>
            ))}
          </ul>
          <div className="mt-3"><Link href="/events/" className="underline">檢視行事曆 →</Link></div>
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-xl font-semibold mb-4">線上課程 KAAU</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map(c => (
            <div key={c.id} className="border rounded-xl p-4">
              <div className="font-medium">{c.title}</div>
              <div className="text-xs text-neutral-500">{c.format} · {c.credits.hours} 小時 {c.credits.type}</div>
            </div>
          ))}
        </div>
        <div className="mt-3"><Link href="/courses/" className="underline">所有課程 →</Link></div>
      </section>
    </div>
  );
}
