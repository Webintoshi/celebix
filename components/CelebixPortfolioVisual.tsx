export default function CelebixPortfolioVisual({ 
  className = "", 
  visualType = "ecommerce" 
}: { 
  className?: string;
  visualType?: "ecommerce" | "saas";
}) {
  if (visualType === "saas") {
    return (
      <svg viewBox="0 0 800 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="saasBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A"/>
            <stop offset="100%" stopColor="#1E293B"/>
          </linearGradient>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981"/>
            <stop offset="100%" stopColor="#059669"/>
          </linearGradient>
          <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316"/>
            <stop offset="100%" stopColor="#EA580C"/>
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="800" height="500" rx="24" fill="url(#saasBgGrad)"/>
        
        {/* Decorative Pattern */}
        <g opacity="0.02">
          {[...Array(25)].map((_, i) => (
            <line key={`v${i}`} x1={i * 32} y1="0" x2={i * 32} y2="500" stroke="#FFFFFF" strokeWidth="1"/>
          ))}
          {[...Array(16)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 32} x2="800" y2={i * 32} stroke="#FFFFFF" strokeWidth="1"/>
          ))}
        </g>
        
        {/* Phone Mockup - Left */}
        <g transform="translate(80, 60)">
          <rect x="0" y="0" width="220" height="380" rx="28" fill="#1E293B" stroke="#334155" strokeWidth="4"/>
          <rect x="12" y="12" width="196" height="356" rx="20" fill="#F8FAFC"/>
          
          {/* Notch */}
          <rect x="70" y="12" width="80" height="24" rx="12" fill="#1E293B"/>
          
          {/* App Header */}
          <rect x="12" y="40" width="196" height="50" rx="0" fill="#FFFFFF"/>
          <circle cx="40" cy="65" r="14" fill="url(#greenGrad)"/>
          <rect x="60" y="58" width="80" height="8" rx="4" fill="#0F172A"/>
          <rect x="60" y="70" width="50" height="5" rx="2" fill="#94A3B8"/>
          
          {/* Restaurant Card */}
          <rect x="24" y="100" width="172" height="90" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
          <rect x="36" y="112" width="50" height="50" rx="8" fill="url(#orangeGrad)"/>
          <rect x="94" y="118" width="80" height="8" rx="4" fill="#0F172A"/>
          <rect x="94" y="132" width="60" height="5" rx="2" fill="#64748B"/>
          <rect x="36" y="172" width="50" height="12" rx="6" fill="#DCFCE7"/>
          <rect x="94" y="172" width="70" height="12" rx="6" fill="#E0E7FF"/>
          
          {/* Order Card */}
          <rect x="24" y="200" width="172" height="70" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
          <rect x="36" y="212" width="40" height="40" rx="8" fill="#E0E7FF"/>
          <rect x="84" y="218" width="80" height="6" rx="3" fill="#0F172A"/>
          <rect x="84" y="230" width="50" height="5" rx="2" fill="#64748B"/>
          <rect x="144" y="242" width="40" height="8" rx="4" fill="#10B981"/>
          
          {/* Bottom Nav */}
          <rect x="12" y="308" width="196" height="60" rx="0" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
          <circle cx="50" cy="338" r="10" fill="url(#greenGrad)"/>
          <circle cx="100" cy="338" r="10" fill="#CBD5E1"/>
          <circle cx="150" cy="338" r="10" fill="#CBD5E1"/>
          <circle cx="170" cy="338" r="10" fill="#CBD5E1"/>
        </g>
        
        {/* Admin Dashboard - Right */}
        <g transform="translate(340, 60)">
          <rect x="0" y="0" width="380" height="380" rx="16" fill="#FFFFFF" opacity="0.05" stroke="#334155" strokeWidth="1"/>
          
          {/* Header */}
          <rect x="0" y="0" width="380" height="60" rx="16" fill="#FFFFFF" opacity="0.03"/>
          <rect x="0" y="44" width="380" height="1" fill="#FFFFFF" opacity="0.1"/>
          <circle cx="24" cy="30" r="6" fill="#EF4444" opacity="0.8"/>
          <circle cx="40" cy="30" r="6" fill="#F59E0B" opacity="0.8"/>
          <circle cx="56" cy="30" r="6" fill="#10B981" opacity="0.8"/>
          <text x="190" y="34" fontFamily="system-ui" fontSize="12" fill="#FFFFFF" opacity="0.5" textAnchor="middle">Celebix Business Panel</text>
          
          {/* Sidebar */}
          <rect x="16" y="76" width="100" height="288" rx="8" fill="#FFFFFF" opacity="0.03"/>
          <rect x="28" y="96" width="70" height="6" rx="3" fill="#10B981" opacity="0.6"/>
          <rect x="28" y="118" width="55" height="5" rx="2" fill="#FFFFFF" opacity="0.3"/>
          <rect x="28" y="138" width="65" height="5" rx="2" fill="#FFFFFF" opacity="0.3"/>
          <rect x="28" y="158" width="50" height="5" rx="2" fill="#FFFFFF" opacity="0.3"/>
          
          {/* Main Content */}
          <g transform="translate(132, 76)">
            <text x="0" y="24" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#FFFFFF">İşletme Paneli</text>
            
            {/* Stats Cards */}
            <g transform="translate(0, 40)">
              <rect x="0" y="0" width="90" height="70" rx="8" fill="#FFFFFF" opacity="0.05"/>
              <text x="12" y="24" fontFamily="system-ui" fontSize="9" fill="#FFFFFF" opacity="0.5">Günlük Satış</text>
              <text x="12" y="48" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#10B981">₺4,250</text>
              <text x="12" y="62" fontFamily="system-ui" fontSize="9" fill="#10B981">+15%</text>
              
              <rect x="102" y="0" width="90" height="70" rx="8" fill="#FFFFFF" opacity="0.05"/>
              <text x="114" y="24" fontFamily="system-ui" fontSize="9" fill="#FFFFFF" opacity="0.5">Sipariş</text>
              <text x="114" y="48" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#F97316">24</text>
              <text x="114" y="62" fontFamily="system-ui" fontSize="9" fill="#F97316">+8%</text>
              
              <rect x="204" y="0" width="90" height="70" rx="8" fill="#FFFFFF" opacity="0.05"/>
              <text x="216" y="24" fontFamily="system-ui" fontSize="9" fill="#FFFFFF" opacity="0.5">Müşteri</text>
              <text x="216" y="48" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#6366F1">156</text>
              <text x="216" y="62" fontFamily="system-ui" fontSize="9" fill="#6366F1">+22%</text>
            </g>
            
            {/* Chart */}
            <rect x="0" y="130" width="200" height="140" rx="8" fill="#FFFFFF" opacity="0.03"/>
            <text x="16" y="156" fontFamily="system-ui" fontSize="11" fill="#FFFFFF" opacity="0.7">Haftalık Performans</text>
            <path d="M 20 240 Q 50 220, 80 230 T 140 210 T 180 190" fill="none" stroke="url(#greenGrad)" strokeWidth="3" strokeLinecap="round"/>
            
            {/* Recent Activity */}
            <rect x="212" y="130" width="106" height="140" rx="8" fill="#FFFFFF" opacity="0.03"/>
            <text x="228" y="156" fontFamily="system-ui" fontSize="11" fill="#FFFFFF" opacity="0.7">Son İşlemler</text>
            <rect x="224" y="172" width="80" height="28" rx="4" fill="#FFFFFF" opacity="0.05"/>
            <rect x="224" y="208" width="80" height="28" rx="4" fill="#FFFFFF" opacity="0.05"/>
            <rect x="224" y="244" width="80" height="28" rx="4" fill="#FFFFFF" opacity="0.05"/>
          </g>
        </g>
        
        {/* Floating Badge - Commission Free */}
        <g transform="translate(620, 280)">
          <rect x="0" y="0" width="140" height="70" rx="12" fill="#10B981" opacity="0.15" stroke="#10B981" strokeWidth="2"/>
          <text x="70" y="28" fontFamily="system-ui" fontSize="11" fill="#10B981" textAnchor="middle" fontWeight="600">Komisyon</text>
          <text x="70" y="50" fontFamily="system-ui" fontSize="18" fill="#10B981" textAnchor="middle" fontWeight="700">%0</text>
        </g>
        
        {/* Price Badge */}
        <g transform="translate(40, 40)">
          <rect x="0" y="0" width="120" height="50" rx="8" fill="#FFFFFF" opacity="0.1" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2"/>
          <text x="60" y="22" fontFamily="system-ui" fontSize="10" fill="#FFFFFF" opacity="0.7" textAnchor="middle">Sadece</text>
          <text x="60" y="40" fontFamily="system-ui" fontSize="16" fill="#FFFFFF" textAnchor="middle" fontWeight="700">700₺/ay</text>
        </g>
        
        {/* Logo Mark */}
        <g transform="translate(720, 420)">
          <circle cx="20" cy="20" r="20" fill="url(#greenGrad)" opacity="0.2"/>
          <text x="20" y="26" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#10B981" textAnchor="middle">C</text>
        </g>
      </svg>
    );
  }

  // E-Commerce Visual (default)
  return (
    <svg viewBox="0 0 800 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A1A1A"/>
          <stop offset="100%" stopColor="#2A2A2A"/>
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="800" height="500" rx="24" fill="url(#bgGrad)"/>
      
      {/* Decorative Grid */}
      <g opacity="0.03">
        {[...Array(20)].map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="500" stroke="#FFFFFF" strokeWidth="1"/>
        ))}
        {[...Array(13)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="#FFFFFF" strokeWidth="1"/>
        ))}
      </g>
      
      {/* Main Dashboard Mockup */}
      <g transform="translate(100, 80)">
        {/* Window Frame */}
        <rect x="0" y="0" width="600" height="360" rx="16" fill="#FFFFFF" opacity="0.05" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.1"/>
        
        {/* Window Header */}
        <rect x="0" y="0" width="600" height="48" rx="16" fill="#FFFFFF" opacity="0.03"/>
        <rect x="0" y="32" width="600" height="1" fill="#FFFFFF" opacity="0.1"/>
        
        {/* Window Controls */}
        <circle cx="24" cy="24" r="6" fill="#EF4444" opacity="0.8"/>
        <circle cx="44" cy="24" r="6" fill="#F59E0B" opacity="0.8"/>
        <circle cx="64" cy="24" r="6" fill="#10B981" opacity="0.8"/>
        
        {/* Title */}
        <text x="300" y="28" fontFamily="system-ui" fontSize="12" fill="#FFFFFF" opacity="0.5" textAnchor="middle">Celebix Admin Panel</text>
        
        {/* Sidebar */}
        <rect x="16" y="56" width="140" height="288" rx="8" fill="#FFFFFF" opacity="0.03"/>
        
        {/* Sidebar Menu Items */}
        <rect x="32" y="80" width="100" height="8" rx="4" fill="#6366F1" opacity="0.6"/>
        <rect x="32" y="104" width="80" height="6" rx="3" fill="#FFFFFF" opacity="0.3"/>
        <rect x="32" y="124" width="90" height="6" rx="3" fill="#FFFFFF" opacity="0.3"/>
        <rect x="32" y="144" width="70" height="6" rx="3" fill="#FFFFFF" opacity="0.3"/>
        <rect x="32" y="164" width="85" height="6" rx="3" fill="#FFFFFF" opacity="0.3"/>
        
        {/* Main Content Area */}
        <g transform="translate(172, 56)">
          {/* Header */}
          <text x="0" y="24" fontFamily="system-ui" fontSize="16" fontWeight="600" fill="#FFFFFF">Dashboard</text>
          
          {/* Stats Cards */}
          <g transform="translate(0, 48)">
            {/* Card 1 */}
            <rect x="0" y="0" width="120" height="80" rx="8" fill="#FFFFFF" opacity="0.05"/>
            <text x="16" y="28" fontFamily="system-ui" fontSize="10" fill="#FFFFFF" opacity="0.5">Günlük Satış</text>
            <text x="16" y="56" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="#10B981">₺48.2K</text>
            <text x="16" y="72" fontFamily="system-ui" fontSize="10" fill="#10B981">+12.5%</text>
            
            {/* Card 2 */}
            <rect x="136" y="0" width="120" height="80" rx="8" fill="#FFFFFF" opacity="0.05"/>
            <text x="152" y="28" fontFamily="system-ui" fontSize="10" fill="#FFFFFF" opacity="0.5">Siparişler</text>
            <text x="152" y="56" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="#6366F1">1,247</text>
            <text x="152" y="72" fontFamily="system-ui" fontSize="10" fill="#6366F1">+8.3%</text>
            
            {/* Card 3 */}
            <rect x="272" y="0" width="120" height="80" rx="8" fill="#FFFFFF" opacity="0.05"/>
            <text x="288" y="28" fontFamily="system-ui" fontSize="10" fill="#FFFFFF" opacity="0.5">Müşteriler</text>
            <text x="288" y="56" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="#F59E0B">3,891</text>
            <text x="288" y="72" fontFamily="system-ui" fontSize="10" fill="#F59E0B">+24.1%</text>
          </g>
          
          {/* Chart Area */}
          <rect x="0" y="144" width="260" height="140" rx="8" fill="#FFFFFF" opacity="0.03"/>
          <text x="16" y="172" fontFamily="system-ui" fontSize="12" fill="#FFFFFF" opacity="0.7">Satış Grafiği</text>
          
          {/* Chart Line */}
          <path 
            d="M 20 250 Q 50 230, 80 240 T 140 220 T 200 200 T 240 180" 
            fill="none" 
            stroke="url(#accentGrad)" 
            strokeWidth="3" 
            strokeLinecap="round"
            filter="url(#glow)"
          />
          
          {/* Chart Points */}
          <circle cx="80" cy="240" r="4" fill="#6366F1"/>
          <circle cx="140" cy="220" r="4" fill="#6366F1"/>
          <circle cx="200" cy="200" r="4" fill="#6366F1"/>
          <circle cx="240" cy="180" r="4" fill="#6366F1"/>
          
          {/* Recent Orders */}
          <g transform="translate(276, 144)">
            <rect x="0" y="0" width="140" height="140" rx="8" fill="#FFFFFF" opacity="0.03"/>
            <text x="16" y="28" fontFamily="system-ui" fontSize="12" fill="#FFFFFF" opacity="0.7">Son Siparişler</text>
            
            {/* Order Items */}
            <rect x="16" y="44" width="108" height="24" rx="4" fill="#FFFFFF" opacity="0.05"/>
            <rect x="24" y="52" width="60" height="4" rx="2" fill="#FFFFFF" opacity="0.3"/>
            <rect x="24" y="60" width="40" height="3" rx="1" fill="#10B981"/>
            
            <rect x="16" y="76" width="108" height="24" rx="4" fill="#FFFFFF" opacity="0.05"/>
            <rect x="24" y="84" width="50" height="4" rx="2" fill="#FFFFFF" opacity="0.3"/>
            <rect x="24" y="92" width="35" height="3" rx="1" fill="#F59E0B"/>
            
            <rect x="16" y="108" width="108" height="24" rx="4" fill="#FFFFFF" opacity="0.05"/>
            <rect x="24" y="116" width="55" height="4" rx="2" fill="#FFFFFF" opacity="0.3"/>
            <rect x="24" y="124" width="30" height="3" rx="1" fill="#10B981"/>
          </g>
        </g>
      </g>
      
      {/* Floating Elements */}
      <g transform="translate(60, 400)">
        <rect x="0" y="0" width="120" height="60" rx="8" fill="#FFFFFF" opacity="0.05" stroke="#6366F1" strokeWidth="1" strokeOpacity="0.3"/>
        <text x="16" y="24" fontFamily="system-ui" fontSize="10" fill="#FFFFFF" opacity="0.5">Platform</text>
        <text x="16" y="44" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#FFFFFF">E-Ticaret</text>
      </g>
      
      <g transform="translate(640, 100)">
        <rect x="0" y="0" width="100" height="50" rx="8" fill="#FFFFFF" opacity="0.05" stroke="#10B981" strokeWidth="1" strokeOpacity="0.3"/>
        <text x="16" y="20" fontFamily="system-ui" fontSize="9" fill="#FFFFFF" opacity="0.5">Performans</text>
        <text x="16" y="38" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#10B981">99.9% Uptime</text>
      </g>
      
      {/* Celebix Logo Mark */}
      <g transform="translate(680, 420)">
        <circle cx="20" cy="20" r="20" fill="url(#accentGrad)" opacity="0.2"/>
        <text x="20" cy="25" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#6366F1" textAnchor="middle">C</text>
      </g>
    </svg>
  );
}
