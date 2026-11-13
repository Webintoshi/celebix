"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [{ icon: Instagram, href: "https://instagram.com/celebix.net", label: "Instagram" }];

export default function Footer({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  const currentYear = new Date().getFullYear();
  const buildLocalizedHref = (href: string) => href === "/" ? `/${locale}` : `/${locale}${href}`;

  const quickLinks = [
    { label: isTr ? "Ana Sayfa" : "Home", href: "/" },
    { label: isTr ? "Hakkımızda" : "About", href: "/hakkimizda" },
    { label: isTr ? "Portföy" : "Portfolio", href: "/portfoy" },
    { label: "Blog", href: "/blog" },
    { label: isTr ? "İletişim" : "Contact", href: "/iletisim" },
  ];

  const productLinks = [
    { label: isTr ? "Celebix E-Ticaret" : "Celebix E-Commerce", href: "/e-ticaret-paketleri" },
    { label: isTr ? "Celebix Yazılım" : "Celebix Software", href: "/kurumsal-yazilim" },
    { label: isTr ? "Celebix Dijital Pazarlama" : "Celebix Digital Marketing", href: "/dijital-pazarlama" },
    { label: isTr ? "Celebix Medya Yönetimi" : "Celebix Media Management", href: "/sosyal-medya" },
    { label: isTr ? "Celebix SaaS Platform" : "Celebix SaaS Platform", href: "/celebix-saas-platformu" },
  ];

  return (
    <footer className="w-full bg-dark-900 pt-20 pb-8 text-light-100">
      <div className="container-max">
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
              {isTr ? "Yazılım, e-ticaret ve dijital pazarlama hizmetleri." : "Software, e-commerce, and digital marketing services."}
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
                    href={buildLocalizedHref(link.href)}
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
                    href={buildLocalizedHref(link.href)}
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
                <span className="text-small text-light-100/60">merhaba@celebix.net</span>
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light-100/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-micro text-light-100/40">
            © {currentYear} Celebix. {isTr ? "Tüm hakları saklıdır." : "All rights reserved."}
          </p>
          {/* Legal navigation is shared by ServicePolicyFooter in the locale layout. */}
        </div>
      </div>
    </footer>
  );
}
