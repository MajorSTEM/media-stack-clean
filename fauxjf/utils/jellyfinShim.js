export function toJellyfinItems(results) {
  return {
    Items: results.map(r => ({Name: r.Title || r.name || 'Unknown'}))
  };
}
