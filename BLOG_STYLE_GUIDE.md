# Celebix Blog Yazı Stil Rehberi

Bu rehber, SEO ajansları ve blog yazarları için Celebix blog yapısında tutarlı, tema uyumlu yazılar oluşturmak üzere hazırlanmıştır.

## 📋 Blog Yazısı Veri Yapısı

Her blog yazısı aşağıdaki formatta tanımlanmalıdır:

```typescript
interface BlogPost {
  slug: string;                    // URL'de görünecek benzersiz kimlik (örn: "nextjs-15-yenilikler")
  title: string;                   // Türkçe başlık
  titleEn: string;                 // İngilizce başlık
  category: string;                // Kategori kodu: "software" | "marketing" | "social" | "technology" | "strategy"
  categoryEn: string;              // Aynı kategori kodu
  categoryLabel: string;           // Türkçe kategori adı (örn: "Yazılım")
  categoryLabelEn: string;         // İngilizce kategori adı (örn: "Software")
  image: number;                   // 60-99 arası benzersiz sayı (görsel için)
  date: string;                    // YYYY-MM-DD formatında tarih
  readTime: string;                // Türkçe okuma süresi (örn: "8 dk")
  readTimeEn: string;              // İngilizce okuma süresi (örn: "8 min")
  author: string;                  // Yazar adı
  authorRole: string;              // Türkçe unvan
  authorRoleEn: string;            // İngilizce unvan
  authorBio: string;               // Türkçe yazar biyografisi (1-2 cümle)
  authorBioEn: string;             // İngilizce yazar biyografisi
  tags: string[];                  // 3-5 adet etiket
  content: string[];               // Türkçe içerik paragrafları dizisi
  contentEn: string[];             // İngilizce içerik paragrafları dizisi
}
```

## 🎨 Kategori Renkleri

Kategori renkleri otomatik olarak atılır:

| Kategori | Kod | Renk |
|----------|-----|------|
| Yazılım | `software` | Aurora Indigo (#6366F1) |
| Pazarlama | `marketing` | Orange (#F97316) |
| Sosyal Medya | `social` | Pink (#EC4899) |
| Teknoloji | `technology` | Emerald (#10B981) |
| İş Stratejisi | `strategy` | Blue (#3B82F6) |

## ✍️ İçerik Formatlama Kuralları

### 1. Paragraf Yapısı

```typescript
content: [
  // Giriş paragrafı - konuyu kısaca tanıt
  "Next.js 15, modern web uygulamaları geliştirmek için önemli yenilikler sunuyor...",
  
  // Alt başlık (## ile başlar)
  "## Partial Prerendering Nedir?",
  
  // Açıklama paragrafı
  "Partial Prerendering, statik ve dinamik içeriklerin aynı sayfada...",
  
  // Liste öğeleri (\n ile ayrılmış, - ile başlar)
  "- Yüksek kaliteli yaratıcı varlıklar\n- Tüm hedefleme sinyallerinin doğru yapılandırılması\n- Dönüşüm değerlerinin doğru atanması",
  
  // Kod bloğu (``` ile başlar ve biter)
  "```typescript\nexport const dynamic = 'force-dynamic';\nexport const revalidate = 3600;\n```",
  
  // Sonuç başlığı
  "## Sonuç",
  
  // Kapanış paragrafı
  "Next.js 15, performans ve geliştirici deneyimi arasında mükemmel bir denge kuruyor..."
]
```

### 2. Formatlama Seçenekleri

| Format | Kullanım | Örnek |
|--------|----------|-------|
| **Alt Başlık** | `## Başlık Metni` | `## Partial Prerendering Nedir?` |
| **Liste** | `- ` ile başlayan satırlar, `\n` ile ayrılmış | `- Madde 1\n- Madde 2\n- Madde 3` |
| **Kod Bloğu** | ` ```typescript` ile başlar, ` ``` ` ile biter | ` ```typescript\nconst x = 5;\n ``` ` |
| **Kalın Metin** | Markdown desteklenmiyor, düz metin kullanın | "...önemli bir **özellik**..." yerine "...önemli bir özellik..." |

### 3. İçerik Yapısı Önerisi

Her blog yazısı şu yapıyı takip etmelidir:

1. **Giriş (1 paragraf)** - Konuyu tanıt, okuyucunun ilgisini çek
2. **Ana Başlıklar (3-5 adet)** - `## ` ile başlayan bölümler
3. **Alt Noktalar** - Liste maddeleriyle destekle
4. **Kod Örnekleri** - Varsa, ```typescript formatında
5. **Sonuç (1 paragraf)** - Özet ve call-to-action

## 🖼️ Görsel Kullanımı

### Blog Listesi Görseli
- Otomatik olarak `image` değerine göre oluşturulur
- 60-99 arası benzersiz sayı kullanın
- Format: `image: 70`

### Blog Detay Görseli
- Featured image otomatik olarak blog listesi görseliyle aynıdır
- Görsel oranı: 2:1 (1200x600)

## 📝 Örnek Blog Yazısı

```typescript
{
  slug: "ornek-blog-yazisi",
  title: "Örnek Blog Yazısı Başlığı",
  titleEn: "Example Blog Post Title",
  category: "software",
  categoryEn: "software",
  categoryLabel: "Yazılım",
  categoryLabelEn: "Software",
  image: 75,
  date: "2024-03-15",
  readTime: "6 dk",
  readTimeEn: "6 min",
  author: "Ahmet Çelebi",
  authorRole: "Teknik Direktör",
  authorRoleEn: "Technical Director",
  authorBio: "10+ yıllık yazılım geliştirme deneyimi. Full-stack geliştirici.",
  authorBioEn: "10+ years of software development experience. Full-stack developer.",
  tags: ["Next.js", "React", "Web Development"],
  content: [
    "Bu yazıda, modern web geliştirme dünyasında önemli bir konuyu ele alıyoruz. İşletmeniz için doğru teknoloji seçimi kritik öneme sahip.",
    
    "## Neden Bu Teknoloji?",
    "Modern web uygulamaları geliştirirken performans, ölçeklenebilirlik ve geliştirici deneyimi en önemli faktörlerdir. Bu teknoloji stack'i bu üç alanda da mükemmel sonuçlar sunar.",
    
    "## Temel Özellikler",
    "- Server-side rendering desteği\n- Otomatik kod bölme\n- TypeScript entegrasyonu\n- Zengin ekosistem",
    
    "## Uygulama Örneği",
    "```typescript\nimport { NextResponse } from 'next/server';\n\nexport async function GET() {\n  const data = await fetchData();\n  return NextResponse.json({ data });\n}\n```",
    
    "## Sonuç",
    "Doğru teknoloji seçimi, uzun vadeli proje başarısını belirleyen kritik bir faktördür. Detaylı analiz ve planlama ile işletmeniz için en uygun çözümü bulabilirsiniz."
  ],
  contentEn: [
    "In this article, we address an important topic in the modern web development world. Choosing the right technology for your business is critically important.",
    
    "## Why This Technology?",
    "When developing modern web applications, performance, scalability, and developer experience are the most important factors. This technology stack delivers excellent results in all three areas.",
    
    "## Key Features",
    "- Server-side rendering support\n- Automatic code splitting\n- TypeScript integration\n- Rich ecosystem",
    
    "## Implementation Example",
    "```typescript\nimport { NextResponse } from 'next/server';\n\nexport async function GET() {\n  const data = await fetchData();\n  return NextResponse.json({ data });\n}\n```",
    
    "## Conclusion",
    "Choosing the right technology is a critical factor in determining long-term project success. With detailed analysis and planning, you can find the most suitable solution for your business."
  ]
}
```

## ✅ Kontrol Listesi

Yeni blog yazısı eklerken kontrol edin:

- [ ] `slug` benzersiz ve URL dostu (boşluk yok, küçük harf, tire kullan)
- [ ] Her iki dilde (TR/EN) içerik tam ve eşleşiyor
- [ ] `image` değeri 60-99 arası ve benzersiz
- [ ] `date` formatı YYYY-MM-DD
- [ ] `readTime` formatı "X dk" / "X min"
- [ ] `tags` 3-5 adet, ilgili konular
- [ ] `category` listedeki kategorilerden biri
- [ ] İçerik yapısı: Giriş → Başlıklar → Liste → Kod → Sonuç
- [ ] Alt başlıklar `## ` ile başlıyor
- [ ] Listeler `\n` ile ayrılmış ve `- ` ile başlıyor

## 🎯 İçerik Kalitesi Standartları

1. **SEO Uyumlu Başlıklar**: Anahtar kelime içeren, 50-60 karakter
2. **Meta Açıklama**: `excerpt` alanı 150-160 karakter, anahtar kelime içeren
3. **Okunabilirlik**: Kısa paragraflar (3-4 cümle), liste kullanımı
4. **Uzunluk**: Minimum 800 kelime, ideal 1200-1500 kelime
5. **Güncellik**: Güncel tarih, güncel bilgiler

## 📍 Ekleme Konumu

Yeni blog yazısını `app/[locale]/blog/page.tsx` dosyasındaki `blogPosts` dizisinin BAŞINA ekleyin (en yeni yazı üstte görünsün).

```typescript
const blogPosts: BlogPost[] = [
  // YENİ YAZI BURAYA EKLENECEK
  {
    slug: "yeni-yazi",
    // ... diğer alanlar
  },
  // Mevcut yazılar...
];
```

Detay sayfası için `app/[locale]/blog/[slug]/page.tsx` dosyasındaki `blogPostsData` objesine ekleyin:

```typescript
const blogPostsData: Record<string, BlogPost> = {
  // YENİ YAZI BURAYA EKLENECEK
  "yeni-yazi": {
    slug: "yeni-yazi",
    // ... diğer alanlar
  },
  // Mevcut yazılar...
};
```

---

**Not**: Bu rehberdeki kurallara uyarak oluşturulan blog yazıları, Celebix web sitesinin Aurora temasıyla mükemmel uyum sağlayacak ve tutarlı bir kullanıcı deneyimi sunacaktır.
