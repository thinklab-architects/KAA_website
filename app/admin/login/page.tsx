"use client";
import { useState } from 'react';

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const res = await fetch('/api/admin/login', { method: 'POST', body: JSON.stringify({ password }) });
    if (res.ok) {
      location.href = '/admin/';
    } else setMsg('密碼錯誤或後台未啟用');
  }
  return (
    <div className="container max-w-md py-10">
      <h1 className="text-2xl font-semibold mb-4">後台登入（本機測試）</h1>
      <form onSubmit={submit} className="grid gap-3">
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="密碼（預設 kaa-dev 或 .env.local 的 ADMIN_PASSWORD）" className="h-10 px-3 rounded-lg border" />
        <button className="k-cta-primary">登入</button>
        {msg ? <p className="text-sm text-red-600">{msg}</p> : null}
      </form>
    </div>
  );
}

