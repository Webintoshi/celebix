import { blogPosts } from "../[locale]/blog/posts";

export const dynamic = 'force-static';

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
];

const portfolioItems = [
  { slug: "derycraft", lastModified: "2024-12-20" },
  { slug: "okur-otomasyon", lastModified: "2024-12-18" },
  { slug: "dolka", lastModified: "2024-12-15" },
  { slug: "guzide", lastModified: "2024-12-10" },
  { slug: "flowpart", lastModified: "2024-12-05" },
  { slug: "lilyum-flora", lastModified: "2024-12-01" },
];

export async function GET() {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticUrls = pages.map((page) => `
    <url>
      <loc>${BASE_URL}${page.path}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('');

  // Blog posts
  const blogUrls = blogPosts.flatMap((post) => [
    `
    <url>
      <loc>${BASE_URL}/tr/blog/${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${post.featured ? 0.7 : 0.6}</priority>
    </url>
    `,
    `
    <url>
      <loc>${BASE_URL}/en/blog/${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${post.featured ? 0.7 : 0.6}</priority>
    </url>
    `
  ]).join('');

  // Portfolio items
  const portfolioUrls = portfolioItems.flatMap((item) => [
    `
    <url>
      <loc>${BASE_URL}/tr/portfoy/${item.slug}</loc>
      <lastmod>${new Date(item.lastModified).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
    `,
    `
    <url>
      <loc>${BASE_URL}/en/portfoy/${item.slug}</loc>
      <lastmod>${new Date(item.lastModified).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
    `
  ]).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${blogUrls}
  ${portfolioUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
