"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, ShoppingCart, Store } from "lucide-react";
import Link from "next/link";
import CelebixPortfolioVisual from "@/components/CelebixPortfolioVisual";

const projectsData = {
  tr: [
    {
      id: 1,
      title: "Celebix E-Ticaret",
      tagline: "Komisyonsuz E-Ticaret Platformu",
      description: "AI destekli SEO, sınırsız ürün kapasitesi ve tüm pazar yerleri tek panelde.",
      price: "19.000₺ Tek Fiyat",
      features: ["AI SEO", "Pazar Yeri Entegrasyonu", "Özelleştirilebilir"],
      link: "/tr/e-ticaret-paketleri",
      visualType: "ecommerce" as const,
      icon: ShoppingCart,
      color: "from-violet-500 to-purple-600",
    },
    {
      id: 2,
      title: "Celebix SaaS Platform",
      tagline: "İşletme Yönetim Sistemi",
      description: "68+ işletme dalı için komisyonsuz yönetim. Restoran, kafe, otel, klinik...",
      price: "Aylık 700₺",
      features: ["%0 Komisyon", "68+ Sektör", "Mobil Uygulama"],
      link: "/tr/celebix-saas-platformu",
      visualType: "saas" as const,
      icon: Store,
      color: "from-emerald-500 to-teal-600",
    },
  ],
  en: [
    {
      id: 1,
      title: "Celebix E-Commerce",
      tagline: "Commission-Free E-Commerce Platform",
      description: "AI-powered SEO, unlimited product capacity, all marketplaces in one panel.",
      price: "19,000₺ Fixed Price",
      features: ["AI SEO", "Marketplace Integration", "Customizable"],
      link: "/tr/e-ticaret-paketleri",
      visualType: "ecommerce" as const,
      icon: ShoppingCart,
      color: "from-violet-500 to-purple-600",
    },
    {
      id: 2,
      title: "Celebix SaaS Platform",
      tagline: "Business Management System",
      description: "Commission-free management for 68+ business types. Restaurant, cafe, hotel, clinic...",
      price: "700₺/month",
      features: ["0% Commission", "68+ Sectors", "Mobile App"],
      link: "/tr/celebix-saas-platformu",
      visualType: "saas" as const,
      icon: Store,
      color: "from-emerald-500 to-teal-600",
    },
  ],
};

export default function Portfolio({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  const projects = isTr ? projectsData.tr : projectsData.en;

  return (
    <section className="py-16 bg-light-100">
      <div className="container-max mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-aurora-indigo/10 text-aurora-indigo text-small font-medium mb-4">
            {isTr ? "Kendi Ürünlerimiz" : "Our Products"}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-3">
            {isTr ? "Geliştirdiğimiz Platformlar" : "Platforms We Built"}
          </h2>
          <p className="text-dark-900/60 max-w-xl mx-auto">
            {isTr 
              ? "İşletmenizi büyütmek için tasarladığımız kapsamlı yazılım çözümleri" 
              : "Comprehensive software solutions designed to grow your business"}
          </p>
        </motion.div>

        {/* Products Grid - 2 Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={project.link} className="group block">
                  <div className="glass-card rounded-3xl overflow-hidden hover-lift bg-white h-full">
                    {/* Visual Area */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-dark-900">
                      <CelebixPortfolioVisual
                        visualType={project.visualType}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* View Button */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-light-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-lg">
                        <ExternalLink size={20} className="text-dark-900" />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 lg:p-8">
                      {/* Icon + Title Row */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon size={24} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl lg:text-2xl text-dark-900">
                              {project.title}
                            </h3>
                            <p className="text-small text-aurora-indigo font-medium">
                              {project.tagline}
                            </p>
                          </div>
                        </div>
                        <span className="text-lg font-display text-dark-900/20 hidden sm:block">
                          0{project.id}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-dark-900/60 mb-5 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 rounded-full bg-light-200 text-dark-900/70 text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between pt-5 border-t border-dark-900/5">
                        <span className="text-dark-900 font-medium">
                          {project.price}
                        </span>
                        <span className="inline-flex items-center gap-1 text-aurora-indigo font-medium text-small group-hover:gap-2 transition-all">
                          {isTr ? "İncele" : "Explore"}
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-dark-900/50 text-small">
            {isTr 
              ? "Her iki platform da Celebix tarafından geliştirilmiştir" 
              : "Both platforms are developed by Celebix"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
