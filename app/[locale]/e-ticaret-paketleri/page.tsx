"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  X, 
  ShoppingCart, 
  Palette, 
  Infinity, 
  Search, 
  Store, 
  FileText, 
  Truck, 
  CreditCard, 
  Smartphone,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import ETicaretHeroVisual from "@/components/ETicaretHeroVisual";
import MarketplaceVisual from "@/components/MarketplaceVisual";
import AISEOVisual from "@/components/AISEOVisual";
import FeatureVisual from "@/components/FeatureVisual";

// Comparison Table Cell Component
function ComparisonCell({ data, isHighlight = false }: { data: { value: string; label: string }; isHighlight?: boolean }) {
  const getIcon = () => {
    switch (data.value) {
      case "included":
      case "yes":
      case "fixed":
        return (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${isHighlight ? 'bg-green-100' : 'bg-green-50'}`}>
            <Check size={16} className="text-green-600" />
          </div>
        );
      case "no":
        return (
          <div className="w-8 h-8 rounded-full bg-dark-900/5 flex items-center justify-center mx-auto">
            <X size={16} className="text-dark-900/30" />
          </div>
        );
      case "paid":
      case "limited":
      case "commission":
      case "partial_paid":
      case "variable":
        return (
          <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center mx-auto">
            <span className="text-yellow-600 text-sm">~</span>
          </div>
        );
      case "basic":
        return (
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
            <span className="text-blue-600 text-xs">B</span>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-dark-900/5 flex items-center justify-center mx-auto">
            <span className="text-dark-900/40 text-xs">-</span>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      {getIcon()}
      <span className={`text-xs mt-1 ${isHighlight ? 'font-medium text-green-700' : 'text-dark-900/60'}`}>
        {data.label}
      </span>
    </div>
  );
}

// Interactive Comparison Section
const competitors = {
  saas: { 
    name: "Abonelik Modeli", 
    nameEn: "Subscription Model",
    desc: "Aylık/Ürün başına ödeme",
    descEn: "Monthly/Per product fees",
    price: "35.000₺+", 
    priceEn: "35K+",
    color: "#6366F1" 
  },
  legacy: { 
    name: "Eski Nesil CMS", 
    nameEn: "Legacy CMS",
    desc: "Geleneksel altyapı",
    descEn: "Traditional infrastructure",
    price: "40.000₺+", 
    priceEn: "40K+",
    color: "#8B5CF6" 
  },
  enterprise: { 
    name: "Kurumsal Paket", 
    nameEn: "Enterprise Package",
    desc: "Yüksek maliyetli çözüm",
    descEn: "High cost solution",
    price: "50.000₺+", 
    priceEn: "50K+",
    color: "#EC4899" 
  },
  global: { 
    name: "Yabancı Altyapı", 
    nameEn: "Foreign Platform",
    desc: "Uluslararası sağlayıcı",
    descEn: "International provider",
    price: "40.000₺+", 
    priceEn: "40K+",
    color: "#10B981" 
  },
};

function ComparisonSection({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  const [selectedCompetitor, setSelectedCompetitor] = useState<keyof typeof competitors>("saas");
  
  const comp = competitors[selectedCompetitor];

  return (
    <section className="py-16 bg-dark-900 text-light-100">
      <div className="container-max mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl lg:text-5xl mb-4">
            {isTr ? "Bizi Onlarla Kıyaslayın" : "Compare Us With Them"}
          </h2>
          <p className="text-light-100/60 max-w-2xl mx-auto text-lg">
            {isTr 
              ? "Şeffaf karşılaştırma. Kendiniz görün, kendiniz karar verin."
              : "Transparent comparison. See for yourself, decide for yourself."}
          </p>
        </motion.div>

        {/* Competitor Selector Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {(Object.keys(competitors) as Array<keyof typeof competitors>).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedCompetitor(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCompetitor === key
                  ? 'bg-light-100 text-dark-900 shadow-lg'
                  : 'bg-white/10 text-light-100/70 hover:bg-white/20'
              }`}
            >
              {isTr ? competitors[key].name : competitors[key].nameEn}
            </button>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          key={selectedCompetitor}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-light-100 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-dark-900/10 bg-gradient-to-r from-dark-900/5 to-transparent">
            <div className="text-left">
              <span className="text-sm text-dark-900/50 font-medium">{isTr ? "Özellik" : "Feature"}</span>
            </div>
            <div className="text-center">
              <div className="inline-flex flex-col items-center bg-dark-900 text-light-100 px-6 py-3 rounded-2xl">
                <span className="font-display text-xl font-bold">Celebix</span>
                <span className="text-sm text-light-100/70">19.000₺/yıl</span>
              </div>
            </div>
            <div className="text-center">
              <div 
                className="inline-flex flex-col items-center px-6 py-3 rounded-2xl border-2"
                style={{ borderColor: comp.color + '40', backgroundColor: comp.color + '10' }}
              >
                <span className="font-display text-xl font-bold" style={{ color: comp.color }}>
                  {isTr ? comp.name : comp.nameEn}
                </span>
                <span className="text-sm text-dark-900/60">{isTr ? comp.price : comp.priceEn}</span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-dark-900/5">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-3 gap-4 p-5 hover:bg-dark-900/[0.02] transition-colors items-center"
              >
                <div className="text-dark-900 font-medium">
                  {isTr ? row.feature : row.featureEn}
                </div>
                <div className="text-center bg-dark-900/5 rounded-xl py-4">
                  <ComparisonCell data={row.celebix} isHighlight={true} />
                </div>
                <div className="text-center rounded-xl py-4" style={{ backgroundColor: comp.color + '08' }}>
                  <ComparisonCell data={row[selectedCompetitor as keyof typeof row] as {value: string; label: string}} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Winner Banner */}
          <div className="p-6 bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent border-t border-green-500/20">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Check size={20} className="text-white" />
              </div>
              <p className="text-dark-900 font-medium text-lg">
                {isTr 
                  ? `Celebix ile yılda ${selectedCompetitor === "saas" ? "16.000₺+" : selectedCompetitor === "global" || selectedCompetitor === "legacy" ? "21.000₺+" : "31.000₺+"} tasarruf edin`
                  : `Save ${selectedCompetitor === "saas" ? "16K+" : selectedCompetitor === "global" || selectedCompetitor === "legacy" ? "21K+" : "31K+"} annually with Celebix`
                }
              </p>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-small text-light-100/60">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check size={14} className="text-green-400" />
            </div>
            <span>{isTr ? "Dahil / Var" : "Included"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <span className="text-yellow-400 text-xs">~</span>
            </div>
            <span>{isTr ? "Sınırlı / Ek Ücretli" : "Limited / Extra Cost"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <X size={14} className="text-white/40" />
            </div>
            <span>{isTr ? "Yok / Komisyonlu" : "Not Available"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Palette,
    title: "%100 Kişiye Özel Tasarım",
    titleEn: "100% Custom Design",
    description: "Hazır tema yok. Markanıza özgü, sıfırdan tasarlanan benzersiz bir e-ticaret deneyimi.",
    descriptionEn: "No ready-made themes. A unique e-commerce experience designed from scratch for your brand.",
    visual: "design",
  },
  {
    icon: Infinity,
    title: "Sınırsız Ürün & Kategori",
    titleEn: "Unlimited Products & Categories",
    description: "Kullanıcı başına veya ürün başına ek ücret yok. İstediğiniz kadar ürün ekleyin.",
    descriptionEn: "No per-user or per-product fees. Add as many products as you want.",
    visual: "unlimited",
  },
  {
    icon: Search,
    title: "Yapay Zeka SEO Asistanı",
    titleEn: "AI SEO Assistant",
    description: "Otomatik meta tag oluşturma, içerik önerileri, rakip analizi ve keyword optimizasyonu.",
    descriptionEn: "Automatic meta tag generation, content suggestions, competitor analysis, and keyword optimization.",
    visual: "seo",
  },
  {
    icon: Store,
    title: "Tüm Pazar Yerleri Tek Panel",
    titleEn: "All Marketplaces One Panel",
    description: "Trendyol, Amazon, Hepsiburada, n11 ve daha fazlasını tek yerden yönetin.",
    descriptionEn: "Manage Trendyol, Amazon, Hepsiburada, n11 and more from one place.",
    visual: "marketplace",
  },
  {
    icon: FileText,
    title: "Otomatik Fatura Entegrasyonu",
    titleEn: "Automatic Invoice Integration",
    description: "Logo, Paraşüt, e-Fatura entegrasyonları ile otomatik faturalandırma.",
    descriptionEn: "Automated invoicing with Logo, Paraşüt, e-Invoice integrations.",
    visual: "invoice",
  },
  {
    icon: Truck,
    title: "Kargo Entegrasyonu",
    titleEn: "Cargo Integration",
    description: "Yurtiçi, Aras, MNG, PTT kargo firmalarıyla otomatik kargo süreçleri.",
    descriptionEn: "Automated shipping processes with Yurtiçi, Aras, MNG, PTT.",
    visual: "cargo",
  },
  {
    icon: CreditCard,
    title: "Ödeme Altyapıları",
    titleEn: "Payment Infrastructure",
    description: "iyzico, PayTR, Stripe ve tüm banka sanal pos entegrasyonları hazır.",
    descriptionEn: "Ready integrations with iyzico, PayTR, Stripe and all bank virtual POS.",
    visual: "payment",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    titleEn: "Mobile Application",
    description: "iOS ve Android için native mobil uygulama seçeneği.",
    descriptionEn: "Native mobile app option for iOS and Android.",
    visual: "mobile",
  },
];

const marketplaces = [
  { name: "Trendyol", color: "#FF6000" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Hepsiburada", color: "#FF6000" },
  { name: "n11", color: "#5D8C87" },
  { name: "Çiçek Sepeti", color: "#00AEEF" },
  { name: "PTT AVM", color: "#FFD700" },
];

const comparisonData = [
  { 
    feature: "Kişiye Özel Tasarım", 
    featureEn: "Custom Design",
    celebix: { value: "included", label: "Dahil" }, 
    saas: { value: "paid", label: "Ek Ücretli" }, 
    legacy: { value: "paid", label: "Ek Ücretli" }, 
    enterprise: { value: "paid", label: "Ek Ücretli" },
    global: { value: "paid", label: "Ek Ücretli" }
  },
  { 
    feature: "Hazır Tema Seçeneği", 
    featureEn: "Ready-made Themes",
    celebix: { value: "no", label: "Yok" }, 
    saas: { value: "yes", label: "Var" }, 
    legacy: { value: "yes", label: "Var" }, 
    enterprise: { value: "yes", label: "Var" },
    global: { value: "yes", label: "Var" }
  },
  { 
    feature: "Sınırsız Ürün Ekleme", 
    featureEn: "Unlimited Products",
    celebix: { value: "included", label: "Dahil" }, 
    saas: { value: "limited", label: "Limitli/Paket" }, 
    legacy: { value: "limited", label: "Limitli/Paket" }, 
    enterprise: { value: "limited", label: "Limitli/Paket" },
    global: { value: "limited", label: "Limitli/Paket" }
  },
  { 
    feature: "AI SEO Asistanı", 
    featureEn: "AI SEO Assistant",
    celebix: { value: "included", label: "Dahil" }, 
    saas: { value: "no", label: "Yok" }, 
    legacy: { value: "no", label: "Yok" }, 
    enterprise: { value: "basic", label: "Temel" },
    global: { value: "partial_paid", label: "Ek Ücretli" }
  },
  { 
    feature: "Pazar Yeri Entegrasyonu", 
    featureEn: "Marketplace Integration",
    celebix: { value: "included", label: "Tümü Dahil" }, 
    saas: { value: "partial_paid", label: "Sınırlı/Ek Ücretli" }, 
    legacy: { value: "partial_paid", label: "Sınırlı/Ek Ücretli" }, 
    enterprise: { value: "partial_paid", label: "Sınırlı/Ek Ücretli" },
    global: { value: "partial_paid", label: "Sınırlı/Ek Ücretli" }
  },
  { 
    feature: "Ödeme Altyapısı", 
    featureEn: "Payment Infrastructure",
    celebix: { value: "included", label: "Tümü Dahil" }, 
    saas: { value: "commission", label: "Komisyonlu" }, 
    legacy: { value: "commission", label: "Komisyonlu" }, 
    enterprise: { value: "commission", label: "Komisyonlu" },
    global: { value: "commission", label: "Komisyonlu" }
  },
  { 
    feature: "Teknik Destek", 
    featureEn: "Technical Support",
    celebix: { value: "included", label: "7/24 Dahil" }, 
    saas: { value: "limited", label: "Mesai Saatleri" }, 
    legacy: { value: "limited", label: "Mesai Saatleri" }, 
    enterprise: { value: "limited", label: "Mesai Saatleri" },
    global: { value: "limited", label: "Mesai Saatleri" }
  },
  { 
    feature: "Fatura/Kargo Entegrasyonu", 
    featureEn: "Invoice/Cargo Integration",
    celebix: { value: "included", label: "Dahil" }, 
    saas: { value: "partial_paid", label: "Bazıları Ek Ücretli" }, 
    legacy: { value: "partial_paid", label: "Bazıları Ek Ücretli" }, 
    enterprise: { value: "partial_paid", label: "Bazıları Ek Ücretli" },
    global: { value: "partial_paid", label: "Bazıları Ek Ücretli" }
  },
  { 
    feature: "Komisyon/İşlem Ücreti", 
    featureEn: "Commission/Transaction Fee",
    celebix: { value: "no", label: "Yok" }, 
    saas: { value: "yes", label: "%1-2 Komisyon" }, 
    legacy: { value: "yes", label: "İşlem Başı" }, 
    enterprise: { value: "yes", label: "Ek Ücretler" },
    global: { value: "yes", label: "Ek Ücretler" }
  },
  { 
    feature: "Yıllık Maliyet (Ortalama)", 
    featureEn: "Annual Cost (Average)",
    celebix: { value: "fixed", label: "19.000₺ Sabit" }, 
    saas: { value: "variable", label: "35.000₺+" }, 
    legacy: { value: "variable", label: "40.000₺+" }, 
    enterprise: { value: "variable", label: "50.000₺+" },
    global: { value: "variable", label: "40.000₺+" }
  },
];

const faqs = [
  {
    question: "Mevcut e-ticaret sitemdeki verileri taşıyabilir miyim?",
    questionEn: "Can I transfer data from my current e-commerce site?",
    answer: "Evet, CSV, XML veya API üzerinden tüm ürünlerinizi, müşteri verilerinizi ve sipariş geçmişinizi sorunsuz bir şekilde aktarabiliriz. Ücretsiz migrasyon desteği sağlıyoruz.",
    answerEn: "Yes, we can seamlessly transfer all your products, customer data, and order history via CSV, XML, or API. We provide free migration support.",
  },
  {
    question: "Teknik bilgim olmadan paneli kullanabilir miyim?",
    questionEn: "Can I use the panel without technical knowledge?",
    answer: "Kesinlikle. Admin panelimiz son kullanıcı dostu tasarlandı. Ayrıca kurulum sırasında 1 saatlik ücretsiz eğitim ve sonrasında video dokümantasyon sağlıyoruz.",
    answerEn: "Absolutely. Our admin panel is designed to be user-friendly. We also provide 1 hour of free training during setup and video documentation afterwards.",
  },
  {
    question: "Entegrasyonlar için ek ücret öder miyim?",
    questionEn: "Do I pay extra for integrations?",
    answer: "Hayır. Tüm pazar yeri, kargo, ödeme ve fatura entegrasyonları yıllık ücrete dahildir. Ayrıca ekstra bir maliyet talep etmiyoruz.",
    answerEn: "No. All marketplace, shipping, payment, and invoice integrations are included in the annual fee. We don't charge any additional costs.",
  },
  {
    question: "Destek alabilir miyim?",
    questionEn: "Can I get support?",
    answer: "7/24 teknik destek sağlıyoruz. WhatsApp üzerinden anında ulaşabilir, acil durumlarda telefon desteği alabilirsiniz.",
    answerEn: "We provide 24/7 technical support. You can reach us instantly via WhatsApp and get phone support in urgent situations.",
  },
  {
    question: "Sözleşme süresi ne kadar?",
    questionEn: "What is the contract duration?",
    answer: "Yıllık sözleşme ile çalışıyoruz. İlk yıl sonunda memnun kalmazsanız taahhüt olmadan ayrılabilirsiniz.",
    answerEn: "We work with annual contracts. If you're not satisfied after the first year, you can leave without commitment.",
  },
];

export default function ETicaretPaketleri({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Navigation locale={locale} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 overflow-hidden bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900 text-light-100 text-small font-medium mb-6">
                  <ShoppingCart size={16} />
                  {isTr ? "E-Ticaret Çözümleri" : "E-Commerce Solutions"}
                </span>
                
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-dark-900 mb-6 leading-tight">
                  {isTr 
                    ? "Tamamen Size Özel E-Ticaret Platformu" 
                    : "Fully Custom E-Commerce Platform"}
                </h1>
                
                <p className="text-lg text-dark-900/60 mb-8 max-w-lg">
                  {isTr 
                    ? "Hazır temalar değil, markanıza özel kodlanmış sistem. Sınırsız ürün, AI destekli SEO ve tüm pazar yerleri tek panelde."
                    : "Not ready-made themes, but a system coded specifically for your brand. Unlimited products, AI-powered SEO and all marketplaces in one panel."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#demo"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
                  >
                    {isTr ? "Ücretsiz Demo Talep Et" : "Request Free Demo"}
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-dark-900 font-medium rounded-full border border-dark-900/20 hover:border-dark-900/40 transition-colors"
                  >
                    {isTr ? "Fiyatları Gör" : "See Pricing"}
                  </Link>
                </div>

                <div className="flex items-center gap-6 mt-8 pt-8 border-t border-dark-900/10">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-dark-900/10 border-2 border-white flex items-center justify-center text-xs font-medium text-dark-900/60">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-small text-dark-900/60">
                    {isTr ? "50+ işletme güveniyor" : "50+ businesses trust us"}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-dark-900/10">
                  <ETicaretHeroVisual className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp size={20} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-dark-900">+180%</div>
                      <div className="text-xs text-dark-900/60">{isTr ? "Ort. Satış Artışı" : "Avg. Sales Increase"}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Comparison Section */}
        <ComparisonSection locale={locale} />

        {/* Features Grid */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                {isTr ? "Tüm Özellikler Dahil" : "All Features Included"}
              </h2>
              <p className="text-dark-900/60 max-w-2xl mx-auto">
                {isTr 
                  ? "Başka hiçbir yerde bulamayacağınız özellikler, tek bir fiyatla."
                  : "Features you won't find anywhere else, at a single price."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card rounded-2xl p-6 hover-lift group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-dark-900/5 flex items-center justify-center mb-4 group-hover:bg-dark-900 group-hover:text-light-100 transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display text-lg text-dark-900 mb-2">
                      {isTr ? feature.title : feature.titleEn}
                    </h3>
                    <p className="text-small text-dark-900/60">
                      {isTr ? feature.description : feature.descriptionEn}
                    </p>
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <FeatureVisual type={feature.visual as any} className="w-full h-28 object-cover" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Marketplaces Section */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-6">
                  {isTr ? "Tüm Pazar Yerleri Tek Panel" : "All Marketplaces One Panel"}
                </h2>
                <p className="text-dark-900/60 mb-8">
                  {isTr 
                    ? "Trendyol, Amazon, Hepsiburada ve daha fazlasını tek bir panelden yönetin. Stok senkronizasyonu otomatik, siparişler tek ekranda."
                    : "Manage Trendyol, Amazon, Hepsiburada and more from a single panel. Automatic stock synchronization, orders on one screen."}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {marketplaces.map((mp) => (
                    <div key={mp.name} className="glass-card rounded-xl p-4 text-center">
                      <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: mp.color }}>
                        {mp.name.charAt(0)}
                      </div>
                      <span className="text-xs text-dark-900/70">{mp.name}</span>
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
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-dark-900/10">
                  <MarketplaceVisual className="w-full h-auto" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI SEO Section */}
        <section className="py-12 bg-dark-900 text-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="rounded-2xl overflow-hidden">
                  <AISEOVisual className="w-full h-auto" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-light-100 text-small font-medium mb-6">
                  <Zap size={16} />
                  {isTr ? "Yapay Zeka Destekli" : "AI Powered"}
                </span>
                <h2 className="font-display text-3xl lg:text-4xl mb-6">
                  {isTr ? "Akıllı SEO Asistanı" : "Smart SEO Assistant"}
                </h2>
                <p className="text-light-100/60 mb-8">
                  {isTr 
                    ? "Rakiplerinizde ek ücretle sunulan veya hiç olmayan yapay zeka SEO özellikleri, Celebix'te standart."
                    : "AI SEO features that are either extra or non-existent at competitors are standard at Celebix."}
                </p>
                <ul className="space-y-4">
                  {[
                    isTr ? "Otomatik meta tag ve açıklama oluşturma" : "Automatic meta tag and description generation",
                    isTr ? "Rakip analizi ve fırsat önerileri" : "Competitor analysis and opportunity suggestions",
                    isTr ? "Keyword optimizasyonu ve içerik önerileri" : "Keyword optimization and content suggestions",
                    isTr ? "Google sıralama takibi" : "Google ranking tracking",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={20} className="text-green-400 flex-shrink-0" />
                      <span className="text-light-100/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                {isTr ? "Şeffaf Fiyatlandırma" : "Transparent Pricing"}
              </h2>
              <p className="text-dark-900/60 max-w-2xl mx-auto">
                {isTr 
                  ? "Gizli maliyet yok, kullanıcı başına ücret yok, transaction ücreti yok."
                  : "No hidden costs, no per-user fees, no transaction fees."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="glass-card rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden border-2 border-dark-900">
                <div className="absolute top-0 right-0 bg-dark-900 text-light-100 px-4 py-1 rounded-bl-xl text-small font-medium">
                  {isTr ? "Tek Paket" : "Single Package"}
                </div>
                
                <h3 className="font-display text-2xl text-dark-900 mb-2">
                  {isTr ? "E-Ticaret Paketi" : "E-Commerce Package"}
                </h3>
                <p className="text-dark-900/60 mb-8">
                  {isTr ? "Tüm özellikler dahil, yıllık tek ödeme" : "All features included, single annual payment"}
                </p>

                <div className="mb-8">
                  <span className="font-display text-5xl lg:text-6xl text-dark-900">19.000₺</span>
                  <span className="text-dark-900/60 ml-2">/ {isTr ? "yıl" : "year"}</span>
                </div>

                <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                  {[
                    isTr ? "%100 Kişiye özel tasarım" : "100% Custom design",
                    isTr ? "Sınırsız ürün & kategori" : "Unlimited products & categories",
                    isTr ? "Yapay zeka SEO asistanı" : "AI SEO assistant",
                    isTr ? "Tüm pazar yeri entegrasyonları" : "All marketplace integrations",
                    isTr ? "Fatura & kargo entegrasyonu" : "Invoice & shipping integration",
                    isTr ? "7/24 Teknik destek" : "24/7 Technical support",
                    isTr ? "Ücretsiz veri migrasyonu" : "Free data migration",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-green-600 flex-shrink-0" />
                      <span className="text-dark-900/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
                >
                  {isTr ? "Hemen Başla" : "Get Started"}
                  <ArrowRight size={18} />
                </Link>

                <p className="mt-4 text-small text-dark-900/40">
                  {isTr ? "Rakiplerde yıllık ortalama 35.000₺ - 50.000₺+" : "Competitors average 35K-50K+ annually"}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Demo Form Section */}
        <section id="demo" className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-6">
                  {isTr ? "Ücretsiz Demo Talep Edin" : "Request Free Demo"}
                </h2>
                <p className="text-dark-900/60 mb-8">
                  {isTr 
                    ? "15 dakikalık demo görüşmesiyle sistemi keşfedin. Uzman ekibimiz size tüm özellikleri anlatsın."
                    : "Discover the system with a 15-minute demo. Let our expert team explain all features to you."}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-dark-900/5 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-dark-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-dark-900 mb-1">{isTr ? "Hızlı Kurulum" : "Fast Setup"}</h4>
                      <p className="text-small text-dark-900/60">{isTr ? "48 saat içinde siteniz hazır" : "Your site ready in 48 hours"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-dark-900/5 flex items-center justify-center flex-shrink-0">
                      <Shield size={24} className="text-dark-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-dark-900 mb-1">{isTr ? "Güvenli Altyapı" : "Secure Infrastructure"}</h4>
                      <p className="text-small text-dark-900/60">{isTr ? "SSL, günlük yedekleme, DDoS koruması" : "SSL, daily backup, DDoS protection"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-dark-900/5 flex items-center justify-center flex-shrink-0">
                      <Zap size={24} className="text-dark-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-dark-900 mb-1">{isTr ? "Hızlı Performans" : "Fast Performance"}</h4>
                      <p className="text-small text-dark-900/60">{isTr ? "99.9% uptime, optimize edilmiş sunucular" : "99.9% uptime, optimized servers"}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="glass-card rounded-2xl p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} className="text-green-600" />
                      </div>
                      <h3 className="font-display text-2xl text-dark-900 mb-4">
                        {isTr ? "Talebiniz Alındı!" : "Request Received!"}
                      </h3>
                      <p className="text-dark-900/60">
                        {isTr 
                          ? "En kısa sürede size dönüş yapacağız."
                          : "We will get back to you as soon as possible."}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleDemoSubmit} className="space-y-6">
                      <div>
                        <label className="block text-small font-medium text-dark-900 mb-2">
                          {isTr ? "Ad Soyad" : "Full Name"} *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-dark-900/10 focus:border-dark-900/30 focus:ring-0 transition-colors"
                          placeholder={isTr ? "Adınız" : "Your name"}
                        />
                      </div>
                      <div>
                        <label className="block text-small font-medium text-dark-900 mb-2">
                          {isTr ? "Telefon" : "Phone"} *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-dark-900/10 focus:border-dark-900/30 focus:ring-0 transition-colors"
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </div>
                      <div>
                        <label className="block text-small font-medium text-dark-900 mb-2">
                          {isTr ? "E-posta" : "Email"} *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-dark-900/10 focus:border-dark-900/30 focus:ring-0 transition-colors"
                          placeholder="ornek@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-small font-medium text-dark-900 mb-2">
                          {isTr ? "Mevcut Platform (Varsa)" : "Current Platform (If any)"}
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-dark-900/10 focus:border-dark-900/30 focus:ring-0 transition-colors"
                          placeholder={isTr ? "İkas, Ticimax, Shopify..." : "Ikas, Ticimax, Shopify..."}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-xl hover:bg-dark-800 transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-light-100/30 border-t-light-100 rounded-full animate-spin" />
                            {isTr ? "Gönderiliyor..." : "Sending..."}
                          </>
                        ) : (
                          <>
                            {isTr ? "Demo Talep Et" : "Request Demo"}
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl text-dark-900 mb-4">
                  {isTr ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-medium text-dark-900 pr-4">
                        {isTr ? faq.question : faq.questionEn}
                      </span>
                      <span className={`transform transition-transform flex-shrink-0 ${openFaq === index ? "rotate-180" : ""}`}>
                        <ArrowRight size={18} className="rotate-90 text-dark-900/40" />
                      </span>
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-dark-900/70">
                          {isTr ? faq.answer : faq.answerEn}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-dark-900/3 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-dark-900/3 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                  {isTr 
                    ? "E-Ticaretinizi Bir Üst Seviyeye Taşıyın" 
                    : "Take Your E-Commerce to the Next Level"}
                </h2>
                <p className="text-dark-900/60 mb-8 text-lg">
                  {isTr 
                    ? "50+ işletmenin güvendiği Celebix ile tanışın."
                    : "Meet Celebix, trusted by 50+ businesses."}
                </p>
                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
                >
                  {isTr ? "Ücretsiz Demo Al" : "Get Free Demo"}
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
