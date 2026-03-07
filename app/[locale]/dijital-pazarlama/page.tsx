"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Megaphone, Target, TrendingUp, Search, FileText } from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import MarketingHeroVisual from "@/components/MarketingHeroVisual";
import GoogleAdsVisual from "@/components/GoogleAdsVisual";
import MetaAdsVisual from "@/components/MetaAdsVisual";
import SEOVisual from "@/components/SEOVisual";
import ContentVisual from "@/components/ContentVisual";
import ChannelsVisual from "@/components/ChannelsVisual";

const features = [
  {
    icon: Target,
    title: "Google Ads Yönetimi",
    titleEn: "Google Ads Management",
    description: "Arama, görüntülü ve YouTube reklamları ile hedef kitlenize doğrudan ulaşın. Akıllı teklif stratejileri ve A/B testleri ile maksimum ROI.",
    descriptionEn: "Reach your target audience directly with Search, Display and YouTube ads. Maximum ROI with smart bidding strategies and A/B testing.",
    visual: GoogleAdsVisual,
  },
  {
    icon: Megaphone,
    title: "Meta Ads (Facebook & Instagram)",
    titleEn: "Meta Ads (Facebook & Instagram)",
    description: "Sosyal medya reklamcılığında uzmanlaşmış ekibimizle markanızı doğru kitleye ulaştırın. Görsel ve video reklam optimizasyonu.",
    descriptionEn: "Reach the right audience with your brand through our team specialized in social media advertising. Visual and video ad optimization.",
    visual: MetaAdsVisual,
  },
  {
    icon: Search,
    title: "SEO Optimizasyonu",
    titleEn: "SEO Optimization",
    description: "Organik arama sonuçlarında üst sıralarda yer alın. Teknik SEO, içerik optimizasyonu ve backlink stratejileri ile uzun vadeli büyüme.",
    descriptionEn: "Rank at the top of organic search results. Long-term growth with technical SEO, content optimization and backlink strategies.",
    visual: SEOVisual,
  },
  {
    icon: FileText,
    title: "İçerik Pazarlaması",
    titleEn: "Content Marketing",
    description: "Değerli içeriklerle hedef kitlenizin ilgisini çekin. Blog yazıları, infografikler ve e-bültenlerle marka bilinirliğini artırın.",
    descriptionEn: "Attract your target audience's interest with valuable content. Increase brand awareness with blog posts, infographics and newsletters.",
    visual: ContentVisual,
  },
];

const channels = [
  "Google Search & Display",
  "YouTube Reklamları",
  "Facebook & Instagram",
  "LinkedIn Ads",
  "Programatik Reklamcılık",
  "Native Advertising",
];

const processSteps = [
  { number: "01", title: "Analiz & Strateji", titleEn: "Analysis & Strategy", desc: "Mevcut durum analizi ve hedef kitle belirleme.", descEn: "Current situation analysis and target audience identification." },
  { number: "02", title: "Kampanya Tasarımı", titleEn: "Campaign Design", desc: "Yaratıcı reklam tasarımları ve mesajlaşma.", descEn: "Creative ad designs and messaging." },
  { number: "03", title: "Optimizasyon", titleEn: "Optimization", desc: "Sürekli test ve performans iyileştirme.", descEn: "Continuous testing and performance improvement." },
  { number: "04", title: "Raporlama", titleEn: "Reporting", desc: "Şeffaf ROI analizi ve insight raporları.", descEn: "Transparent ROI analysis and insight reports." },
];

export default function DigitalMarketing({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";

  return (
    <>
      <Navigation locale={locale} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 overflow-hidden bg-light-100">
          
          <div className="container-max mx-auto px-6 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link 
                  href={`/${locale}/urunler`}
                  className="inline-flex items-center gap-2 text-small text-dark-900/60 hover:text-dark-900 mb-6"
                >
                  <ArrowRight size={16} className="rotate-180" />
                  {isTr ? "Tüm Ürünler" : "All Products"}
                </Link>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-light-100 flex items-center justify-center">
                    <Megaphone size={24} />
                  </div>
                  <span className="text-small text-dark-900/60 uppercase tracking-wider">
                    {isTr ? "Büyüme Odaklı" : "Growth Focused"}
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-dark-900 mb-6 leading-tight">
                  {isTr ? "Dijital Pazarlama Çözümleri" : "Digital Marketing Solutions"}
                </h1>
                
                <p className="text-lg text-dark-900/60 mb-8 max-w-lg">
                  {isTr 
                    ? "Google ve Meta reklamları, SEO optimizasyonu ve içerik stratejisi ile markanızı dijitalde büyütün. Veriye dayalı, ölçülebilir sonuçlar."
                    : "Grow your brand digitally with Google and Meta ads, SEO optimization and content strategy. Data-driven, measurable results."
                  }
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/${locale}/iletisim`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
                  >
                    {isTr ? "Ücretsiz Teklif Al" : "Get Free Quote"}
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-dark-900 font-medium rounded-full border border-dark-900/20 hover:border-dark-900/40 transition-colors"
                  >
                    {isTr ? "Hizmetleri İncele" : "Explore Services"}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-dark-900/10">
                  <MarketingHeroVisual className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp size={20} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-dark-900">+280%</div>
                      <div className="text-xs text-dark-900/60">{isTr ? "Ort. ROI Artışı" : "Avg. ROI Increase"}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                {isTr ? "360° Dijital Pazarlama" : "360° Digital Marketing"}
              </h2>
              <p className="text-body text-dark-900/60 max-w-2xl mx-auto">
                {isTr 
                  ? "Tüm dijital kanallarda tutarlı ve etkili bir varlık oluşturun. Veriye dayalı stratejilerle maksimum dönüşüm."
                  : "Create a consistent and effective presence across all digital channels. Maximum conversion with data-driven strategies."
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const Visual = feature.visual;
                return (
                  <motion.div
                    key={feature.titleEn}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group glass-card rounded-2xl p-6 lg:p-8 hover-lift"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/2">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-light-100 transition-colors">
                          <Icon size={24} />
                        </div>
                        <h3 className="font-display text-xl text-dark-900 mb-3">{isTr ? feature.title : feature.titleEn}</h3>
                        <p className="text-small text-dark-900/60">{isTr ? feature.description : feature.descriptionEn}</p>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="rounded-xl overflow-hidden">
                          <Visual className="w-full h-40 object-cover" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-12 bg-dark-900 text-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl mb-6">
                  {isTr ? "Reklam Kanalları" : "Advertising Channels"}
                </h2>
                <p className="text-light-100/60 mb-8">
                  {isTr 
                    ? "Hedef kitlenize en uygun kanallarda profesyonel reklam yönetimi. Bütçenizi optimize ederek maksimum erişim."
                    : "Professional ad management on channels most suitable for your target audience. Maximum reach by optimizing your budget."
                  }
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {channels.map((channel) => (
                    <div key={channel} className="flex items-center gap-3">
                      <Check size={18} className="text-orange-500" />
                      <span className="text-light-100/80">{channel}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden">
                  <ChannelsVisual className="w-full h-auto" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                {isTr ? "Çalışma Sürecimiz" : "Our Process"}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-display text-orange-500/30 mb-4">{step.number}</div>
                  <h3 className="font-display text-lg text-dark-900 mb-2">{isTr ? step.title : step.titleEn}</h3>
                  <p className="text-small text-dark-900/60">{isTr ? step.desc : step.descEn}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-dark-900 text-light-100 relative overflow-hidden">
          <div className="container-max mx-auto px-6 lg:px-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl mb-6">
                  {isTr ? "Dijital Büyümenizi Hızlandırın" : "Accelerate Your Digital Growth"}
                </h2>
                <p className="text-light-100/80 mb-8">
                  {isTr 
                    ? "Ücretsiz pazarlama analizi alın ve potansiyelinizi keşfedin."
                    : "Get a free marketing analysis and discover your potential."
                  }
                </p>
                <Link
                  href={`/${locale}/iletisim`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-light-100 text-dark-900 font-medium rounded-full hover:bg-white transition-colors"
                >
                  {isTr ? "Hemen Başlayın" : "Get Started Now"}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
