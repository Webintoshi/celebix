"use client";

import { motion } from "framer-motion";

const clients = [
  "Guzide",
  "DeryCraft", 
  "Ezmeo",
  "Okur Otomasyon",
  "Tık Profil",
  "Klarna",
  "One Base",
  "AnyDesk",
  "Flow Part",
  "Bingo",
  "Dolka",
];

export default function TrustedBy({ locale }: { locale?: string }) {
  const isTr = locale === "tr";
  
  return (
    <section className="py-12 border-y border-dark-900/5 overflow-hidden bg-light-100">
      <div className="container-max mx-auto px-6 lg:px-16 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-small text-dark-900/50 uppercase tracking-wider"
        >
          {isTr ? "Güvenilen Ortaklar" : "Trusted By"}
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-light-100 to-transparent z-10" />
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-light-100 to-transparent z-10" />

        {/* Scrolling Client Names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex animate-marquee"
        >
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-12"
            >
              <span className="text-2xl lg:text-3xl font-display font-bold text-dark-900/40 hover:text-dark-900 transition-colors duration-300 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-12"
            >
              <span className="text-2xl lg:text-3xl font-display text-dark-900/30 hover:text-dark-900 transition-colors duration-300 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
