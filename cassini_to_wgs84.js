export function convertCassini(x, y, z) {
  const lat = 2.0 + y * 0.00001;
  const lon = 101.0 + x * 0.00001;
  return { lat, lon, height: z };
}