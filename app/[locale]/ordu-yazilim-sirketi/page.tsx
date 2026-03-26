"use client";

import { motion } from "framer-motion";
import { 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Code,
  Smartphone,
  Cloud,
  Users,
  ArrowRight,
  Building2,
  Briefcase,
  Zap
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import OrduSoftwareVisual from "@/components/landing-visuals/OrduSoftwareVisual";

const features = [
  {
    icon: Code,
    title: "Özel Web Yazılım",
    titleEn: "Custom Web Software",
    description: "React, Next.js, Node.js ile modern web uygulamaları",
    descriptionEn: "Modern web applications with React, Next.js, Node.js",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    titleEn: "Mobile Applications",
    description: "iOS ve Android için React Native & Flutter çözümleri",
    descriptionEn: "React Native & Flutter solutions for iOS and Android",
  },
  {
    icon: Cloud,
    title: "Bulut Çözümleri",
    titleEn: "Cloud Solutions",
    description: "AWS, Google Cloud, Azure entegrasyonu",
    descriptionEn: "AWS, Google Cloud, Azure integration",
  },
  {
    icon: Building2,
    title: "Kurumsal Yazılım",
    titleEn: "Enterprise Software",
    description: "ERP, CRM ve özel iş süreci otomasyonu",
    descriptionEn: "ERP, CRM and custom business process automation",
  },
  {
    icon: Briefcase,
    title: "E-Ticaret Çözümleri",
    titleEn: "E-Commerce Solutions",
    description: "Komisyonsuz, ölçeklenebilir e-ticaret platformları",
    descriptionEn: "Commission-free, scalable e-commerce platforms",
  },
  {
    icon: Zap,
    title: "7/24 Teknik Destek",
    titleEn: "24/7 Technical Support",
    description: "Yerel ekip ile hızlı ve güvenilir destek",
    descriptionEn: "Fast and reliable support with local team",
  },
];

const benefits = [
  { text: "İstanbul'a göre %30-40 daha uygun fiyat", textEn: "30-40% more affordable than Istanbul" },
  { text: "Yüz yüze iletişim ve toplantı imkanı", textEn: "Face-to-face communication and meetings" },
  { text: "Aynı gün teknik destek ve müdahale", textEn: "Same-day technical support" },
  { text: "Türkçe 7/24 iletişim", textEn: "Turkish 24/7 communication" },
  { text: "Kod mülkiyeti %100 size ait", textEn: "100% code ownership" },
  { text: "3-6 ay garanti süresi", textEn: "3-6 month warranty period" },
];

const process = [
  {
    number: "01",
    title: "Keşif Görüşmesi",
    titleEn: "Discovery Meeting",
    description: "Ücretsiz 30 dakikalık görüşme ile ihtiyaçlarınızı analiz ediyoruz.",
    descriptionEn: "We analyze your needs with a free 30-minute consultation.",
  },
  {
    number: "02",
    title: "Teklif ve Planlama",
    titleEn: "Proposal & Planning",
    description: "Detaylı proje teklifi, timeline ve bütçe sunuyoruz.",
    descriptionEn: "We provide detailed project proposal, timeline and budget.",
  },
  {
    number: "03",
    title: "Geliştirme",
    titleEn: "Development",
    description: "Agile metodoloji ile haftalık sprint'lerde geliştirme.",
    descriptionEn: "Development in weekly sprints with Agile methodology.",
  },
  {
    number: "04",
    title: "Test ve Lansman",
    titleEn: "Testing & Launch",
    description: "Kapsamlı test süreci ve sorunsuz lansman.",
    descriptionEn: "Comprehensive testing process and smooth launch.",
  },
];

const faqs = [
  {
    question: "Ordu'da yazılım şirketi fiyatları ne kadar?",
    questionEn: "How much do software companies in Ordu charge?",
    answer: "Proje kapsamına göre değişir. Basit bir web sitesi 50.000-100.000 TL, kurumsal yazılım projeleri 300.000 TL ve üzeri. İstanbul'a göre %30-40 daha uygun fiyatlar sunuyoruz. Detaylı teklif için iletişime geçin.",
    answerEn: "It varies by project scope. A simple website 50,000-100,000 TL, enterprise software 300,000 TL+. We offer 30-40% more affordable prices than Istanbul. Contact us for a detailed quote.",
  },
  {
    question: "Projeler ne kadar sürüyor?",
    questionEn: "How long do projects take?",
    answer: "Kurumsal web sitesi: 4-8 hafta, E-ticaret platformu: 8-12 hafta, Mobil uygulama: 12-16 hafta, Kurumsal yazılım: 16-24 hafta (modüllere göre değişir).",
    answerEn: "Corporate website: 4-8 weeks, E-commerce: 8-12 weeks, Mobile app: 12-16 weeks, Enterprise software: 16-24 weeks (varies by modules).",
  },
  {
    question: "Daha önce çalıştığınız referanslar var mı?",
    questionEn: "Do you have references from previous work?",
    answer: "Evet, Derycraft, Okur Otomasyon, Dolka, Guzide gibi projeler tamamladık. Detaylı portföyümüzü inceleyebilirsiniz.",
    answerEn: "Yes, we have completed projects like Derycraft, Okur Otomasyon, Dolka, Guzide. You can view our detailed portfolio.",
  },
  {
    question: "Kod mülkiyeti bize ait olacak mı?",
    questionEn: "Will we own the code?",
    answer: "Kesinlikle evet. Proje tesliminde tüm kaynak kodları ve dokümantasyon size devredilir. Gelecekte başka bir firmayla çalışmak isterseniz kodunuz sizdedir.",
    answerEn: "Absolutely yes. All source code and documentation is transferred to you upon delivery. If you want to work with another company in the future, the code is yours.",
  },
  {
    question: "Bakım ve destek sunuyor musunuz?",
    questionEn: "Do you provide maintenance and support?",
    answer: "Evet, tüm projelerimizde 3-6 ay garanti süresi sunuyoruz. Sonrasında aylık bakım paketleri veya saatlik destek seçenekleri mevcuttur.",
    answerEn: "Yes, we offer 3-6 month warranty on all projects. After that, monthly maintenance packages or hourly support options are available.",
  },
  {
    question: "İstanbul dışında çalışıyor musunuz?",
    questionEn: "Do you work outside Istanbul?",
    answer: "Kesinlikle! Ordu merkezli olsak da Türkiye'nin her yerine hizmet veriyoruz. İstanbul, Ankara, İzmir ve diğer şehirlerden müşterilerimiz var.",
    answerEn: "Absolutely! Although based in Ordu, we serve all over Turkey. We have clients from Istanbul, Ankara, Izmir and other cities.",
  },
];

export default function OrduSoftwarePage({ params }: { params: { locale: string } }) {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                  <MapPin size={16} />
                  {isTr ? "Ordu Merkezli" : "Ordu Based"}
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-6">
                  {isTr 
                    ? "Ordu'da Profesyonel Yazılım Şirketi"
                    : "Professional Software Company in Ordu"
                  }
                </h1>
                
                <p className="text-lg md:text-xl text-dark-600 mb-8 leading-relaxed">
                  {isTr
                    ? "Karadeniz Bölgesi'nin önde gelen yazılım şirketi. Web, mobil ve kurumsal yazılım çözümleri. İstanbul kalitesinde, %30 daha uygun fiyat."
                    : "Leading software company in the Black Sea Region. Web, mobile and enterprise software solutions. Istanbul quality, 30% more affordable."
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href={`/${locale}/iletisim`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                  >
                    {isTr ? "Ücretsiz Teklif Al" : "Get Free Quote"}
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href={`/${locale}/portfoy`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark-900 border border-dark-200 rounded-xl font-semibold hover:bg-light-200 transition-all"
                  >
                    {isTr ? "Projelerimizi İncele" : "View Our Projects"}
                  </Link>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-dark-600">
                  <div className="flex items-center gap-2">
                    <Check size={18} className="text-green-500" />
                    <span>{isTr ? "7/24 Destek" : "24/7 Support"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={18} className="text-green-500" />
                    <span>{isTr ? "Yüz Yüze İletişim" : "Face-to-Face"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={18} className="text-green-500" />
                    <span>{isTr ? "%100 Mülkiyet" : "100% Ownership"}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <OrduSoftwareVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {isTr ? "Ordu'da Yazılım Şirketi ile Çalışmanın Avantajları" : "Advantages of Working with a Software Company in Ordu"}
              </h2>
              <p className="text-dark-600 max-w-2xl mx-auto">
                {isTr 
                  ? "Yerel çalışmanın gücü: Maliyet, iletişim ve güven avantajları"
                  : "The power of local collaboration: Cost, communication and trust advantages"
                }
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-light-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Check size={20} className="text-white" />
                  </div>
                  <p className="text-dark-800 font-medium">
                    {isTr ? benefit.text : benefit.textEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {isTr ? "Hizmetlerimiz" : "Our Services"}
              </h2>
              <p className="text-dark-600 max-w-2xl mx-auto">
                {isTr 
                  ? "Modern teknolojilerle özel yazılım çözümleri"
                  : "Custom software solutions with modern technologies"
                }
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark-900 mb-3">
                    {isTr ? feature.title : feature.titleEn}
                  </h3>
                  <p className="text-dark-600">
                    {isTr ? feature.description : feature.descriptionEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {isTr ? "Çalışma Sürecimiz" : "Our Process"}
              </h2>
              <p className="text-dark-600 max-w-2xl mx-auto">
                {isTr 
                  ? "4 adımda projenizi hayata geçiriyoruz"
                  : "We bring your project to life in 4 steps"
                }
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-display font-bold text-indigo-100 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark-900 mb-3">
                    {isTr ? step.title : step.titleEn}
                  </h3>
                  <p className="text-dark-600 text-sm">
                    {isTr ? step.description : step.descriptionEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  {isTr ? "Bize Ulaşın" : "Contact Us"}
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  {isTr
                    ? "Ordu'daki ofisimizden Türkiye'nin her yerine hizmet veriyoruz. Projenizi konuşalım!"
                    : "We serve all over Turkey from our office in Ordu. Let's discuss your project!"
                  }
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white">
                    <MapPin size={24} />
                    <span>Akyazı Mahallesi, Altınordu/Ordu</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <Phone size={24} />
                    <span>+90 530 209 96 28</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <Mail size={24} />
                    <span>merhaba@celebix.co</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <Clock size={24} />
                    <span>{isTr ? "Pzt-Cuma: 09:00 - 18:00" : "Mon-Fri: 09:00 - 18:00"}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-bold text-dark-900 mb-6">
                  {isTr ? "Hemen Teklif Alın" : "Get a Quote Now"}
                </h3>
                <p className="text-dark-600 mb-6">
                  {isTr 
                    ? "Formu doldurun, 24 saat içinde dönüş yapalım."
                    : "Fill out the form and we'll get back to you within 24 hours."
                  }
                </p>
                <Link
                  href={`/${locale}/iletisim`}
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {isTr ? "İletişime Geç" : "Contact Us"}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {isTr ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}
              </h2>
            </motion.div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="font-display text-lg font-bold text-dark-900 mb-3">
                    {isTr ? faq.question : faq.questionEn}
                  </h3>
                  <p className="text-dark-600">
                    {isTr ? faq.answer : faq.answerEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-100">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                {isTr 
                  ? "Haydi Projenizi Hayata Geçirelim!"
                  : "Let's Bring Your Project to Life!"
                }
              </h2>
              <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
                {isTr
                  ? "Ordu'nun en güvenilir yazılım şirketi olarak yanınızdayız. Ücretsiz keşif görüşmesi için bugün iletişime geçin."
                  : "We are with you as Ordu's most reliable software company. Contact us today for a free discovery meeting."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}/iletisim`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                >
                  <Phone size={20} />
                  {isTr ? "Hemen Ara" : "Call Now"}
                </Link>
                <Link
                  href={`/${locale}/kurumsal-yazilim`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark-900 border border-dark-200 rounded-xl font-semibold hover:bg-light-200 transition-all"
                >
                  {isTr ? "Hizmetlerimizi İncele" : "View Our Services"}
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
