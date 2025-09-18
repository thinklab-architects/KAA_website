
import data from "@/data/mock.json";
import Link from "next/link";

export const metadata = { title: "公告中心 - KAA" };

export default function NewsIndex() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">公告中心</h1>
      <ul className="grid gap-3">
        {data.news.map(n => (
          <li key={n.id} className="border rounded-xl p-4">
            <Link href={`/news/${n.id}/`} className="font-medium hover:underline">{n.title}</Link>
            <div className="text-xs text-neutral-500">{n.published_at} · {n.category}</div>
            <p className="text-sm mt-1">{n.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
