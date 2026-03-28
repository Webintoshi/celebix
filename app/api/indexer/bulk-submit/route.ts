/**
 * Toplu Index Submit API
 * Sitedeki tüm sayfaları arama motorlarına toplu bildirim
 * 
 * POST /api/indexer/bulk-submit
 * Body: { "type": "all" | "blog" | "pages", "engines": ["indexnow", "google"] }
 */

import { blogPosts } from "@/app/[locale]/blog/posts";

export const dynamic = 'force-dynamic';

const BASE_URL = "https://celebix.co";

// Tüm statik sayfalar
const staticPages = [
  "/", "/tr", "/en",
  "/tr/e-ticaret-paketleri", "/en/e-ticaret-paketleri",
  "/tr/celebix-saas-platformu", "/en/celebix-saas-platformu",
  "/tr/kurumsal-yazilim", "/en/kurumsal-yazilim",
  "/tr/dijital-pazarlama", "/en/dijital-pazarlama",
  "/tr/sosyal-medya", "/en/sosyal-medya",
  "/tr/hakkimizda", "/en/hakkimizda",
  "/tr/iletisim", "/en/iletisim",
  "/tr/portfoy", "/en/portfoy",
  "/tr/blog", "/en/blog",
  "/tr/ordu-yazilim-sirketi", "/en/ordu-yazilim-sirketi",
  "/tr/video-pazarlama-2026", "/en/video-pazarlama-2026",
  "/tr/eposta-pazarlama-kobi", "/en/eposta-pazarlama-kobi",
];

// Portfolio sayfaları
const portfolioPages = [
  "/tr/portfoy/derycraft", "/en/portfoy/derycraft",
  "/tr/portfoy/okur-otomasyon", "/en/portfoy/okur-otomasyon",
  "/tr/portfoy/dolka", "/en/portfoy/dolka",
  "/tr/portfoy/guzide", "/en/portfoy/guzide",
  "/tr/portfoy/flowpart", "/en/portfoy/flowpart",
  "/tr/portfoy/lilyum-flora", "/en/portfoy/lilyum-flora",
];

interface BulkSubmitRequest {
  type?: 'all' | 'blog' | 'pages' | 'portfolio';
  engines?: ('indexnow' | 'google')[];
  secret?: string;
}

async function submitToIndexNow(urls: string[]): Promise<{ success: boolean; message: string; submitted: number }> {
  const key = process.env.INDEXNOW_KEY || 'celebix-index-key-2025';
  
  const batchSize = 10000;
  const batches = [];
  
  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }
  
  let totalSubmitted = 0;
  
  for (const batch of batches) {
    try {
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: 'celebix.co',
          key: key,
          keyLocation: `https://celebix.co/${key}.txt`,
          urlList: batch
        }),
        signal: AbortSignal.timeout(30000)
      });
      
      if (response.ok || response.status === 202) {
        totalSubmitted += batch.length;
      }
    } catch (error) {
      console.error('IndexNow batch error:', error);
    }
  }
  
  return {
    success: totalSubmitted > 0,
    message: `IndexNow: ${totalSubmitted}/${urls.length} URL gönderildi`,
    submitted: totalSubmitted
  };
}

async function pingGoogleSitemap(): Promise<{ success: boolean; message: string }> {
  try {
    const sitemapUrl = encodeURIComponent('https://celebix.co/sitemap.xml');
    const response = await fetch(
      `https://www.google.com/ping?sitemap=${sitemapUrl}`,
      { signal: AbortSignal.timeout(10000) }
    );
    
    return {
      success: response.ok,
      message: response.ok ? 'Google sitemap ping başarılı' : `Google HTTP ${response.status}`
    };
  } catch (error) {
    return {
      success: false,
      message: `Google ping hatası: ${error instanceof Error ? error.message : 'Ağ hatası'}`
    };
  }
}

export async function POST(request: Request) {
  try {
    const body: BulkSubmitRequest = await request.json();
    const { type = 'all', engines = ['indexnow', 'google'], secret } = body;
    
    // Güvenlik kontrolü
    const expectedSecret = process.env.INDEXER_SECRET;
    if (expectedSecret && secret !== expectedSecret) {
      return Response.json({ error: 'Geçersiz secret key' }, { status: 401 });
    }
    
    let urls: string[] = [];
    
    switch (type) {
      case 'blog':
        urls = blogPosts.flatMap(post => [
          `${BASE_URL}/tr/blog/${post.slug}`,
          `${BASE_URL}/en/blog/${post.slug}`
        ]);
        break;
        
      case 'pages':
        urls = staticPages.map(path => `${BASE_URL}${path}`);
        break;
        
      case 'portfolio':
        urls = portfolioPages.map(path => `${BASE_URL}${path}`);
        break;
        
      case 'all':
      default:
        urls = [
          ...staticPages.map(path => `${BASE_URL}${path}`),
          ...portfolioPages.map(path => `${BASE_URL}${path}`),
          ...blogPosts.flatMap(post => [
            `${BASE_URL}/tr/blog/${post.slug}`,
            `${BASE_URL}/en/blog/${post.slug}`
          ])
        ];
        break;
    }
    
    urls = Array.from(new Set(urls));
    
    const results: Record<string, { success: boolean; message: string; submitted?: number }> = {};
    
    for (const engine of engines) {
      switch (engine) {
        case 'indexnow':
          results.indexnow = await submitToIndexNow(urls);
          break;
        case 'google':
          results.google = await pingGoogleSitemap();
          break;
      }
    }
    
    return Response.json({
      success: true,
      type,
      totalUrls: urls.length,
      engines,
      results,
      timestamp: new Date().toISOString(),
      sampleUrls: urls.slice(0, 5)
    });
    
  } catch (error) {
    return Response.json(
      { error: 'Toplu gönderim başarısız', details: error instanceof Error ? error.message : 'Bilinmeyen hata' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const totalBlogUrls = blogPosts.length * 2;
  const totalStaticUrls = staticPages.length;
  const totalPortfolioUrls = portfolioPages.length;
  const totalUrls = totalBlogUrls + totalStaticUrls + totalPortfolioUrls;
  
  return Response.json({
    service: 'Toplu Index Submit',
    stats: {
      totalUrls,
      blogPosts: totalBlogUrls,
      staticPages: totalStaticUrls,
      portfolioPages: totalPortfolioUrls
    },
    usage: {
      method: 'POST',
      endpoint: '/api/indexer/bulk-submit',
      examples: [
        { type: 'all', description: 'Tüm URL\'leri gönder' },
        { type: 'blog', description: 'Sadece blog yazıları' },
        { type: 'pages', description: 'Sadece statik sayfalar' },
        { type: 'portfolio', description: 'Sadece portföy sayfaları' }
      ]
    }
  });
}
