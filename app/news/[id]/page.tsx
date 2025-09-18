
import data from "@/data/mock.json";
import Link from "next/link";

export default function NewsDetail({ params }: { params: { id: string }}) {
  const item = data.news.find(n => n.id === params.id);
  if (!item) return <div>找不到公告。</div>;
  return (
    <article className="prose max-w-none">
      <h1>{item.title}</h1>
      <p className="text-sm text-neutral-500">{item.published_at} · {item.category}</p>
      <p>{item.summary}</p>
      {item.attachments?.length ? (
        <div className="mt-4">
          <h3>附件</h3>
          <ul>{item.attachments.map((a: any) => <li key={a.url}><a href={a.url}>{a.name}</a></li>)}</ul>
        </div>
      ) : null}
      <p className="mt-6"><Link href="/news/" className="underline">← 返回公告列表</Link></p>
    </article>
  );
}
