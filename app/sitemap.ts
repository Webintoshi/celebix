import { MetadataRoute } from "next";
import { blogPosts } from "./[locale]/blog/posts";

export const dynamic = 'force-static';

// Base URL
const BASE_URL = "https://celebix.co";

// Page definitions with their metadata
const pages = [
  // Core Pages
  { path: "/", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/tr", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/en", priority: 1.0, changeFrequency: "daily" as const },
  
  // Products
  { path: "/tr/e-ticaret-paketleri", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/en/e-ticaret-paketleri", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/tr/celebix-saas-platformu", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/en/celebix-saas-platformu", priority: 0.9, changeFrequency: "weekly" as const },
  
  // Services
  { path: "/tr/kurumsal-yazilim", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/en/kurumsal-yazilim", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/tr/dijital-pazarlama", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/en/dijital-pazarlama", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/tr/sosyal-medya", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/en/sosyal-medya", priority: 0.9, changeFrequency: "weekly" as const },
  
  // Company Pages
  { path: "/tr/hakkimizda", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/en/hakkimizda", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tr/iletisim", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/en/iletisim", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tr/portfoy", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/en/portfoy", priority: 0.8, changeFrequency: "weekly" as const },
  
  // Blog
  { path: "/tr/blog", priority: 0.7, changeFrequency: "daily" as const },
  { path: "/en/blog", priority: 0.7, changeFrequency: "daily" as const },
];

// Portfolio/Client projects
const portfolioItems = [
  { slug: "derycraft", lastModified: "2024-12-20" },
  { slug: "okur-otomasyon", lastModified: "2024-12-18" },
  { slug: "dolka", lastModified: "2024-12-15" },
  { slug: "guzide", lastModified: "2024-12-10" },
  { slug: "flowpart", lastModified: "2024-12-05" },
  { slug: "lilyum-flora", lastModified: "2024-12-01" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  
  // Generate sitemap entries for static pages
  const staticEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        tr: `${BASE_URL}/tr${page.path.replace(/^\/tr/, "").replace(/^\/en/, "")}`,
        en: `${BASE_URL}/en${page.path.replace(/^\/tr/, "").replace(/^\/en/, "")}`,
      },
    },
  }));
  
  // Generate sitemap entries for blog posts from posts.ts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.flatMap((post) => [
    {
      url: `${BASE_URL}/tr/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: "monthly" as const,
      priority: post.featured ? 0.7 : 0.6,
      alternates: {
        languages: {
          tr: `${BASE_URL}/tr/blog/${post.slug}`,
          en: `${BASE_URL}/en/blog/${post.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: "monthly" as const,
      priority: post.featured ? 0.7 : 0.6,
      alternates: {
        languages: {
          tr: `${BASE_URL}/tr/blog/${post.slug}`,
          en: `${BASE_URL}/en/blog/${post.slug}`,
        },
      },
    },
  ]);
  
  // Generate sitemap entries for portfolio items
  const portfolioEntries: MetadataRoute.Sitemap = portfolioItems.flatMap((item) => [
    {
      url: `${BASE_URL}/tr/portfoy/${item.slug}`,
      lastModified: new Date(item.lastModified).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          tr: `${BASE_URL}/tr/portfoy/${item.slug}`,
          en: `${BASE_URL}/en/portfoy/${item.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/portfoy/${item.slug}`,
      lastModified: new Date(item.lastModified).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          tr: `${BASE_URL}/tr/portfoy/${item.slug}`,
          en: `${BASE_URL}/en/portfoy/${item.slug}`,
        },
      },
    },
  ]);
  
  return [...staticEntries, ...blogEntries, ...portfolioEntries];
}
