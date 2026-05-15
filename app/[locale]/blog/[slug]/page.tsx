import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "../posts";
import { absoluteSiteUrl } from "@/lib/site";
import BlogPostClient from "./BlogPostClient";

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = params;
  const isTr = locale === "tr";
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: isTr ? "Yazı Bulunamadı | Celebix" : "Post Not Found | Celebix",
    };
  }
  
  const title = isTr ? post.title : post.titleEn;
  const description = isTr ? post.excerpt : post.excerptEn;
  const keywords = isTr ? post.keywords : post.keywordsEn;
  const url = absoluteSiteUrl(`/${locale}/blog/${slug}`);
  
  return {
    title: `${title} | Celebix`,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: `${title} | Celebix`,
      description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: keywords,
      url,
      images: [
        {
          url: absoluteSiteUrl("/og-image.webp"),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: isTr ? "tr_TR" : "en_US",
      siteName: "Celebix",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Celebix`,
      description,
      images: [absoluteSiteUrl("/og-image.webp")],
    },
    alternates: {
      canonical: url,
      languages: {
        tr: absoluteSiteUrl(`/tr/blog/${slug}`),
        en: absoluteSiteUrl(`/en/blog/${slug}`),
        "x-default": absoluteSiteUrl(`/tr/blog/${slug}`),
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Generate static paths for all blog posts
export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  blogPosts.forEach(post => {
    params.push({ locale: "tr", slug: post.slug });
    params.push({ locale: "en", slug: post.slug });
  });
  
  return params;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  const isTr = locale === "tr";
  const postUrl = absoluteSiteUrl(`/${locale}/blog/${slug}`);
  
  // JSON-LD Schema for BlogPosting
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: isTr ? post.title : post.titleEn,
    description: isTr ? post.excerpt : post.excerptEn,
    image: absoluteSiteUrl("/og-image.webp"),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: absoluteSiteUrl("/tr"),
    },
    publisher: {
      "@type": "Organization",
      name: "Celebix",
      logo: {
        "@type": "ImageObject",
        url: absoluteSiteUrl("/Logo/Frame%201.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: (isTr ? post.keywords : post.keywordsEn).join(", "),
    articleSection: isTr ? post.categoryLabel : post.categoryLabelEn,
    inLanguage: isTr ? "tr-TR" : "en-US",
  };
  
  // Breadcrumb Schema for Blog Post
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isTr ? "Ana Sayfa" : "Home",
        item: absoluteSiteUrl(`/${locale}`),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isTr ? "Blog" : "Blog",
        item: absoluteSiteUrl(`/${locale}/blog`),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isTr ? post.title : post.titleEn,
        item: postUrl,
      },
    ],
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogPostClient locale={locale} slug={slug} post={post} />
    </>
  );
}
