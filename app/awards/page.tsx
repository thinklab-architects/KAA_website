import awards from "@/data/awards.json";
import Link from "next/link";

export const metadata = { title: "設計獎 - KAA" };

export default function AwardsIndex() {
  const cycles = awards as any[];
  const latest = cycles[0];
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">設計獎</h1>
      <div className="card p-6">
        <div className="font-medium">{latest.year} {latest.name}</div>
        <div className="text-sm text-neutral-600">類別：{latest.categories?.join("、")}</div>
        <h3 className="mt-4 font-semibold">得獎名單</h3>
        <ul className="list-disc ml-6">
          {latest.winners?.map((w: any, i: number) => (
            <li key={i}>{w.title} — {w.team}（{w.category}）</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold">歷屆</h2>
        <ul className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {cycles.map((c:any) => (
            <li key={c.year} className="border rounded-xl p-3 flex items-center justify-between">
              <div>{c.year} {c.name}</div>
              <Link className="text-sm underline" href={`/awards/${c.year}/`}>查看</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

