"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook, ArrowRight, Tag, User } from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { generatePlaceholderSVG } from "@/lib/utils";
import { blogPosts, getRelatedPosts } from "../posts";

// Extended interface for display
interface DisplayPost {
  slug: string;
  title: string;
  titleEn: string;
  content: string[];
  contentEn: string[];
  category: string;
  categoryLabel: string;
  categoryLabelEn: string;
  image: number;
  date: string;
  readTime: string;
  readTimeEn: string;
  author: string;
  authorRole: string;
  authorRoleEn: string;
  authorBio: string;
  authorBioEn: string;
  tags: string[];
  keywords: string[];
  keywordsEn: string[];
}

const categoryColors: Record<string, string> = {
  software: "from-aurora-indigo to-aurora-violet",
  marketing: "from-orange-500 to-amber-600",
  social: "from-pink-500 to-rose-600",
  technology: "from-emerald-500 to-teal-600",
  strategy: "from-blue-500 to-indigo-600",
  ecommerce: "from-purple-500 to-violet-600",
};

const getPost = (slug: string): DisplayPost | null => {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return null;
  
  return {
    ...post,
    authorBio: "Celebix ekibi olarak dijital dünyadan en güncel bilgileri ve uzman görüşlerini sizinle paylaşıyoruz.",
    authorBioEn: "As the Celebix team, we share the most up-to-date information and expert opinions from the digital world with you.",
    tags: post.keywords.slice(0, 5),
  };
};

export default function BlogPost({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const isTr = locale === "tr";
  const post = getPost(slug);
  
  // Get related posts from the same category
  const relatedPostsRaw = getRelatedPosts(slug, 3);
  const relatedPosts = relatedPostsRaw.map(p => ({
    slug: p.slug,
    title: p.title,
    titleEn: p.titleEn,
    category: p.categoryLabel,
    categoryEn: p.categoryLabelEn,
    image: p.image,
  }));

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(isTr ? "tr-TR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!post) {
    return (
      <>
        <Navigation locale={locale} />
        <main className="pt-32 pb-20 min-h-screen bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16 text-center">
            <h1 className="font-display text-4xl text-dark-900 mb-4">
              {isTr ? "Yazı Bulunamadı" : "Post Not Found"}
            </h1>
            <p className="text-dark-900/60 mb-8">
              {isTr ? "Aradığınız yazı mevcut değil veya kaldırılmış olabilir." : "The post you're looking for may not exist or has been removed."}
            </p>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-900 text-light-100 rounded-full hover:bg-dark-800 transition-colors"
            >
              <ArrowLeft size={18} />
              {isTr ? "Blog'a Dön" : "Back to Blog"}
            </Link>
          </div>
        </main>
        <Footer locale={locale} />
      </>
    );
  }

  const content = isTr ? post.content : post.contentEn;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = isTr ? post.title : post.titleEn;

  // Parse markdown content
  const renderContent = (text: string) => {
    // Handle strong/bold text
    let parsed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Handle links
    parsed = parsed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-aurora-violet hover:underline">$1</a>');
    return parsed;
  };

  return (
    <>
      <Navigation locale={locale} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-light-100">
          <div className="absolute inset-0 bg-gradient-to-b from-aurora-violet/5 via-transparent to-transparent" />
          
          <div className="container-max mx-auto px-6 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link 
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 text-small text-dark-900/60 hover:text-dark-900 mb-8"
              >
                <ArrowLeft size={16} />
                {isTr ? "Tüm Yazılar" : "All Posts"}
              </Link>

              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[post.category]} text-white mb-6`}>
                {isTr ? post.categoryLabel : post.categoryLabelEn}
              </span>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-dark-900 mb-6 leading-tight max-w-4xl">
                {isTr ? post.title : post.titleEn}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-small text-dark-900/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aurora-indigo to-aurora-violet flex items-center justify-center text-white font-medium">
                    {post.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-medium text-dark-900">{post.author}</div>
                    <div className="text-xs">{isTr ? post.authorRole : post.authorRoleEn}</div>
                  </div>
                </div>
                <span className="hidden sm:block w-px h-8 bg-dark-900/10" />
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {isTr ? post.readTime : post.readTimeEn}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-dark-900/10"
            >
              <img
                src={generatePlaceholderSVG(post.image, 1200, 600, `${post.image} - ${isTr ? post.title : post.titleEn}`)}
                alt={isTr ? post.title : post.titleEn}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-8"
              >
                <div className="prose prose-lg max-w-none">
                  {content.map((paragraph, index) => {
                    // Handle H2 headers
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="font-display text-2xl lg:text-3xl text-dark-900 mt-16 mb-6 first:mt-0">
                          {paragraph.replace("## ", "")}
                        </h2>
                      );
                    }
                    
                    // Handle H3 headers
                    if (paragraph.startsWith("### ")) {
                      return (
                        <h3 key={index} className="font-display text-xl lg:text-2xl text-dark-900 mt-12 mb-4">
                          {paragraph.replace("### ", "")}
                        </h3>
                      );
                    }
                    
                    // Handle code blocks
                    if (paragraph.startsWith("```")) {
                      const lines = paragraph.split('\n');
                      const language = lines[0].replace('```', '').trim();
                      const code = lines.slice(1, -1).join('\n');
                      return (
                        <div key={index} className="my-8 rounded-xl overflow-hidden bg-dark-900 shadow-lg">
                          {language && (
                            <div className="px-4 py-2 bg-dark-800 text-light-100/60 text-xs font-medium">
                              {language}
                            </div>
                          )}
                          <pre className="p-4 overflow-x-auto">
                            <code className="text-sm text-light-100 font-mono">{code}</code>
                          </pre>
                        </div>
                      );
                    }
                    
                    // Handle tables
                    if (paragraph.includes('|')) {
                      const rows = paragraph.split('\n').filter(r => r.trim());
                      if (rows.length >= 2) {
                        return (
                          <div key={index} className="my-8 overflow-x-auto">
                            <table className="w-full border-collapse">
                              <tbody>
                                {rows.map((row, rowIndex) => {
                                  if (row.includes('---')) return null;
                                  const cells = row.split('|').filter(c => c.trim());
                                  const isHeader = rowIndex === 0;
                                  return (
                                    <tr key={rowIndex} className={isHeader ? "bg-dark-900 text-light-100" : "border-b border-dark-900/10"}>
                                      {cells.map((cell, cellIndex) => (
                                        <td 
                                          key={cellIndex} 
                                          className={`p-4 text-sm ${isHeader ? "font-medium" : "text-dark-900/80"}`}
                                          dangerouslySetInnerHTML={{ __html: renderContent(cell.trim()) }}
                                        />
                                      ))}
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                    }
                    
                    // Handle lists with newlines
                    if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(p => p.trim().startsWith('- '));
                      if (items.length > 0) {
                        return (
                          <ul key={index} className="list-none space-y-3 my-6">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-dark-900/80">
                                <span className="w-2 h-2 rounded-full bg-aurora-violet mt-2 flex-shrink-0" />
                                <span dangerouslySetInnerHTML={{ __html: renderContent(item.replace('- ', '').trim()) }} />
                              </li>
                            ))}
                          </ul>
                        );
                      }
                    }
                    
                    // Handle numbered lists
                    if (/^\d+\./.test(paragraph)) {
                      const items = paragraph.split('\n').filter(p => /^\d+\./.test(p.trim()));
                      if (items.length > 0) {
                        return (
                          <ol key={index} className="list-none space-y-3 my-6">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-dark-900/80">
                                <span className="w-6 h-6 rounded-full bg-aurora-violet/10 text-aurora-violet text-xs font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                                  {i + 1}
                                </span>
                                <span dangerouslySetInnerHTML={{ __html: renderContent(item.replace(/^\d+\.\s*/, '').trim()) }} />
                              </li>
                            ))}
                          </ol>
                        );
                      }
                    }
                    
                    // Regular paragraphs
                    return (
                      <p 
                        key={index} 
                        className="text-dark-900/80 leading-relaxed mb-6 text-lg"
                        dangerouslySetInnerHTML={{ __html: renderContent(paragraph) }}
                      />
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-dark-900/10">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-dark-900/5 text-sm text-dark-900/70 hover:bg-aurora-violet/10 hover:text-aurora-violet transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Share */}
                <div className="flex items-center gap-4 mt-8">
                  <span className="text-small text-dark-900/60">{isTr ? "Paylaş:" : "Share:"}</span>
                  <div className="flex gap-2">
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-dark-900/5 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-dark-900/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-dark-900/5 flex items-center justify-center hover:bg-[#4267B2] hover:text-white transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-4 space-y-8"
              >
                {/* Author Card */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-display text-lg text-dark-900 mb-4">
                    {isTr ? "Yazar" : "Author"}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-indigo to-aurora-violet flex items-center justify-center text-white text-xl font-medium">
                      {post.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-display text-dark-900">{post.author}</div>
                      <div className="text-small text-dark-900/60">{isTr ? post.authorRole : post.authorRoleEn}</div>
                    </div>
                  </div>
                  <p className="text-small text-dark-900/70">
                    {isTr ? post.authorBio : post.authorBioEn}
                  </p>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="font-display text-lg text-dark-900 mb-4">
                      {isTr ? "İlgili Yazılar" : "Related Posts"}
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link key={related.slug} href={`/${locale}/blog/${related.slug}`} className="group flex gap-4">
                          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={generatePlaceholderSVG(related.image, 100, 100, `${related.image}`)}
                              alt={isTr ? related.title : related.titleEn}
                              className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <span className="text-xs text-dark-900/50">{isTr ? related.category : related.categoryEn}</span>
                            <h4 className="font-medium text-dark-900 group-hover:text-aurora-violet transition-colors text-sm line-clamp-2">
                              {isTr ? related.title : related.titleEn}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-aurora-indigo/10 to-aurora-violet/10">
                  <h3 className="font-display text-lg text-dark-900 mb-2">
                    {isTr ? "Projenizi Birlikte Büyütelim" : "Let's Grow Your Project Together"}
                  </h3>
                  <p className="text-small text-dark-900/60 mb-4">
                    {isTr 
                      ? "Dijital dünyada başarıya ulaşmanız için uzman ekibimiz hazır."
                      : "Our expert team is ready to help you succeed in the digital world."}
                  </p>
                  <Link
                    href={`/${locale}/iletisim`}
                    className="inline-flex items-center gap-2 text-aurora-violet font-medium hover:gap-3 transition-all"
                  >
                    {isTr ? "İletişime Geç" : "Contact Us"}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
