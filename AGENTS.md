# Celebix - Geliştirici Rehberi

Bu doküman, Celebix web sitesi projesi için geliştirme standartlarını ve SEO sistemini açıklar.

## 🏗️ Proje Yapısı

### Teknoloji Stack'i
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **i18n**: next-intl v3

### Önemli Dizinler

```
my-app/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Dil routeları (tr, en)
│   │   ├── page.tsx         # Ana sayfa
│   │   ├── layout.tsx       # Locale layout
│   │   └── [page]/          # Alt sayfalar
│   │       ├── layout.tsx   # Sayfa SEO + Schema
│   │       └── page.tsx     # Sayfa içeriği
│   ├── sitemap.ts           # Dinamik sitemap
│   ├── robots.ts            # Robots.txt
│   └── layout.tsx           # Root layout (metadata)
├── components/
│   ├── sections/            # Sayfa bölümleri
│   ├── SchemaScript.tsx     # JSON-LD schema bileşenleri
│   └── ui/                  # UI bileşenleri
├── lib/
│   └── seo/                 # SEO utilities
│       ├── schemas.ts       # Schema şablonları
│       ├── metadata.ts      # Metadata şablonları
│       └── README.md        # SEO dokümantasyonu
├── messages/                # i18n mesajları
└── public/                  # Statik dosyalar
```

---

## 🔍 SEO Sistemi

### Genel Bakış
Celebix, kapsamlı bir SEO altyapısına sahiptir:
- ✅ Dinamik metadata (sayfa başına özelleştirilebilir)
- ✅ JSON-LD Schema markup (Organization, Product, Service, vb.)
- ✅ Otomatik sitemap.xml üretimi
- ✅ Robots.txt yapılandırması
- ✅ Open Graph ve Twitter Card desteği
- ✅ Canonical URL'ler ve hreflang etiketleri
- ✅ Breadcrumb schema

### SEO Dosyaları

| Dosya | Açıklama |
|-------|----------|
| `lib/seo/schemas.ts` | JSON-LD schema şablonları |
| `lib/seo/metadata.ts` | Metadata şablonları ve helper'lar |
| `lib/seo/README.md` | Detaylı SEO rehberi |
| `components/SchemaScript.tsx` | Schema markup bileşenleri |
| `app/sitemap.ts` | Dinamik sitemap |
| `app/robots.ts` | Robots.txt yapılandırması |

### Sayfa SEO Yapılandırması

Her sayfa için **layout.tsx** dosyası SEO'yu yönetir:

```tsx
// app/[locale]/ornek-sayfa/layout.tsx
import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr ? "Sayfa Başlığı | Celebix" : "Page Title | Celebix",
    description: isTr ? "Türkçe açıklama..." : "English description...",
    keywords: isTr ? ["kelime1", "kelime2"] : ["word1", "word2"],
    alternates: {
      canonical: `/${locale}/ornek-sayfa`,
      languages: {
        tr: "/tr/ornek-sayfa",
        en: "/en/ornek-sayfa",
      },
    },
    openGraph: {
      title: isTr ? "OG Başlık TR" : "OG Title EN",
      description: isTr ? "OG Açıklama TR" : "OG Description EN",
      url: `https://celebix.co/${locale}/ornek-sayfa`,
    },
  };
}

export default function Layout({ children, params: { locale } }) {
  const isTr = locale === "tr";
  
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={[
        { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
        { name: isTr ? "Sayfa Adı" : "Page Name", url: `/${locale}/ornek-sayfa` },
      ]} />
      {children}
    </>
  );
}
```

### Mevcut Schema Türleri

| Bileşen | Kullanım Alanı |
|---------|---------------|
| `OrganizationSchema` | Tüm sayfalar |
| `LocalBusinessSchema` | İletişim sayfası |
| `WebSiteSchema` | Ana sayfa, Blog |
| `BreadcrumbSchema` | Tüm sayfalar |
| `EcommerceProductSchema` | E-ticaret sayfası |
| `SaaSProductSchema` | SaaS/Tık Profil sayfası |
| `ServiceSchema` | Hizmet sayfaları |
| `FAQSchema` | SSS bölümleri |
| `BlogPostSchema` | Blog yazıları |

---

## ✍️ Blog Sistemi

### Hızlı Başlangıç

1. **Template'i kopyalayın**:
```bash
cp blog-post-template.js yeni-yazi.js
```

2. **Dosyayı doldurun** ve objeyi kopyalayın

3. **Blog listesine ekleyin** (`app/[locale]/blog/page.tsx`):
```typescript
const blogPosts: BlogPost[] = [
  // YENİ YAZI - EN ÜSTTE
  {
    slug: "ornek-yazi",
    title: "Örnek Yazı Başlığı",
    // ... diğer alanlar
  },
];
```

4. **Blog detay sayfasına ekleyin** (`app/[locale]/blog/[slug]/page.tsx`):
```typescript
const blogPostsData: Record<string, BlogPost> = {
  "ornek-yazi": {
    // ... tam içerik
  },
};
```

### Blog SEO

Blog yazıları için `BlogPostSchema` kullanın:

```tsx
import { BlogPostSchema } from "@/components/SchemaScript";

<BlogPostSchema
  title={post.title}
  description={post.excerpt}
  url={`https://celebix.co/${locale}/blog/${post.slug}`}
  image={post.image}
  datePublished={post.date}
  dateModified={post.date}
  author={post.author}
  tags={post.tags}
/>
```

---

## 🎨 Tema Standartları

### Renkler
| Renk | Kod | Kullanım |
|------|-----|----------|
| Light Background | `#F8F8F8` | Ana arka plan |
| Dark Text | `#2A2A2A` | Ana metin |
| Aurora Indigo | `#6366F1` | Birincil vurgu |
| Aurora Violet | `#8B5CF6` | İkincil vurgu |

### Tipografi
- **Başlıklar**: `font-display` (Outfit)
- **Gövde**: `font-sans` (Inter)
- **H1**: 3.815rem (61px)
- **H2**: 2.441rem (39px)
- **Body**: 1rem (16px)

---

## ✅ Kalite Kontrol Listesi

### Genel Kontroller
- [ ] TypeScript hatası yok (`npm run build`)
- [ ] Tüm sayfalar dil desteği içeriyor (TR/EN)
- [ ] Responsive tasarım çalışıyor
- [ ] Görseller optimize edilmiş (WebP)

### SEO Kontrolleri
- [ ] Her sayfa için metadata tanımlı
- [ ] Schema markup doğru yerleştirilmiş
- [ ] Canonical URL'ler tanımlı
- [ ] Başlıklar 50-60 karakter
- [ ] Açıklamalar 150-160 karakter
- [ ] OG görseli tanımlı (1200x630)

### Blog Kontrolleri
- [ ] İki dilde içerik tam
- [ ] `slug` benzersiz
- [ ] `image` 60-99 arası
- [ ] `tags` 3-5 adet
- [ ] `BlogPostSchema` eklenmiş

---

## 🚀 Build ve Test

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Cache temizleme (hata durumunda)
rm -rf .next && npm run build

# Erişim adresleri
http://localhost:2852/tr    # Türkçe
http://localhost:2852/en    # İngilizce
```

---

## 📚 Önemli Dokümanlar

| Doküman | Açıklama |
|---------|----------|
| `BLOG_STYLE_GUIDE.md` | Blog yazı stil rehberi |
| `blog-post-template.js` | Blog yazı template'i |
| `lib/seo/README.md` | Detaylı SEO rehberi |

---

## 🆘 Sık Sorulan Sorunlar

### Metadata Çalışmıyor
- `generateMetadata` fonksiyonu async olmalı
- `params` doğru alınmalı
- `layout.tsx` Server Component olmalı ("use client" olmamalı)

### Schema Görünmüyor
- `SchemaScript` import'u kontrol edin
- `id` prop'u benzersiz olmalı
- Sayfa kaynağında `<script type="application/ld+json">` arayın

### Build Hatası
- TypeScript hatalarını kontrol edin
- Ekseni modül importlarını kontrol edin
- `.next` cache dizinini temizleyin

---

## 📞 İletişim

- **Website**: celebix.co
- **Email**: merhaba@celebix.co
- **Telefon**: +90 530 209 96 28

---

**Son Güncelleme**: 2025-03-05
