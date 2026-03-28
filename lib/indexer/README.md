# Otomatik Index Sistemi

Celebix sitesi için otomatik arama motoru index bildirim sistemi.

## Özellikler

- ✅ **IndexNow API** - Bing, Yandex, Seznam.cz vb. anlık index
- ✅ **Google Sitemap Ping** - Google'a sitemap güncelleme bildirimi
- ✅ **RSS Feed** - Feedly, Flipboard, Google News entegrasyonu
- ✅ **Otomatik Ping** - Yeni yazı eklendiğinde otomatik bildirim
- ✅ **API Endpoint'leri** - Manuel ve otomatik tetikleme desteği

## Kurulum

### 1. IndexNow Key Dosyası

Zaten oluşturuldu: `/public/celebix-index-key-2025.txt`

İçerik:
```
celebix-index-key-2025
```

### 2. Environment Variables (.env.local)

```bash
# IndexNow Key (opsiyonel, default var)
INDEXNOW_KEY=celebix-index-key-2025

# Bing API Key (opsiyonel)
BING_API_KEY=your_bing_api_key

# Bildirim API Secret (güvenlik için)
INDEXER_SECRET=your_secret_here

# Site URL
NEXT_PUBLIC_SITE_URL=https://celebix.co
```

### 3. Search Console Kayıtları

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Yandex Webmaster](https://webmaster.yandex.com)

## API Endpoint'leri

### 1. URL Ping

```bash
# Tek URL ping
POST /api/ping
Content-Type: application/json

{
  "url": "https://celebix.co/tr/blog/yeni-yazi",
  "engines": ["google", "bing", "indexnow"]
}
```

### 2. IndexNow Bildirim

```bash
# IndexNow API
POST /api/index-now
Content-Type: application/json

{
  "urls": [
    "https://celebix.co/tr/blog/yazi-1",
    "https://celebix.co/tr/blog/yazi-2"
  ],
  "key": "celebix-index-key-2025"
}
```

### 3. Otomatik Bildirim

```bash
# Yeni yazı bildirimi
POST /api/indexer/notify
Content-Type: application/json

{
  "slug": "yeni-yazi",
  "title": "Yeni Yazı Başlığı",
  "secret": "your_secret"  // INDEXER_SECRET varsa gerekli
}
```

### 4. RSS Feed

```
GET /rss.xml
```

## Otomatik Tetikleme

### Vercel Deploy Hook

1. Vercel Dashboard > Project > Settings > Git
2. Deploy Hooks bölümünde yeni hook oluştur
3. URL: `https://celebix.co/api/indexer/notify`
4. Payload:
```json
{
  "slug": "son-yazi-slug",
  "secret": "your_secret"
}
```

### GitHub Actions

```yaml
name: Index on Deploy

on:
  push:
    branches: [main]

jobs:
  index:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Index
        run: |
          curl -X POST https://celebix.co/api/indexer/notify \
            -H "Content-Type: application/json" \
            -d '{"slug":"son-yazi","secret":"${{ secrets.INDEXER_SECRET }}"}'
```

### Manuel Ping Script

```typescript
import { notifyNewBlogPost } from '@/lib/indexer/auto-ping';

// Yeni yazı eklendiğinde
await notifyNewBlogPost('yeni-yazi-slug', 'Yeni Yazı Başlığı');
```

## Hızlı Index İpuçları

### 1. İçerik Kalitesi
- **E-E-A-T**: Experience, Expertise, Authoritativeness, Trustworthiness
- Orijinal ve detaylı içerik (min. 800 kelime)
- H1, H2, H3 başlık yapısı
- İç ve dış bağlantılar

### 2. Teknik SEO
- **Core Web Vitals**: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Mobil uyumluluk
- Schema markup (JSON-LD)
- SSL/HTTPS

### 3. Sık Güncelleme
- Haftada en az 1-2 yeni yazı
- Mevcut içerikleri güncelle
- Sitemap'i otomatik güncelle

### 4. Backlink Stratejisi
- Sosyal medya paylaşımı
- Forum ve topluluk gönderileri
- Konuk yazarlık
- Yerel dizin kayıtları

## Limitler

| Servis | Günlük Limit | Not |
|--------|-------------|-----|
| IndexNow | 10,000 URL | Toplu gönderim |
| Google Ping | Limitsiz | Sitemap ping |
| Bing API | 100 URL/gün | API key gerekli |

## Troubleshooting

### IndexNow 403 Hatası
- Key dosyasının erişilebilir olduğundan emin ol
- `https://celebix.co/celebix-index-key-2025.txt` kontrol et

### Google Index Alamıyor
- Search Console'da URL Inspection Tool kullan
- Manuel index talebi gönder
- Kalite sorunlarını kontrol et

### RSS Feed Çalışmıyor
- `/rss.xml` endpoint'ini kontrol et
- XML validasyonu yap
- FeedBurner ile takip et

## Kaynaklar

- [IndexNow Documentation](https://www.indexnow.org/documentation)
- [Google Indexing API](https://developers.google.com/search/apis/indexing-api/v3/quickstart)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
