"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Zap, 
  Heart,
  Award,
  TrendingUp,
  MapPin
} from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

const values = [
  {
    icon: Zap,
    title: "İnovasyon",
    titleEn: "Innovation",
    description: "En son teknolojileri kullanarak sürekli gelişim ve yenilik.",
    descriptionEn: "Continuous improvement and innovation using the latest technologies.",
  },
  {
    icon: Heart,
    title: "Tutku",
    titleEn: "Passion",
    description: "İşimizi seviyoruz ve her projeye aynı heyecanı taşıyoruz.",
    descriptionEn: "We love what we do and bring the same enthusiasm to every project.",
  },
  {
    icon: Target,
    title: "Odaklanma",
    titleEn: "Focus",
    description: "Müşteri hedeflerine ulaşmak için net stratejiler ve planlar.",
    descriptionEn: "Clear strategies and plans to achieve customer goals.",
  },
  {
    icon: Award,
    title: "Kalite",
    titleEn: "Quality",
    description: "Her projede en yüksek kalite standartlarını garanti ediyoruz.",
    descriptionEn: "We guarantee the highest quality standards in every project.",
  },
];

const stats = [
  { value: "50+", label: "Tamamlanan Proje", labelEn: "Completed Projects" },
  { value: "30+", label: "Mutlu Müşteri", labelEn: "Happy Clients" },
  { value: "5+", label: "Yıllık Deneyim", labelEn: "Years Experience" },
  { value: "100%", label: "Müşteri Memnuniyeti", labelEn: "Client Satisfaction" },
];

export default function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";

  return (
    <>
      <Navigation locale={locale} />
      <main className="bg-light-100">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                {isTr ? "Hakkımızda" : "About Us"}
              </h1>
              <p className="text-lg md:text-xl text-dark-700 max-w-3xl mx-auto leading-relaxed">
                {isTr 
                  ? "Celebix, dijital dünyada işletmelerin büyümesine yardımcı olan bir yazılım ve dijital pazarlama ajansıdır. Ordu'da kurulan şirketimiz, Türkiye'nin dört bir yanına hizmet vermektedir."
                  : "Celebix is a software and digital marketing agency that helps businesses grow in the digital world. Founded in Ordu, our company serves all over Turkey."
                }
              </p>
            </motion.div>
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-dark-600 text-sm md:text-base">
                    {isTr ? stat.label : stat.labelEn}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
                  <Target className="text-white" size={28} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-900 mb-4">
                  {isTr ? "Misyonumuz" : "Our Mission"}
                </h2>
                <p className="text-dark-700 leading-relaxed">
                  {isTr 
                    ? "İşletmelerin dijital dönüşümünü kolaylaştırmak, yenilikçi çözümlerle rekabet avantajı sağlamak ve sürdürülebilir büyümeye katkıda bulunmak."
                    : "To facilitate the digital transformation of businesses, provide competitive advantage with innovative solutions, and contribute to sustainable growth."
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-900 mb-4">
                  {isTr ? "Vizyonumuz" : "Our Vision"}
                </h2>
                <p className="text-dark-700 leading-relaxed">
                  {isTr 
                    ? "Türkiye'nin öncü dijital ajanslarından biri olarak, teknoloji ve yaratıcılığın birleşimiyle müşterilerimizin global başarısına katkıda bulunmak."
                    : "To contribute to the global success of our customers by combining technology and creativity as one of Turkey's leading digital agencies."
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {isTr ? "Değerlerimiz" : "Our Values"}
              </h2>
              <p className="text-dark-600 max-w-2xl mx-auto">
                {isTr 
                  ? "Her projede bizi yönlendiren temel prensipler"
                  : "The fundamental principles that guide us in every project"
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-light-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-dark-900 mb-2">
                    {isTr ? value.title : value.titleEn}
                  </h3>
                  <p className="text-dark-600 text-sm leading-relaxed">
                    {isTr ? value.description : value.descriptionEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
              <MapPin className="mx-auto mb-6" size={48} />
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {isTr ? "Konumumuz" : "Our Location"}
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
                {isTr 
                  ? "Akyazı Mahallesi, Altınordu/Ordu"
                  : "Akyazı Neighborhood, Altınordu/Ordu"
                }
              </p>
              <p className="text-white/80 text-sm">
                {isTr 
                  ? "Türkiye'nin her yerinden çevrimiçi hizmet veriyoruz"
                  : "We provide online services from all over Turkey"
                }
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
