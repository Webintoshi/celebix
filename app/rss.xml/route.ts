/**
 * RSS Feed Generator
 * Blog yazıları için otomatik RSS beslemesi
 * 
 * URL: https://celebix.co/rss.xml
 * Otomatik ping: Google FeedBurner, Flipboard, Feedly vb.
 */

import { blogPosts } from "../[locale]/blog/posts";

export const dynamic = 'force-static';

const SITE_URL = 'https://celebix.co';
const SITE_NAME = 'Celebix Blog';
const SITE_DESCRIPTION = 'Yazılım, dijital pazarlama ve sosyal medya dünyasından en güncel bilgiler, ipuçları ve stratejiler.';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
      default: return c;
    }
  });
}

function stripHtml(html: string): string {
  // Markdown formatındaki içeriği düz metne çevir
  return html
    .replace(/## /g, '') // Başlıkları kaldır
    .replace(/\*\*/g, '') // Kalın işaretlerini kaldır
    .replace(/\*/g, '') // İtalik işaretlerini kaldır
    .replace(/`/g, '') // Kod işaretlerini kaldır
    .replace(/\n\n/g, ' ') // Çift satır sonlarını boşluğa çevir
    .replace(/\n/g, ' ') // Satır sonlarını boşluğa çevir
    .replace(/\s+/g, ' ') // Fazla boşlukları temizle
    .trim()
    .substring(0, 500) + '...'; // İlk 500 karakter
}

export async function GET() {
  // Son 20 yazıyı al (tarihe göre sıralı)
  const sortedPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20);
  
  const lastBuildDate = new Date().toUTCString();
  
  const items = sortedPosts.map((post) => {
    const postUrl = `${SITE_URL}/tr/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();
    
    // İçerikten özet çıkar
    const contentText = post.content.join(' ');
    const description = escapeXml(stripHtml(contentText));
    const title = escapeXml(post.title);
    
    // Kategoriler
    const categories = post.keywords
      .slice(0, 5)
      .map(keyword => `<category>${escapeXml(keyword)}</category>`)
      .join('\n    ');
    
    return `
  <item>
    <title>${title}</title>
    <link>${postUrl}</link>
    <guid isPermaLink="true">${postUrl}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${description}</description>
    <author>${escapeXml(post.author)}</author>
    ${categories}
    <enclosure url="https://picsum.photos/seed/${post.image}/800/400" type="image/jpeg" length="0" />
  </item>`;
  }).join('\n');
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
  xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
<channel>
  <title>${SITE_NAME}</title>
  <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
  <link>${SITE_URL}/blog</link>
  <description>${SITE_DESCRIPTION}</description>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <language>tr-TR</language>
  <sy:updatePeriod>daily</sy:updatePeriod>
  <sy:updateFrequency>1</sy:updateFrequency>
  <generator>Celebix RSS Generator</generator>
  <image>
    <url>${SITE_URL}/Logo/Frame%201.svg</url>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}/blog</link>
    <width>144</width>
    <height>144</height>
  </image>
  ${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
