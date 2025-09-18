import Link from 'next/link';
import { cookies } from 'next/headers';

export const metadata = { title: 'KAA 後台（本機測試）' };

export default function AdminHome() {
  const authed = cookies().get('kaa_admin')?.value === '1';
  if (!authed) {
    return (
      <div className="container py-10">
        <h1 className="text-2xl font-semibold">後台</h1>
        <p className="mt-2">請先<Link href="/admin/login" className="underline ml-1">登入</Link>。</p>
        <p className="text-sm text-neutral-600 mt-6">提示：此後台僅供本機測試。在正式部署（GitHub Pages）時，API 已自動關閉。</p>
      </div>
    );
  }
  return (
    <div className="container py-10 grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">後台首頁</h1>
        <form action="/api/admin/logout" method="post"><button className="k-cta-secondary">登出</button></form>
      </div>
      <section className="card p-6 grid gap-3">
        <h2 className="font-medium">新增公告</h2>
        <form className="grid gap-2" action="/api/admin/news" method="post" onSubmit={(e)=>{
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const data = Object.fromEntries(new FormData(form).entries());
          fetch('/api/admin/news', { method: 'POST', body: JSON.stringify(data) }).then(r=>r.ok?location.reload():alert('失敗'));
        }}>
          <input name="title" placeholder="標題" className="h-10 px-3 rounded-lg border"/>
          <div className="flex gap-2">
            <input name="category" placeholder="類別（公會公告/法規/…）" className="h-10 px-3 rounded-lg border flex-1"/>
            <input name="published_at" placeholder="發佈日（YYYY-MM-DD，可留空）" className="h-10 px-3 rounded-lg border w-56"/>
          </div>
          <textarea name="summary" placeholder="摘要（可留空）" className="h-24 px-3 py-2 rounded-lg border"/>
          <button className="k-cta-primary w-fit">新增</button>
        </form>
        <p className="text-xs text-neutral-500">提交後會立即寫入 data/news.json（僅限本機 dev 環境）。</p>
      </section>
    </div>
  );
}

