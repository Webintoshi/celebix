export const SITE_URL = "https://celebix.net";
export const PRIMARY_HOST = "celebix.net";
export const REDIRECT_HOSTS = ["www.celebix.net"] as const;

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

export function isRedirectHost(value?: string | null) {
  const hostname = getHostName(value);

  return REDIRECT_HOSTS.includes(hostname as (typeof REDIRECT_HOSTS)[number]);
}

export function isRecognizedSiteHost(value?: string | null) {
  const hostname = getHostName(value);

  return hostname === PRIMARY_HOST || isRedirectHost(hostname);
}

export function normalizeSiteUrl(url: string) {
  const normalizedUrl = new URL(url);

  if (isRecognizedSiteHost(normalizedUrl.host)) {
    normalizedUrl.protocol = "https:";
    normalizedUrl.hostname = PRIMARY_HOST;
    normalizedUrl.port = "";
  }

  return normalizedUrl.toString();
}
