"use client";

import Script from "next/script";

interface SchemaScriptProps {
  schema: object | object[];
  id?: string;
}

/**
 * SchemaScript Component
 * Injects JSON-LD structured data into the page
 * 
 * Usage:
 * <SchemaScript schema={organizationSchema} />
 * <SchemaScript schema={[schema1, schema2]} id="combined-schema" />
 */
export function SchemaScript({ schema, id = "json-ld-schema" }: SchemaScriptProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas),
      }}
    />
  );
}

/**
 * Organization Schema Script
 * Should be included on all pages
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Celebix",
    "alternateName": "Celebix Digital Agency",
    "url": "https://celebix.co",
    "logo": "https://celebix.co/Logo/celebix beyaz logo.svg",
    "sameAs": [
      "https://twitter.com/celebix",
      "https://linkedin.com/company/celebix",
      "https://instagram.com/celebix",
      "https://github.com/celebix"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-530-209-9628",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": ["Turkish", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Altınordu",
      "addressRegion": "Ordu",
      "addressCountry": "TR"
    }
  };

  return <SchemaScript schema={schema} id="organization-schema" />;
}

/**
 * LocalBusiness Schema Script
 * For local SEO
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Celebix",
    "image": "https://celebix.co/Logo/koyu logo.svg",
    "@id": "https://celebix.co",
    "url": "https://celebix.co",
    "telephone": "+90 530 209 96 28",
    "email": "merhaba@celebix.co",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Altınordu",
      "addressRegion": "Ordu",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.9865",
      "longitude": "37.8798"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "serviceType": ["Yazılım Geliştirme", "Dijital Pazarlama", "Sosyal Medya Yönetimi", "E-Ticaret Çözümleri"]
  };

  return <SchemaScript schema={schema} id="local-business-schema" />;
}

/**
 * WebSite Schema Script
 * For site search in Google
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Celebix",
    "url": "https://celebix.co",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://celebix.co/tr/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return <SchemaScript schema={schema} id="website-schema" />;
}

/**
 * Breadcrumb Schema Script
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://celebix.co${item.url}`
    }))
  };

  return <SchemaScript schema={schema} id="breadcrumb-schema" />;
}

/**
 * Product Schema Script - E-Ticaret
 */
export function EcommerceProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Celebix E-Ticaret",
    "image": [
      "https://celebix.co/images/ecommerce-1.jpg",
      "https://celebix.co/images/ecommerce-2.jpg"
    ],
    "description": "AI destekli, sınırsız ürün kapasiteli premium e-ticaret platformu. Komisyon yok, sınırsız özellik!",
    "brand": {
      "@type": "Brand",
      "name": "Celebix"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://celebix.co/tr/e-ticaret-paketleri",
      "price": "19000",
      "priceCurrency": "TRY",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemOffered": {
        "@type": "Service",
        "name": "Celebix E-Ticaret Platformu"
      },
      "seller": {
        "@type": "Organization",
        "name": "Celebix"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5"
    }
  };

  return <SchemaScript schema={schema} id="ecommerce-product-schema" />;
}

/**
 * SoftwareApplication Schema Script - SaaS
 */
export function SaaSProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tık Profil - Celebix SaaS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "700",
      "priceCurrency": "TRY",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5"
    },
    "featureList": [
      "Komisyonsuz satış",
      "Sınırsız ürün",
      "WhatsApp Business entegrasyonu",
      "Ücretsiz SMS",
      "AI destekli panel",
      "68 sektör desteği"
    ],
    "softwareVersion": "2.0",
    "fileSize": "Cloud-based",
    "installUrl": "https://celebix.co/tr/celebix-saas-platformu"
  };

  return <SchemaScript schema={schema} id="saas-product-schema" />;
}

/**
 * Service Schema Script
 */
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
}

export function ServiceSchema({ name, description, url, provider = "Celebix" }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider
    },
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "url": url.startsWith("http") ? url : `https://celebix.co${url}`
  };

  return <SchemaScript schema={schema} id={`service-schema-${name.toLowerCase().replace(/\s+/g, "-")}`} />;
}

/**
 * FAQPage Schema Script
 */
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <SchemaScript schema={schema} id="faq-schema" />;
}

/**
 * BlogPosting Schema Script
 */
interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  tags: string[];
}

export function BlogPostSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
  tags
}: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Celebix",
      "logo": {
        "@type": "ImageObject",
        "url": "https://celebix.co/Logo/celebix beyaz logo.svg"
      }
    },
    "keywords": tags.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return <SchemaScript schema={schema} id="blog-post-schema" />;
}

/**
 * Review Schema Script
 */
interface ReviewSchemaProps {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  itemReviewed: string;
}

export function ReviewSchema({ author, rating, reviewBody, datePublished, itemReviewed }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rating,
      "bestRating": 5
    },
    "reviewBody": reviewBody,
    "datePublished": datePublished,
    "itemReviewed": {
      "@type": "Organization",
      "name": itemReviewed
    }
  };

  return <SchemaScript schema={schema} id={`review-schema-${author.toLowerCase().replace(/\s+/g, "-")}`} />;
}

/**
 * Portfolio/Project Schema Script
 */
interface PortfolioSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
  category: string;
}

export function PortfolioSchema({ name, description, url, image, category }: PortfolioSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "genre": category,
    "creator": {
      "@type": "Organization",
      "name": "Celebix"
    }
  };

  return <SchemaScript schema={schema} id={`portfolio-schema-${name.toLowerCase().replace(/\s+/g, "-")}`} />;
}

/**
 * VideoObject Schema Script - For Video SEO
 */
interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl?: string;
  embedUrl?: string;
  uploadDate: string;
  duration?: string;
  views?: number;
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  embedUrl,
  uploadDate,
  duration,
  views
}: VideoSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "publisher": {
      "@type": "Organization",
      "name": "Celebix",
      "logo": {
        "@type": "ImageObject",
        "url": "https://celebix.co/Logo/koyu logo.svg"
      }
    }
  };

  if (contentUrl) schema.contentUrl = contentUrl;
  if (embedUrl) schema.embedUrl = embedUrl;
  if (duration) schema.duration = duration;
  if (views) schema.interactionStatistic = {
    "@type": "InteractionCounter",
    "interactionType": { "@type": "WatchAction" },
    "userInteractionCount": views
  };

  return <SchemaScript schema={schema} id={`video-schema-${name.toLowerCase().replace(/\s+/g, "-")}`} />;
}
