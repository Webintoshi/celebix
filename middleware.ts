import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale, type Locale } from "@/lib/i18n";
import { SITE_URL, getHostName, isRedirectHost } from "@/lib/site";

const LEGACY_PATH_REDIRECTS: Record<string, string> = {
  "/tr/blog/google-ads-2024-rehberi": "/tr/blog/google-ads-butce-optimizasyonu-2026",
};

const NON_LOCALIZED_ALLOWED_PREFIXES = new Set(["checkout"]);

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

const BLOG_POST_SLUGS = new Set([
  "ai-overviews-seo-rehberi-2026",
  "call-tracking-rehberi-2026",
  "consent-mode-v2-rehberi-2026",
  "core-web-vitals-optimizasyonu-rehberi-2026",
  "data-layer-rehberi-2026",
  "demand-gen-kampanyalari-2026",
  "crm-programi-nedir-kobi-secim-rehberi",
  "dijital-ajans-secimi",
  "dijital-pazarlama-stratejileri-2026",
  "e-ticaret-kargo-lojistik-yonetimi",
  "e-ticaret-odeme-sistemleri-rehberi",
  "e-ticaret-paketleri-karsilastirma",
  "e-ticaret-rehberi-2026",
  "e-ticaret-seo-urun-sayfalari-optimizasyonu",
  "e-ticaret-sitesi-kurarken-seo-ve-donusum-hatalari",
  "e-ticaret-urun-fotografciligi",
  "eposta-pazarlama-kobi",
  "erp-yazilimi-nedir",
  "faq-structured-data-rehberi-2026",
  "ga4-cross-domain-olcum-rehberi-2026",
  "ga4-custom-dimension-kurulumu-rehberi-2026",
  "ga4-debugview-rehberi-2026",
  "ga4-event-parameters-rehberi-2026",
  "ga4-key-events-rehberi-2026",
  "ga4-ozel-etkinlik-kurulumu-rehberi-2026",
  "ga4-ve-gtm-ile-donusum-takibi-rehberi-2026",
  "google-ads-auction-insights-rehberi-2026",
  "google-ads-audience-builder-rehberi-2026",
  "google-ads-audience-insights-rehberi-2026",
  "google-ads-butce-optimizasyonu-2026",
  "google-ads-customer-match-rehberi-2026",
  "google-ads-customer-lifecycle-goals-rehberi-2026",
  "google-ads-customer-retention-hedefi-rehberi-2026",
  "google-ads-conversion-value-rules-rehberi-2026",
  "google-ads-data-exclusions-rehberi-2026",
  "google-ads-value-based-bidding-rehberi-2026",
  "google-ads-data-manager-rehberi-2026",
  "google-ads-ad-strength-rehberi-2026",
  "google-ads-enhanced-conversions-rehberi-2026",
  "google-ads-exact-match-rehberi-2026",
  "google-ads-gecersiz-tiklamalar-ve-click-bot-koruma",
  "google-ads-hesap-denetimi-kontrol-listesi-2026",
  "google-ads-business-name-assets-rehberi-2026",
  "google-ads-call-assets-rehberi-2026",
  "google-ads-custom-segments-rehberi-2026",
  "google-ads-image-assets-rehberi-2026",
  "google-ads-keyword-planner-rehberi-2026",
  "google-ads-lead-form-assets-rehberi-2026",
  "google-ads-offline-donusum-ice-aktarma-rehberi-2026",
  "google-ads-optimized-targeting-rehberi-2026",
  "google-ads-target-cpa-rehberi-2026",
  "google-ads-ad-customizers-rehberi-2026",
  "google-ads-broad-match-rehberi-2026",
  "google-ads-promotion-assets-rehberi-2026",
  "google-ads-arama-terimleri-raporu-2026",
  "google-ads-brand-exclusions-rehberi-2026",
  "google-ads-callout-assets-rehberi-2026",
  "google-ads-conversion-linker-rehberi-2026",
  "google-ads-keyword-insertion-rehberi-2026",
  "google-ads-kalite-puani-rehberi-2026",
  "google-ads-message-assets-rehberi-2026",
  "google-ads-negatif-anahtar-kelime-rehberi-2026",
  "google-ads-location-assets-rehberi-2026",
  "google-ads-portfoy-teklif-stratejileri-rehberi-2026",
  "google-ads-seasonality-adjustments-rehberi-2026",
  "google-ads-phrase-match-rehberi-2026",
  "google-ads-price-assets-rehberi-2026",
  "google-ads-responsive-display-ads-rehberi-2026",
  "google-ads-responsive-search-ads-rehberi-2026",
  "google-ads-sitelink-assets-rehberi-2026",
  "google-ads-structured-snippet-assets-rehberi-2026",
  "google-ads-your-data-insights-rehberi-2026",
  "google-ads-customer-acquisition-hedefi-rehberi-2026",
  "google-ads-para-tuketmeden-donusum",
  "google-haritalar-yorum-yonetimi-2026",
  "google-business-profile-postlari-rehberi-2026",
  "google-business-profile-randevu-linkleri-rehberi-2026",
  "google-business-profile-urunler-ve-hizmetler-rehberi-2026",
  "google-isletme-profili-fotograf-optimizasyonu-2026",
  "google-isletme-profili-askiya-alindiysa-ne-yapmali",
  "google-merchant-center-feed-optimizasyonu-2026",
  "google-merchant-center-automated-discounts-rehberi-2026",
  "google-merchant-center-checkout-link-rehberi-2026",
  "google-merchant-center-feed-label-rehberi-2026",
  "google-merchant-center-iade-politikasi-rehberi-2026",
  "google-merchant-center-kargo-ayarlari-rehberi-2026",
  "google-merchant-center-local-inventory-ads-rehberi-2026",
  "google-merchant-center-loyalty-program-rehberi-2026",
  "google-merchant-center-next-rehberi-2026",
  "google-merchant-center-promotions-rehberi-2026",
  "google-merchant-center-free-listings-rehberi-2026",
  "google-merchant-center-feed-rules-rehberi-2026",
  "google-merchant-center-supplemental-feed-rehberi-2026",
  "google-merchant-center-product-detail-rehberi-2026",
  "google-merchant-center-gtin-rehberi-2026",
  "google-merchant-center-product-ratings-rehberi-2026",
  "google-merchant-center-product-studio-rehberi-2026",
  "google-merchant-center-sale-price-rehberi-2026",
  "google-merchant-center-urun-hatalari-rehberi-2026",
  "google-search-console-performans-raporu-rehberi-2026",
  "google-tag-assistant-rehberi-2026",
  "google-tag-manager-kurulum-rehberi-2026",
  "google-trends-ile-icerik-planlama-2026",
  "instagram-algoritmasi-2025",
  "instagram-reels-reklam-verme-rehberi-2026",
  "instagram-reklam-ucretleri-2026",
  "kobi-dijital-donusum-rehberi",
  "kobi-dijital-donusum-rehberi-2026",
  "komisyonsuz-e-ticaret-2025",
  "kurumsal-web-sitesi-neden-gerekli",
  "kurumsal-web-sitesi-tasarim-seo-rehberi-2026",
  "landing-page-optimizasyonu-rehberi-2026",
  "linkedin-b2b-satis-stratejileri",
  "llms-txt-rehberi-2026",
  "local-seo-rehberi-2026",
  "looker-studio-reklam-raporlama-panelleri-2026",
  "meta-ads-library-ile-rakip-reklam-analizi-2026",
  "meta-conversion-api-kurulumu-2026",
  "meta-lead-form-reklamlari-optimizasyonu-2026",
  "microsoft-clarity-ile-landing-page-analizi-2026",
  "mobil-uygulama-vs-web-uygulama",
  "n8n-ile-isletme-otomasyonu-rehberi-2026",
  "ordu-google-ads-danismanligi",
  "ordu-google-isletme-profili-optimizasyonu",
  "ordu-yazilim-sirketi",
  "ordu-yazilim-sirketi-ile-calismanin-avantajlari",
  "ozel-yazilim-gelistirme-2025-rehberi",
  "pagespeed-insights-rehberi-2026",
  "performance-max-asset-group-rehberi-2026",
  "performance-max-audience-signals-rehberi-2026",
  "performance-max-final-url-expansion-rehberi-2026",
  "performance-max-kampanyalari-2026",
  "performance-max-search-themes-rehberi-2026",
  "randevu-sistemi-yazilimi-secim-rehberi-2026",
  "remarketing-kampanyasi-kurulum-rehberi-2026",
  "search-console-dizine-eklenmedi-sorunu-2026",
  "search-console-crawl-stats-rehberi-2026",
  "search-console-discussion-forum-rich-results-rehberi-2026",
  "search-console-unparsable-structured-data-raporu-rehberi-2026",
  "search-console-achievements-rehberi-2026",
  "search-console-breadcrumb-rich-results-rehberi-2026",
  "search-console-discover-performans-rehberi-2026",
  "search-console-https-raporu-rehberi-2026",
  "search-console-insights-raporu-rehberi-2026",
  "search-console-links-raporu-rehberi-2026",
  "search-console-manuel-islemler-raporu-rehberi-2026",
  "search-console-page-indexing-raporu-rehberi-2026",
  "search-console-profile-page-rich-results-rehberi-2026",
  "search-console-security-issues-raporu-rehberi-2026",
  "search-console-search-appearance-raporu-rehberi-2026",
  "search-console-merchant-listing-rich-results-rehberi-2026",
  "search-console-merchant-opportunities-raporu-rehberi-2026",
  "search-console-product-snippet-rich-results-rehberi-2026",
  "search-console-review-snippet-rich-results-rehberi-2026",
  "search-console-shopping-raporlari-ve-araclari-rehberi-2026",
  "search-console-video-indexleme-raporu-rehberi-2026",
  "schema-markup-rehberi-2026",
  "search-console-removals-tool-rehberi-2026",
  "search-console-sitemaps-raporu-rehberi-2026",
  "rich-results-test-rehberi-2026",
  "seo-trendleri-2025",
  "search-console-url-inspection-rehberi-2026",
  "site-haritasi-olusturma-ve-search-consolea-gonderme-2026",
  "sosyal-medya-trendleri-2026",
  "tik-profil-nedir",
  "tiktok-reklam-verme-rehberi-2026",
  "trendyol-vs-kendi-sitem",
  "utm-parametreleri-ve-kampanya-izleme-rehberi-2026",
  "video-pazarlama-2026",
  "web-sitesi-chatbotu-kurulum-rehberi-2026",
  "whatsapp-business-api-fiyatlandirma-2026",
  "whatsapp-business-api-otomasyon-rehberi-2026",
  "whatsapp-business-platformu-cloud-api-secimi",
  "whatsapp-katalog-ile-satis-artirma-2026",
  "yerel-seo-ordu-rehberi",
  "youtube-reklam-verme-rehberi-2026",
  "youtube-shorts-reklam-verme-rehberi-2026",
]);

function buildPublicRedirectUrl(request: NextRequest, pathname: string) {
  const destination = new URL(pathname, SITE_URL);
  destination.search = request.nextUrl.search;
  return destination;
}

function hasPublicFileExtension(pathname: string) {
  const lastSegment = pathname.split("/").filter(Boolean).at(-1);
  return Boolean(lastSegment && lastSegment.includes("."));
}

function getInvalidRouteRedirect(pathname: string) {
  if (hasPublicFileExtension(pathname)) {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const [firstSegment, secondSegment, thirdSegment, ...remainingSegments] = segments;

  if (!isLocale(firstSegment)) {
    return NON_LOCALIZED_ALLOWED_PREFIXES.has(firstSegment) ? null : "/tr";
  }

  const locale = firstSegment as Locale;

  if (!secondSegment) {
    return null;
  }

  const staticRedirectTarget = STATIC_PAGE_REDIRECTS[secondSegment];
  if (staticRedirectTarget) {
    return remainingSegments.length === 0
      ? `/${locale}/${staticRedirectTarget}`
      : `/${locale}`;
  }

  if (secondSegment === "blog") {
    if (!thirdSegment) {
      return null;
    }

    if (remainingSegments.length > 0) {
      return `/${locale}`;
    }

    const blogRedirectTarget = BLOG_PAGE_REDIRECTS[thirdSegment];
    if (blogRedirectTarget) {
      return `/${locale}/blog/${blogRedirectTarget}`;
    }

    return BLOG_POST_SLUGS.has(thirdSegment) ? null : `/${locale}`;
  }

  if (secondSegment === "portfoy") {
    if (!thirdSegment) {
      return null;
    }

    return `/${locale}`;
  }

  if (remainingSegments.length > 0) {
    return `/${locale}`;
  }

  return STATIC_LOCALIZED_SEGMENTS.has(secondSegment) ? null : `/${locale}`;
}

export function middleware(request: NextRequest) {
  const host = getHostName(request.headers.get("host"));
  const pathname = request.nextUrl.pathname;
  let targetPathname = pathname;
  let shouldRedirect = false;

  const legacyRedirectTarget = LEGACY_PATH_REDIRECTS[pathname];
  if (legacyRedirectTarget) {
    targetPathname = legacyRedirectTarget;
    shouldRedirect = true;
  }

  if (isRedirectHost(host)) {
    shouldRedirect = true;
  }

  if (pathname === "/") {
    targetPathname = "/tr";
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

  const invalidRouteRedirect = getInvalidRouteRedirect(pathname);
  if (invalidRouteRedirect) {
    targetPathname = invalidRouteRedirect;
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
