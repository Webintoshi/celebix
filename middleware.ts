import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { SITE_URL, getHostName, isRedirectHost } from "@/lib/site";

const STATIC_PAGE_REDIRECTS: Record<string, string> = {
  privacy: "gizlilik",
  terms: "kullanim-kosullari",
  portfolio: "portfoy",
  "ordu-software-company": "ordu-yazilim-sirketi",
};

const STATIC_LOCALIZED_SEGMENTS = new Set([
  "blog",
  "celebix-saas-platformu",
  "dijital-pazarlama",
  "e-ticaret-paketleri",
  "eposta-pazarlama-kobi",
  "gizlilik",
  "hakkimizda",
  "iletisim",
  "kullanim-kosullari",
  "teslimat-ve-iade",
  "kurumsal-yazilim",
  "ordu-yazilim-sirketi",
  "portfoy",
  "sosyal-medya",
  "video-pazarlama-2026",
]);

const BLOG_PAGE_REDIRECTS: Record<string, string> = {
  "e-ticarette-basarili-olmanin-yollari": "e-ticaret-rehberi-2026",
  "eposta-pazarlama-kobi-2026": "eposta-pazarlama-kobi",
  "google-ads-2024-rehberi": "google-ads-butce-optimizasyonu-2026",
  "seo-nasil-yapilir-2025": "seo-trendleri-2025",
  "seo-optimizasyonu-rehberi": "seo-trendleri-2025",
  "sosyal-medya-trendleri": "sosyal-medya-trendleri-2026",
};

function buildPublicRedirectUrl(request: NextRequest, pathname: string) {
  const destination = new URL(pathname, SITE_URL);
  destination.search = request.nextUrl.search;
  return destination;
}

function getLegacyRouteRedirect(pathname: string) {
  const [firstSegment, secondSegment, thirdSegment, ...rest] = pathname.split("/").filter(Boolean);
  if (!firstSegment) return `/${defaultLocale}`;

  if (!isLocale(firstSegment)) {
    if (!secondSegment && STATIC_LOCALIZED_SEGMENTS.has(firstSegment)) {
      return `/${defaultLocale}/${firstSegment}`;
    }
    return null;
  }

  if (!thirdSegment && Object.hasOwn(STATIC_PAGE_REDIRECTS, secondSegment)) {
    return `/${firstSegment}/${STATIC_PAGE_REDIRECTS[secondSegment]}`;
  }

  if (secondSegment === "blog" && rest.length === 0 && Object.hasOwn(BLOG_PAGE_REDIRECTS, thirdSegment)) {
    return `/${firstSegment}/blog/${BLOG_PAGE_REDIRECTS[thirdSegment]}`;
  }

  return null;
}

export function middleware(request: NextRequest) {
  const host = getHostName(request.headers.get("host"));
  const pathname = request.nextUrl.pathname;
  let targetPathname = pathname;
  let shouldRedirect = false;

  if (isRedirectHost(host)) {
    shouldRedirect = true;
  }

  if (pathname === "/tr/") {
    targetPathname = "/tr";
    shouldRedirect = true;
  }
  if (pathname === "/en/") {
    targetPathname = "/en";
    shouldRedirect = true;
  }

  const legacyRouteRedirect = getLegacyRouteRedirect(pathname);
  if (legacyRouteRedirect) {
    targetPathname = legacyRouteRedirect;
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(buildPublicRedirectUrl(request, targetPathname), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map)$).*)",
  ],
};
