/**
 * URL Ping Servisi
 * Yeni içerikleri arama motorlarına bildirir
 * 
 * Kullanım:
 * POST /api/ping
 * Body: { "url": "https://celebix.co/tr/blog/yeni-yazi", "engines": ["google", "bing"] }
 */

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
    const sitemapUrl = encodeURIComponent('https://celebix.co/sitemap.xml');
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
        siteUrl: 'https://celebix.co',
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
      `https://webmaster.yandex.com/api/v2/hosts/https:celebix.co:443/robots.txt`,
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
        host: 'celebix.co',
        key: key,
        keyLocation: `https://celebix.co/${key}.txt`,
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
    if (!url.includes('celebix.co')) {
      return Response.json(
        { error: 'Sadece celebix.co domainine izin verilir' },
        { status: 403 }
      );
    }
    
    const results: PingResult[] = [];
    
    // Seçilen motorlara ping at
    for (const engine of engines) {
      switch (engine) {
        case 'google':
          results.push(await pingGoogle(url));
          break;
        case 'bing':
          results.push(await pingBing(url));
          break;
        case 'yandex':
          results.push(await pingYandex(url));
          break;
        default:
          if (engine === 'indexnow' || !engine) {
            results.push(await pingIndexNow(url));
          }
      }
    }
    
    const successCount = results.filter(r => r.success).length;
    
    return Response.json({
      success: successCount > 0,
      url,
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
        url: 'https://celebix.co/tr/blog/yeni-yazi',
        engines: ['google', 'bing', 'indexnow']
      }
    },
    supportedEngines: ['google', 'bing', 'yandex', 'indexnow'],
    note: 'IndexNow için INDEXNOW_KEY environment variable gereklidir'
  });
}
