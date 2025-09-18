"use client";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const links = [
    { href: "/news/", label: "公告中心" },
    { href: "/events/", label: "活動與學習" },
    { href: "/courses/", label: "線上課程" },
    { href: "/awards/", label: "設計獎" },
    { href: "/resources/", label: "專業資源" },
    { href: "/membership/", label: "會員與治理" },
    { href: "/services/", label: "服務" },
    { href: "/archive/", label: "封存庫" },
    { href: "/about/", label: "關於" },
  ];

  return (
    <header className="bg-white">
      <div className="border-b">
        <div className="container py-2 text-xs hidden md:flex items-center justify-end gap-5">
          <Link href="#">MY ACCOUNT</Link>
          <Link href="/membership/">BECOME A MEMBER</Link>
          <Link href="/news/">SEARCH</Link>
          <Link href="#">MENU</Link>
        </div>
      </div>

      <nav className="container py-4 flex items-center justify-between gap-6">
        <Link href="/" className="font-semibold">KAA</Link>
        <button aria-label="Menu" className="md:hidden px-3 py-2 rounded-lg border" onClick={toggle}>
          選單
        </button>
        <div className="hidden md:flex gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>
      </nav>

      {/* Mobile drawer */}
      {open ? (
        <div className="md:hidden border-t">
          <div className="container py-3 grid gap-2 text-sm">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={close} className="py-2">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

