export const SITE_URL = "https://celebix.net";
export const PRIMARY_HOST = "celebix.net";
export const OLD_HOSTS = ["celebix.co", "www.celebix.co", "www.celebix.net"] as const;

export function absoluteSiteUrl(pathname = "/") {
  const normalizedPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (normalizedPathname === "/") {
    return SITE_URL;
  }

  return new URL(normalizedPathname, `${SITE_URL}/`).toString();
}

export function getHostName(value?: string | null) {
  return value?.split(":")[0].toLowerCase() ?? "";
}

export function isOldHost(value?: string | null) {
  const hostname = getHostName(value);

  return OLD_HOSTS.includes(hostname as (typeof OLD_HOSTS)[number]);
}

export function isRecognizedSiteHost(value?: string | null) {
  const hostname = getHostName(value);

  return hostname === PRIMARY_HOST || isOldHost(hostname);
}

export function normalizeSiteUrl(url: string) {
  const normalizedUrl = new URL(url);

  if (isRecognizedSiteHost(normalizedUrl.host)) {
    normalizedUrl.protocol = "https:";
    normalizedUrl.host = PRIMARY_HOST;
  }

  return normalizedUrl.toString();
}
