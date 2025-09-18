"use client";
import { useState, ReactNode } from "react";

export function Tabs({
  tabs,
  initial = 0,
}: {
  tabs: { id: string; label: string; content: ReactNode }[];
  initial?: number;
}) {
  const [active, setActive] = useState(initial);
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 rounded-full border text-sm ${
              active === i ? "bg-black text-white border-black" : "bg-white hover:bg-neutral-50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs[active]?.content}</div>
    </div>
  );
}

