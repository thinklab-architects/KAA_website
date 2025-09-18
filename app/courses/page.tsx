
import data from "@/data/mock.json";

export const metadata = { title: "線上課程 - KAA" };

export default function CoursesIndex() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">線上課程 KAAU</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.courses.map(c => (
          <div key={c.id} className="border rounded-xl p-4">
            <div className="font-medium">{c.title}</div>
            <div className="text-xs text-neutral-500">{c.format} · {c.credits.hours} 小時 {c.credits.type}</div>
            <button className="mt-3 px-3 py-1 text-sm rounded-lg bg-black text-white">開始修課</button>
          </div>
        ))}
      </div>
    </div>
  );
}
