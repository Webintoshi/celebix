import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "../posts";
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
  const url = `https://celebix.co/${locale}/blog/${slug}`;
  
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
          url: `https://picsum.photos/seed/${post.image}/1200/630`,
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
      images: [`https://picsum.photos/seed/${post.image}/1200/630`],
    },
    alternates: {
      canonical: url,
      languages: {
        tr: `https://celebix.co/tr/blog/${slug}`,
        en: `https://celebix.co/en/blog/${slug}`,
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
  
  // JSON-LD Schema for BlogPosting
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: locale === "tr" ? post.title : post.titleEn,
    description: locale === "tr" ? post.excerpt : post.excerptEn,
    image: `https://picsum.photos/seed/${post.image}/1200/630`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://celebix.co",
    },
    publisher: {
      "@type": "Organization",
      name: "Celebix",
      logo: {
        "@type": "ImageObject",
        url: "https://celebix.co/Logo/Frame%201.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://celebix.co/${locale}/blog/${slug}`,
    },
    keywords: (locale === "tr" ? post.keywords : post.keywordsEn).join(", "),
    articleSection: locale === "tr" ? post.categoryLabel : post.categoryLabelEn,
    inLanguage: locale === "tr" ? "tr-TR" : "en-US",
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient locale={locale} slug={slug} post={post} />
    </>
  );
}
