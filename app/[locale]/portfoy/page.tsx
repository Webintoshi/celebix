"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ExternalLink, 
  Globe,
  ShoppingCart,
  Store,
  Code,
  Megaphone,
  Share2,
  Zap,
  Check,
  TrendingUp,
  Users,
  Award,
  Gem,
  Flower2,
  Factory,
  Cpu,
  ShoppingBag,
  Droplets
} from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import CelebixPortfolioVisual from "@/components/CelebixPortfolioVisual";

const portfolioItems = [
  {
    id: "celebix-ecommerce",
    type: "product",
    title: "Celebix E-Ticaret",
    titleEn: "Celebix E-Commerce",
    subtitle: "Kendi Ürünümüz",
    subtitleEn: "Our Product",
    description: "AI destekli, sınırsız ürün kapasiteli premium e-ticaret platformu. Tüm pazar yerleri tek panelden yönetilir.",
    descriptionEn: "AI-powered premium e-commerce platform with unlimited product capacity. All marketplaces from one panel.",
    price: "19.000₺ Tek Fiyat",
    priceEn: "19,000₺ Fixed Price",
    icon: ShoppingCart,
    color: "aurora-indigo",
    link: "/e-ticaret-paketleri",
    stats: [
      { label: "Müşteri", value: "50+" },
      { label: "Satış Artışı", value: "+180%" },
      { label: "Uptime", value: "99.9%" },
    ],
    features: ["AI SEO", "Pazar Yeri Entegrasyonu", "Özelleştirilebilir"],
  },
  {
    id: "tik-profil",
    type: "product",
    title: "Tık Profil",
    titleEn: "Tik Profil",
    subtitle: "Kendi Ürünümüz",
    subtitleEn: "Our Product", 
    description: "68+ işletme dalı için komisyonsuz işletme yönetimi. QR menü, sipariş yönetimi ve müşteri ilişkileri.",
    descriptionEn: "Commission-free business management for 68+ sectors. QR menu, order management and customer relations.",
    price: "700₺/ay",
    priceEn: "700₺/month",
    icon: Store,
    color: "emerald",
    link: "/celebix-saas-platformu",
    stats: [
      { label: "İşletme", value: "500+" },
      { label: "Komisyon", value: "%0" },
      { label: "Sektör", value: "68" },
    ],
    features: ["QR Menü", "Sipariş Yönetimi", "Sadakat Programı"],
  },
  {
    id: "kurumsal-yazilim",
    type: "service",
    title: "Kurumsal Yazılım",
    titleEn: "Enterprise Software",
    subtitle: "Hizmetimiz",
    subtitleEn: "Our Service",
    description: "Özel yazılım geliştirme, web ve mobil uygulamalar, API entegrasyonları ve kurumsal çözümler.",
    descriptionEn: "Custom software development, web and mobile apps, API integrations and enterprise solutions.",
    icon: Code,
    color: "aurora-violet",
    link: "/kurumsal-yazilim",
    stats: [
      { label: "Proje", value: "200+" },
      { label: "Müşteri", value: "150+" },
      { label: "Tecrübe", value: "8+ Yıl" },
    ],
    features: ["Özel Yazılım", "Web/Mobil", "API Entegrasyonu"],
  },
  {
    id: "dijital-pazarlama",
    type: "service", 
    title: "Dijital Pazarlama",
    titleEn: "Digital Marketing",
    subtitle: "Hizmetimiz",
    subtitleEn: "Our Service",
    description: "Google Ads, Meta Business Partner sertifikalı reklam yönetimi, SEO ve içerik pazarlama.",
    descriptionEn: "Google Ads, Meta Business Partner certified ad management, SEO and content marketing.",
    icon: Megaphone,
    color: "amber",
    link: "/dijital-pazarlama",
    stats: [
      { label: "Google Partner", value: "✓" },
      { label: "Meta Partner", value: "✓" },
      { label: "ROAS", value: "8x" },
    ],
    features: ["Google Ads", "Meta Ads", "SEO"],
  },
  {
    id: "sosyal-medya",
    type: "service",
    title: "Sosyal Medya",
    titleEn: "Social Media", 
    subtitle: "Hizmetimiz",
    subtitleEn: "Our Service",
    description: "İçerik üretimi, topluluk yönetimi, influencer marketing ve sosyal medya stratejisi.",
    descriptionEn: "Content creation, community management, influencer marketing and social media strategy.",
    icon: Share2,
    color: "rose",
    link: "/sosyal-medya",
    stats: [
      { label: "Hesap Yönetimi", value: "100+" },
      { label: "İçerik/ay", value: "5K+" },
      { label: "Etkileşim", value: "+300%" },
    ],
    features: ["İçerik Üretimi", "Topluluk Yönetimi", "Influencer"],
  },
];

const achievements = [
  { icon: Award, value: "Google", label: "Premier Partner" },
  { icon: Award, value: "Meta", label: "Business Partner" },
  { icon: Award, value: "2024", label: "Cyber Security Winner" },
  { icon: TrendingUp, value: "500+", label: "Aktif Proje" },
];

const clientProjects = [
  {
    id: "derycraft",
    name: "DeryCraft",
    nameEn: "DeryCraft",
    url: "https://derycraft.com.tr/",
    category: "Deri Ürünleri",
    categoryEn: "Leather Products",
    description: "Premium deri ürünleri için modern e-ticaret platformu. Özel tasarım, kullanıcı dostu arayüz ve entegre ödeme sistemi.",
    descriptionEn: "Modern e-commerce platform for premium leather products. Custom design, user-friendly interface and integrated payment system.",
    icon: ShoppingBag,
    color: "amber",
  },
  {
    id: "okurotomasyon",
    name: "Okur Otomasyon",
    nameEn: "Okur Automation",
    url: "https://okurotomasyon.com/",
    category: "Otomasyon",
    categoryEn: "Automation",
    description: "Endüstriyel otomasyon çözümleri için kurumsal web sitesi. Ürün kataloğu, teknik dokümantasyon ve müşteri portalı.",
    descriptionEn: "Corporate website for industrial automation solutions. Product catalog, technical documentation and customer portal.",
    icon: Cpu,
    color: "aurora-indigo",
  },
  {
    id: "dolka",
    name: "Dolka",
    nameEn: "Dolka",
    url: "https://dolka.com.tr/",
    category: "Sıvı Dolum Makineleri",
    categoryEn: "Liquid Filling Machines",
    description: "Endüstriyel dolum makineleri üreticisi için kurumsal web sitesi. Ürün vitrini, teknik specifikasyonlar ve global satış odaklı.",
    descriptionEn: "Corporate website for industrial filling machine manufacturer. Product showcase, technical specifications and global sales focused.",
    icon: Factory,
    color: "emerald",
  },
  {
    id: "guzide",
    name: "Guzide Kuyumcu",
    nameEn: "Guzide Jewelry",
    url: "https://guzidekuyumcu.com.tr/",
    category: "Kuyumcu",
    categoryEn: "Jewelry",
    description: "Lüks kuyumcu markası için özel tasarlanmış e-ticaret sitesi. 360° ürün görüntüleme, canlı destek ve özel koleksiyon sayfaları.",
    descriptionEn: "Custom-designed e-commerce site for luxury jewelry brand. 360° product viewing, live support and special collection pages.",
    icon: Gem,
    color: "rose",
  },
  {
    id: "flowpart",
    name: "FlowPart",
    nameEn: "FlowPart",
    url: "https://flowpart.net/",
    category: "Otomasyon",
    categoryEn: "Automation",
    description: "Akış kontrol ve otomasyon sistemleri için kurumsal web platformu. IoT entegrasyonu, uzaktan izleme ve teknik destek modülü.",
    descriptionEn: "Corporate web platform for flow control and automation systems. IoT integration, remote monitoring and technical support module.",
    icon: Zap,
    color: "cyan",
  },
  {
    id: "lilyumflora",
    name: "Lilyum Flora",
    nameEn: "Lilyum Flora",
    url: "https://lilyumflora.net/",
    category: "Çiçekçi",
    categoryEn: "Florist",
    description: "Online çiçek sipariş platformu. Aynı gün teslimat, bölgesel bayi yönetimi ve özel gün hatırlatma sistemi.",
    descriptionEn: "Online flower ordering platform. Same-day delivery, regional dealer management and special occasion reminder system.",
    icon: Flower2,
    color: "pink",
  },
];

export default function Portfolio({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";

  const products = portfolioItems.filter(item => item.type === "product");
  const services = portfolioItems.filter(item => item.type === "service");

  return (
    <>
      <Navigation locale={locale} />
      <main className="bg-light-100">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora-indigo/10 text-aurora-indigo text-small font-medium mb-6">
                <Globe size={16} />
                {isTr ? "İşlerimiz" : "Our Work"}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-dark-900 mb-6 leading-tight">
                {isTr ? "Portföyümüz" : "Our Portfolio"}
              </h1>
              <p className="text-lg text-dark-900/60 mb-8 max-w-2xl mx-auto">
                {isTr 
                  ? "Geliştirdiğimiz ürünler ve sunduğumuz hizmetler. Her projede mükemmellik için çalışıyoruz."
                  : "Products we developed and services we offer. We strive for excellence in every project."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl text-dark-900 mb-2">
                {isTr ? "Kendi Ürünlerimiz" : "Our Products"}
              </h2>
              <p className="text-dark-900/50">
                {isTr ? "Sıfırdan geliştirdiğimiz platformlar" : "Platforms built from scratch"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.link} className="group block">
                      <div className="glass-card rounded-3xl overflow-hidden bg-white hover-lift h-full">
                        {/* Visual */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-dark-900">
                          {item.id === "celebix-ecommerce" ? (
                            <CelebixPortfolioVisual visualType="ecommerce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-900">
                              <div className="text-center">
                                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                                  <Icon size={40} className="text-emerald-400" />
                                </div>
                                <span className="text-white/60 text-sm">Tık Profil</span>
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 rounded-full bg-dark-900 text-light-100 text-xs font-medium">
                              {isTr ? item.subtitle : item.subtitleEn}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 lg:p-8">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 rounded-xl bg-${item.color === 'emerald' ? 'emerald' : 'aurora-indigo'}/10 flex items-center justify-center`}>
                                <Icon size={24} className={item.color === 'emerald' ? 'text-emerald-600' : 'text-aurora-indigo'} />
                              </div>
                              <div>
                                <h3 className="font-display text-xl text-dark-900">
                                  {isTr ? item.title : item.titleEn}
                                </h3>
                                <p className={`text-small font-medium ${item.color === 'emerald' ? 'text-emerald-600' : 'text-aurora-indigo'}`}>
                                  {isTr ? item.price : item.priceEn}
                                </p>
                              </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-dark-900/5 flex items-center justify-center group-hover:bg-dark-900 group-hover:text-light-100 transition-colors">
                              <ArrowRight size={18} />
                            </div>
                          </div>

                          <p className="text-dark-900/60 text-small mb-4">
                            {isTr ? item.description : item.descriptionEn}
                          </p>

                          {/* Stats */}
                          <div className="flex gap-4 mb-4 pt-4 border-t border-dark-900/5">
                            {item.stats.map((stat, i) => (
                              <div key={i} className="text-center">
                                <div className="font-display text-lg font-bold text-dark-900">{stat.value}</div>
                                <div className="text-[10px] text-dark-900/40 uppercase">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2">
                            {item.features.map((feature, i) => (
                              <span key={i} className="px-2 py-1 bg-light-200 text-dark-900/70 text-xs rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-dark-900 text-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl mb-2">
                {isTr ? "Hizmetlerimiz" : "Our Services"}
              </h2>
              <p className="text-light-100/50">
                {isTr ? "İşletmenizi büyütmek için uzman çözümler" : "Expert solutions to grow your business"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.link} className="group block">
                      <div className="glass-card rounded-2xl p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-14 h-14 rounded-xl bg-aurora-indigo/20 flex items-center justify-center">
                            <Icon size={28} className="text-aurora-indigo" />
                          </div>
                          <span className="px-2 py-1 rounded-full bg-white/10 text-light-100/60 text-xs">
                            {isTr ? item.subtitle : item.subtitleEn}
                          </span>
                        </div>

                        <h3 className="font-display text-xl mb-2">
                          {isTr ? item.title : item.titleEn}
                        </h3>
                        <p className="text-light-100/50 text-small mb-4">
                          {isTr ? item.description : item.descriptionEn}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-3 mb-4">
                          {item.stats.map((stat, i) => (
                            <div key={i} className="text-center px-2 py-1 bg-white/5 rounded-lg">
                              <div className="font-display text-sm font-bold text-aurora-indigo">{stat.value}</div>
                              <div className="text-[10px] text-light-100/40">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-1 text-aurora-indigo text-small font-medium group-hover:gap-2 transition-all">
                          {isTr ? "Detayları Gör" : "View Details"}
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Client Projects */}
        <section className="py-16">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl text-dark-900 mb-2">
                {isTr ? "Gerçekleştirdiğimiz Projeler" : "Projects We've Delivered"}
              </h2>
              <p className="text-dark-900/50">
                {isTr ? "Müşterilerimiz için hayata geçirdiğimiz çalışmalar" : "Works we've brought to life for our clients"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientProjects.map((project, index) => {
                const Icon = project.icon;
                const colorClasses: Record<string, string> = {
                  amber: "bg-amber-100 text-amber-600",
                  "aurora-indigo": "bg-aurora-indigo/10 text-aurora-indigo",
                  emerald: "bg-emerald-100 text-emerald-600",
                  rose: "bg-rose-100 text-rose-600",
                  cyan: "bg-cyan-100 text-cyan-600",
                  pink: "bg-pink-100 text-pink-600",
                };
                const bgClass = colorClasses[project.color] || "bg-aurora-indigo/10 text-aurora-indigo";
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="glass-card rounded-2xl p-6 bg-white border border-dark-900/5 hover:border-aurora-indigo/30 transition-all h-full hover-lift">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-14 h-14 rounded-xl ${bgClass} flex items-center justify-center`}>
                            <Icon size={28} />
                          </div>
                          <div className="w-10 h-10 rounded-full bg-dark-900/5 flex items-center justify-center group-hover:bg-aurora-indigo group-hover:text-light-100 transition-colors">
                            <ExternalLink size={18} />
                          </div>
                        </div>

                        <div className="mb-3">
                          <span className="text-xs text-dark-900/40 uppercase tracking-wide font-medium">
                            {isTr ? project.category : project.categoryEn}
                          </span>
                        </div>

                        <h3 className="font-display text-xl text-dark-900 mb-2">
                          {isTr ? project.name : project.nameEn}
                        </h3>
                        <p className="text-dark-900/50 text-small mb-4 line-clamp-3">
                          {isTr ? project.description : project.descriptionEn}
                        </p>

                        <div className="flex items-center gap-2 text-aurora-indigo text-small font-medium pt-4 border-t border-dark-900/5 group-hover:gap-3 transition-all">
                          {isTr ? "Siteyi Ziyaret Et" : "Visit Website"}
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 lg:p-12 bg-white"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 rounded-xl bg-aurora-indigo/10 flex items-center justify-center mx-auto mb-3">
                        <Icon size={24} className="text-aurora-indigo" />
                      </div>
                      <div className="font-display text-2xl font-bold text-dark-900 mb-1">{item.value}</div>
                      <div className="text-small text-dark-900/50">{item.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-10 lg:p-16 text-center bg-dark-900 text-light-100"
            >
              <h2 className="font-display text-3xl lg:text-4xl mb-4">
                {isTr ? "Birlikte Çalışalım" : "Let's Work Together"}
              </h2>
              <p className="text-light-100/60 mb-8 max-w-2xl mx-auto">
                {isTr 
                  ? "İşletmeniz için doğru çözümü birlikte bulalım. Ücretsiz danışmanlık için bize ulaşın."
                  : "Let's find the right solution for your business. Contact us for free consultation."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}/iletisim`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-light-100 text-dark-900 font-medium rounded-full hover:bg-white transition-colors"
                >
                  {isTr ? "Ücretsiz Teklif Al" : "Get Free Quote"}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href={`/${locale}/e-ticaret-paketleri`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-light-100 font-medium rounded-full border border-light-100/20 hover:border-light-100/40 transition-colors"
                >
                  {isTr ? "E-Ticaret Paketleri" : "E-Commerce Packages"}
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
