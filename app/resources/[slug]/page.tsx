import topics from "@/data/resources.json";
import Link from "next/link";

export function generateStaticParams() {
  return (topics as any[]).map((t:any)=>({ slug: t.slug }));
}

export default function ResourceTopic({ params }: { params: { slug: string }}) {
  const t = (topics as any[]).find((x:any)=> x.slug === params.slug);
  if (!t) return <div className="prose">找不到主題。<Link href="/resources/" className="underline ml-2">回專業資源</Link></div>;
  return (
    <article className="prose max-w-none">
      <h1>{t.title}</h1>
      <p className="text-neutral-600">{t.description}</p>
      <p>主題頁內容（可連結法規、Q&A、下載與範本）。</p>
      <p className="mt-6"><Link href="/resources/" className="underline">← 回專業資源</Link></p>
    </article>
  );
}

