import { NextRequest } from 'next/server';
import { requireAuthOrThrow } from '@/lib/admin';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  if (process.env.NODE_ENV === 'production') return new Response('[]', { status: 200 });
  const p = path.join(process.cwd(), 'data', 'news.json');
  const raw = await fs.readFile(p, 'utf8');
  return new Response(raw, { headers: { 'Content-Type': 'application/json' } });
}

export async function POST(req: NextRequest) {
  try {
    if (process.env.NODE_ENV === 'production') {
      return new Response('Disabled in production', { status: 403 });
    }
    requireAuthOrThrow();
    const body = await req.json();
    if (!body?.title || !body?.category) return new Response('Bad Request', { status: 400 });
    const p = path.join(process.cwd(), 'data', 'news.json');
    const raw = await fs.readFile(p, 'utf8');
    const arr = JSON.parse(raw);
    const id = body.id || `${new Date().toISOString().slice(0, 10)}-${String(arr.length + 1).padStart(3, '0')}`;
    const item = {
      id,
      title: String(body.title),
      category: String(body.category),
      published_at: body.published_at || new Date().toISOString().slice(0, 10),
      summary: body.summary || '',
      attachments: [],
    };
    arr.unshift(item);
    await fs.writeFile(p, JSON.stringify(arr, null, 2), 'utf8');
    return Response.json({ ok: true, item });
  } catch (e: any) {
    return new Response(e?.message || 'Error', { status: 500 });
  }
}

