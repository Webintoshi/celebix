import { blogPosts } from "../[locale]/blog/posts";

export const dynamic = "force-static";

const BASE_URL = "https://celebix.co";

const pages = [
  { path: "/", priority: 1.0, changeFrequency: "daily" },
  { path: "/tr", priority: 1.0, changeFrequency: "daily" },
  { path: "/en", priority: 1.0, changeFrequency: "daily" },
  { path: "/tr/e-ticaret-paketleri", priority: 0.9, changeFrequency: "weekly" },
  { path: "/en/e-ticaret-paketleri", priority: 0.9, changeFrequency: "weekly" },
  { path: "/tr/celebix-saas-platformu", priority: 0.9, changeFrequency: "weekly" },
  { path: "/en/celebix-saas-platformu", priority: 0.9, changeFrequency: "weekly" },
  { path: "/tr/kurumsal-yazilim", priority: 0.9, changeFrequency: "weekly" },
  { path: "/en/kurumsal-yazilim", priority: 0.9, changeFrequency: "weekly" },
  { path: "/tr/dijital-pazarlama", priority: 0.9, changeFrequency: "weekly" },
  { path: "/en/dijital-pazarlama", priority: 0.9, changeFrequency: "weekly" },
  { path: "/tr/sosyal-medya", priority: 0.9, changeFrequency: "weekly" },
  { path: "/en/sosyal-medya", priority: 0.9, changeFrequency: "weekly" },
  { path: "/tr/hakkimizda", priority: 0.8, changeFrequency: "monthly" },
  { path: "/en/hakkimizda", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tr/iletisim", priority: 0.8, changeFrequency: "monthly" },
  { path: "/en/iletisim", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tr/portfoy", priority: 0.8, changeFrequency: "weekly" },
  { path: "/en/portfoy", priority: 0.8, changeFrequency: "weekly" },
  { path: "/tr/blog", priority: 0.7, changeFrequency: "daily" },
  { path: "/en/blog", priority: 0.7, changeFrequency: "daily" },
  { path: "/tr/gizlilik", priority: 0.3, changeFrequency: "monthly" },
  { path: "/en/gizlilik", priority: 0.3, changeFrequency: "monthly" },
  { path: "/tr/kullanim-kosullari", priority: 0.3, changeFrequency: "monthly" },
  { path: "/en/kullanim-kosullari", priority: 0.3, changeFrequency: "monthly" },
];

export async function GET() {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticUrls = pages
    .map((page) => {
      return `<url><loc>${BASE_URL}${page.path}</loc><lastmod>${currentDate}</lastmod><changefreq>${page.changeFrequency}</changefreq><priority>${page.priority}</priority></url>`;
    })
    .join("\n");

  // Blog posts - sadece içeriği olan yazılar
  const blogUrls = blogPosts
    .filter((post) => post.content && post.content.length > 0 && post.slug)
    .flatMap((post) => {
      const lastmod = post.date ? new Date(post.date).toISOString() : currentDate;
      const priority = post.featured ? 0.7 : 0.6;
      return [
        `<url><loc>${BASE_URL}/tr/blog/${post.slug}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`,
        `<url><loc>${BASE_URL}/en/blog/${post.slug}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`,
      ];
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticUrls}
${blogUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
