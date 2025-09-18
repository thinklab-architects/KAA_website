"use client";
import { ReactNode } from "react";

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`container ${className}`}>{children}</section>;
}

export function SectionHeading({
  label,
  title,
  desc,
  right,
}: {
  label?: string;
  title: ReactNode;
  desc?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {label ? <div className="section-label mb-1">{label}</div> : null}
        <h2 className="text-2xl md:text-4xl font-semibold leading-tight">{title}</h2>
        {desc ? <p className="text-neutral-600 mt-2 max-w-2xl">{desc}</p> : null}
      </div>
      {right ? <div className="mt-2 md:mt-0">{right}</div> : null}
    </div>
  );
}

