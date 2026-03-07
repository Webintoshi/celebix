"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook, ArrowRight } from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { generatePlaceholderSVG } from "@/lib/utils";

interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  content: string[];
  contentEn: string[];
  category: string;
  categoryEn: string;
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
}

const blogPostsData: Record<string, BlogPost> = {
  "nextjs-15-yenilikler": {
    slug: "nextjs-15-yenilikler",
    title: "Next.js 15 ile Gelen Yenilikler ve Performans İyileştirmeleri",
    titleEn: "Next.js 15: New Features and Performance Improvements",
    category: "software",
    categoryEn: "software",
    categoryLabel: "Yazılım",
    categoryLabelEn: "Software",
    image: 60,
    date: "2024-03-01",
    readTime: "8 dk",
    readTimeEn: "8 min",
    author: "Ahmet Çelebi",
    authorRole: "Teknik Direktör",
    authorRoleEn: "Technical Director",
    authorBio: "10+ yıllık yazılım geliştirme deneyimi. Full-stack geliştirici ve sistem mimarı. Next.js, React ve Node.js uzmanı.",
    authorBioEn: "10+ years of software development experience. Full-stack developer and system architect. Expert in Next.js, React, and Node.js.",
    tags: ["Next.js", "React", "Performance", "Web Development"],
    content: [
      "Next.js 15, modern web uygulamaları geliştirmek için önemli yenilikler sunuyor. Bu yazıda, partial prerendering, geliştirilmiş caching mekanizmaları ve yeni routing özelliklerini detaylı olarak inceleyeceğiz.",
      "## Partial Prerendering Nedir?",
      "Partial Prerendering (Kısmi Ön Render), statik ve dinamik içeriklerin aynı sayfada bir arada kullanılmasını sağlayan devrimsel bir özelliktir. Bu sayede, sayfanın statik kısımları build zamanında oluşturulurken, dinamik kısımlar kullanıcı isteği sırasında server'da render edilir.",
      "Örneğin, bir e-ticaret sayfasında ürün bilgileri statik olarak ön render edilirken, stok durumu ve fiyat bilgileri dinamik olarak güncellenebilir. Bu yaklaşım, hem hızlı ilk yükleme süresi hem de güncel veri sunma avantajını bir arada sağlar.",
      "## Geliştirilmiş Caching Stratejileri",
      "Next.js 15 ile birlikte caching mekanizmaları tamamen yeniden tasarlandı. Artık daha granular kontrol imkanı sunan yeni API'ler sayesinde, hangi verilerin ne kadar süre cache'de tutulacağını hassas bir şekilde ayarlayabiliyorsunuz.",
      "```typescript\n// Yeni cache yapılandırması\nexport const dynamic = 'force-dynamic';\nexport const revalidate = 3600; // 1 saat\n```",
      "## Server Actions İyileştirmeleri",
      "Server Actions artık daha stabil ve production-ready. Form işlemleri, veri mutasyonları ve server-side logic'leri client-side JavaScript kodu yazmadan yönetebilirsiniz. Bu, uygulamanızın bundle size'ını önemli ölçüde azaltır.",
      "## Sonuç",
      "Next.js 15, performans ve geliştirici deneyimi arasında mükemmel bir denge kuruyor. Partial prerendering ve geliştirilmiş caching ile uygulamalarınızı bir üst seviyeye taşıyabilirsiniz.",
    ],
    contentEn: [
      "Next.js 15 brings significant innovations for developing modern web applications. In this article, we'll examine partial prerendering, improved caching mechanisms, and new routing features in detail.",
      "## What is Partial Prerendering?",
      "Partial Prerendering is a revolutionary feature that allows static and dynamic content to coexist on the same page. This way, static parts of the page are generated at build time, while dynamic parts are rendered on the server during user requests.",
      "For example, in an e-commerce page, product information can be prerendered statically, while stock status and price information can be updated dynamically. This approach provides both fast initial load time and up-to-date data delivery.",
      "## Improved Caching Strategies",
      "With Next.js 15, caching mechanisms have been completely redesigned. New APIs offering more granular control now allow you to precisely adjust how long data stays in cache.",
      "```typescript\n// New cache configuration\nexport const dynamic = 'force-dynamic';\nexport const revalidate = 3600; // 1 hour\n```",
      "## Server Actions Improvements",
      "Server Actions are now more stable and production-ready. You can manage form submissions, data mutations, and server-side logic without writing client-side JavaScript code. This significantly reduces your application's bundle size.",
      "## Conclusion",
      "Next.js 15 strikes a perfect balance between performance and developer experience. With partial prerendering and improved caching, you can take your applications to the next level.",
    ],
  },
  "google-ads-2024-rehberi": {
    slug: "google-ads-2024-rehberi",
    title: "2024 Google Ads Rehberi: Maximizing ROAS",
    titleEn: "2024 Google Ads Guide: Maximizing ROAS",
    category: "marketing",
    categoryEn: "marketing",
    categoryLabel: "Pazarlama",
    categoryLabelEn: "Marketing",
    image: 61,
    date: "2024-02-28",
    readTime: "12 dk",
    readTimeEn: "12 min",
    author: "Zeynep Kaya",
    authorRole: "Pazarlama Müdürü",
    authorRoleEn: "Marketing Manager",
    authorBio: "Google Ads ve Meta Ads sertifikalı uzman. 7+ yıllık dijital pazarlama deneyimi. ROAS optimizasyonu ve büyüme stratejileri uzmanı.",
    authorBioEn: "Google Ads and Meta Ads certified expert. 7+ years of digital marketing experience. Specialist in ROAS optimization and growth strategies.",
    tags: ["Google Ads", "PPC", "ROAS", "Digital Marketing"],
    content: [
      "Google Ads 2024'te yapay zeka destekli otomasyon özellikleriyle daha güçlü hale geldi. Bu kapsamlı rehberde, Performance Max kampanyalarından dönüşüm optimizasyonuna kadar tüm stratejileri ele alıyoruz.",
      "## Performance Max Kampanyaları",
      "Performance Max (PMax), Google'ın en yeni kampanya türü ve tüm kanallarda (Search, Display, YouTube, Discover, Gmail, Maps) tek bir kampanya ile varlık göstermenizi sağlıyor. Yapay zeka, en iyi performans gösteren kanalları ve zamanları otomatik olarak belirliyor.",
      "PMax kampanyalarında başarılı olmak için:\n\n- Yüksek kaliteli yaratıcı varlıklar (en az 5 başlık, 5 açıklama)\n- Tüm hedefleme sinyallerinin doğru yapılandırılması\n- Dönüşüm değerlerinin doğru atanması\n- Audience signals ile hedefleme optimizasyonu",
      "## Akıllı Teklif Stratejileri",
      "2024'te manuel teklifler yerine, Target ROAS ve Maximize Conversions gibi akıllı teklif stratejileri daha etkili sonuçlar veriyor. Google'ın makine öğrenimi algoritmaları, her açık artırma için optimal teklifi gerçek zamanlı olarak hesaplıyor.",
      "## Dönüşüm Optimizasyonu",
      "Enhanced conversions ve consent mode ile kullanıcı gizliliğini korurken daha doğru dönüşüm takibi mümkün. Server-side tagging ile tarayıcı kısıtlamalarının etkisini minimize edebilirsiniz.",
      "## Ölçüm ve Raporlama",
      "Data-driven attribution modeli, müşteri yolculuğundaki her dokunuşun değerini doğru şekilde atıyor. Bu sayede hangi kampanyaların gerçekten katma değer sağladığını daha iyi anlayabilirsiniz.",
    ],
    contentEn: [
      "Google Ads has become more powerful in 2024 with AI-powered automation features. In this comprehensive guide, we cover all strategies from Performance Max campaigns to conversion optimization.",
      "## Performance Max Campaigns",
      "Performance Max (PMax) is Google's newest campaign type, allowing you to have presence across all channels (Search, Display, YouTube, Discover, Gmail, Maps) with a single campaign. AI automatically determines the best performing channels and times.",
      "To succeed with PMax campaigns:\n\n- High-quality creative assets (at least 5 headlines, 5 descriptions)\n- Proper configuration of all targeting signals\n- Correct assignment of conversion values\n- Targeting optimization with audience signals",
      "## Smart Bidding Strategies",
      "In 2024, smart bidding strategies like Target ROAS and Maximize Conversions deliver more effective results than manual bidding. Google's machine learning algorithms calculate the optimal bid for each auction in real-time.",
      "## Conversion Optimization",
      "With enhanced conversions and consent mode, accurate conversion tracking is possible while protecting user privacy. You can minimize the impact of browser restrictions with server-side tagging.",
      "## Measurement and Reporting",
      "The data-driven attribution model correctly assigns value to every touchpoint in the customer journey. This way, you can better understand which campaigns truly provide added value.",
    ],
  },
  "instagram-algoritmasi-2024": {
    slug: "instagram-algoritmasi-2024",
    title: "Instagram Algoritması 2024: İçerik Stratejinizi Güncelleyin",
    titleEn: "Instagram Algorithm 2024: Update Your Content Strategy",
    category: "social",
    categoryEn: "social",
    categoryLabel: "Sosyal Medya",
    categoryLabelEn: "Social Media",
    image: 62,
    date: "2024-02-25",
    readTime: "6 dk",
    readTimeEn: "6 min",
    author: "Elif Demir",
    authorRole: "Sosyal Medya Uzmanı",
    authorRoleEn: "Social Media Specialist",
    authorBio: "Instagram ve TikTok içerik stratejileri uzmanı. 5+ yıllık sosyal medya yönetimi deneyimi. Viral içerik ve topluluk yönetimi konusunda uzman.",
    authorBioEn: "Expert in Instagram and TikTok content strategies. 5+ years of social media management experience. Specialist in viral content and community management.",
    tags: ["Instagram", "Algorithm", "Social Media", "Content Strategy"],
    content: [
      "Instagram algoritması 2024'te önemli değişiklikler yaşadı. Reels önceliklendirmesi, etkileşim sinyalleri ve keşfet sekmesinde görünürlük için yeni faktörler öne çıkıyor.",
      "## Reels Önceliklendirmesi",
      "Instagram artık tüm içerik türleri arasında Reels'i en üst sıraya koyuyor. Algoritma, video içerikleri özellikle keşfet sekmesinde daha agresif bir şekilde tanıtıyor. Haftada en az 3-5 Reels paylaşmak, organik erişiminizi artırmanın en etkili yolu.",
      "## Etkileşim Sinyalleri",
      "Algoritma şu etkileşimleri en değerli sıraya koyuyor:\n\n1. Paylaşımlar (Stories ve DM üzerinden)\n2. Kaydetmeler\n3. Yorumlar (özellikle uzun ve detaylı)\n4. Beğeniler\n5. Profil ziyaretleri",
      "## Keşfet Sekmesi Optimizasyonu",
      "Keşfet sekmesinde görünürlük için:\n\n- İlk 3 saniyede dikkat çeken hook'lar kullanın\n- Alt yazı ekleyin (sessiz izleyenler için)\n- Trend sesleri kullanın ancak içeriği özgün tutun\n- İdeal Reels süresi: 15-30 saniye\n- Her gün tutarlı paylaşım yapın",
      "## Hashtag Stratejisi",
      "2024'te hashtag kullanımı değişti. Artık 3-5 hedefli, niş hashtag daha etkili. Genel hashtag'ler yerine, sektörünüze özel ve orta hacimli (10K-500K gönderi) hashtag'leri tercih edin.",
    ],
    contentEn: [
      "The Instagram algorithm has undergone significant changes in 2024. Reels prioritization, engagement signals, and new factors for visibility in the Explore tab are coming to the forefront.",
      "## Reels Prioritization",
      "Instagram now puts Reels at the top among all content types. The algorithm promotes video content more aggressively, especially in the Explore tab. Sharing at least 3-5 Reels per week is the most effective way to increase your organic reach.",
      "## Engagement Signals",
      "The algorithm values these interactions in order:\n\n1. Shares (via Stories and DM)\n2. Saves\n3. Comments (especially long and detailed)\n4. Likes\n5. Profile visits",
      "## Explore Tab Optimization",
      "For visibility in the Explore tab:\n\n- Use attention-grabbing hooks in the first 3 seconds\n- Add captions (for silent viewers)\n- Use trending sounds but keep content original\n- Ideal Reels duration: 15-30 seconds\n- Post consistently every day",
      "## Hashtag Strategy",
      "Hashtag usage has changed in 2024. Now 3-5 targeted, niche hashtags are more effective. Instead of generic hashtags, prefer industry-specific and medium-volume (10K-500K posts) hashtags.",
    ],
  },
};

// Generate content for other posts dynamically
const generateContent = (slug: string, isTr: boolean): string[] => {
  const post = Object.values(blogPostsData).find(p => p.slug === slug);
  if (post) return isTr ? post.content : post.contentEn;
  
  // Default content for posts without specific data
  return isTr ? [
    "Bu yazıda, sektördeki en güncel gelişmeleri ve best practice'leri ele alıyoruz.",
    "## Ana Başlıklar",
    "- Stratejik planlama ve uygulama\n- Teknik detaylar ve optimizasyonlar\n- Örnek olay incelemeleri\n- Gelecek trendleri ve öngörüler",
    "## Detaylı Analiz",
    "Konuyu derinlemesine incelerken, pratik uygulanabilir öneriler sunuyoruz. Teorik bilgileri gerçek dünya örnekleriyle destekliyoruz.",
    "## Sonuç ve Öneriler",
    "Yazının sonunda, öğrendiklerinizi uygulamaya geçirmek için adım adım bir yol haritası bulacaksınız. Unutmayın, sürekli öğrenme ve adapte olma dijital dünyada başarının anahtarıdır.",
  ] : [
    "In this article, we cover the most current developments and best practices in the industry.",
    "## Main Topics",
    "- Strategic planning and implementation\n- Technical details and optimizations\n- Case studies\n- Future trends and predictions",
    "## Detailed Analysis",
    "While examining the topic in depth, we offer practical, actionable recommendations. We support theoretical knowledge with real-world examples.",
    "## Conclusion and Recommendations",
    "At the end of the article, you will find a step-by-step roadmap to put what you've learned into practice. Remember, continuous learning and adaptation is the key to success in the digital world.",
  ];
};

const getPost = (slug: string): BlogPost | null => {
  return blogPostsData[slug] || {
    slug,
    title: "Blog Yazısı",
    titleEn: "Blog Post",
    content: [],
    contentEn: [],
    category: "technology",
    categoryEn: "technology",
    categoryLabel: "Teknoloji",
    categoryLabelEn: "Technology",
    image: 70,
    date: "2024-01-01",
    readTime: "5 dk",
    readTimeEn: "5 min",
    author: "Celebix Ekibi",
    authorRole: "Editör",
    authorRoleEn: "Editor",
    authorBio: "Celebix ekibi olarak dijital dünyadan en güncel bilgileri sizinle paylaşıyoruz.",
    authorBioEn: "As the Celebix team, we share the most up-to-date information from the digital world with you.",
    tags: ["Technology", "Digital"],
  };
};

const relatedPosts = [
  { slug: "microservices-vs-monolith", title: "Microservices vs Monolith", titleEn: "Microservices vs Monolith", category: "Yazılım", categoryEn: "Software", image: 63 },
  { slug: "seo-core-web-vitals", title: "Core Web Vitals ve SEO", titleEn: "Core Web Vitals and SEO", category: "Pazarlama", categoryEn: "Marketing", image: 64 },
  { slug: "ai-uygulama-gelistirme", title: "AI ile Uygulama Geliştirme", titleEn: "App Development with AI", category: "Teknoloji", categoryEn: "Technology", image: 66 },
];

const categoryColors: Record<string, string> = {
  software: "from-aurora-indigo to-aurora-violet",
  marketing: "from-orange-500 to-amber-600",
  social: "from-pink-500 to-rose-600",
  technology: "from-emerald-500 to-teal-600",
  strategy: "from-blue-500 to-indigo-600",
};

export default function BlogPost({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const isTr = locale === "tr";
  const post = getPost(slug);
  const content = generateContent(slug, isTr);

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

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = isTr ? post.title : post.titleEn;

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
        <section className="section-padding bg-light-100">
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
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="font-display text-2xl text-dark-900 mt-12 mb-6">
                          {paragraph.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith("```")) {
                      return (
                        <pre key={index} className="bg-dark-900 text-light-100 p-4 rounded-xl overflow-x-auto my-6">
                          <code className="text-sm">{paragraph.replace(/```\w*\n?/g, "")}</code>
                        </pre>
                      );
                    }
                    if (paragraph.startsWith("- ") || paragraph.includes("\\n")) {
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 my-6 text-dark-900/80">
                          {paragraph.split("\\n").filter(p => p.trim()).map((item, i) => (
                            <li key={i} className="text-dark-900/80">{item.replace("- ", "")}</li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={index} className="text-dark-900/80 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-dark-900/10">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-dark-900/5 text-sm text-dark-900/70">
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
