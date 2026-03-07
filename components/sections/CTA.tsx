"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { generatePlaceholderSVG } from "@/lib/utils";

export default function CTA({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="py-12 relative overflow-hidden">
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

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                ? "Ücretsiz danışmanlık için formu doldurun, 24 saat içinde dönüş yapalım."
                : "Fill out the form for a free consultation, we'll get back to you within 24 hours."
              }
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isTr ? "E-posta adresiniz" : "Your email address"}
                  className="w-full px-6 py-4 bg-light-100/10 border border-light-100/20 rounded-full text-light-100 placeholder:text-light-100/50 focus:outline-none focus:border-aurora-indigo focus:bg-light-100/20 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-light-100 text-dark-900 font-medium rounded-full hover:bg-white transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>
                    <Check size={18} />
                    {isTr ? "Gönderildi" : "Sent"}
                  </>
                ) : (
                  <>
                    {isTr ? "Gönder" : "Send"}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            {/* Trust Text */}
            <p className="text-small text-light-100/50 mt-6">
              {isTr ? "Ücretsiz danışmanlık • 24 saat içinde dönüş" : "Free consultation • Response within 24h"}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
