/**
 * Blog Index Bildirim API'si
 * 
 * Yeni yazı eklendiğinde otomatik olarak arama motorlarına bildirim gönderir.
 * 
 * Kullanım:
 * POST /api/indexer/notify
 * Body: { "slug": "yeni-yazi", "title": "Yeni Yazı Başlığı" }
 * 
 * Vercel Deploy Hook ile otomatik tetiklenebilir
 */

import { notifyNewBlogPost } from "@/lib/indexer/auto-ping";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, title, secret } = body;
    
    // Güvenlik kontrolü (opsiyonel)
    const expectedSecret = process.env.INDEXER_SECRET;
    if (expectedSecret && secret !== expectedSecret) {
      return Response.json(
        { error: 'Geçersiz secret key' },
        { status: 401 }
      );
    }
    
    if (!slug) {
      return Response.json(
        { error: 'slug parametresi gerekli' },
        { status: 400 }
      );
    }
    
    // Asenkron olarak ping gönder (response beklemeden)
    notifyNewBlogPost(slug, title || slug).catch(console.error);
    
    return Response.json({
      success: true,
      message: 'Index bildirimi başlatıldı',
      slug,
      title,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    return Response.json(
      { 
        error: 'Bildirim gönderilemedi',
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      },
      { status: 500 }
    );
  }
}

// GET: API bilgisi
export async function GET() {
  return Response.json({
    service: 'Blog Index Bildirim API',
    description: 'Yeni yazıları arama motorlarına otomatik bildir',
    usage: {
      method: 'POST',
      endpoint: '/api/indexer/notify',
      body: {
        slug: 'yeni-yazi-slug',
        title: 'Yeni Yazı Başlığı',
        secret: 'INDEXER_SECRET (opsiyonel)'
      }
    },
    supportedEngines: ['Google', 'Bing', 'Yandex (IndexNow)'],
    triggers: [
      'Manuel POST isteği',
      'Vercel Deploy Hook',
      'GitHub Actions workflow',
      'CMS webhooks'
    ]
  });
}
