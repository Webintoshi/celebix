/**
 * IndexNow API Entegrasyonu
 * Bing, Yandex, Seznam.cz ve diğer arama motorlarına anlık index bildirimi
 * 
 * Docs: https://www.indexnow.org/documentation
 */

export const dynamic = 'force-dynamic';

const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',  // Ana endpoint (tüm motorlar)
  'https://www.bing.com/indexnow',      // Bing
  'https://yandex.com/indexnow',        // Yandex
];

interface IndexNowRequest {
  urls: string[];
  key?: string;
}

interface IndexNowResponse {
  success: boolean;
  message: string;
  details?: Record<string, unknown>;
}

// IndexNow anahtarını al (environment variable veya default)
function getKey(): string {
  return process.env.INDEXNOW_KEY || 'celebix-index-key-2025';
}

// Tek URL'yi IndexNow'a bildir
async function submitToIndexNow(url: string, key: string): Promise<IndexNowResponse> {
  const hostname = new URL(url).hostname;
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: hostname,
        key: key,
        keyLocation: `https://${hostname}/${key}.txt`,
        urlList: [url]
      }),
      signal: AbortSignal.timeout(15000)
    });
    
    if (response.status === 200) {
      return {
        success: true,
        message: 'URL başarıyla bildirildi'
      };
    } else if (response.status === 202) {
      return {
        success: true,
        message: 'URL kuyruğa alındı (202 Accepted)'
      };
    } else if (response.status === 400) {
      return {
        success: false,
        message: 'Geçersiz istek formatı'
      };
    } else if (response.status === 403) {
      return {
        success: false,
        message: 'Key doğrulama başarısız - Key dosyası kontrol edilmeli'
      };
    } else if (response.status === 422) {
      return {
        success: false,
        message: 'URL formatı geçersiz veya rate limit aşıldı'
      };
    } else {
      return {
        success: false,
        message: `HTTP ${response.status}: ${response.statusText}`
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Ağ hatası'
    };
  }
}

// Toplu URL gönderimi
async function submitBulkUrls(urls: string[], key: string): Promise<IndexNowResponse> {
  if (urls.length === 0) {
    return {
      success: false,
      message: 'URL listesi boş'
    };
  }
  
  if (urls.length > 10000) {
    return {
      success: false,
      message: 'En fazla 10,000 URL gönderilebilir'
    };
  }
  
  const hostname = new URL(urls[0]).hostname;
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: hostname,
        key: key,
        keyLocation: `https://${hostname}/${key}.txt`,
        urlList: urls
      }),
      signal: AbortSignal.timeout(30000)
    });
    
    if (response.ok || response.status === 202) {
      return {
        success: true,
        message: `${urls.length} URL başarıyla bildirildi`,
        details: { count: urls.length }
      };
    } else {
      const text = await response.text();
      return {
        success: false,
        message: `HTTP ${response.status}: ${text}`,
        details: { status: response.status }
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Ağ hatası',
      details: { error: String(error) }
    };
  }
}

// POST: URL bildir
export async function POST(request: Request) {
  try {
    const body: IndexNowRequest = await request.json();
    const { urls, key = getKey() } = body;
    
    if (!urls || (Array.isArray(urls) && urls.length === 0)) {
      return Response.json(
        { error: 'URL veya URL listesi gerekli' },
        { status: 400 }
      );
    }
    
    // Tek URL veya liste
    const urlList = Array.isArray(urls) ? urls : [urls];
    
    // URL validasyonu
    const invalidUrls = urlList.filter(url => {
      try {
        const parsed = new URL(url);
        return !parsed.hostname.includes('celebix.co');
      } catch {
        return true;
      }
    });
    
    if (invalidUrls.length > 0) {
      return Response.json(
        { 
          error: 'Geçersiz URL\'ler bulundu',
          invalidUrls 
        },
        { status: 400 }
      );
    }
    
    // IndexNow'a gönder
    let result: IndexNowResponse;
    
    if (urlList.length === 1) {
      result = await submitToIndexNow(urlList[0], key);
    } else {
      result = await submitBulkUrls(urlList, key);
    }
    
    return Response.json({
      success: result.success,
      urls: urlList,
      message: result.message,
      details: result.details,
      timestamp: new Date().toISOString(),
      keyUsed: key.substring(0, 10) + '...'
    });
    
  } catch (error) {
    return Response.json(
      { 
        error: 'IndexNow isteği başarısız',
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      },
      { status: 500 }
    );
  }
}

// GET: Durum ve bilgi
export async function GET() {
  const key = getKey();
  
  return Response.json({
    service: 'IndexNow API',
    description: 'Bing, Yandex ve diğer motorlara anlık index bildirimi',
    keyLocation: `https://celebix.co/${key}.txt`,
    setup: {
      step1: `${key}.txt dosyasını public dizinine oluştur`,
      step2: `İçeriği sadece key olacak şekilde ayarla: ${key}`,
      step3: 'Search Console\'da IndexNow\'u etkinleştir',
      step4: 'INDEXNOW_KEY environment variable\'ını ayarla'
    },
    usage: {
      single: 'POST /api/index-now { "urls": "https://celebix.co/tr/blog/yazi" }',
      bulk: 'POST /api/index-now { "urls": ["url1", "url2", "url3"] }'
    },
    limits: {
      maxUrls: 10000,
      dailyLimit: 'Motorlara göre değişir (genellikle 10,000/gün)',
      rateLimit: '1 saniyede 1 istek önerilir'
    },
    supportedEngines: [
      'Bing',
      'Yandex', 
      'Seznam.cz',
      'Naver',
      'Yep',
      'Adswizz'
    ]
  });
}
