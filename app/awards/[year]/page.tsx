import awards from "@/data/awards.json";
import Link from "next/link";
import type { AwardCycle, AwardWinner } from "@/types/content";

const dataset = awards as AwardCycle[];

export function generateStaticParams() {
  return dataset.map((cycle) => ({ year: String(cycle.year) }));
}

export default function AwardYear({ params }: { params: { year: string } }) {
  const cycle = dataset.find((item) => String(item.year) === params.year);
  if (!cycle) {
    return <div className="prose">找不到該屆資訊。<Link href="/awards/" className="underline ml-2">回設計獎</Link></div>;
  }
  return (
    <article className="prose max-w-none">
      <h1>{cycle.year} {cycle.name}</h1>
      <p className="text-neutral-600">類別：{(cycle.categories ?? []).join("、")}</p>
      <h2>得獎名單</h2>
      <ul>
        {(cycle.winners ?? []).map((winner: AwardWinner, index) => (
          <li key={`${winner.title}-${index}`}>{winner.title} — {winner.team}（{winner.category}）</li>
        ))}
      </ul>
      <p className="mt-6"><Link href="/awards/" className="underline">← 回設計獎</Link></p>
    </article>
  );
}
