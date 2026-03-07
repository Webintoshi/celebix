"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import ProcessVisual from "@/components/ProcessVisual";

const stepsData = {
  tr: [
    { key: "discovery", icon: Search, title: "Keşif", description: "İhtiyaçlarınızı, hedeflerinizi ve rakip analizini detaylı şekilde inceliyoruz.", visual: 1, number: "01" },
    { key: "design", icon: PenTool, title: "Tasarım", description: "Kullanıcı odaklı wireframe'ler ve etkileyici görsel tasarımlar oluşturuyoruz.", visual: 2, number: "02" },
    { key: "development", icon: Code, title: "Geliştirme", description: "Modern teknolojilerle ölçeklenebilir ve performanslı çözümler geliştiriyoruz.", visual: 3, number: "03" },
    { key: "launch", icon: Rocket, title: "Lansman", description: "Test süreçleri, optimizasyon ve başarılı bir lansman ile projeyi hayata geçiriyoruz.", visual: 4, number: "04" },
  ],
  en: [
    { key: "discovery", icon: Search, title: "Discovery", description: "We thoroughly analyze your needs, goals, and competitive landscape.", visual: 1, number: "01" },
    { key: "design", icon: PenTool, title: "Design", description: "We create user-focused wireframes and captivating visual designs.", visual: 2, number: "02" },
    { key: "development", icon: Code, title: "Development", description: "We build scalable and performant solutions with modern technologies.", visual: 3, number: "03" },
    { key: "launch", icon: Rocket, title: "Launch", description: "Testing, optimization, and a successful launch bring the project to life.", visual: 4, number: "04" },
  ],
};

export default function Process({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  const steps = isTr ? stepsData.tr : stepsData.en;
  
  return (
    <section className="py-12">
      <div className="container-max mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-h1 text-dark-900 mb-4">
            {isTr ? "Nasıl Çalışırız?" : "How We Work"}
          </h2>
          <p className="text-body text-dark-900/60 max-w-2xl mx-auto">
            {isTr ? "Dört adımda dijital mükemmellik" : "Digital excellence in four steps"}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-dark-900/10 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Number & Icon */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-light-100 border border-dark-900/10 flex items-center justify-center shadow-lg">
                      <Icon size={24} className="text-aurora-indigo" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right md:pr-20" : "md:text-left md:pl-20"} pl-0 md:pl-0`}>
                    <div className="flex items-center gap-4 mb-4 md:justify-start">
                      <span className="md:hidden w-12 h-12 rounded-full bg-dark-900/5 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-aurora-indigo" />
                      </span>
                      <span className="font-display text-display text-dark-900/10">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-display text-h2 text-dark-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-body text-dark-900/60 max-w-md">
                      {step.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative rounded-bento overflow-hidden group glass-card">
                      <ProcessVisual 
                        step={step.visual as 1 | 2 | 3 | 4} 
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
