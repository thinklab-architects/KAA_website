import topics from "@/data/resources.json";
import Link from "next/link";
import type { ResourceTopic } from "@/types/content";

const dataset = topics as ResourceTopic[];

export function generateStaticParams() {
  return dataset.map((topic) => ({ slug: topic.slug }));
}

export default function ResourceTopicPage({ params }: { params: { slug: string } }) {
  const topic = dataset.find((item) => item.slug === params.slug);
  if (!topic) {
    return <div className="prose">找不到主題。<Link href="/resources/" className="underline ml-2">回專業資源</Link></div>;
  }
  return (
    <article className="prose max-w-none">
      <h1>{topic.title}</h1>
      <p className="text-neutral-600">{topic.description}</p>
      <p>主題頁內容（可連結法規、Q&A、下載與範本）。</p>
      <p className="mt-6"><Link href="/resources/" className="underline">← 回專業資源</Link></p>
    </article>
  );
}
