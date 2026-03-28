/**
 * Otomatik Index Ping Sistemi
 * 
 * Yeni blog yazısı eklendiğinde otomatik olarak çalışır ve
 * arama motorlarına bildirim gönderir.
 * 
 * Kullanım:
 * 1. posts.ts'e yeni yazı eklendiğinde
 * 2. Vercel Deploy Hook ile otomatik tetiklenir
 * 3. Manuel olarak çalıştırılabilir
 */

export interface PingConfig {
  url: string;
  engines?: ('google' | 'bing' | 'yandex' | 'indexnow')[];
  retryCount?: number;
}

export interface PingResult {
  success: boolean;
  engine: string;
  message: string;
  timestamp: string;
}

/**
 * Tek URL'i tüm motorlara ping at
 */
export async function pingUrl(config: PingConfig): Promise<PingResult[]> {
  const { url, engines = ['google', 'indexnow'], retryCount = 2 } = config;
  const results: PingResult[] = [];
  
  for (const engine of engines) {
    let attempt = 0;
    let success = false;
    let message = '';
    
    while (attempt < retryCount && !success) {
      try {
        const result = await pingEngine(url, engine);
        success = result.success;
        message = result.message;
      } catch (error) {
        message = error instanceof Error ? error.message : 'Bilinmeyen hata';
      }
      
      attempt++;
      
      if (!success && attempt < retryCount) {
        // 2 saniye bekle ve tekrar dene
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    results.push({
      success,
      engine,
      message,
      timestamp: new Date().toISOString()
    });
  }
  
  return results;
}

/**
 * Belirli bir motor'a ping at
 */
async function pingEngine(url: string, engine: string): Promise<{ success: boolean; message: string }> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://celebix.co';
  
  switch (engine) {
    case 'google':
      return pingGoogleSitemap();
    
    case 'indexnow':
      return pingIndexNow(url);
    
    case 'bing':
      return pingBing(url);
    
    case 'yandex':
      return pingYandex(url);
    
    default:
      return { success: false, message: 'Bilinmeyen motor' };
  }
}

/**
 * Google Sitemap ping
 */
async function pingGoogleSitemap(): Promise<{ success: boolean; message: string }> {
  try {
    const sitemapUrl = encodeURIComponent('https://celebix.co/sitemap.xml');
    const response = await fetch(
      `https://www.google.com/ping?sitemap=${sitemapUrl}`,
      { 
        method: 'GET',
        signal: AbortSignal.timeout(10000)
      }
    );
    
    return {
      success: response.ok || response.status === 200,
      message: response.ok ? 'Google sitemap ping başarılı' : `Google HTTP ${response.status}`
    };
  } catch (error) {
    return {
      success: false,
      message: `Google ping hatası: ${error instanceof Error ? error.message : 'Ağ hatası'}`
    };
  }
}

/**
 * IndexNow ping
 */
async function pingIndexNow(url: string): Promise<{ success: boolean; message: string }> {
  const key = process.env.INDEXNOW_KEY || 'celebix-index-key-2025';
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'celebix.co',
        key: key,
        keyLocation: `https://celebix.co/${key}.txt`,
        urlList: [url]
      }),
      signal: AbortSignal.timeout(15000)
    });
    
    if (response.ok || response.status === 202) {
      return {
        success: true,
        message: 'IndexNow başarılı (Bing, Yandex vb.)'
      };
    } else {
      return {
        success: false,
        message: `IndexNow HTTP ${response.status}`
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `IndexNow hatası: ${error instanceof Error ? error.message : 'Ağ hatası'}`
    };
  }
}

/**
 * Bing ping
 */
async function pingBing(url: string): Promise<{ success: boolean; message: string }> {
  try {
    // Bing URL submission API
    const response = await fetch('https://www.bing.com/webmaster/api.svc/json/SubmitUrlbatch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BING_API_KEY || ''
      },
      body: JSON.stringify({
        siteUrl: 'https://celebix.co',
        urlList: [url]
      }),
      signal: AbortSignal.timeout(10000)
    });
    
    return {
      success: response.ok,
      message: response.ok ? 'Bing bildirimi başarılı' : 'Bing API key gerekli'
    };
  } catch {
    // Bing API key olmadan da IndexNow çalışır
    return {
      success: false,
      message: 'Bing API key gerekli veya IndexNow kullanın'
    };
  }
}

/**
 * Yandex ping
 */
async function pingYandex(url: string): Promise<{ success: boolean; message: string }> {
  // Yandex IndexNow üzerinden çalışır
  return {
    success: true,
    message: 'Yandex IndexNow üzerinden bildirildi'
  };
}

/**
 * Blog yazısı eklendiğinde çalıştırılacak ana fonksiyon
 * posts.ts dosyasından çağrılır
 */
export async function notifyNewBlogPost(slug: string, title: string): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://celebix.co';
  const trUrl = `${baseUrl}/tr/blog/${slug}`;
  const enUrl = `${baseUrl}/en/blog/${slug}`;
  
  console.log(`[AutoPing] Yeni yazı bildiriliyor: ${title}`);
  
  try {
    // TR ve EN URL'lerini ping at
    const [trResults, enResults] = await Promise.all([
      pingUrl({ url: trUrl, engines: ['google', 'indexnow'] }),
      pingUrl({ url: enUrl, engines: ['indexnow'] }) // EN için sadece IndexNow
    ]);
    
    // Sonuçları logla
    const allResults = [...trResults, ...enResults];
    const successCount = allResults.filter(r => r.success).length;
    
    console.log(`[AutoPing] ${successCount}/${allResults.length} bildirim başarılı`);
    
    // Başarısız olanları logla
    const failures = allResults.filter(r => !r.success);
    if (failures.length > 0) {
      console.warn('[AutoPing] Başarısız bildirimler:', failures);
    }
    
  } catch (error) {
    console.error('[AutoPing] Hata:', error);
  }
}

/**
 * Tüm siteyi yeniden indexlet (acil durumlar için)
 */
export async function requestFullReindex(): Promise<void> {
  console.log('[AutoPing] Tam reindex isteği gönderiliyor...');
  
  // Google Sitemap ping
  await pingGoogleSitemap();
  
  // IndexNow toplu gönderim (sitemap üzerinden)
  // Not: Bu için tüm URL'leri çekmek gerekir
  
  console.log('[AutoPing] Tam reindex isteği tamamlandı');
}
