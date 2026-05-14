import type { MetadataRoute } from "next";
import { blogPosts } from "./[locale]/blog/posts";
import { absoluteSiteUrl } from "@/lib/site";

const STATIC_ROUTE_DEFINITIONS = [
  { pathname: "/tr", priority: 1.0, changeFrequency: "daily" as const },
  { pathname: "/en", priority: 1.0, changeFrequency: "daily" as const },
  { pathname: "/tr/e-ticaret-paketleri", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/en/e-ticaret-paketleri", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/tr/celebix-saas-platformu", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/en/celebix-saas-platformu", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/tr/kurumsal-yazilim", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/en/kurumsal-yazilim", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/tr/dijital-pazarlama", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/en/dijital-pazarlama", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/tr/sosyal-medya", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/en/sosyal-medya", priority: 0.9, changeFrequency: "weekly" as const },
  { pathname: "/tr/hakkimizda", priority: 0.8, changeFrequency: "monthly" as const },
  { pathname: "/en/hakkimizda", priority: 0.8, changeFrequency: "monthly" as const },
  { pathname: "/tr/iletisim", priority: 0.8, changeFrequency: "monthly" as const },
  { pathname: "/en/iletisim", priority: 0.8, changeFrequency: "monthly" as const },
  { pathname: "/tr/portfoy", priority: 0.8, changeFrequency: "weekly" as const },
  { pathname: "/en/portfoy", priority: 0.8, changeFrequency: "weekly" as const },
  { pathname: "/tr/blog", priority: 0.7, changeFrequency: "daily" as const },
  { pathname: "/en/blog", priority: 0.7, changeFrequency: "daily" as const },
  { pathname: "/tr/gizlilik", priority: 0.3, changeFrequency: "monthly" as const },
  { pathname: "/en/gizlilik", priority: 0.3, changeFrequency: "monthly" as const },
  { pathname: "/tr/kullanim-kosullari", priority: 0.3, changeFrequency: "monthly" as const },
  { pathname: "/en/kullanim-kosullari", priority: 0.3, changeFrequency: "monthly" as const },
  { pathname: "/tr/ordu-yazilim-sirketi", priority: 0.8, changeFrequency: "weekly" as const },
  { pathname: "/en/ordu-yazilim-sirketi", priority: 0.8, changeFrequency: "weekly" as const },
  { pathname: "/tr/video-pazarlama-2026", priority: 0.7, changeFrequency: "monthly" as const },
  { pathname: "/en/video-pazarlama-2026", priority: 0.7, changeFrequency: "monthly" as const },
  { pathname: "/tr/eposta-pazarlama-kobi", priority: 0.6, changeFrequency: "monthly" as const },
  { pathname: "/en/eposta-pazarlama-kobi", priority: 0.6, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of STATIC_ROUTE_DEFINITIONS) {
    const url = absoluteSiteUrl(route.pathname);

    if (seen.has(url)) {
      continue;
    }

    seen.add(url);
    entries.push({
      url,
      lastModified: buildDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  for (const post of blogPosts) {
    for (const locale of ["tr", "en"] as const) {
      const url = absoluteSiteUrl(`/${locale}/blog/${post.slug}`);

      if (seen.has(url)) {
        continue;
      }

      seen.add(url);
      entries.push({
        url,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
