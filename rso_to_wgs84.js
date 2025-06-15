export function convertRSO(x, y, z) {
  const lat = 1.0 + y * 0.00001;
  const lon = 103.0 + x * 0.00001;
  return { lat, lon, height: z };
}