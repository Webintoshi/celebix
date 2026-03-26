"use client";

import Link from "next/link";
import { ArrowLeft, Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="text-[150px] font-display font-bold text-dark-900/5 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-display font-bold bg-gradient-to-r from-aurora-indigo via-aurora-violet to-aurora-magenta bg-clip-text text-transparent">
                404
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-display text-3xl lg:text-4xl text-dark-900 mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-lg text-dark-900/60 mb-8 max-w-lg mx-auto">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
          Aşağıdaki bağlantılardan devam edebilirsiniz.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark-900 text-light-100 font-medium rounded-full hover:bg-dark-800 transition-colors"
          >
            <Home size={18} />
            Ana Sayfa
          </Link>
          <Link
            href="/tr/blog"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark-900/5 text-dark-900 font-medium rounded-full hover:bg-dark-900/10 transition-colors"
          >
            <Search size={18} />
            Blog Yazıları
          </Link>
        </div>

        {/* Back Link - Use a tag with href for navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dark-900/60 hover:text-dark-900 transition-colors"
        >
          <ArrowLeft size={18} />
          Ana Sayfaya Dön
        </Link>

        {/* Popular Links */}
        <div className="mt-16 pt-8 border-t border-dark-900/10">
          <p className="text-small text-dark-900/50 mb-4">Popüler Sayfalar</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tr/e-ticaret-paketleri"
              className="px-4 py-2 rounded-full bg-dark-900/5 text-sm text-dark-900/70 hover:bg-aurora-violet/10 hover:text-aurora-violet transition-colors"
            >
              E-Ticaret
            </Link>
            <Link
              href="/tr/dijital-pazarlama"
              className="px-4 py-2 rounded-full bg-dark-900/5 text-sm text-dark-900/70 hover:bg-aurora-violet/10 hover:text-aurora-violet transition-colors"
            >
              Dijital Pazarlama
            </Link>
            <Link
              href="/tr/kurumsal-yazilim"
              className="px-4 py-2 rounded-full bg-dark-900/5 text-sm text-dark-900/70 hover:bg-aurora-violet/10 hover:text-aurora-violet transition-colors"
            >
              Kurumsal Yazılım
            </Link>
            <Link
              href="/tr/iletisim"
              className="px-4 py-2 rounded-full bg-dark-900/5 text-sm text-dark-900/70 hover:bg-aurora-violet/10 hover:text-aurora-violet transition-colors"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
