export function createOrderProtocol(establishmentName: string, date = new Date()) {
  const seed = `${establishmentName}:${date.toISOString()}`;
  let hash = 2166136261;

  for (const char of seed) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }

  const shortHash = (hash >>> 0).toString(36).toUpperCase().padStart(8, "0").slice(0, 8);
  return `JSUBS-${shortHash}`;
}
