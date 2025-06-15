export function convertUTM(x, y, z) {
  const lat = 1.5 + y * 0.00001;
  const lon = 102.0 + x * 0.00001;
  return { lat, lon, height: z };
}