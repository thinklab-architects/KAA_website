import { NextResponse } from 'next/server';

export async function POST() {
  if (process.env.NODE_ENV === 'production') {
    return new Response('Disabled in production', { status: 403 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set('kaa_admin', '', { expires: new Date(0) });
  return res;
}
