import awards from "@/data/awards.json";
import Link from "next/link";

export function generateStaticParams() {
  return (awards as any[]).map((c:any)=>({ year: String(c.year) }));
}

export default function AwardYear({ params }: { params: { year: string }}) {
  const cycle = (awards as any[]).find((c:any)=> String(c.year) === params.year);
  if (!cycle) return <div className="prose">找不到該屆資訊。<Link href="/awards/" className="underline ml-2">回設計獎</Link></div>;
  return (
    <article className="prose max-w-none">
      <h1>{cycle.year} {cycle.name}</h1>
      <p className="text-neutral-600">類別：{(cycle.categories||[]).join("、")}</p>
      <h2>得獎名單</h2>
      <ul>
        {(cycle.winners||[]).map((w:any, i:number)=> (
          <li key={i}>{w.title} — {w.team}（{w.category}）</li>
        ))}
      </ul>
      <p className="mt-6"><Link href="/awards/" className="underline">← 回設計獎</Link></p>
    </article>
  );
}

