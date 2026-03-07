"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Award } from "lucide-react";
import { generatePlaceholderSVG } from "@/lib/utils";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: isTr ? "Ana Sayfa" : "Home", href: "/" },
    { label: isTr ? "Hakkımızda" : "About", href: isTr ? "/hakkimizda" : "/about" },
    { label: isTr ? "Portföy" : "Portfolio", href: isTr ? "/portfoy" : "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: isTr ? "İletişim" : "Contact", href: isTr ? "/iletisim" : "/contact" },
  ];

  const productLinks = [
    { label: isTr ? "Celebix E-Ticaret" : "Celebix E-Commerce", href: "/e-ticaret-paketleri" },
    { label: isTr ? "Celebix Yazılım" : "Celebix Software", href: "/kurumsal-yazilim" },
    { label: isTr ? "Celebix Dijital Pazarlama" : "Celebix Digital Marketing", href: "/dijital-pazarlama" },
    { label: isTr ? "Celebix Medya Yönetimi" : "Celebix Media Management", href: "/sosyal-medya" },
    { label: isTr ? "Celebix SaaS Platform" : "Celebix SaaS Platform", href: "/celebix-saas-platformu" },
  ];

  return (
    <footer className="bg-dark-900 text-light-100 pt-20 pb-8 w-full">
      <div className="w-full px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href={`/${locale}`} className="flex items-center mb-8">
              <img 
                src="/Logo/celebix beyaz logo.svg" 
                alt="Celebix" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-small text-light-100/60 mb-6 max-w-xs">
              {isTr ? "Premium yazılım geliştirme ve digital marketing hizmetleri." : "Premium software development and digital marketing services."}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-light-100/10 flex items-center justify-center hover:bg-aurora-indigo hover:text-light-100 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-body mb-6">{isTr ? "Hızlı Linkler" : "Quick Links"}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-small text-light-100/60 hover:text-light-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-body mb-6">{isTr ? "Ürünler" : "Products"}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-small text-light-100/60 hover:text-light-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-body mb-6">{isTr ? "İletişim" : "Contact"}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-aurora-indigo mt-0.5 flex-shrink-0" />
                <span className="text-small text-light-100/60">merhaba@celebix.co</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-aurora-indigo mt-0.5 flex-shrink-0" />
                <span className="text-small text-light-100/60">+90 530 209 96 28</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-aurora-indigo mt-0.5 flex-shrink-0" />
                <span className="text-small text-light-100/60">Altınordu/Ordu, Türkiye</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Partners & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-10 border-t border-light-100/10"
        >
          <h4 className="font-display text-body mb-6 flex items-center gap-2">
            <Award size={18} className="text-aurora-indigo" />
            {isTr ? "Sertifikalar & Ödüller" : "Certifications & Awards"}
          </h4>
          <div className="flex flex-wrap items-center gap-6">
            {/* Meta Business Partner -->
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-light-100/20">
              <svg viewBox="0 0 40 24" className="w-8 h-6">
                <path d="M20 2C10.5 2 4.5 8.5 4.5 12s6 10 15.5 10c9.5 0 15.5-6.5 15.5-10S29.5 2 20 2zm0 17c-4 0-6.5-3-6.5-7s2.5-7 6.5-7 6.5 3 6.5 7-2.5 7-6.5 7z" fill="#0081FB"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-dark-900 font-semibold text-sm leading-tight">Meta</span>
                <span className="text-dark-900/70 text-xs leading-tight">Business Partner</span>
              </div>
            </div>
            
            {/* Google Premier Partner */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden border border-light-100/20">
              <div className="bg-[#EA4335] px-2 py-2 h-full flex items-center">
                <span className="text-white text-xs font-bold tracking-wider" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>PREMIER</span>
              </div>
              <div className="px-3 py-2 flex flex-col">
                <span className="text-lg font-medium leading-none">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-gray-500 text-sm font-medium leading-tight">Partner</span>
              </div>
            </div>
            
            {/* Cyber Security Excellence Awards */}
            <div className="flex items-center gap-2 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] px-3 py-2 rounded-lg border border-[#FFD700]/30">
              <div className="flex flex-col items-center">
                <div className="bg-[#FFD700] px-2 py-0.5 rounded-t">
                  <span className="text-[#1a1a2e] text-xs font-bold">2024</span>
                </div>
                <span className="text-[#FFD700] text-xs font-bold">WINNER</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold leading-tight">CYBER</span>
                <span className="text-white text-xs font-bold leading-tight">SECURITY</span>
                <span className="text-gray-400 text-[10px] leading-tight">EXCELLENCE AWARDS</span>
              </div>
            </div>
            
            {/* Content Marketing Awards */}
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-light-100/20">
              <div className="flex flex-col items-center">
                <span className="text-[#F26522] text-2xl font-black leading-none">C</span>
                <span className="text-[#F7931E] text-2xl font-black leading-none -mt-1">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#F26522] text-xs font-bold leading-tight">CONTENT</span>
                <span className="text-[#F26522] text-xs font-bold leading-tight">MARKETING</span>
                <span className="text-gray-500 text-[10px] leading-tight">2021 FINALIST</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light-100/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-micro text-light-100/40">
            © {currentYear} Celebix. {isTr ? "Tüm hakları saklıdır." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}${isTr ? "/gizlilik" : "/privacy"}`} className="text-micro text-light-100/40 hover:text-light-100/60 transition-colors">
              {isTr ? "Gizlilik Politikası" : "Privacy Policy"}
            </Link>
            <Link href={`/${locale}${isTr ? "/kullanim-kosullari" : "/terms"}`} className="text-micro text-light-100/40 hover:text-light-100/60 transition-colors">
              {isTr ? "Kullanım Koşulları" : "Terms of Use"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
