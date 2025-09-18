import topics from "@/data/resources.json";
import Link from "next/link";
import type { ResourceTopic } from "@/types/content";

export const metadata = { title: "專業資源 - KAA" };

const dataset = topics as ResourceTopic[];

export default function Resources() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">專業資源</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dataset.map((topic) => (
          <Link key={topic.slug} href={`/resources/${topic.slug}/`} className="border rounded-xl p-4 hover:shadow-sm">
            <div className="font-medium">{topic.title}</div>
            <div className="text-sm text-neutral-600">{topic.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
