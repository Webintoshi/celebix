"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  TrendingUp, 
  Users,
  Zap,
  BarChart3,
  Target,
  Clock,
  ArrowRight,
  Check,
  Send
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import EmailMarketingVisual from "@/components/landing-visuals/EmailMarketingVisual";

const stats = [
  { value: "4200%", label: "Ortalama ROI", labelEn: "Average ROI" },
  { value: "%21.5", label: "Global Açılma Oranı", labelEn: "Global Open Rate" },
  { value: "2.8x", label: "Sosyal Medyadan Daha İyi", labelEn: "Better Than Social" },
  { value: "80M+", label: "Günlük Gönderi (TR)", labelEn: "Daily Sends (TR)" },
];

const platforms = [
  {
    name: "Mailchimp",
    free: "500 kontak",
    freeEn: "500 contacts",
    price: "$20/ay",
    bestFor: "KOBİ'ler, kullanıcı dostu",
    bestForEn: "SMEs, user-friendly",
  },
  {
    name: "Brevo",
    free: "300/gün",
    freeEn: "300/day",
    price: "$25/ay",
    bestFor: "SMS entegrasyonu",
    bestForEn: "SMS integration",
  },
  {
    name: "MailerLite",
    free: "1000 kontak",
    freeEn: "1000 contacts",
    price: "$9/ay",
    bestFor: "Fiyat/performans",
    bestForEn: "Price/performance",
  },
  {
    name: "İleti Merkezi",
    free: "Yok",
    freeEn: "None",
    price: "₺500-2000/ay",
    bestFor: "Türkçe destek",
    bestForEn: "Turkish support",
  },
];

const emailTypes = [
  {
    icon: Mail,
    title: "Hoş Geldin Serisi",
    titleEn: "Welcome Series",
    desc: "Yeni aboneye 5 e-postalık otomatik seri",
    descEn: "5-email automated series for new subscribers",
  },
  {
    icon: BarChart3,
    title: "Bülten/Newsletter",
    titleEn: "Newsletter",
    desc: "Haftalık/aylık değer içerikleri",
    descEn: "Weekly/monthly value content",
  },
  {
    icon: Target,
    title: "Promosyonel",
    titleEn: "Promotional",
    desc: "İndirim, kampanya, yeni ürün",
    descEn: "Discounts, campaigns, new products",
  },
  {
    icon: Zap,
    title: "Tetikleyici",
    titleEn: "Triggered",
    desc: "Sepet terk, doğum günü, yenileme",
    descEn: "Cart abandonment, birthday, renewal",
  },
];

const steps = [
  { day: "Gün 1", dayEn: "Day 1", task: "ESP seçimi ve kurulum", taskEn: "ESP selection and setup" },
  { day: "Gün 2", dayEn: "Day 2", task: "Website popup/form", taskEn: "Website popup/form" },
  { day: "Gün 3", dayEn: "Day 3", task: "Hoş geldin e-postası", taskEn: "Welcome email" },
  { day: "Gün 4", dayEn: "Day 4", task: "Şablon tasarımı", taskEn: "Template design" },
  { day: "Gün 5", dayEn: "Day 5", task: "İlk bülten hazırlığı", taskEn: "First newsletter prep" },
  { day: "Gün 6", dayEn: "Day 6", task: "Test gönderimi", taskEn: "Test send" },
  { day: "Gün 7", dayEn: "Day 7", task: "Lansman ve analiz", taskEn: "Launch and analysis" },
];

export default function EmailMarketingPage({ params }: { params: { locale: string } }) {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                  <Mail size={16} />
                  {isTr ? "4200% ROI" : "4200% ROI"}
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-6">
                  {isTr 
                    ? "E-posta Pazarlama: KOBİ'ler İçin 2026 Rehberi"
                    : "Email Marketing: 2026 Guide for SMEs"
                  }
                </h1>
                
                <p className="text-lg md:text-xl text-dark-600 mb-8 leading-relaxed">
                  {isTr
                    ? "E-posta öldü mü? Tam aksine! Her 1$ yatırım için 42$ geri dönüş. KOBİ bütçesine uygun, uygulanabilir e-posta pazarlama stratejisi."
                    : "Is email dead? Quite the opposite! $42 return for every $1 spent. Email marketing strategy for SME budgets, practical and actionable."
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/${locale}/iletisim`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
                  >
                    {isTr ? "Strateji Oluştur" : "Create Strategy"}
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href={`#platforms`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark-900 border border-dark-200 rounded-xl font-semibold hover:bg-light-200 transition-all"
                  >
                    {isTr ? "Platformları İncele" : "Compare Platforms"}
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <EmailMarketingVisual />
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

        {/* Email Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {isTr ? "E-posta Türleri" : "Email Types"}
              </h2>
              <p className="text-dark-600 max-w-2xl mx-auto">
                {isTr 
                  ? "Segmentasyon ve otomasyonla doğru mesajı doğru zamanda gönderin"
                  : "Send the right message at the right time with segmentation and automation"
                }
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emailTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                    <type.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-dark-900 mb-2">
                    {isTr ? type.title : type.titleEn}
                  </h3>
                  <p className="text-dark-600 text-sm">
                    {isTr ? type.desc : type.descEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Comparison */}
        <section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                  ? "Bütçenize ve ihtiyaçlarınıza en uygun e-posta pazarlama aracı"
                  : "Email marketing tool that fits your budget and needs"
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
                  className="bg-light-100 rounded-2xl p-6"
                >
                  <h3 className="font-display text-xl font-bold text-dark-900 mb-4">
                    {platform.name}
                  </h3>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-dark-500">{isTr ? "Ücretsiz:" : "Free:"}</span>
                      <span className="text-dark-800">{isTr ? platform.free : platform.freeEn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-500">{isTr ? "Fiyat:" : "Price:"}</span>
                      <span className="text-dark-800 font-medium">{platform.price}</span>
                    </div>
                  </div>
                  <p className="text-dark-600 text-sm">
                    <span className="text-dark-500">{isTr ? "En İyi:" : "Best For:"}</span>
                    <span className="ml-2">{isTr ? platform.bestFor : platform.bestForEn}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7-Day Plan */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                {isTr ? "Başlamak İçin 7 Günlük Plan" : "7-Day Plan to Get Started"}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                {isTr 
                  ? "Bu hafta sonunda ilk e-posta kampanyanızı başlatın"
                  : "Launch your first email campaign by the end of this week"
                }
              </p>
            </motion.div>
            
            <div className="bg-white rounded-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-light-100"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs text-dark-500 mb-1">
                        {isTr ? step.day : step.dayEn}
                      </div>
                      <div className="text-dark-800 font-medium">
                        {isTr ? step.task : step.taskEn}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
                  ? "E-posta Listenizi Büyütün"
                  : "Grow Your Email List"
                }
              </h2>
              <p className="text-dark-600 text-lg mb-8">
                {isTr
                  ? "Otomasyon, segmentasyon ve A/B testleriyle profesyonel e-posta pazarlama stratejisi."
                  : "Professional email marketing strategy with automation, segmentation and A/B testing."
                }
              </p>
              <Link
                href={`/${locale}/iletisim`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                <Send size={20} />
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
