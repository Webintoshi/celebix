"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Megaphone, Video, ArrowUpRight } from "lucide-react";
import { generatePlaceholderSVG } from "@/lib/utils";
import SoftwareVisual from "@/components/SoftwareVisual";
import MarketingVisual from "@/components/MarketingVisual";
import SocialVisual from "@/components/SocialVisual";

const productsData = {
  tr: [
    {
      key: "software",
      icon: Code2,
      title: "Kurumsal Yazılım",
      description: "İşletmenize özel, ölçeklenebilir ve güvenli yazılım çözümleri. Web ve mobil uygulama geliştirme, API entegrasyonu ve 7/24 teknik destek.",
      features: ["Özel Yazılım Geliştirme", "Web & Mobil Uygulama", "API Entegrasyonu", "7/24 Destek"],
      image: 8,
      gradient: "from-aurora-indigo to-aurora-violet",
      span: "lg:col-span-7",
      href: "/kurumsal-yazilim",
    },
    {
      key: "marketing",
      icon: Megaphone,
      title: "Dijital Pazarlama",
      description: "Google ve Meta reklamları, SEO optimizasyonu ve içerik stratejisi ile organik trafiğinizi artırın. Veriye dayalı pazarlama çözümleri.",
      features: ["Google Ads", "Meta Reklamlar", "SEO Optimizasyonu", "Organik Trafik"],
      image: 9,
      gradient: "from-aurora-violet to-aurora-magenta",
      span: "lg:col-span-5",
      href: "/dijital-pazarlama",
    },
    {
      key: "social",
      icon: Video,
      title: "Sosyal Medya Yönetimi",
      description: "Profesyonel video çekimleri ve içerik üretimi ile markanızı sosyal medyada öne çıkarın. Stratejik içerik planlaması ve etkileşim yönetimi.",
      features: ["Video Çekimleri", "İçerik Üretimi", "Strateji Planlama", "Etkileşim Yönetimi"],
      image: 10,
      gradient: "from-aurora-magenta to-aurora-coral",
      span: "lg:col-span-12",
      href: "/sosyal-medya",
    },
  ],
  en: [
    {
      key: "software",
      icon: Code2,
      title: "Enterprise Software",
      description: "Custom, scalable and secure software solutions for your business. Web and mobile app development, API integration and 24/7 technical support.",
      features: ["Custom Development", "Web & Mobile Apps", "API Integration", "24/7 Support"],
      image: 8,
      gradient: "from-aurora-indigo to-aurora-violet",
      span: "lg:col-span-7",
      href: "/kurumsal-yazilim",
    },
    {
      key: "marketing",
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Increase your organic traffic with Google and Meta ads, SEO optimization and content strategy. Data-driven marketing solutions.",
      features: ["Google Ads", "Meta Ads", "SEO Optimization", "Organic Traffic"],
      image: 9,
      gradient: "from-aurora-violet to-aurora-magenta",
      span: "lg:col-span-5",
      href: "/dijital-pazarlama",
    },
    {
      key: "social",
      icon: Video,
      title: "Social Media Management",
      description: "Stand out on social media with professional video shoots and content production. Strategic content planning and engagement management.",
      features: ["Video Production", "Content Creation", "Strategy Planning", "Engagement Management"],
      image: 10,
      gradient: "from-aurora-magenta to-aurora-coral",
      span: "lg:col-span-12",
      href: "/sosyal-medya",
    },
  ],
};

export default function Products({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  const products = isTr ? productsData.tr : productsData.en;
  
  return (
    <section className="py-12">
      <div className="container-max mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-h1 text-dark-900 mb-4">
            {isTr ? "Ürünlerimiz" : "Our Products"}
          </h2>
          <p className="text-body text-dark-900/60 max-w-2xl mx-auto">
            {isTr ? "İşletmenizi büyütmek için tasarlanmış premium yazılım ürünleri" : "Premium software products designed to grow your business"}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${product.span} group`}
              >
                <Link href={`/${locale}${product.href}`} className="block relative h-full glass-card rounded-bento p-8 lg:p-10 overflow-hidden hover-lift">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${product.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`relative h-full flex flex-col ${product.span === "lg:col-span-12" ? "lg:flex-row lg:items-center lg:gap-12" : ""}`}>
                    {/* Content */}
                    <div className="flex-1">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-dark-900/5 flex items-center justify-center mb-6 group-hover:bg-dark-900 group-hover:text-light-100 transition-colors duration-300">
                        <Icon size={24} />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-h2 text-dark-900 mb-4 flex items-center gap-3">
                        {product.title}
                        <ArrowUpRight
                          size={24}
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-aurora-indigo"
                        />
                      </h3>

                      {/* Description */}
                      <p className="text-body text-dark-900/60 mb-6">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3">
                        {product.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-small text-dark-900/70"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-aurora-indigo" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Product Visual */}
                    <div className={`mt-6 ${product.span === "lg:col-span-12" ? "lg:mt-0 lg:w-1/2" : "mt-4"}`}>
                      <div className="relative rounded-xl overflow-hidden max-h-48">
                        {product.key === "software" ? (
                          <SoftwareVisual className="w-full h-auto" />
                        ) : product.key === "marketing" ? (
                          <MarketingVisual className="w-full h-auto" />
                        ) : product.key === "social" ? (
                          <SocialVisual className="w-full h-auto" />
                        ) : (
                          <img
                            src={generatePlaceholderSVG(
                              product.image,
                              400,
                              200,
                              `IMG_${product.image}`
                            )}
                            alt={product.title}
                            className="w-full h-32 object-cover opacity-80"
                          />
                        )}
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
  );
}
