"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { generatePlaceholderSVG } from "@/lib/utils";

export default function CTA({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  return (
    <section className="relative w-full overflow-hidden py-12">
      {/* Background - Placeholder_IMG_022 */}
      <div className="absolute inset-0">
        <img
          src={generatePlaceholderSVG(22, 1920, 600, "IMG_022 - CTA Background")}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/90 to-dark-900/80" />
      </div>

      {/* Aurora Gradient Overlay */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurora-indigo/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aurora-magenta/20 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-h1 text-light-100 mb-6">
              {isTr ? "Hadi Projenizi Konuşalım" : "Let's Discuss Your Project"}
            </h2>
            <p className="text-h3 text-light-100/70 mb-10">
              {isTr 
                ? "Yazılım, e-ticaret veya dijital pazarlama projenizi bize anlatın."
                : "Tell us about your software, e-commerce, or digital marketing project."
              }
            </p>

            <Link href={`/${locale}/iletisim`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-dark-900 hover:bg-light-100">
              {isTr ? "İletişime Geçin" : "Contact Us"}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
