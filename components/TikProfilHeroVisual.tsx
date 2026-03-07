import { motion } from "framer-motion";

export default function TikProfilHeroVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Main Phone Container with 3D perspective */}
      <div className="relative mx-auto w-72 lg:w-80" style={{ perspective: '1000px' }}>
        {/* Shadow/Glow behind phone */}
        <div className="absolute inset-0 bg-dark-900/20 rounded-[3.5rem] blur-2xl transform translate-y-8 scale-95" />
        
        {/* Phone Frame */}
        <div 
          className="relative rounded-[3rem] bg-dark-900 p-2 shadow-2xl"
          style={{ 
            transform: 'rotateY(-5deg) rotateX(5deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Frame border highlight */}
          <div className="absolute inset-0 rounded-[3rem] border border-white/10 pointer-events-none" />
          
          {/* Screen */}
          <div className="rounded-[2.5rem] bg-light-100 overflow-hidden relative">
            {/* Dynamic Island */}
            <div className="h-7 bg-dark-900 flex items-center justify-center relative">
              <div className="w-24 h-5 bg-dark-900 rounded-full flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-dark-700" />
                <div className="w-3 h-3 rounded-full bg-green-900/50" />
              </div>
            </div>
            
            {/* App Content */}
            <div className="p-4 bg-light-100">
              {/* App Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-aurora-indigo flex items-center justify-center shadow-lg shadow-aurora-indigo/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-light-100">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-dark-900/40 font-medium">Tık Profil</p>
                    <p className="text-sm font-semibold text-dark-900">İşletme Paneli</p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-dark-100 border-2 border-white shadow-sm" />
              </div>
              
              {/* Restaurant Card */}
              <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-dark-900/5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center text-2xl shadow-inner">
                    🍽️
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-dark-900 truncate">Lezzet Durağı</h4>
                      <div className="flex items-center gap-1 bg-amber-50 px-1.5 py-0.5 rounded-full">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-xs font-semibold text-amber-700">4.9</span>
                      </div>
                    </div>
                    <p className="text-xs text-dark-900/50 mt-0.5">Restoran • 0.8 km</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-semibold rounded-full">Açık</span>
                      <span className="px-2 py-1 bg-aurora-indigo/10 text-aurora-indigo text-[10px] font-semibold rounded-full">Hızlı</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* New Order Card */}
              <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-dark-900/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-aurora-indigo/5 rounded-full -mr-10 -mt-10" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs text-dark-900/40 font-medium mb-1">Yeni Sipariş</p>
                    <p className="text-2xl font-bold text-dark-900">#1234</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-600 font-medium">Hazırlanıyor</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-aurora-indigo">₺245</p>
                    <p className="text-xs text-dark-900/40">3 ürün</p>
                  </div>
                </div>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-dark-900/5">
                  <p className="text-[10px] text-dark-900/40 uppercase tracking-wide font-medium">Günlük Satış</p>
                  <p className="text-xl font-bold text-aurora-indigo mt-1">₺4,250</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-500">
                      <path d="M7 14l5-5 5 5M12 9v12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs text-green-600 font-medium">+12%</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-dark-900/5">
                  <p className="text-[10px] text-dark-900/40 uppercase tracking-wide font-medium">Sipariş Sayısı</p>
                  <p className="text-xl font-bold text-dark-900 mt-1">24</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-500">
                      <path d="M7 14l5-5 5 5M12 9v12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs text-green-600 font-medium">+5%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Navigation */}
            <div className="h-16 bg-white border-t border-dark-100 flex items-center justify-around px-2">
              <div className="flex flex-col items-center gap-0.5 p-2">
                <div className="w-10 h-10 rounded-xl bg-aurora-indigo flex items-center justify-center shadow-lg shadow-aurora-indigo/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-light-100">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-dark-900/30">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="w-12 h-12 rounded-full bg-aurora-indigo flex items-center justify-center -mt-6 shadow-xl shadow-aurora-indigo/30 border-4 border-light-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-light-100">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-dark-900/30">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-dark-900/30">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Side Button */}
          <div className="absolute right-0 top-28 w-1 h-12 bg-dark-800 rounded-l" />
          <div className="absolute left-0 top-24 w-1 h-8 bg-dark-800 rounded-r" />
          <div className="absolute left-0 top-36 w-1 h-8 bg-dark-800 rounded-r" />
        </div>
      </div>
      
      {/* Floating Stats Card - Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -bottom-2 -right-4 lg:right-0 bg-white rounded-2xl p-4 shadow-xl border border-dark-900/5"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-600">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-dark-900/40 uppercase tracking-wide font-medium">Aylık Kazanç</p>
            <p className="text-lg font-bold text-dark-900">+₺12,450</p>
            <div className="flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-500">
                <path d="M7 14l5-5 5 5M12 9v12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs text-green-600 font-medium">+23% bu ay</span>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating Badge - Top Left */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -top-2 -left-4 lg:left-0 glass-card rounded-xl px-3 py-2 bg-white shadow-lg border border-dark-900/5"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-aurora-indigo/10 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-aurora-indigo">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-dark-900/40 font-medium">Durum</p>
            <p className="text-xs font-semibold text-dark-900">Aktif</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
