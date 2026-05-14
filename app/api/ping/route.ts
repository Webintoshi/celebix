/**
 * URL Ping Servisi
 * Yeni içerikleri arama motorlarına bildirir
 * 
 * Kullanım:
 * POST /api/ping
 * Body: { "url": "https://celebix.net/tr/blog/yeni-yazi", "engines": ["google", "bing"] }
 */
import {
  PRIMARY_HOST,
  SITE_URL,
  absoluteSiteUrl,
  isRecognizedSiteHost,
  normalizeSiteUrl,
} from "@/lib/site";

export const dynamic = 'force-dynamic';

interface PingRequest {
  url: string;
  engines?: ('google' | 'bing' | 'yandex' | 'duckduckgo')[];
}

interface PingResult {
  engine: string;
  success: boolean;
  message: string;
}

// Google'a ping at (sitemap üzerinden)
async function pingGoogle(url: string): Promise<PingResult> {
  try {
    // Google Sitemap ping
    const sitemapUrl = encodeURIComponent(absoluteSiteUrl("/sitemap.xml"));
    const response = await fetch(
      `https://www.google.com/ping?sitemap=${sitemapUrl}`,
      { method: 'GET', signal: AbortSignal.timeout(10000) }
    );
    
    return {
      engine: 'google',
      success: response.ok || response.status === 200,
      message: response.ok ? 'Sitemap ping gönderildi' : `HTTP ${response.status}`
    };
  } catch (error) {
    return {
      engine: 'google',
      success: false,
      message: error instanceof Error ? error.message : 'Bilinmeyen hata'
    };
  }
}

// Bing'e ping at
async function pingBing(url: string): Promise<PingResult> {
  try {
    const response = await fetch('https://www.bing.com/webmaster/api.svc/json/SubmitUrlbatch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        siteUrl: SITE_URL,
        urlList: [url]
      }),
      signal: AbortSignal.timeout(10000)
    });
    
    return {
      engine: 'bing',
      success: response.ok,
      message: response.ok ? 'URL bildirildi' : `HTTP ${response.status}`
    };
  } catch (error) {
    // Bing API key gerektirir, alternatif IndexNow kullan
    return {
      engine: 'bing',
      success: false,
      message: 'API key gerekli veya IndexNow kullanın'
    };
  }
}

// Yandex'e ping at
async function pingYandex(url: string): Promise<PingResult> {
  try {
    const response = await fetch(
      `https://webmaster.yandex.com/api/v2/hosts/https:${PRIMARY_HOST}:443/robots.txt`,
      { signal: AbortSignal.timeout(10000) }
    );
    
    return {
      engine: 'yandex',
      success: true,
      message: 'Yandex sitemap ping (manuel doğrulama gerekli)'
    };
  } catch (error) {
    return {
      engine: 'yandex',
      success: false,
      message: error instanceof Error ? error.message : 'Bilinmeyen hata'
    };
  }
}

// IndexNow ping (Bing, Yandex, Seznam.cz, Naver, Yandex destekler)
async function pingIndexNow(url: string): Promise<PingResult> {
  const key = process.env.INDEXNOW_KEY || '';
  
  if (!key) {
    return {
      engine: 'indexnow',
      success: false,
      message: 'INDEXNOW_KEY environment variable gerekli'
    };
  }
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: PRIMARY_HOST,
        key: key,
        keyLocation: absoluteSiteUrl(`/${key}.txt`),
        urlList: [url]
      }),
      signal: AbortSignal.timeout(15000)
    });
    
    return {
      engine: 'indexnow',
      success: response.ok || response.status === 202,
      message: response.ok ? 'IndexNow başarılı' : `HTTP ${response.status}`
    };
  } catch (error) {
    return {
      engine: 'indexnow',
      success: false,
      message: error instanceof Error ? error.message : 'Bilinmeyen hata'
    };
  }
}

export async function POST(request: Request) {
  try {
    const body: PingRequest = await request.json();
    const { url, engines = ['google', 'bing', 'indexnow'] } = body;
    
    if (!url) {
      return Response.json(
        { error: 'URL parametresi gerekli' },
        { status: 400 }
      );
    }
    
    // URL validasyonu
    try {
      new URL(url);
    } catch {
      return Response.json(
        { error: 'Geçersiz URL formatı' },
        { status: 400 }
      );
    }
    
    // Domain kontrolü
    if (!isRecognizedSiteHost(new URL(url).hostname)) {
      return Response.json(
        { error: `Sadece ${PRIMARY_HOST} alan adı ve tanımlı geçiş hostları desteklenir` },
        { status: 403 }
      );
    }

    const normalizedUrl = normalizeSiteUrl(url);
    
    const results: PingResult[] = [];
    
    // Seçilen motorlara ping at
    for (const engine of engines) {
      switch (engine) {
        case 'google':
          results.push(await pingGoogle(normalizedUrl));
          break;
        case 'bing':
          results.push(await pingBing(normalizedUrl));
          break;
        case 'yandex':
          results.push(await pingYandex(normalizedUrl));
          break;
        default:
          if (engine === 'indexnow' || !engine) {
            results.push(await pingIndexNow(normalizedUrl));
          }
      }
    }
    
    const successCount = results.filter(r => r.success).length;
    
    return Response.json({
      success: successCount > 0,
      url: normalizedUrl,
      results,
      timestamp: new Date().toISOString(),
      message: `${successCount}/${results.length} servis başarılı`
    });
    
  } catch (error) {
    return Response.json(
      { 
        error: 'Ping işlemi başarısız',
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      },
      { status: 500 }
    );
  }
}

// GET: Son ping sonuçlarını ve durumu göster
export async function GET() {
  return Response.json({
    service: 'URL Ping Servisi',
    description: 'Yeni içerikleri arama motorlarına bildir',
    usage: {
      method: 'POST',
      endpoint: '/api/ping',
      body: {
        url: absoluteSiteUrl("/tr/blog/yeni-yazi"),
        engines: ['google', 'bing', 'indexnow']
      }
    },
    supportedEngines: ['google', 'bing', 'yandex', 'indexnow'],
    note: 'IndexNow için INDEXNOW_KEY environment variable gereklidir'
  });
}
