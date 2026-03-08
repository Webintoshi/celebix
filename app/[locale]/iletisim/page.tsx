"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  MessageSquare
} from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

const contactInfo = [
  {
    icon: Mail,
    label: "E-posta",
    labelEn: "Email",
    value: "merhaba@celebix.co",
    href: "mailto:merhaba@celebix.co",
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
    href: "#",
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    labelEn: "Working Hours",
    value: "Pzt - Cuma: 09:00 - 18:00",
    valueEn: "Mon - Fri: 09:00 - 18:00",
    href: "#",
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/celebix.co" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/celebix" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/celebix" },
];

const subjects = [
  { value: "", label: "Konu Seçin", labelEn: "Select Subject" },
  { value: "software", label: "Yazılım Geliştirme", labelEn: "Software Development" },
  { value: "marketing", label: "Dijital Pazarlama", labelEn: "Digital Marketing" },
  { value: "social", label: "Sosyal Medya Yönetimi", labelEn: "Social Media Management" },
  { value: "consulting", label: "Danışmanlık", labelEn: "Consulting" },
  { value: "other", label: "Diğer", labelEn: "Other" },
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
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Google Tag Manager - Form Submit Event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'form_submit_success',
        'form_name': 'contact_form',
        'form_subject': formData.subject || 'general'
      });
    }
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                  ? "Projenizi hayata geçirmek için ilk adımı atın. Formu doldurun, 24 saat içinde size dönüş yapalım."
                  : "Take the first step to bring your project to life. Fill out the form and we'll get back to you within 24 hours."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-light-100">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="glass-card rounded-2xl p-8 lg:p-10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} className="text-green-600" />
                      </div>
                      <h3 className="font-display text-2xl text-dark-900 mb-4">
                        {isTr ? "Mesajınız Gönderildi!" : "Message Sent!"}
                      </h3>
                      <p className="text-dark-900/60 mb-6">
                        {isTr 
                          ? "En kısa sürede size dönüş yapacağız."
                          : "We'll get back to you as soon as possible."}
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-aurora-indigo font-medium hover:underline"
                      >
                        {isTr ? "Yeni Mesaj Gönder" : "Send New Message"}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-small font-medium text-dark-900 mb-2">
                            {isTr ? "İsim" : "Name"} *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-dark-900/10 focus:border-dark-900/30 focus:ring-0 transition-colors"
                            placeholder={isTr ? "Adınız" : "Your name"}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-small font-medium text-dark-900 mb-2">
                            {isTr ? "E-posta" : "Email"} *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-dark-900/10 focus:border-dark-900/30 focus:ring-0 transition-colors"
                            placeholder={isTr ? "ornek@email.com" : "example@email.com"}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-small font-medium text-dark-900 mb-2">
                            {isTr ? "Telefon" : "Phone"}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-dark-900/10 focus:border-dark-900/30 focus:ring-0 transition-colors"
                            placeholder={isTr ? "+90 5XX XXX XX XX" : "+1 234 567 8900"}
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-small font-medium text-dark-900 mb-2">
                            {isTr ? "Konu" : "Subject"} *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-dark-900/10 focus:border-dark-900/30 focus:ring-0 transition-colors appearance-none cursor-pointer"
                          >
                            {subjects.map((subject) => (
                              <option key={subject.value} value={subject.value}>
                                {isTr ? subject.label : subject.labelEn}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-small font-medium text-dark-900 mb-2">
                          {isTr ? "Mesajınız" : "Your Message"} *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-dark-900/10 focus:border-dark-900/30 focus:ring-0 transition-colors resize-none"
                          placeholder={isTr ? "Projeniz hakkında kısaca bilgi verin..." : "Briefly tell us about your project..."}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-xl hover:bg-dark-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-light-100/30 border-t-light-100 rounded-full animate-spin" />
                            {isTr ? "Gönderiliyor..." : "Sending..."}
                          </>
                        ) : (
                          <>
                            {isTr ? "Mesaj Gönder" : "Send Message"}
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

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
                    return (
                      <motion.a
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
                      </motion.a>
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

                {/* Quick Response Promise */}
                <div className="glass-card rounded-2xl p-8 bg-dark-900 text-light-100">
                  <h3 className="font-display text-xl mb-3">
                    {isTr ? "Hızlı Yanıt Garantisi" : "Quick Response Guarantee"}
                  </h3>
                  <p className="text-light-100/70 text-small mb-4">
                    {isTr 
                      ? "Mesajınız 24 saat içinde yanıtlanacaktır. Acil durumlar için telefon numaramızdan bize ulaşabilirsiniz."
                      : "Your message will be answered within 24 hours. For urgent matters, you can reach us via phone."}
                  </p>
                  <div className="flex items-center gap-2 text-small">
                    <Clock size={16} className="text-light-100/50" />
                    <span className="text-light-100/50">{isTr ? "Ortalama yanıt süresi: 2 saat" : "Average response time: 2 hours"}</span>
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
                    ? "Hemen formu doldurun ve ücretsiz danışmanlık alın."
                    : "Fill out the form now and get a free consultation."}
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
                >
                  {isTr ? "Yukarı Çık" : "Scroll Up"}
                  <ArrowRight size={18} className="rotate-[-90deg]" />
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
