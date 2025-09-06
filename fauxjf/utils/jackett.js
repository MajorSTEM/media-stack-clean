import fetch from 'node-fetch';
import qs from 'qs';

export async function search(query) {
  const base = process.env.JACKETT_URL;
  const key = process.env.JACKETT_API_KEY;
  if (!base || !key) throw new Error('Jackett configuration missing');
  const url = `${base}/api/v2.0/search?${qs.stringify({apikey: key, Query: query})}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Jackett request failed');
  return res.text();
}
