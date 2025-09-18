import courses from "@/data/courses.json";
import Link from "next/link";
import type { Course, CourseModule } from "@/types/content";

const dataset = courses as Course[];

export function generateStaticParams() {
  return dataset.map((course) => ({ id: course.id }));
}

export const metadata = { title: "課程 - KAAU" };

export default function CourseDetail({ params }: { params: { id: string } }) {
  const course = dataset.find((item) => item.id === params.id);
  if (!course) {
    return <div className="prose">找不到課程。<Link href="/courses/" className="underline ml-2">回課程</Link></div>;
  }
  return (
    <article className="prose max-w-none">
      <h1>{course.title}</h1>
      <p className="text-sm text-neutral-500">{course.format} ・ {course.credits?.hours} 小時 {course.credits?.type}</p>
      <h3>單元</h3>
      <ul>
        {(course.modules ?? []).map((module: CourseModule, index: number) => (
          <li key={`${module.title}-${index}`}>{module.title}（{module.duration}）</li>
        ))}
      </ul>
      <p className="mt-6"><Link href="/courses/" className="underline">← 回課程</Link></p>
    </article>
  );
}
