import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "高雄市建築師公會 KAA",
  description: "公告中心 / 活動與學習 / 設計獎 / 專業資源 / 會員與治理 / 關於",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-TW">
      <body>
        <SiteHeader />
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
