
import data from "@/data/mock.json";

export const metadata = { title: "設計獎 - KAA" };

export default function AwardsIndex() {
  const current = data.awards[0];
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">設計獎</h1>
      <div className="card p-6">
        <div className="font-medium">{current.year} {current.name}</div>
        <div className="text-sm text-neutral-600">類別：{current.categories.join("、")}</div>
        <h3 className="mt-4 font-semibold">得獎作品</h3>
        <ul className="list-disc ml-6">
          {current.winners.map((w: any, i: number) => (
            <li key={i}>{w.title} — {w.team}（{w.category}）</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
