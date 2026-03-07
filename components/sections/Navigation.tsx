"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinksTr = [
  { href: "/", label: "Ana Sayfa" },
  { 
    href: "/urunler", 
    label: "Ürünler",
    children: [
      { href: "/e-ticaret-paketleri", label: "Celebix E-Ticaret" },
      { href: "/kurumsal-yazilim", label: "Celebix Yazılım" },
      { href: "/dijital-pazarlama", label: "Celebix Dijital Pazarlama" },
      { href: "/sosyal-medya", label: "Celebix Medya Yönetimi" },
      { href: "/celebix-saas-platformu", label: "Celebix SaaS" },
    ]
  },
  { href: "/portfoy", label: "Portföy" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

const navLinksEn = [
  { href: "/", label: "Home" },
  { 
    href: "/products", 
    label: "Products",
    children: [
      { href: "/e-ticaret-paketleri", label: "Celebix E-Commerce" },
      { href: "/kurumsal-yazilim", label: "Celebix Software" },
      { href: "/dijital-pazarlama", label: "Celebix Digital Marketing" },
      { href: "/sosyal-medya", label: "Celebix Media Management" },
      { href: "/celebix-saas-platformu", label: "Celebix SaaS" },
    ]
  },
  { href: "/portfoy", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "Contact" },
];

export default function Navigation({ locale }: { locale: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  
  const isTr = locale === "tr";
  const navLinks = isTr ? navLinksTr : navLinksEn;
  const otherLocale = isTr ? "en" : "tr";
  
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-light-100/80 backdrop-blur-glass border-b border-dark-900/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-max mx-auto px-6 lg:px-16">
          <nav className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center -ml-2">
              <img 
                src="/Logo/koyu logo.svg" 
                alt="Celebix" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div 
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.children ? (
                    <>
                      <button className="flex items-center gap-1 text-small text-dark-900/70 hover:text-dark-900 transition-colors">
                        {link.label}
                        <ChevronDown size={16} className={`transition-transform ${openDropdown === link.href ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.href && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 pt-2"
                          >
                            <div className="bg-white rounded-xl shadow-xl shadow-dark-900/10 border border-dark-900/5 py-2 min-w-[200px]">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={`/${locale}${child.href}`}
                                  className="block px-4 py-2 text-small text-dark-900/70 hover:text-dark-900 hover:bg-light-100 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-small text-dark-900/70 hover:text-dark-900 transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aurora-indigo transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Switcher */}
              <Link
                href={switchLocalePath}
                className="text-small text-dark-900/60 hover:text-dark-900 transition-colors flex items-center gap-1"
              >
                <span className={isTr ? "text-dark-900 font-medium" : ""}>TR</span>
                <span className="text-dark-900/30">|</span>
                <span className={!isTr ? "text-dark-900 font-medium" : ""}>EN</span>
              </Link>

              {/* CTA Button */}
              <Link
                href={`/${locale}${isTr ? "/iletisim" : "/contact"}`}
                className="px-5 py-2.5 bg-dark-900 text-light-100 text-small font-medium rounded-full hover:bg-dark-800 transition-colors"
              >
                {isTr ? "Projeye Başla" : "Start Project"}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-24 z-40 bg-light-100 lg:hidden"
          >
            <div className="container-max mx-auto px-4 py-8">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      onClick={() => !link.children && setIsMobileMenuOpen(false)}
                      className="text-h3 text-dark-900 py-3 border-b border-dark-900/5"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={`/${locale}${child.href}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-body text-dark-900/70 py-2"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href={`/${locale}${isTr ? "/iletisim" : "/contact"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-6 py-4 bg-dark-900 text-light-100 text-center text-body font-medium rounded-full"
                >
                  {isTr ? "Projeye Başla" : "Start Project"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
