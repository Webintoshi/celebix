import { blogPosts } from "@/app/[locale]/blog/posts";
import { SITE_URL, absoluteSiteUrl } from "@/lib/site";

type LlmsLink = {
  label: string;
  url: string;
  description?: string;
};

const corePages: Record<"tr" | "en", LlmsLink[]> = {
  tr: [
    {
      label: "Ana sayfa",
      url: absoluteSiteUrl("/tr"),
      description: "Celebix'in yazilim, e-ticaret ve dijital pazarlama hizmetlerini genel olarak tanitan giris sayfasi.",
    },
    {
      label: "E-ticaret paketleri",
      url: absoluteSiteUrl("/tr/e-ticaret-paketleri"),
      description: "Komisyonsuz e-ticaret kurulumu, paketler, ozellikler ve ticari uygunluk detayi.",
    },
    {
      label: "Kurumsal yazilim",
      url: absoluteSiteUrl("/tr/kurumsal-yazilim"),
      description: "Ozel yazilim, web uygulamasi, mobil uygulama ve entegrasyon hizmetlerinin ana ticari sayfasi.",
    },
    {
      label: "Dijital pazarlama",
      url: absoluteSiteUrl("/tr/dijital-pazarlama"),
      description: "Google Ads, SEO, icerik ve performans pazarlama hizmetlerini anlatan ana sayfa.",
    },
    {
      label: "Sosyal medya",
      url: absoluteSiteUrl("/tr/sosyal-medya"),
      description: "Sosyal medya yonetimi, icerik uretimi ve video odakli hizmetlerin ozeti.",
    },
    {
      label: "Celebix SaaS platformu",
      url: absoluteSiteUrl("/tr/celebix-saas-platformu"),
      description: "Tik Profil odakli SaaS ve komisyonsuz satis altyapisini anlatan urun sayfasi.",
    },
    {
      label: "Ordu yazilim sirketi",
      url: absoluteSiteUrl("/tr/ordu-yazilim-sirketi"),
      description: "Ordu odakli yerel yazilim ve dijital buyume sayfasi.",
    },
    {
      label: "Portfoy",
      url: absoluteSiteUrl("/tr/portfoy"),
      description: "Ornek projeler, urunler ve referans niteligindeki teslimler.",
    },
    {
      label: "Hakkimizda",
      url: absoluteSiteUrl("/tr/hakkimizda"),
      description: "Ekip yaklasimi, calisma prensipleri ve sirket konumlandirmasi.",
    },
    {
      label: "Iletisim",
      url: absoluteSiteUrl("/tr/iletisim"),
      description: "Teklif, proje gorusmesi ve iletisim aksiyonlari icin ana lead sayfasi.",
    },
    {
      label: "Blog",
      url: absoluteSiteUrl("/tr/blog"),
      description: "Turkce blog arsivi; e-ticaret, Google Ads, SEO ve yerel buyume iceriklerinin listesi.",
    },
  ],
  en: [
    {
      label: "Homepage",
      url: absoluteSiteUrl("/en"),
      description: "English overview of Celebix software, e-commerce, and digital marketing services.",
    },
    {
      label: "E-commerce packages",
      url: absoluteSiteUrl("/en/e-ticaret-paketleri"),
      description: "Core commercial page for e-commerce setup, package scope, and commission-free infrastructure.",
    },
    {
      label: "Enterprise software",
      url: absoluteSiteUrl("/en/kurumsal-yazilim"),
      description: "Main English service page for custom software, web apps, mobile apps, and integrations.",
    },
    {
      label: "Digital marketing",
      url: absoluteSiteUrl("/en/dijital-pazarlama"),
      description: "Main English service page for Google Ads, SEO, content, and performance marketing.",
    },
    {
      label: "Social media management",
      url: absoluteSiteUrl("/en/sosyal-medya"),
      description: "English service page for social media management, video production, and content delivery.",
    },
    {
      label: "Celebix SaaS platform",
      url: absoluteSiteUrl("/en/celebix-saas-platformu"),
      description: "English product page for Tik Profil and the SaaS commerce offer.",
    },
    {
      label: "Ordu software company",
      url: absoluteSiteUrl("/en/ordu-yazilim-sirketi"),
      description: "English local landing page for businesses searching for an Ordu-based software partner.",
    },
    {
      label: "Portfolio",
      url: absoluteSiteUrl("/en/portfoy"),
      description: "English portfolio page for products, case examples, and delivery quality signals.",
    },
    {
      label: "About us",
      url: absoluteSiteUrl("/en/hakkimizda"),
      description: "English about page with company positioning and working principles.",
    },
    {
      label: "Contact",
      url: absoluteSiteUrl("/en/iletisim"),
      description: "English lead and contact page for commercial inquiries.",
    },
    {
      label: "Blog",
      url: absoluteSiteUrl("/en/blog"),
      description: "English blog archive for software, SEO, Google Ads, and local growth content.",
    },
  ],
};

const optionalResources: LlmsLink[] = [
  {
    label: "Full llms content map",
    url: absoluteSiteUrl("/llms-full.txt"),
    description: "Expanded machine-readable map of core pages and all current Turkish and English blog content.",
  },
  {
    label: "XML sitemap",
    url: absoluteSiteUrl("/sitemap.xml"),
    description: "Canonical XML URL inventory for indexable public pages.",
  },
  {
    label: "Robots policy",
    url: absoluteSiteUrl("/robots.txt"),
    description: "Crawler access policy for public pages and restricted technical paths.",
  },
  {
    label: "Privacy policy",
    url: absoluteSiteUrl("/tr/gizlilik"),
    description: "Turkish privacy and data handling page.",
  },
  {
    label: "Terms of use",
    url: absoluteSiteUrl("/tr/kullanim-kosullari"),
    description: "Turkish terms page for legal and usage expectations.",
  },
];

function escapeLabel(label: string) {
  return label.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
}

function normalizeDescription(value?: string) {
  return value?.replace(/\s+/g, " ").trim();
}

function linkLine(link: LlmsLink) {
  const description = normalizeDescription(link.description);
  if (!description) {
    return `- [${escapeLabel(link.label)}](${link.url})`;
  }

  return `- [${escapeLabel(link.label)}](${link.url}): ${description}`;
}

function sortPostsByDateDesc() {
  return [...blogPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

function buildKeyPosts(locale: "tr" | "en", count = 8): LlmsLink[] {
  const ordered = sortPostsByDateDesc();
  const featured = ordered.filter((post) => post.featured);
  const unique = new Map<string, typeof ordered[number]>();

  for (const post of [...featured, ...ordered]) {
    if (unique.size >= count) {
      break;
    }
    unique.set(post.slug, post);
  }

  return Array.from(unique.values()).map((post) => ({
    label: locale === "tr" ? post.title : post.titleEn,
    url: absoluteSiteUrl(`/${locale}/blog/${post.slug}`),
    description: locale === "tr" ? post.excerpt : post.excerptEn,
  }));
}

function buildAllPosts(locale: "tr" | "en"): LlmsLink[] {
  return sortPostsByDateDesc().map((post) => ({
    label: locale === "tr" ? post.title : post.titleEn,
    url: absoluteSiteUrl(`/${locale}/blog/${post.slug}`),
    description: locale === "tr" ? post.excerpt : post.excerptEn,
  }));
}

function section(title: string, links: LlmsLink[]) {
  return [`## ${title}`, "", ...links.map(linkLine), ""].join("\n");
}

export function buildLlmsTxt() {
  return [
    "# Celebix",
    "",
    "> Celebix is a bilingual software, e-commerce, and digital marketing company based in Ordu, Turkiye. The canonical host is non-www https://celebix.net, Turkish is the default public locale, and English mirrors the core commercial and editorial content.",
    "",
    "Use Turkish pages for Turkish-language requests and English pages for English-language requests. English content intentionally lives under /en while several canonical slugs remain Turkish for route consistency. Legacy celebix.co URLs are redirects and should not be treated as canonical sources.",
    "",
    "For commercial intent, prefer the service pages and contact page. For editorial and research intent, use the blog archive and the linked article URLs. Public content is available without login.",
    "",
    section("Turkish core pages", corePages.tr).trimEnd(),
    "",
    section("English core pages", corePages.en).trimEnd(),
    "",
    section("Key Turkish articles", buildKeyPosts("tr")).trimEnd(),
    "",
    section("Key English articles", buildKeyPosts("en")).trimEnd(),
    "",
    section("Optional", optionalResources).trimEnd(),
    "",
  ].join("\n");
}

export function buildLlmsFullTxt() {
  return [
    "# Celebix full content map",
    "",
    `> Expanded machine-readable inventory for ${SITE_URL}. This file covers core Turkish and English pages plus the full current blog catalog. Prefer the canonical celebix.net URLs listed here over redirected or legacy domains.`,
    "",
    "Use this file when a fuller content sweep is needed beyond the curated /llms.txt overview. Turkish is the primary locale for the brand and many commercial routes keep Turkish pathnames in both locales by design.",
    "",
    section("Turkish core pages", corePages.tr).trimEnd(),
    "",
    section("English core pages", corePages.en).trimEnd(),
    "",
    section("Turkish blog archive", buildAllPosts("tr")).trimEnd(),
    "",
    section("English blog archive", buildAllPosts("en")).trimEnd(),
    "",
    section("Optional", optionalResources).trimEnd(),
    "",
  ].join("\n");
}
