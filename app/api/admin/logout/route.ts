import { cookies } from 'next/headers';

export async function POST() {
  if (process.env.NODE_ENV === 'production') {
    return new Response('Disabled in production', { status: 403 });
  }
  cookies().delete('kaa_admin');
  return Response.json({ ok: true });
}

