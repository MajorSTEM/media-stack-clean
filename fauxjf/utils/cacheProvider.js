import fetch from 'node-fetch';

const base = process.env.CACHE_BASE_URL;
const token = process.env.CACHE_API_TOKEN;

export async function get(key) {
  if (!base || !token) return null;
  const res = await fetch(`${base}/cache/${key}`, {
    headers: {Authorization: `Bearer ${token}`}
  });
  if (!res.ok) return null;
  return res.json();
}

export async function set(key, value) {
  if (!base || !token) return;
  await fetch(`${base}/cache/${key}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(value)
  });
}
