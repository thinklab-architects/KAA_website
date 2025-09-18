import { cookies } from 'next/headers';

export function isDev() {
  return process.env.NODE_ENV !== 'production';
}

export function isAuthed() {
  const c = cookies();
  const token = c.get('kaa_admin');
  return Boolean(token?.value === '1');
}

export function requireAuthOrThrow() {
  if (!isDev()) throw new Error('Admin API disabled in production');
  if (!isAuthed()) throw new Error('Unauthorized');
}

