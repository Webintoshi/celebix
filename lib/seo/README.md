# Celebix SEO Sistemi

Bu doküman, Celebix web sitesi için SEO (Search Engine Optimization) altyapısını ve kullanımını açıklar.

## 📁 Dosya Yapısı

```
lib/seo/
├── schemas.ts          # JSON-LD Schema şablonları
├── metadata.ts         # Meta veri şablonları
└── README.md          # Bu doküman

components/
├── SchemaScript.tsx    # Schema markup bileşenleri

app/
├── sitemap.ts         # Dinamik sitemap
├── robots.ts          # Robots.txt yapılandırması
└── [locale]/
    ├── layout.tsx     # Locale layout (temel SEO)
    └── [page]/
        ├── layout.tsx # Sayfa SEO (metadata + schema)
        └── page.tsx   # Sayfa içeriği
```

## 🚀 Hızlı Başlangıç

### Yeni Sayfa Oluşturma

Yeni bir sayfa oluştururken SEO için şu adımları izleyin:

1. **Layout Dosyası Oluşturun**:

```tsx
// app/[locale]/yeni-sayfa/layout.tsx
import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr ? "Sayfa Başlığı TR | Celebix" : "Page Title EN | Celebix",
    description: isTr ? "Türkçe açıklama..." : "English description...",
    keywords: isTr ? ["kelime1", "kelime2"] : ["word1", "word2"],
    alternates: {
      canonical: `/${locale}/yeni-sayfa`,
      languages: {
        tr: "/tr/yeni-sayfa",
        en: "/en/yeni-sayfa",
      },
    },
    openGraph: {
      title: isTr ? "OG Başlık TR" : "OG Title EN",
      description: isTr ? "OG Açıklama TR" : "OG Description EN",
      url: `https://celebix.co/${locale}/yeni-sayfa`,
      type: "website", // veya "article", "product"
    },
  };
}

export default function YeniSayfaLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "Yeni Sayfa" : "New Page", url: `/${locale}/yeni-sayfa` },
  ];

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}
```

2. **Sayfa İçeriğini Oluşturun**:

```tsx
// app/[locale]/yeni-sayfa/page.tsx
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export default function YeniSayfa({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  return (
    <>
      <Navigation locale={locale} />
      <main>
        {/* Sayfa içeriği */}
      </main>
      <Footer locale={locale} />
    </>
  );
}
```

## 📊 Mevcut Schema Türleri

### 1. Organization Schema
Şirket bilgilerini tanımlar. Tüm sayfalarda kullanılır.

```tsx
import { OrganizationSchema } from "@/components/SchemaScript";

<OrganizationSchema />
```

### 2. LocalBusiness Schema
Yerel işletme SEO'su için. İletişim sayfasında kullanılır.

```tsx
import { LocalBusinessSchema } from "@/components/SchemaScript";

<LocalBusinessSchema />
```

### 3. WebSite Schema
Site arama özelliği için. Ana sayfa ve blogda kullanılır.

```tsx
import { WebSiteSchema } from "@/components/SchemaScript";

<WebSiteSchema />
```

### 4. Breadcrumb Schema
Sayfa hiyerarşisini tanımlar. Tüm sayfalarda kullanılır.

```tsx
import { BreadcrumbSchema } from "@/components/SchemaScript";

<BreadcrumbSchema items={[
  { name: "Ana Sayfa", url: "/tr" },
  { name: "E-Ticaret", url: "/tr/e-ticaret-paketleri" },
]} />
```

### 5. Product Schema - E-Ticaret
E-ticaret ürün sayfaları için.

```tsx
import { EcommerceProductSchema } from "@/components/SchemaScript";

<EcommerceProductSchema />
```

### 6. SaaS Product Schema
SaaS ürün sayfaları için.

```tsx
import { SaaSProductSchema } from "@/components/SchemaScript";

<SaaSProductSchema />
```

### 7. Service Schema
Hizmet sayfaları için.

```tsx
import { ServiceSchema } from "@/components/SchemaScript";

<ServiceSchema 
  name="Hizmet Adı" 
  description="Hizmet açıklaması" 
  url="/tr/hizmet" 
/>
```

### 8. FAQ Schema
SSS bölümleri için.

```tsx
import { FAQSchema } from "@/components/SchemaScript";

<FAQSchema faqs={[
  { question: "Soru?", answer: "Cevap." },
]} />
```

### 9. Blog Post Schema
Blog yazıları için.

```tsx
import { BlogPostSchema } from "@/components/SchemaScript";

<BlogPostSchema
  title="Yazı Başlığı"
  description="Yazı açıklaması"
  url="https://celebix.co/tr/blog/yazi"
  image="https://celebix.co/images/yazi.jpg"
  datePublished="2025-01-15"
  dateModified="2025-01-15"
  author="Yazar Adı"
  tags={["etiket1", "etiket2"]}
/>
```

## 📝 SEO En İyi Uygulamaları

### Başlık (Title) Kuralları
- 50-60 karakter arasında tutun
- Marka adını sona ekleyin: `| Celebix`
- Her sayfa benzersiz başlık içermeli
- Anahtar kelimeyi başa yakın yerleştirin

### Açıklama (Description) Kuralları
- 150-160 karakter arasında tutun
- CTA (Call to Action) içersin
- Anahtar kelime doğal olarak geçsin
- Her sayfa benzersiz açıklama içermeli

### Anahtar Kelime (Keywords) Kuralları
- 5-10 anahtar kelime kullanın
- Uzun kuyruk (long-tail) kelimeler tercih edin
- Yerel SEO için konum ekleyin (örn: "Ordu")

### Open Graph Etiketleri
- Her sayfa için OG görseli hazırlayın (1200x630)
- Başlık ve açıklama meta verilerle tutarlı olsun
- `type` alanını doğru belirtin (website, article, product)

### Canonical URL
- Her sayfa için canonical URL tanımlayın
- Dil alternatiflerini `alternates.languages` içinde belirtin
- URL yapısı tutarlı olsun

## 🔧 Sitemap Yapılandırması

Sitemap otomatik olarak `app/sitemap.ts` dosyasından üretilir. Yeni sayfa eklerken:

1. `pages` dizisine statik sayfaları ekleyin
2. `blogPosts` dizisine blog yazılarını ekleyin
3. `portfolioItems` dizisine portfolyo projelerini ekleyin

## 🤖 Robots.txt Yapılandırması

`app/robots.ts` dosyasından yönetilir. Varsayılan olarak:
- Tüm botlara erişim izni verilir
- `/api/`, `/admin/`, `/private/` dizinleri engellenir
- Sitemap URL'si belirtilir

## 📈 Performans İpuçları

1. **Görsel Optimizasyonu**:
   - WebP formatı kullanın
   - Görsel boyutlarını optimize edin
   - Lazy loading kullanın

2. **Metadata Yerleşimi**:
   - Schema script'leri `<head>` içine yerleşir
   - Aşırı schema kullanımından kaçının
   - İlgili schema türlerini seçin

3. **Dil Desteği**:
   - Her dil için ayrı metadata tanımlayın
   - `hreflang` etiketlerini kullanın
   - URL yapısını tutarlı tutun

## 🆘 Sık Karşılaşılan Sorunlar

### "use client" Sayfalarında Metadata
Client component'lerde metadata tanımlanamaz. Çözüm:
- Sayfayı Server Component olarak tutun
- İnteraktif kısımları ayrı Client Component olarak import edin

### Schema Script Çalışmıyor
- `SchemaScript` import doğru yapıldığından emin olun
- `id` prop'unun benzersiz olduğundan emin olun
- Çoklu schema için array kullanın

### Sitemap Güncellenmiyor
- Next.js dev server'ı yeniden başlatın
- `next build` komutunu çalıştırın
- `.next` cache dizinini temizleyin

## 📚 Kaynaklar

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)

---

Bu doküman Celebix SEO sistemi hakkında temel bilgileri içerir. Sorularınız için teknik ekibe danışın.
