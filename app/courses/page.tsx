import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/types/content";

export const metadata = { title: "線上課程 - KAA" };

const dataset = courses as Course[];

export default function CoursesIndex() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">線上課程 KAAU</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dataset.map((course, index) => (
          <div key={course.id} className="border rounded-xl p-4">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-neutral-100">
              <Image src={`/images/course-${(index % 3) + 1}.svg`} alt="課程示意" fill className="object-cover" />
            </div>
            <div className="font-medium">
              <Link className="hover:underline" href={`/courses/${course.id}/`}>{course.title}</Link>
            </div>
            <div className="text-xs text-neutral-500">{course.format} ・ {course.credits?.hours} 小時 {course.credits?.type}</div>
            <Link href={`/courses/${course.id}/`} className="inline-block mt-3 px-3 py-1 text-sm rounded-lg bg-black text-white">開始修課</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
