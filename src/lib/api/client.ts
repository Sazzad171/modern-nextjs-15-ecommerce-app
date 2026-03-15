import { cookies } from 'next/headers';

const API_BASE = process.env.API_BASE_URL;

type FetchOptions = RequestInit & {
  params?: Record<string, string | number | undefined>;
};

export async function apiFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { params, ...fetchOptions } = options;

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const query = params
    ? `?${new URLSearchParams(Object.entries(params).filter(([_, v]) => v !== undefined) as any)}`
    : '';

  const res = await fetch(`${API_BASE}${endpoint}${query}`, {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...fetchOptions.headers,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('API Error');
  }

  return res.json();
}
