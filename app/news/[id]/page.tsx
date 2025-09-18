import news from "@/data/news.json";
import Link from "next/link";

export function generateStaticParams() {
  return news.map((n: any) => ({ id: n.id }));
}

export default function NewsDetail({ params }: { params: { id: string } }) {
  const item = news.find((n) => n.id === params.id);
  if (!item) return <div>找不到該則公告。</div>;
  return (
    <article className="prose max-w-none">
      <h1>{item.title}</h1>
      <p className="text-sm text-neutral-500">{item.published_at} - {item.category}</p>
      {item.summary ? <p>{item.summary}</p> : null}
      {item.attachments?.length ? (
        <div className="mt-4">
          <h3>附件</h3>
          <ul>
            {item.attachments.map((a: any) => (
              <li key={a.url}>
                <a className="underline" href={a.url}>{a.name}</a>
                {a.version ? <span className="ml-2 text-xs text-neutral-500">{a.version}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="mt-6"><Link href="/news/" className="underline">← 回公告列表</Link></p>
    </article>
  );
}
