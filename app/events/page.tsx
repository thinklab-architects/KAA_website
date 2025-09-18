
import data from "@/data/mock.json";

export const metadata = { title: "活動與學習 - KAA" };

export default function EventsIndex() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">活動與學習</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.events.map(e => (
          <div key={e.id} className="border rounded-xl p-4">
            <div className="font-medium">{e.title}</div>
            <div className="text-xs text-neutral-500">{new Date(e.start).toLocaleString("zh-TW")} @ {e.venue}</div>
            {e.isCPD ? <div className="text-xs mt-1">學分：{e.credits.hours} 小時 {e.credits.type}</div> : null}
            <button className="mt-3 px-3 py-1 text-sm rounded-lg bg-black text-white">報名</button>
          </div>
        ))}
      </div>
    </div>
  );
}
