# Celebix - AI Coding Agent Guide

This document provides comprehensive information about the Celebix project for AI coding agents. Celebix is a bilingual (Turkish/English) corporate website for a software and digital marketing company based in Ordu, Turkey.

---

## 🏗️ Project Overview

**Project Name**: Celebix  
**Domain**: celebix.co  
**Location**: Altınordu, Ordu, Turkey  
**Languages**: Turkish (TR) - default, English (EN)  

### Business Focus
- E-commerce solutions (E-Ticaret)
- Enterprise software development (Kurumsal Yazılım)
- Digital marketing services (Dijital Pazarlama)
- Social media management (Sosyal Medya Yönetimi)
- SaaS platform: "Tık Profil" (Commission-free e-commerce)

---

## 🛠️ Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 14.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x |
| Animation | Framer Motion | 11.x |
| Icons | Lucide React | 0.400.x |
| Maps | Mapbox GL | 3.x |
| Build Output | Standalone | - |

---

## 📁 Project Structure

```
my-app/
├── app/                          # Next.js App Router
│   ├── [locale]/                # Locale-based routing (tr, en)
│   │   ├── page.tsx             # Homepage
│   │   ├── layout.tsx           # Locale layout with viewport config
│   │   ├── blog/                # Blog pages
│   │   │   ├── page.tsx         # Blog listing
│   │   │   ├── posts.ts         # Blog posts data (215KB+)
│   │   │   └── [slug]/          # Individual blog posts
│   │   ├── e-ticaret-paketleri/ # E-commerce packages page
│   │   ├── celebix-saas-platformu/ # SaaS platform page (Tık Profil)
│   │   ├── kurumsal-yazilim/    # Enterprise software page
│   │   ├── dijital-pazarlama/   # Digital marketing page
│   │   ├── sosyal-medya/        # Social media page
│   │   ├── hakkimizda/          # About page
│   │   ├── iletisim/            # Contact page
│   │   ├── portfoy/             # Portfolio page
│   │   └── ...                  # Other service pages
│   ├── api/                     # API routes
│   │   ├── index-now/           # IndexNow submission API
│   │   ├── indexer/             # Search indexer APIs
│   │   └── ping/                # Health check endpoint
│   ├── sitemap.xml/             # Dynamic sitemap generator
│   ├── rss.xml/                 # RSS feed generator
│   ├── robots.ts                # Robots.txt configuration
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout with metadata
│   └── not-found.tsx            # 404 error page
├── components/
│   ├── sections/                # Page section components
│   │   ├── Navigation.tsx       # Main navigation
│   │   ├── Hero.tsx             # Homepage hero
│   │   ├── Products.tsx         # Products/services grid
│   │   ├── Portfolio.tsx        # Portfolio showcase
│   │   ├── Process.tsx          # Workflow process
│   │   ├── Testimonials.tsx     # Customer testimonials
│   │   ├── CTA.tsx              # Call-to-action section
│   │   ├── Footer.tsx           # Site footer
│   │   └── TrustedBy.tsx        # Trust badges
│   ├── SchemaScript.tsx         # JSON-LD schema components
│   ├── FloatingButtons.tsx      # Floating action buttons
│   └── landing-visuals/         # Page-specific visuals
├── lib/
│   ├── seo/
│   │   ├── schemas.ts           # JSON-LD schema definitions
│   │   ├── metadata.ts          # SEO metadata templates
│   │   └── README.md            # SEO documentation
│   ├── analytics/               # Analytics utilities
│   ├── indexer/                 # Search indexing utilities
│   ├── i18n.ts                  # Locale configuration
│   └── utils.ts                 # Utility functions (cn, placeholder SVG)
├── messages/                    # i18n translation files
│   ├── tr.json                  # Turkish translations
│   └── en.json                  # English translations
├── content/                     # Content marketing files
│   ├── backlink-strategy.md
│   ├── editorial-calendar-2026.md
│   └── *.md                     # Various content files
├── public/                      # Static assets
│   ├── Logo/                    # Company logos
│   ├── images/                  # Image assets
│   ├── favicon.svg
│   └── og-image.webp            # Open Graph default image
├── middleware.ts                # Next.js middleware for i18n routing
├── tailwind.config.ts           # Tailwind configuration with custom theme
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── blog-post-template.js        # Template for new blog posts
└── BLOG_STYLE_GUIDE.md          # Blog writing guidelines
```

---

## 🚀 Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 2130)
npm run dev

# Create production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint

# Clear Next.js cache (useful when build issues occur)
rm -rf .next && npm run build
```

### Development URLs
- Turkish: http://localhost:2130/tr
- English: http://localhost:2130/en

---

## 🎨 Design System (Aurora Theme)

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `light-100` | `#F8F8F8` | Background |
| `light-50` | `#FFFFFF` | Surface/elevated |
| `dark-900` | `#2A2A2A` | Primary text |
| `dark-950` | `#1A1A1A` | Headings/emphasis |
| `aurora-indigo` | `#6366F1` | Primary accent |
| `aurora-violet` | `#8B5CF6` | Secondary accent |
| `aurora-magenta` | `#EC4899` | Tertiary accent |
| `aurora-coral` | `#F97316` | Quaternary accent |

### Typography

| Style | Font | Size |
|-------|------|------|
| Display | Outfit (system fallback) | clamp(3.5rem, 8vw, 7rem) |
| H1 | Outfit | clamp(2.5rem, 5vw, 4rem) |
| H2 | Outfit | clamp(1.75rem, 3vw, 2.5rem) |
| Body | Inter | clamp(1rem, 1.1vw, 1.125rem) |

### Custom CSS Classes

```css
/* Utility classes available */
.text-gradient           /* Aurora gradient text */
.glass-card             /* Frosted glass effect */
.section-padding        /* Responsive section padding */
.container-max          /* Max-width container (1400px) */
.hover-lift             /* Hover elevation effect */
.content-visibility-auto /* Performance optimization */
```

---

## 🌍 Internationalization (i18n)

### Locale Configuration
- **Default Locale**: Turkish (`tr`)
- **Supported Locales**: `tr`, `en`
- **URL Pattern**: `/:locale/page-path`
- **Middleware**: Auto-redirects root `/` to `/tr`

### Adding Translations

1. Add translation keys to `messages/tr.json` and `messages/en.json`
2. Use in components by passing `locale` prop from page params
3. Content is manually switched based on `locale === "tr"` checks

### Page Structure Pattern

```tsx
// app/[locale]/example-page/page.tsx
export default function ExamplePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return (
    <div>
      {isTr ? "Türkçe içerik" : "English content"}
    </div>
  );
}
```

---

## 🔍 SEO System

### Overview
Comprehensive SEO implementation with:
- Dynamic metadata per page
- JSON-LD Schema markup (Organization, Product, Service, etc.)
- Automatic sitemap.xml generation
- Robots.txt configuration
- Open Graph and Twitter Card support
- Canonical URLs and hreflang tags
- Breadcrumb schema

### Available Schema Components

Import from `@/components/SchemaScript`:

| Component | Usage |
|-----------|-------|
| `OrganizationSchema` | All pages |
| `LocalBusinessSchema` | Contact page |
| `WebSiteSchema` | Homepage, Blog |
| `BreadcrumbSchema` | All pages |
| `EcommerceProductSchema` | E-commerce page |
| `SaaSProductSchema` | SaaS platform page |
| `ServiceSchema` | Service pages |
| `FAQSchema` | FAQ sections |
| `BlogPostSchema` | Blog posts |
| `VideoSchema` | Video content |

### Page SEO Pattern

```tsx
// app/[locale]/example/layout.tsx
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
      canonical: `/${locale}/example`,
      languages: {
        tr: "/tr/example",
        en: "/en/example",
      },
    },
    openGraph: {
      title: isTr ? "OG Başlık TR" : "OG Title EN",
      description: isTr ? "OG Açıklama TR" : "OG Description EN",
      url: `https://celebix.co/${locale}/example`,
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
        { name: isTr ? "Sayfa Adı" : "Page Name", url: `/${locale}/example` },
      ]} />
      {children}
    </>
  );
}
```

### SEO Guidelines

- **Title**: 50-60 characters, include brand `| Celebix` at end
- **Description**: 150-160 characters, include CTA
- **Keywords**: 5-10 keywords, include location ("Ordu", "Türkiye")
- **OG Image**: 1200x630px, stored in `/public/og-image.webp`

---

## 📝 Blog System

### Blog Post Data Structure

```typescript
interface BlogPost {
  slug: string;                    // Unique URL identifier
  title: string;                   // Turkish title
  titleEn: string;                 // English title
  category: string;                // "software" | "marketing" | "social" | "technology" | "strategy"
  categoryEn: string;              // Same value
  categoryLabel: string;           // Turkish label
  categoryLabelEn: string;         // English label
  image: number;                   // 60-99 (unique number for image)
  date: string;                    // YYYY-MM-DD
  readTime: string;                // "8 dk" (Turkish)
  readTimeEn: string;              // "8 min" (English)
  author: string;
  authorRole: string;
  authorRoleEn: string;
  authorBio: string;
  authorBioEn: string;
  tags: string[];                  // 3-5 tags
  content: string[];               // Turkish paragraphs
  contentEn: string[];             // English paragraphs
  featured?: boolean;              // Featured post flag
}
```

### Adding a New Blog Post

1. Copy `blog-post-template.js` and fill in content
2. Add to `app/[locale]/blog/page.tsx` in `blogPosts` array (prepend to top)
3. Add to `app/[locale]/blog/[slug]/page.tsx` in `blogPostsData` object
4. Update `app/sitemap.xml/route.ts` if needed

### Content Formatting
- Headings: `## Heading Text`
- Lists: `- Item 1\n- Item 2\n- Item 3`
- Code blocks: `` ```typescript\n...\n``` ``

---

## ✅ Code Style Guidelines

### TypeScript
- Strict mode enabled
- Use explicit types for function parameters
- Prefer `interface` over `type` for object definitions

### Component Structure
```tsx
// 1. Imports
import { Metadata } from "next";
import Component from "@/components/Component";

// 2. Metadata export (for pages)
export async function generateMetadata(): Promise<Metadata> { }

// 3. Main component
export default function PageName({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return ();
}
```

### Styling Conventions
- Use Tailwind classes exclusively
- Custom classes defined in `globals.css` with `@layer`
- Color tokens from `tailwind.config.ts`
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

### File Naming
- Components: PascalCase (e.g., `Hero.tsx`)
- Pages: lowercase with hyphens (e.g., `e-ticaret-paketleri`)
- Utilities: camelCase (e.g., `utils.ts`)

---

## 🧪 Testing Strategy

Currently, the project does not have automated tests configured. Testing is done via:

1. **Manual Testing**: Check both TR and EN versions
2. **Build Verification**: `npm run build` must pass without errors
3. **SEO Validation**: 
   - Check metadata in page source
   - Validate schemas with Google's Rich Results Test
   - Verify sitemap at `/sitemap.xml`

---

## 🔒 Security Considerations

### Environment Variables
- No sensitive environment variables currently used
- API keys (if needed) should be added to `.env.local` (not in repo)

### API Routes
- All API routes in `app/api/` should validate inputs
- IndexNow API uses hardcoded key in `public/celebix-index-key-2025.txt`

### Content Security
- Google Tag Manager ID is hardcoded: `GTM-WXQCTF5D`
- Scripts use `dangerouslySetInnerHTML` for GTM (unavoidable)

---

## 📦 Deployment

### Build Configuration
- Output mode: `standalone` (for Docker/containerized deployment)
- Images: Unoptimized (handled by CDN)
- Trailing slash: Not configured (default)

### Pre-deployment Checklist
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors
- [ ] Both TR and EN versions render correctly
- [ ] All SchemaScript components have unique IDs
- [ ] Sitemap includes new pages
- [ ] OG images are accessible

---

## 🆘 Troubleshooting

### Common Issues

**Build fails with TypeScript error**
```bash
rm -rf .next && npm run build
```

**Schema not appearing in page source**
- Ensure `SchemaScript` is imported correctly
- Check that `id` prop is unique
- Verify component is in a Server Component (not "use client")

**Metadata not working**
- `generateMetadata` must be async
- Ensure params are destructured correctly
- Layout must be Server Component (no "use client")

**i18n redirect not working**
- Check `middleware.ts` matcher config
- Verify locale is in URL (`/tr/` or `/en/`)

---

## 📚 Additional Documentation

| File | Description |
|------|-------------|
| `BLOG_STYLE_GUIDE.md` | Blog writing style guide |
| `lib/seo/README.md` | Detailed SEO documentation |
| `blog-post-template.js` | Blog post template |

---

## 📞 Contact Information

- **Website**: https://celebix.co
- **Email**: merhaba@celebix.co
- **Phone**: +90 530 209 96 28
- **Address**: Altınordu, Ordu, Turkey

---

**Last Updated**: 2025-03-29  
**Version**: 1.0.0
