import topics from "@/data/resources.json";
import Link from "next/link";

export const metadata = { title: "專業資源 - KAA" };
export default function Resources() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">專業資源</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(topics as any[]).map((t:any)=> (
          <Link key={t.slug} href={`/resources/${t.slug}/`} className="border rounded-xl p-4 hover:shadow-sm">
            <div className="font-medium">{t.title}</div>
            <div className="text-sm text-neutral-600">{t.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
