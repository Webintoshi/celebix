"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Code2, Smartphone, Globe, Shield, Zap, Database, Cloud } from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import SoftwareHeroVisual from "@/components/SoftwareHeroVisual";
import WebDevVisual from "@/components/WebDevVisual";
import MobileDevVisual from "@/components/MobileDevVisual";
import APIVisual from "@/components/APIVisual";
import SecurityVisual from "@/components/SecurityVisual";
import TechStackVisual from "@/components/TechStackVisual";
import ProcessVisual from "@/components/ProcessVisual";

const features = [
  {
    icon: Globe,
    title: "Web Uygulama Geliştirme",
    titleEn: "Web Application Development",
    description: "Modern teknolojilerle ölçeklenebilir, hızlı ve kullanıcı dostu web uygulamaları geliştiriyoruz. React, Next.js ve Node.js uzmanlığı.",
    descriptionEn: "We develop scalable, fast and user-friendly web applications with modern technologies. React, Next.js and Node.js expertise.",
    visual: WebDevVisual,
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama Geliştirme",
    titleEn: "Mobile Application Development",
    description: "iOS ve Android platformları için native ve cross-platform mobil uygulamalar. React Native ve Flutter uzmanlığı.",
    descriptionEn: "Native and cross-platform mobile applications for iOS and Android platforms. React Native and Flutter expertise.",
    visual: MobileDevVisual,
  },
  {
    icon: Database,
    title: "API Entegrasyonu",
    titleEn: "API Integration",
    description: "Mevcut sistemlerinizle sorunsuz entegrasyon için RESTful ve GraphQL API çözümleri. Mikroservis mimarisi desteği.",
    descriptionEn: "RESTful and GraphQL API solutions for seamless integration with your existing systems. Microservices architecture support.",
    visual: APIVisual,
  },
  {
    icon: Shield,
    title: "Güvenlik & Performans",
    titleEn: "Security & Performance",
    description: "Enterprise-grade güvenlik standartları, SSL, veri şifreleme ve yüksek performanslı altyapı çözümleri.",
    descriptionEn: "Enterprise-grade security standards, SSL, data encryption and high-performance infrastructure solutions.",
    visual: SecurityVisual,
  },
];

const techStack = [
  "React & Next.js",
  "Node.js & Express",
  "Python & Django",
  "PostgreSQL & MongoDB",
  "AWS & Azure",
  "Docker & Kubernetes",
];

const processSteps = [
  { number: "01", title: "Keşif & Analiz", titleEn: "Discovery & Analysis", desc: "İhtiyaçlarınızı detaylı şekilde analiz ediyoruz.", descEn: "We analyze your requirements in detail.", visual: 1 },
  { number: "02", title: "Tasarım & Planlama", titleEn: "Design & Planning", desc: "Mimari yapıyı ve kullanıcı deneyimini tasarlıyoruz.", descEn: "We design the architecture and user experience.", visual: 2 },
  { number: "03", title: "Geliştirme", titleEn: "Development", desc: "Agile metodoloji ile iteratif geliştirme yapıyoruz.", descEn: "We develop iteratively using agile methodology.", visual: 3 },
  { number: "04", title: "Test & Deploy", titleEn: "Test & Deploy", desc: "Kapsamlı test süreçleri ve sorunsuz canlıya alma.", descEn: "Comprehensive testing and seamless deployment.", visual: 4 },
];

export default function EnterpriseSoftware({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";

  return (
    <>
      <Navigation locale={locale} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 overflow-hidden bg-light-100">
          <div className="absolute inset-0 bg-gradient-to-b from-aurora-indigo/5 via-transparent to-transparent" />
          
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
                  <div className="w-12 h-12 rounded-xl bg-dark-900 text-light-100 flex items-center justify-center">
                    <Code2 size={24} />
                  </div>
                  <span className="text-small text-dark-900/60 uppercase tracking-wider">
                    {isTr ? "Kurumsal Çözüm" : "Enterprise Solution"}
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-dark-900 mb-6 leading-tight">
                  {isTr ? "Kurumsal Yazılım Çözümleri" : "Enterprise Software Solutions"}
                </h1>
                
                <p className="text-lg text-dark-900/60 mb-8 max-w-lg">
                  {isTr 
                    ? "İşletmenizin ihtiyaçlarına özel, ölçeklenebilir ve güvenli yazılım çözümleri. Modern teknolojiler, 7/24 destek ve sürekli bakım hizmeti."
                    : "Custom, scalable and secure software solutions tailored to your business needs. Modern technologies, 24/7 support and continuous maintenance."
                  }
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/${locale}/iletisim`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
                  >
                    {isTr ? "Ücretsiz Danışmanlık Al" : "Get Free Consultation"}
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-dark-900 font-medium rounded-full border border-dark-900/20 hover:border-dark-900/40 transition-colors"
                  >
                    {isTr ? "Özellikleri İncele" : "Explore Features"}
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
                  <SoftwareHeroVisual className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Check size={20} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-dark-900">%99.9</div>
                      <div className="text-xs text-dark-900/60">{isTr ? "Uptime Garantisi" : "Uptime Guarantee"}</div>
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
                {isTr ? "Kapsamlı Yazılım Hizmetleri" : "Comprehensive Software Services"}
              </h2>
              <p className="text-body text-dark-900/60 max-w-2xl mx-auto">
                {isTr 
                  ? "İşletmenizin dijital dönüşümü için ihtiyacınız olan tüm yazılım çözümleri tek çatı altında."
                  : "All the software solutions you need for your business's digital transformation under one roof."
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
                        <div className="w-12 h-12 rounded-xl bg-aurora-indigo/10 text-aurora-indigo flex items-center justify-center mb-4 group-hover:bg-aurora-indigo group-hover:text-light-100 transition-colors">
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

        {/* Tech Stack Section */}
        <section className="py-12 bg-dark-900 text-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl mb-6">
                  {isTr ? "Modern Teknoloji Stack" : "Modern Tech Stack"}
                </h2>
                <p className="text-light-100/60 mb-8">
                  {isTr 
                    ? "En güncel ve güvenilir teknolojilerle projelerinizi hayata geçiriyoruz. Performans, güvenlik ve ölçeklenebilirlik odaklı çözümler."
                    : "We bring your projects to life with the most up-to-date and reliable technologies. Performance, security and scalability-focused solutions."
                  }
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech) => (
                    <div key={tech} className="flex items-center gap-3">
                      <Zap size={18} className="text-aurora-indigo" />
                      <span className="text-light-100/80">{tech}</span>
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
                  <TechStackVisual className="w-full h-auto" />
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
                  className="glass-card rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="text-4xl font-display text-aurora-indigo/20 mb-2">{step.number}</div>
                  <div className="mb-4">
                    <ProcessVisual step={step.visual as 1 | 2 | 3 | 4} className="w-full h-auto" />
                  </div>
                  <h3 className="font-display text-lg text-dark-900 mb-2">{isTr ? step.title : step.titleEn}</h3>
                  <p className="text-small text-dark-900/60">{isTr ? step.desc : step.descEn}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-aurora-indigo to-aurora-violet text-light-100 relative overflow-hidden">
          <div className="container-max mx-auto px-6 lg:px-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl mb-6">
                  {isTr ? "Projenizi Hayata Geçirmeye Hazır mısınız?" : "Ready to Bring Your Project to Life?"}
                </h2>
                <p className="text-light-100/80 mb-8">
                  {isTr 
                    ? "Ücretsiz danışmanlık alın ve projeleriniz için en uygun çözümü birlikte belirleyelim."
                    : "Get a free consultation and let's determine the most suitable solution for your projects together."
                  }
                </p>
                <Link
                  href={`/${locale}/iletisim`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-light-100 text-dark-900 font-medium rounded-full hover:bg-white transition-colors"
                >
                  {isTr ? "Hemen İletişime Geçin" : "Contact Us Now"}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
