"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Clock, User, Tag, Search, TrendingUp } from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { generatePlaceholderSVG } from "@/lib/utils";
import { blogPosts, BlogPost } from "./posts";

type Category = "all" | "software" | "marketing" | "social" | "technology" | "strategy" | "ecommerce";

const categories: { key: Category; label: string; labelEn: string }[] = [
  { key: "all", label: "Tümü", labelEn: "All" },
  { key: "software", label: "Yazılım", labelEn: "Software" },
  { key: "marketing", label: "Pazarlama", labelEn: "Marketing" },
  { key: "social", label: "Sosyal Medya", labelEn: "Social Media" },
  { key: "technology", label: "Teknoloji", labelEn: "Technology" },
  { key: "strategy", label: "İş Stratejisi", labelEn: "Business Strategy" },
  { key: "ecommerce", label: "E-Ticaret", labelEn: "E-Commerce" },
];

const categoryColors: Record<Category, string> = {
  all: "from-gray-500 to-gray-600",
  software: "from-aurora-indigo to-aurora-violet",
  marketing: "from-orange-500 to-amber-600",
  social: "from-pink-500 to-rose-600",
  technology: "from-emerald-500 to-teal-600",
  strategy: "from-blue-500 to-indigo-600",
  ecommerce: "from-purple-500 to-violet-600",
};

export default function Blog({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sort posts by date (newest first) for all post lists
  const sortByDate = (a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime();
  
  const featuredPosts = blogPosts.filter(p => p.featured).sort(sortByDate);
  const regularPosts = blogPosts.filter(p => !p.featured).sort(sortByDate);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = isTr 
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      : post.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerptEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(isTr ? "tr-TR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Navigation locale={locale} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 overflow-hidden bg-light-100">
          <div className="absolute inset-0 bg-gradient-to-b from-aurora-violet/5 via-transparent to-transparent" />
          
          <div className="container-max mx-auto px-6 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora-violet/10 text-aurora-violet text-small font-medium mb-6">
                <TrendingUp size={16} />
                {isTr ? "Blog" : "Blog"}
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-dark-900 mb-6 leading-tight">
                {isTr 
                  ? "Bilgi ve İlham Merkezi" 
                  : "Knowledge & Inspiration Hub"}
              </h1>
              
              <p className="text-lg text-dark-900/60 max-w-2xl">
                {isTr 
                  ? "Yazılım, dijital pazarlama ve sosyal medya dünyasından en güncel bilgiler, ipuçları ve stratejiler."
                  : "Latest information, tips, and strategies from the world of software, digital marketing, and social media."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl text-dark-900 mb-6"
            >
              {isTr ? "Öne Çıkan Yazılar" : "Featured Posts"}
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                >
                  <Link href={`/${locale}/blog/${post.slug}`} className="block h-full">
                    <div className={`glass-card rounded-2xl overflow-hidden hover-lift h-full flex flex-col ${index === 0 ? "" : ""}`}>
                      <div className={`relative overflow-hidden ${index === 0 ? "h-64 lg:h-80" : "h-48"}`}>
                        <img
                          src={generatePlaceholderSVG(post.image, 600, 400, `${post.image} - ${isTr ? post.title : post.titleEn}`)}
                          alt={isTr ? post.title : post.titleEn}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-dark-900/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[post.category]} text-white`}>
                            {isTr ? post.categoryLabel : post.categoryLabelEn}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className={`font-display text-dark-900 mb-3 group-hover:text-aurora-violet transition-colors ${index === 0 ? "text-xl lg:text-2xl" : "text-lg"}`}>
                          {isTr ? post.title : post.titleEn}
                        </h3>
                        <p className={`text-dark-900/60 mb-4 line-clamp-2 ${index === 0 ? "" : "text-small"}`}>
                          {isTr ? post.excerpt : post.excerptEn}
                        </p>
                        <div className="mt-auto flex items-center gap-4 text-small text-dark-900/50">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {isTr ? post.readTime : post.readTimeEn}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-24 z-30 bg-light-100/80 backdrop-blur-glass border-y border-dark-900/5">
          <div className="container-max mx-auto px-6 lg:px-16 py-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Categories */}
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      className={`px-4 py-2 rounded-full text-small font-medium whitespace-nowrap transition-all ${
                        isActive 
                          ? "bg-dark-900 text-light-100" 
                          : "bg-dark-900/5 text-dark-900/70 hover:bg-dark-900/10"
                      }`}
                    >
                      {isTr ? cat.label : cat.labelEn}
                    </button>
                  );
                })}
              </div>

              {/* Search */}
              <div className="relative lg:w-64">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-900/40" />
                <input
                  type="text"
                  placeholder={isTr ? "Yazı ara..." : "Search posts..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-dark-900/5 border-0 text-small focus:ring-2 focus:ring-aurora-violet/20 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link href={`/${locale}/blog/${post.slug}`} className="block h-full">
                      <div className="glass-card rounded-2xl overflow-hidden hover-lift h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={generatePlaceholderSVG(post.image, 400, 250, `${post.image} - ${isTr ? post.title : post.titleEn}`)}
                            alt={isTr ? post.title : post.titleEn}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[post.category]} text-white`}>
                              {isTr ? post.categoryLabel : post.categoryLabelEn}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="font-display text-lg text-dark-900 mb-3 group-hover:text-aurora-violet transition-colors line-clamp-2">
                            {isTr ? post.title : post.titleEn}
                          </h3>
                          <p className="text-small text-dark-900/60 mb-4 line-clamp-3 flex-1">
                            {isTr ? post.excerpt : post.excerptEn}
                          </p>
                          <div className="flex items-center justify-between pt-4 border-t border-dark-900/10">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-indigo to-aurora-violet flex items-center justify-center text-white text-xs font-medium">
                                {post.author.split(" ").map(n => n[0]).join("")}
                              </div>
                              <div>
                                <div className="text-xs font-medium text-dark-900">{post.author}</div>
                                <div className="text-xs text-dark-900/50">{isTr ? post.authorRole : post.authorRoleEn}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-dark-900/50">
                              <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {isTr ? post.readTime : post.readTimeEn}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Tag size={48} className="mx-auto mb-4 text-dark-900/20" />
                <p className="text-dark-900/60 text-lg mb-2">
                  {isTr ? "Sonuç bulunamadı" : "No results found"}
                </p>
                <p className="text-dark-900/40 text-small">
                  {isTr ? "Farklı bir arama terimi deneyin" : "Try a different search term"}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
            >
              {/* Subtle decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-dark-900/3 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-dark-900/3 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                  {isTr 
                    ? "Sizin Hikayenizi de Yazalım" 
                    : "Let's Write Your Story Too"}
                </h2>
                <p className="text-dark-900/60 mb-8 text-lg">
                  {isTr 
                    ? "Projelerinizde başarıya ulaşmanız için uzman ekibimiz hazır. Hemen iletişime geçin."
                    : "Our expert team is ready to help you succeed in your projects. Contact us now."}
                </p>
                <Link
                  href={`/${locale}/iletisim`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
                >
                  {isTr ? "Projeye Başla" : "Start Project"}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
