"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare
} from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

const contactInfo = [
  {
    icon: Mail,
    label: "E-posta",
    labelEn: "Email",
    value: "merhaba@celebix.net",
    href: "mailto:merhaba@celebix.net",
  },
  {
    icon: Phone,
    label: "Telefon",
    labelEn: "Phone",
    value: "+90 530 209 96 28",
    href: "tel:+905302099628",
  },
  {
    icon: MapPin,
    label: "Adres",
    labelEn: "Address",
    value: "Akyazı Mahallesi, Altınordu/Ordu",
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    labelEn: "Working Hours",
    value: "Pzt - Cuma: 09:00 - 18:00",
    valueEn: "Mon - Fri: 09:00 - 18:00",
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/celebix.net" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/celebix" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/celebix" },
];

const faqs = [
  {
    question: "Proje süreci ne kadar sürer?",
    questionEn: "How long does the project process take?",
    answer: "Projenin kapsamına bağlı olarak değişir. Tipik bir web projesi 4-8 hafta, mobil uygulama 8-16 hafta sürmektedir. Detaylı zaman çizelgesi ilk görüşmede paylaşılır.",
    answerEn: "It varies depending on the project scope. A typical web project takes 4-8 weeks, mobile app 8-16 weeks. Detailed timeline is shared in the first meeting.",
  },
  {
    question: "Ücretlendirme nasıl yapılıyor?",
    questionEn: "How is pricing done?",
    answer: "Her proje için özel fiyatlandırma yapıyoruz. Projenin karmaşıklığı, süresi ve gereksinimlerine göre sabit fiyat veya saatlik ücret modelleri sunuyoruz.",
    answerEn: "We do custom pricing for each project. We offer fixed price or hourly rate models based on project complexity, duration, and requirements.",
  },
  {
    question: "Destek süreci nasıl işliyor?",
    questionEn: "How does the support process work?",
    answer: "Proje tesliminden sonra 3 ay garanti süresi veriyoruz. Ayrıca bakım ve destek paketlerimiz ile uzun vadeli iş birliği sunuyoruz.",
    answerEn: "We provide 3 months warranty after project delivery. We also offer long-term collaboration with our maintenance and support packages.",
  },
];

export default function Contact({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navigation locale={locale} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 overflow-hidden bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/5 text-dark-900/70 text-small font-medium mb-6">
                <MessageSquare size={16} />
                {isTr ? "İletişim" : "Contact"}
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-dark-900 mb-6 leading-tight">
                {isTr 
                  ? "Hadi Konuşalım" 
                  : "Let's Talk"}
              </h1>
              
              <p className="text-lg text-dark-900/60 max-w-2xl">
                {isTr 
                  ? "Projenizi e-posta veya WhatsApp üzerinden anlatın."
                  : "Tell us about your project by email or WhatsApp."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <h2 className="font-display text-2xl text-dark-900">{isTr ? "Projenizi anlatın" : "Tell us about your project"}</h2>
                <p className="mt-3 text-dark-900/70">
                  {isTr ? "Ne yapmak istediğinizi, varsa web sitenizi ve hedeflediğiniz teslim tarihini paylaşın." : "Share what you need, your website if you have one, and your target launch date."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="mailto:merhaba@celebix.net" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-dark-900 px-5 py-3 text-sm font-medium text-white hover:bg-dark-800">
                    <Mail size={18} aria-hidden="true" /> {isTr ? "E-posta yazın" : "Write an email"}
                  </a>
                  <a href="https://wa.me/905302099628" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-dark-900/20 px-5 py-3 text-sm font-medium text-dark-900 hover:bg-light-200">
                    <MessageSquare size={18} aria-hidden="true" /> {isTr ? "WhatsApp’tan yazın" : "Message us on WhatsApp"}
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const Card = info.href ? motion.a : motion.div;
                    return (
                      <Card
                        key={info.label}
                        href={info.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card rounded-xl p-6 hover-lift group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-dark-900/5 flex items-center justify-center mb-4 group-hover:bg-dark-900 group-hover:text-light-100 transition-colors">
                          <Icon size={22} />
                        </div>
                        <h3 className="text-small font-medium text-dark-900/60 mb-1">
                          {isTr ? info.label : info.labelEn}
                        </h3>
                        <p className="font-medium text-dark-900">
                          {info.valueEn && !isTr ? info.valueEn : info.value}
                        </p>
                      </Card>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-lg text-dark-900 mb-6">
                    {isTr ? "Sosyal Medya" : "Social Media"}
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className="w-12 h-12 rounded-xl bg-dark-900/5 flex items-center justify-center hover:bg-dark-900 hover:text-light-100 transition-colors"
                          aria-label={social.label}
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl text-dark-900 mb-4">
                  {isTr ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}
                </h2>
                <p className="text-dark-900/60">
                  {isTr 
                    ? "Aklınıza takılan soruların cevaplarını burada bulabilirsiniz."
                    : "You can find answers to your questions here."}
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-medium text-dark-900 pr-4">
                        {isTr ? faq.question : faq.questionEn}
                      </span>
                      <span className={`transform transition-transform flex-shrink-0 ${openFaq === index ? "rotate-180" : ""}`}>
                        <ArrowRight size={18} className="rotate-90 text-dark-900/40" />
                      </span>
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-dark-900/70">
                          {isTr ? faq.answer : faq.answerEn}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-dark-900/3 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-dark-900/3 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
                  {isTr 
                    ? "Projeye Hazır mısınız?" 
                    : "Ready to Start Your Project?"}
                </h2>
                <p className="text-dark-900/60 mb-8 text-lg">
                  {isTr 
                    ? "İhtiyaçlarınızı e-postayla paylaşın."
                    : "Tell us what you need by email."}
                </p>
                <a
                  href="mailto:merhaba@celebix.net"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
                >
                  {isTr ? "E-posta yazın" : "Write an email"}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
