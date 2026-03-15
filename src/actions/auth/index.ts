'use server';

import { cookies } from 'next/headers';

// Login action
export async function loginAction(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  const res = await fetch(`${process.env.API_BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  const cookieStore = await cookies();
  cookieStore.set('token', data.token, {
    httpOnly: true,
    secure: true,
    path: '/',
  });
}

// Logout action
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('token');
}
