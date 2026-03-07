import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function generatePlaceholderSVG(
  number: number,
  width: number = 800,
  height: number = 600,
  label?: string
): string {
  const colors = ["#6366F1", "#8B5CF6", "#EC4899", "#F97316", "#2A2A2A"];
  const color = colors[number % colors.length];
  const text = label || `IMG_${String(number).padStart(3, "0")}`;

  return `data:image/svg+xml,${encodeURIComponent(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad${number}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad${number})" />
      <rect x="50%" y="50%" width="120" height="120" transform="translate(-60,-60)" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" rx="12" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-family="system-ui" font-size="24" font-weight="600">${text}</text>
    </svg>`
  )}`;
}
