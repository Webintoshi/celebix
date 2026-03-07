"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  Store, 
  Smartphone, 
  Utensils, 
  Hotel, 
  Scissors, 
  Stethoscope,
  ShoppingBag,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  CreditCard,
  Star,
  Heart,
  QrCode,
  Bell,
  PieChart,
  ChevronRight
} from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import TikProfilHeroVisual from "@/components/TikProfilHeroVisual";

const businessTypes = [
  { icon: Utensils, name: "Restoran" },
  { icon: Hotel, name: "Otel" },
  { icon: ShoppingBag, name: "Pet Shop" },
  { icon: Scissors, name: "Kuaför" },
  { icon: Stethoscope, name: "Klinik" },
  { icon: Store, name: "Market" },
];

const features = [
  {
    icon: QrCode,
    title: "QR Menü & Sipariş",
    description: "Müşterileriniz masadan QR kod ile menünüze erişir, sipariş verir.",
  },
  {
    icon: Bell,
    title: "Anlık Bildirimler",
    description: "Yeni siparişler anında telefonunuza bildirim olarak düşer.",
  },
  {
    icon: PieChart,
    title: "Detaylı Analiz",
    description: "Satış raporları, en çok satan ürünler, müşteri davranışları.",
  },
  {
    icon: Heart,
    title: "Sadakat Programı",
    description: "Müşterilerinizi puan sistemi ile elinizde tutun.",
  },
  {
    icon: CreditCard,
    title: "Komisyonsuz",
    description: "Aylık 700₺ sabit ücret. Ne kadar satarsanız satın komisyon yok.",
  },
  {
    icon: Shield,
    title: "Güvenli Altyapı",
    description: "SSL sertifikası, günlük yedekleme ve 7/24 teknik destek.",
  },
];

const processSteps = [
  { number: "01", title: "Profil Oluştur", desc: "5 dakikada işletme bilgilerinizi girin." },
  { number: "02", title: "QR Kod Al", desc: "Masanıza yerleştirin, müşteriler erişsin." },
  { number: "03", title: "Sipariş Al", desc: "Anında bildirimlerle hiçbir siparişi kaçırmayın." },
];

export default function TikProfil({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";

  return (
    <>
      <Navigation locale={locale} />
      <main>
        {/* Hero Section - Aurora Theme */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora-indigo/10 text-aurora-indigo text-small font-medium mb-6">
                  <Zap size={16} />
                  {isTr ? "Yerel Esnafa Özel" : "For Local Businesses"}
                </span>
                
                <h1 className="font-display text-5xl lg:text-6xl text-dark-900 mb-4 leading-tight">
                  Tık Profil
                </h1>
                
                <p className="text-xl text-dark-900/70 mb-4">
                  {isTr ? "Komisyonsuz İşletme Yönetimi" : "Commission-Free Business Management"}
                </p>
                
                <p className="text-dark-900/50 mb-8 max-w-lg leading-relaxed">
                  {isTr 
                    ? "Restoran, kafe, otel, kuaför, klinik ve 68 işletme dalı için QR menü, sipariş yönetimi ve müşteri ilişkileri tek platformda."
                    : "QR menu, order management and customer relations in one platform for 68+ business types."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href={`/${locale}/iletisim`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
                  >
                    {isTr ? "14 Gün Ücretsiz Dene" : "Try Free for 14 Days"}
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="#nasil-calisir"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-dark-900 font-medium rounded-full border border-dark-900/20 hover:border-dark-900/40 transition-colors"
                  >
                    {isTr ? "Nasıl Çalışır?" : "How It Works?"}
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-dark-900/60">
                    <Shield size={18} className="text-aurora-indigo" />
                    <span className="text-small">{isTr ? "%0 Komisyon" : "0% Commission"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-dark-900/60">
                    <Clock size={18} className="text-aurora-violet" />
                    <span className="text-small">{isTr ? "5 DK Kurulum" : "5 Min Setup"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-dark-900/60">
                    <Users size={18} className="text-aurora-indigo" />
                    <span className="text-small">{isTr ? "68 İşletme" : "68 Businesses"}</span>
                  </div>
                </div>
              </motion.div>

              {/* Right - Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative lg:pl-8"
              >
                <TikProfilHeroVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-dark-900 text-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "500+", label: isTr ? "Aktif İşletme" : "Active Businesses" },
                { value: "68", label: isTr ? "İşletme Dalı" : "Business Types" },
                { value: "%0", label: isTr ? "Komisyon" : "Commission" },
                { value: "700₺", label: isTr ? "Aylık" : "Monthly" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-display font-bold text-aurora-indigo">{stat.value}</p>
                  <p className="text-light-100/50 mt-2 text-small">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Types */}
        <section className="py-20 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                {isTr ? "Her Sektör İçin Çözüm" : "Solution for Every Sector"}
              </h2>
              <p className="text-dark-900/50 max-w-2xl mx-auto">
                {isTr ? "68 farklı işletme dalı için özelleştirilmiş çözümler." : "Customized solutions for 68 different business types."}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {businessTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card rounded-2xl p-6 text-center hover-lift bg-white"
                  >
                    <div className="w-12 h-12 rounded-xl bg-aurora-indigo/10 text-aurora-indigo flex items-center justify-center mx-auto mb-3">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-medium text-dark-900 text-sm">{type.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="ozellikler" className="py-20 bg-dark-900 text-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl lg:text-4xl mb-4">
                {isTr ? "Tüm İhtiyaçlarınız Tek Platformda" : "All Your Needs in One Platform"}
              </h2>
              <p className="text-light-100/50 max-w-2xl mx-auto">
                {isTr ? "İşletmenizi yönetmek için ihtiyacınız olan her şey." : "Everything you need to manage your business."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-2xl p-6 bg-white/5 border-white/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-aurora-indigo/20 text-aurora-indigo flex items-center justify-center mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                    <p className="text-light-100/50 text-small">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="nasil-calisir" className="py-20 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                {isTr ? "3 Adımda Başlayın" : "Start in 3 Steps"}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 text-center bg-white"
                >
                  <div className="text-4xl font-display text-aurora-indigo/30 mb-4">{step.number}</div>
                  <h3 className="font-display text-xl text-dark-900 mb-2">{step.title}</h3>
                  <p className="text-dark-900/50 text-small">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                {isTr ? "Şeffaf Fiyatlandırma" : "Transparent Pricing"}
              </h2>
              <p className="text-dark-900/50 max-w-2xl mx-auto">
                {isTr ? "Gizli maliyet yok, komisyon yok." : "No hidden costs, no commission."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              <div className="glass-card rounded-3xl p-8 lg:p-10 text-center bg-dark-900 text-light-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-aurora-indigo text-light-100 px-4 py-1 rounded-bl-xl text-small font-medium">
                  {isTr ? "TEK PAKET" : "SINGLE PACKAGE"}
                </div>
                
                <h3 className="font-display text-2xl mb-2">Tık Profil</h3>
                <p className="text-light-100/50 mb-8">{isTr ? "Tüm özellikler dahil" : "All features included"}</p>

                <div className="mb-8">
                  <span className="font-display text-5xl font-bold">700₺</span>
                  <span className="text-light-100/50 ml-2">/ {isTr ? "ay" : "month"}</span>
                </div>

                <ul className="text-left space-y-3 mb-8">
                  {(isTr ? [
                    "Komisyonsuz sınırsız satış",
                    "QR Menü & Dijital Sipariş",
                    "68 işletme dalı desteği",
                    "Anlık sipariş bildirimleri",
                    "Sadakat & puan sistemi",
                    "Detaylı satış raporları",
                    "7/24 Teknik destek",
                    "SSL sertifikası",
                  ] : [
                    "Commission-free unlimited sales",
                    "QR Menu & Digital Orders",
                    "68 business type support",
                    "Instant order notifications",
                    "Loyalty & points system",
                    "Detailed sales reports",
                    "24/7 Technical support",
                    "SSL certificate",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-light-100/80">
                      <Check size={18} className="text-aurora-indigo flex-shrink-0" />
                      <span className="text-small">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/iletisim`}
                  className="block w-full py-4 bg-aurora-indigo text-light-100 font-medium rounded-full hover:bg-aurora-violet transition-colors"
                >
                  {isTr ? "Ücretsiz Başla" : "Start Free"}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-dark-900 text-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-10 lg:p-16 text-center bg-white/5"
            >
              <h2 className="font-display text-3xl lg:text-4xl mb-4">
                {isTr ? "Komisyon Derdinden Kurtulun" : "Get Rid of Commission Worries"}
              </h2>
              <p className="text-light-100/50 mb-8 max-w-2xl mx-auto">
                {isTr ? "14 gün ücretsiz deneyin, farkı görün." : "Try it free for 14 days, see the difference."}
              </p>
              <Link
                href={`/${locale}/iletisim`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-light-100 text-dark-900 font-medium rounded-full hover:bg-white transition-colors"
              >
                {isTr ? "Hemen Başla" : "Get Started"}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
