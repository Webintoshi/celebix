/**
 * SEO Schema Markup Utilities
 * Celebix - JSON-LD Schema Templates
 */

// Organization Schema
export const organizationSchema = {
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

// WebSite Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Celebix",
  "url": "https://celebix.co",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://celebix.co/tr/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Celebix",
  "image": "https://celebix.co/Logo/koyu logo.svg",
  "url": "https://celebix.co",
  "telephone": "+90 530 209 96 28",
  "email": "merhaba@celebix.co",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Altınordu",
    "addressRegion": "Ordu",
    "postalCode": "",
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
  "serviceType": ["Yazılım Geliştirme", "Dijital Pazarlama", "Sosyal Medya Yönetimi"]
};

// Product Schema - E-Ticaret
export const ecommerceProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Celebix E-Ticaret",
  "image": "https://celebix.co/images/ecommerce-product.jpg",
  "description": "AI destekli, sınırsız ürün kapasiteli premium e-ticaret platformu",
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
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50"
  }
};

// Product Schema - SaaS
export const saasProductSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tık Profil - Celebix SaaS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "700",
    "priceCurrency": "TRY",
    "priceValidUntil": "2025-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500"
  }
};

// Service Schema - Kurumsal Yazılım
export const softwareServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Kurumsal Yazılım Geliştirme",
  "provider": {
    "@type": "Organization",
    "name": "Celebix"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Turkey"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Yazılım Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Uygulama Geliştirme"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobil Uygulama Geliştirme"
        }
      }
    ]
  }
};

// Service Schema - Dijital Pazarlama
export const marketingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Dijital Pazarlama",
  "provider": {
    "@type": "Organization",
    "name": "Celebix"
  },
  "areaServed": "TR",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dijital Pazarlama Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Google Ads Yönetimi"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Optimizasyonu"
        }
      }
    ]
  }
};

// Blog Post Schema
export const blogPostSchema = (post: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  tags: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.description,
  "image": post.image,
  "url": post.url,
  "datePublished": post.datePublished,
  "dateModified": post.dateModified,
  "author": {
    "@type": "Person",
    "name": post.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Celebix",
    "logo": {
      "@type": "ImageObject",
      "url": "https://celebix.co/Logo/celebix beyaz logo.svg"
    }
  },
  "keywords": post.tags.join(", "),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": post.url
  }
});

// Portfolio/Project Schema
export const portfolioSchema = (project: {
  name: string;
  description: string;
  url: string;
  image: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.name,
  "description": project.description,
  "url": project.url,
  "image": project.image,
  "genre": project.category,
  "creator": {
    "@type": "Organization",
    "name": "Celebix"
  }
});

// FAQPage Schema
export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
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
});

// Review Schema
export const reviewSchema = (review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  itemReviewed: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": review.author
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.rating,
    "bestRating": 5
  },
  "reviewBody": review.reviewBody,
  "datePublished": review.datePublished,
  "itemReviewed": {
    "@type": "Organization",
    "name": review.itemReviewed
  }
});

// BreadcrumbList Schema
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// BlogPosting Schema for articles
export const blogPostingSchema = (post: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  keywords: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": post.url
  },
  "headline": post.title,
  "description": post.description,
  "image": post.image,
  "author": {
    "@type": "Person",
    "name": post.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Celebix",
    "logo": {
      "@type": "ImageObject",
      "url": "https://celebix.co/Logo/koyu logo.svg"
    }
  },
  "datePublished": post.datePublished,
  "dateModified": post.dateModified || post.datePublished,
  "keywords": post.keywords.join(", ")
});

// Helper function to inject schema
export function injectSchema(schema: object): string {
  return JSON.stringify(schema);
}
