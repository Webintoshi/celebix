"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Video, Users, Heart, MessageCircle, Share2, TrendingUp, Sparkles } from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import SocialHeroVisual from "@/components/SocialHeroVisual";
import ContentProductionVisual from "@/components/ContentProductionVisual";
import CommunityVisual from "@/components/CommunityVisual";
import InfluencerVisual from "@/components/InfluencerVisual";
import SocialAnalyticsVisual from "@/components/SocialAnalyticsVisual";
import SocialPlatformsVisual from "@/components/SocialPlatformsVisual";

const features = [
  {
    icon: Video,
    title: "İçerik Üretimi",
    titleEn: "Content Production",
    description: "Profesyonel video, görsel ve story içerikleri ile markanızı öne çıkarın. Viral potansiyeli yüksek, trendlere uygun içerik stratejisi.",
    descriptionEn: "Make your brand stand out with professional video, visual and story content. High viral potential, trend-appropriate content strategy.",
    visual: ContentProductionVisual,
  },
  {
    icon: MessageCircle,
    title: "Topluluk Yönetimi",
    titleEn: "Community Management",
    description: "Takipçilerinizle etkileşimi artırın. Yorum ve DM yönetimi, kriz iletişimi ve marka sadaketi oluşturma stratejileri.",
    descriptionEn: "Increase engagement with your followers. Comment and DM management, crisis communication and brand loyalty building strategies.",
    visual: CommunityVisual,
  },
  {
    icon: Users,
    title: "Influencer İşbirlikleri",
    titleEn: "Influencer Collaborations",
    description: "Markanız için en doğru influencer'ları seçin, etkili işbirlikleri ile geniş kitlelere ulaşın. Kampanya yönetimi ve ROI takibi.",
    descriptionEn: "Choose the right influencers for your brand and reach wide audiences with effective collaborations. Campaign management and ROI tracking.",
    visual: InfluencerVisual,
  },
  {
    icon: TrendingUp,
    title: "Sosyal Medya Analitiği",
    titleEn: "Social Media Analytics",
    description: "Detaylı performans raporları ve insight'lar. Hangi içeriklerin çalıştığını öğrenin ve stratejinizi veriye dayalı optimize edin.",
    descriptionEn: "Detailed performance reports and insights. Learn what content works and optimize your strategy data-driven.",
    visual: SocialAnalyticsVisual,
  },
];

const platforms = [
  "Instagram",
  "TikTok",
  "LinkedIn",
  "Twitter/X",
  "Facebook",
  "YouTube Shorts",
];

const contentTypes = [
  { name: "Reels & Shorts", desc: "Viral video içerikleri" },
  { name: "Carousel Postlar", desc: "Bilgilendirici swipable içerikler" },
  { name: "Story Serileri", desc: "Günlük etkileşim içerikleri" },
  { name: "Canlı Yayınlar", desc: "Etkileşimli canlı yayın yönetimi" },
];

const processSteps = [
  { number: "01", title: "Marka Analizi", titleEn: "Brand Analysis", desc: "Mevcut durum ve hedef kitle analizi.", descEn: "Current situation and target audience analysis." },
  { number: "02", title: "İçerik Stratejisi", titleEn: "Content Strategy", desc: "Aylık içerik takvimi ve tema planlaması.", descEn: "Monthly content calendar and theme planning." },
  { number: "03", title: "Üretim & Yayın", titleEn: "Production & Publishing", desc: "İçerik üretimi ve optimal zamanlama.", descEn: "Content production and optimal timing." },
  { number: "04", title: "Raporlama", desc: "Performans analizi ve optimize edilmesi." },
];

export default function SocialMedia({ params }: { params: { locale: string } }) {
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
                  href={`/${locale}/e-ticaret-paketleri`}
                  className="inline-flex items-center gap-2 text-small text-dark-900/60 hover:text-dark-900 mb-6"
                >
                  <ArrowRight size={16} className="rotate-180" />
                  {isTr ? "Tüm Ürünler" : "All Products"}
                </Link>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-pink-500 text-light-100 flex items-center justify-center">
                    <Video size={24} />
                  </div>
                  <span className="text-small text-dark-900/60 uppercase tracking-wider">
                    {isTr ? "Etkileşim Odaklı" : "Engagement Focused"}
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-dark-900 mb-6 leading-tight">
                  {isTr ? "Sosyal Medya Yönetimi" : "Social Media Management"}
                </h1>
                
                <p className="text-lg text-dark-900/60 mb-8 max-w-lg">
                  {isTr 
                    ? "Instagram, TikTok ve LinkedIn'de markanızı büyütün. Viral içerikler, aktif topluluk yönetimi ve veriye dayalı büyüme stratejileri."
                    : "Grow your brand on Instagram, TikTok, and LinkedIn. Viral content, active community management, and data-driven growth strategies."
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
                  <SocialHeroVisual className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <Heart size={20} className="text-pink-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-dark-900">+450%</div>
                      <div className="text-xs text-dark-900/60">{isTr ? "Etkileşim Artışı" : "Engagement Increase"}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <div className="text-xs font-medium text-dark-900">{isTr ? "Viral İçerik" : "Viral Content"}</div>
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
                {isTr ? "Sosyal Medya Çözümleri" : "Social Media Solutions"}
              </h2>
              <p className="text-body text-dark-900/60 max-w-2xl mx-auto">
                {isTr 
                  ? "Tüm sosyal medya platformlarında profesyonel varlık. İçerik üretiminden topluluk yönetimine kadar kapsamlı çözümler."
                  : "Professional presence across all social media platforms. Comprehensive solutions from content creation to community management."
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
                        <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-light-100 transition-colors">
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

        {/* Platforms Section */}
        <section className="py-12 bg-dark-900 text-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl mb-6">
                  {isTr ? "Desteklenen Platformlar" : "Supported Platforms"}
                </h2>
                <p className="text-light-100/60 mb-8">
                  {isTr 
                    ? "Hedef kitlenizin en aktif olduğu platformlarda profesyonel yönetim. Her platformun dinamiklerine uygun özelleştirilmiş stratejiler."
                    : "Professional management on platforms where your target audience is most active. Customized strategies tailored to each platform's dynamics."
                  }
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform) => (
                    <div key={platform} className="flex items-center gap-3">
                      <Check size={18} className="text-pink-500" />
                      <span className="text-light-100/80">{platform}</span>
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
                  <SocialPlatformsVisual className="w-full h-auto" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                {isTr ? "İçerik Formatları" : "Content Formats"}
              </h2>
              <p className="text-body text-dark-900/60 max-w-2xl mx-auto">
                {isTr 
                  ? "Her platform için optimize edilmiş, etkileşimi yüksek içerik formatları."
                  : "High-engagement content formats optimized for each platform."
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center mx-auto mb-4">
                    <Share2 size={24} />
                  </div>
                  <h3 className="font-display text-lg text-dark-900 mb-2">{type.name}</h3>
                  <p className="text-small text-dark-900/60">{type.desc}</p>
                </motion.div>
              ))}
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
                  <div className="text-4xl font-display text-pink-500/30 mb-4">{step.number}</div>
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
                  {isTr ? "Sosyal Medyada Fark Yaratın" : "Make a Difference on Social Media"}
                </h2>
                <p className="text-light-100/80 mb-8">
                  {isTr 
                    ? "Ücretsiz sosyal medya analizi alın ve potansiyelinizi keşfedin."
                    : "Get a free social media analysis and discover your potential."
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
