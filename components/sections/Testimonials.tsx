"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { generatePlaceholderSVG } from "@/lib/utils";

const testimonialsData = {
  tr: [
    { 
      id: 19, 
      quote: "Celebix ekibi, vizyonumuzu gerçeğe dönüştürdü. Profesyonellik ve yaratıcılığın mükemmel kombinasyonu.",
      name: "Ahmet Yılmaz",
      title: "CEO, TechCorp"
    },
    { 
      id: 20, 
      quote: "Marketing stratejilerimiz tamamen değişti. ROI'de %200 artış sağladık.",
      name: "Zeynep Kaya",
      title: "Marketing Direktörü, BrandX"
    },
    { 
      id: 21, 
      quote: "Yazılım kalitesi ve teslimat süreci kusursuzdu. Kesinlikle tavsiye ediyorum.",
      name: "Mehmet Demir",
      title: "CTO, StartupHub"
    },
  ],
  en: [
    { 
      id: 19, 
      quote: "The Celebix team turned our vision into reality. The perfect combination of professionalism and creativity.",
      name: "Ahmet Yilmaz",
      title: "CEO, TechCorp"
    },
    { 
      id: 20, 
      quote: "Our marketing strategy completely transformed. We achieved 200% increase in ROI.",
      name: "Zeynep Kaya",
      title: "Marketing Director, BrandX"
    },
    { 
      id: 21, 
      quote: "Software quality and delivery process were flawless. Highly recommended.",
      name: "Mehmet Demir",
      title: "CTO, StartupHub"
    },
  ],
};

export default function Testimonials({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  const testimonials = isTr ? testimonialsData.tr : testimonialsData.en;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 bg-dark-900/3">
      <div className="container-max mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-h1 text-dark-900">
            {isTr ? "Müşteri Yorumları" : "Client Testimonials"}
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <Quote size={48} className="text-aurora-indigo/20" />
              </div>

              {/* Quote */}
              <blockquote className="font-display text-h2 text-dark-900 mb-10 leading-tight">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-aurora-indigo/20">
                    <img
                      src={generatePlaceholderSVG(
                        testimonials[current].id,
                        100,
                        100,
                        `IMG_${testimonials[current].id}`
                      )}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-display text-body text-dark-900">
                    {testimonials[current].name}
                  </div>
                  <div className="text-small text-dark-900/60">
                    {testimonials[current].title}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-dark-900/20 flex items-center justify-center hover:bg-dark-900 hover:text-light-100 hover:border-dark-900 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-aurora-indigo"
                      : "bg-dark-900/20 hover:bg-dark-900/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-dark-900/20 flex items-center justify-center hover:bg-dark-900 hover:text-light-100 hover:border-dark-900 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
