"use client";
import Image from "next/image";
import Link from "next/link";

export function MediaCard({
  href,
  src,
  alt,
  title,
  meta,
}: {
  href: string;
  src: string;
  alt: string;
  title: string;
  meta?: string;
}) {
  return (
    <Link href={href} className="group border rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
      <div className="relative aspect-[16/9] bg-neutral-100">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="font-medium group-hover:underline line-clamp-2">{title}</div>
        {meta ? <div className="text-xs text-neutral-500 mt-1">{meta}</div> : null}
      </div>
    </Link>
  );
}

