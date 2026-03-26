"use client";

import { motion } from "framer-motion";
import { 
  Play, 
  TrendingUp, 
  Users, 
  Clock,
  Smartphone,
  Video,
  Target,
  ArrowRight,
  Check,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import VideoMarketingVisual from "@/components/landing-visuals/VideoMarketingVisual";

const stats = [
  { value: "%84", label: "Satın Almadan Önce Video İzliyor", labelEn: "Watch Video Before Purchase" },
  { value: "2.8x", label: "Daha Yüksek Dönüşüm Oranı", labelEn: "Higher Conversion Rate" },
  { value: "%53", label: "Daha Fazla Organik Erişim", labelEn: "More Organic Reach" },
  { value: "2s 47dk", label: "Günlük Video Tüketimi", labelEn: "Daily Video Consumption" },
];

const platforms = [
  {
    name: "YouTube",
    audience: "Geniş kitle",
    audienceEn: "Wide audience",
    duration: "8-15 dk",
    bestFor: "Eğitim, derinlemesine içerik",
    bestForEn: "Education, in-depth content",
  },
  {
    name: "TikTok",
    audience: "Genç (18-34)",
    audienceEn: "Young (18-34)",
    duration: "15-60 sn",
    bestFor: "Viral içerik, trendler",
    bestForEn: "Viral content, trends",
  },
  {
    name: "Instagram Reels",
    audience: "Karma",
    audienceEn: "Mixed",
    duration: "15-90 sn",
    bestFor: "Ürün tanıtımı, lifestyle",
    bestForEn: "Product showcase, lifestyle",
  },
  {
    name: "LinkedIn",
    audience: "Profesyonel",
    audienceEn: "Professional",
    duration: "30-120 sn",
    bestFor: "B2B, thought leadership",
    bestForEn: "B2B, thought leadership",
  },
];

const steps = [
  {
    number: "01",
    title: "Planlama",
    titleEn: "Planning",
    desc: "Konu belirleme, senaryo yazma, storyboard",
    descEn: "Topic selection, script writing, storyboard",
  },
  {
    number: "02",
    title: "Çekim",
    titleEn: "Filming",
    desc: "Akıllı telefon veya kamera ile video çekimi",
    descEn: "Video shooting with smartphone or camera",
  },
  {
    number: "03",
    title: "Kurgu",
    titleEn: "Editing",
    desc: "CapCut, Premiere veya benzeri yazılımlar",
    descEn: "CapCut, Premiere or similar software",
  },
  {
    number: "04",
    title: "Optimizasyon",
    titleEn: "Optimization",
    desc: "SEO, thumbnail, başlık, açıklama",
    descEn: "SEO, thumbnail, title, description",
  },
  {
    number: "05",
    title: "Yayınlama",
    titleEn: "Publishing",
    desc: "Platforma yükleme ve analiz",
    descEn: "Upload to platform and analyze",
  },
  {
    number: "06",
    title: "Analiz",
    titleEn: "Analysis",
    desc: "Performans takibi ve iyileştirme",
    descEn: "Performance tracking and improvement",
  },
];

const checklist = [
  { text: "İlk 3 saniye kancası (hook)", textEn: "First 3 second hook" },
  { text: "Altyazı ekleme (sessiz izleme için)", textEn: "Add captions (for silent viewing)" },
  { text: "Marka tutarlılığı (renk, font)", textEn: "Brand consistency (colors, fonts)" },
  { text: "Net CTA (call-to-action)", textEn: "Clear CTA (call-to-action)" },
  { text: "Mobile optimize (dikey format)", textEn: "Mobile optimized (vertical format)" },
  { text: "SEO uyumlu başlık ve açıklama", textEn: "SEO-friendly title and description" },
];

export default function VideoMarketingPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";

  return (
    <>
      <Navigation locale={locale} />
      <main className="bg-light-100">
        {/* Hero Section */}
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
                  <Video size={16} />
                  {isTr ? "2026 Güncel Rehber" : "2026 Updated Guide"}
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-6">
                  {isTr 
                    ? "Video Pazarlama 2026: YouTube SEO ve Sosyal Video Stratejisi"
                    : "Video Marketing 2026: YouTube SEO & Social Video Strategy"
                  }
                </h1>
                
                <p className="text-lg md:text-xl text-dark-600 mb-8 leading-relaxed">
                  {isTr
                    ? "Türkiye'de dijital video tüketimi %43 arttı. Video pazarlama artık bir seçenek değil, zorunluluk. KOBİ'ler için kapsamlı video pazarlama rehberi."
                    : "Digital video consumption in Turkey increased by 43%. Video marketing is no longer an option, it's a necessity. Comprehensive video marketing guide for SMEs."
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/${locale}/iletisim`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all"
                  >
                    {isTr ? "Video Stratejisi Oluştur" : "Create Video Strategy"}
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href={`#checklist`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark-900 border border-dark-200 rounded-xl font-semibold hover:bg-light-200 transition-all"
                  >
                    {isTr ? "Kontrol Listesini İndir" : "Download Checklist"}
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <VideoMarketingVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-dark-600 text-sm">
                    {isTr ? stat.label : stat.labelEn}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Comparison */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {isTr ? "Platform Karşılaştırması" : "Platform Comparison"}
              </h2>
              <p className="text-dark-600 max-w-2xl mx-auto">
                {isTr 
                  ? "Hedef kitlenize ve içerik türünüze en uygun platform"
                  : "The most suitable platform for your audience and content type"
                }
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <h3 className="font-display text-xl font-bold text-dark-900 mb-4">
                    {platform.name}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-dark-500">{isTr ? "Hedef Kitle:" : "Audience:"}</span>
                      <span className="text-dark-800 ml-2">{isTr ? platform.audience : platform.audienceEn}</span>
                    </div>
                    <div>
                      <span className="text-dark-500">{isTr ? "Süre:" : "Duration:"}</span>
                      <span className="text-dark-800 ml-2">{platform.duration}</span>
                    </div>
                    <div>
                      <span className="text-dark-500">{isTr ? "En İyi:" : "Best For:"}</span>
                      <span className="text-dark-800 ml-2">{isTr ? platform.bestFor : platform.bestForEn}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6-Step Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {isTr ? "Video Üretim Süreci" : "Video Production Process"}
              </h2>
              <p className="text-dark-600 max-w-2xl mx-auto">
                {isTr 
                  ? "6 adımda profesyonel video içerik üretimi"
                  : "Professional video content production in 6 steps"
                }
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-5xl font-display font-bold text-indigo-100 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark-900 mb-2">
                    {isTr ? step.title : step.titleEn}
                  </h3>
                  <p className="text-dark-600 text-sm">
                    {isTr ? step.desc : step.descEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist Section */}
        <section id="checklist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12"
            >
              <h2 className="font-display text-3xl font-bold text-dark-900 mb-6 text-center">
                {isTr ? "Video SEO Kontrol Listesi" : "Video SEO Checklist"}
              </h2>
              <p className="text-dark-600 text-center mb-8">
                {isTr 
                  ? "Her videoda kontrol etmeniz gereken 6 kritik nokta"
                  : "6 critical points to check in every video"
                }
              </p>
              
              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-light-100"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-dark-800">
                      {isTr ? item.text : item.textEn}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  href={`/${locale}/iletisim`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {isTr ? "Profesyonel Destek Al" : "Get Professional Support"}
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-100">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                {isTr 
                  ? "Video Pazarlama Stratejinizi Oluşturalım"
                  : "Let's Create Your Video Marketing Strategy"
                }
              </h2>
              <p className="text-dark-600 text-lg mb-8">
                {isTr
                  ? "YouTube, TikTok, Instagram için içerik stratejisi ve üretim desteği. Hemen başlayın!"
                  : "Content strategy and production support for YouTube, TikTok, Instagram. Get started now!"
                }
              </p>
              <Link
                href={`/${locale}/iletisim`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all"
              >
                <Play size={20} />
                {isTr ? "Ücretsiz Danışmanlık Al" : "Get Free Consultation"}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
