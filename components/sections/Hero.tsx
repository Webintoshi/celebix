"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DashboardSVG from "@/components/DashboardSVG";
import HeroVisual from "@/components/HeroVisual";

export default function Hero({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-aurora-indigo/5 via-transparent to-transparent" />
      
      {/* Container - Same padding as navbar */}
      <div className="container-max mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content - 7 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-dark-900 mb-6 leading-[1.05]"
            >
              {isTr ? "Dijital Dönüşümünüzü Hızlandırın" : "Accelerate Your Digital Transformation"}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-dark-900/60 mb-10 max-w-xl leading-relaxed"
            >
              {isTr 
                ? "İşletmenizi büyütmek için tasarlanmış premium yazılım ürünleri. Ölçeklenebilir, güvenli ve kullanıcı dostu çözümler."
                : "Premium software products designed to grow your business. Scalable, secure and user-friendly solutions."
              }
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}${isTr ? "/iletisim" : "/contact"}`}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 text-base font-medium rounded-full hover:bg-dark-800 transition-all duration-300 hover:shadow-lg hover:shadow-dark-900/20"
              >
                {isTr ? "Projeye Başla" : "Start Project"}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href={`/${locale}${isTr ? "/portfoy" : "/portfolio"}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-dark-900 text-base font-medium rounded-full border border-dark-900/20 hover:border-dark-900/40 hover:bg-dark-900/5 transition-all duration-300"
              >
                {isTr ? "Portföyü Gör" : "View Portfolio"}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-sm"
            >
              <HeroVisual className="w-full h-auto" />
              {/* Subtle Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-indigo/10 to-aurora-magenta/10 blur-3xl -z-10 scale-125" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Dashboard Preview - SVG */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 lg:mt-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-dark-900/10 border border-dark-900/5">
            <DashboardSVG locale={locale} className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
