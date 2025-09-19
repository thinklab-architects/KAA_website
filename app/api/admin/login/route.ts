import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  if (process.env.NODE_ENV === 'production') {
    return new Response('Disabled in production', { status: 403 });
  }
  const body = await request.json().catch(() => ({}));
  const pass = body?.password ?? '';
  const expected = process.env.ADMIN_PASSWORD || 'kaa-dev';
  if (pass !== expected) return new Response('Unauthorized', { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set('kaa_admin', '1', { httpOnly: true, sameSite: 'lax' });
  return res;
}
