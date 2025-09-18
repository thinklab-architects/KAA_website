import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "高雄市建築師公會 KAA",
  description: "公告中心 / 活動與學習 / 設計獎 / 專業資源 / 會員與治理 / 關於",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-TW">
      <body>
        <header className="border-b bg-white">
          <nav className="container py-4 flex items-center gap-6">
            <Link href="/" className="font-semibold">KAA</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/news/">公告中心</Link>
              <Link href="/events/">活動與學習</Link>
              <Link href="/courses/">線上課程</Link>
              <Link href="/awards/">設計獎</Link>
              <Link href="/resources/">專業資源</Link>
              <Link href="/membership/">會員與治理</Link>
              <Link href="/services/">服務</Link>
              <Link href="/archive/">封存庫</Link>
              <Link href="/about/">關於</Link>
            </div>
          </nav>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="mt-20 border-t">
          <div className="container py-10 text-sm text-neutral-600">
            © {new Date().getFullYear()} 高雄市建築師公會 版權所有
          </div>
        </footer>
      </body>
    </html>
  );
}

