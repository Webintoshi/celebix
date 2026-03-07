interface DashboardSVGProps {
  locale?: string;
  className?: string;
}

export default function DashboardSVG({ locale = "tr", className = "" }: DashboardSVGProps) {
  const isTr = locale === "tr";
  
  const t = {
    title: isTr ? "İş Performansı" : "Business Performance",
    period: isTr ? "Son 7 gün" : "Last 7 days",
    revenue: isTr ? "Gelir" : "Revenue",
    orders: isTr ? "Sipariş" : "Orders",
    aov: isTr ? "Ort. Sepet" : "Avg. Order",
    growth: isTr ? "vs geçen hafta" : "vs last week",
    trend: isTr ? "Satış Trendi" : "Sales Trend",
  };

  return (
    <svg 
      viewBox="0 0 800 280" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background */}
      <rect width="800" height="280" rx="12" fill="#FAFBFC"/>
      
      {/* Header */}
      <text x="20" y="28" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#1A1A1A">
        {t.title}
      </text>
      
      {/* Period Dropdown */}
      <rect x="140" y="12" width="80" height="22" rx="6" fill="#F3F4F6"/>
      <text x="148" y="27" fontFamily="system-ui, sans-serif" fontSize="10" fill="#6B7280">{t.period}</text>
      <path d="M212 20L215 23L218 20" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Stats Cards - Compact */}
      {/* Revenue Card */}
      <rect x="20" y="50" width="140" height="65" rx="10" fill="#2563EB"/>
      <text x="32" y="72" fontFamily="system-ui, sans-serif" fontSize="10" fill="#93C5FD">{t.revenue}</text>
      <text x="32" y="95" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#FFFFFF">₺428K</text>
      <text x="32" y="108" fontFamily="system-ui, sans-serif" fontSize="9" fill="#86EFAC">+8% {t.growth}</text>
      
      {/* Orders Card */}
      <rect x="170" y="50" width="140" height="65" rx="10" fill="#F3F4F6"/>
      <text x="182" y="72" fontFamily="system-ui, sans-serif" fontSize="10" fill="#6B7280">{t.orders}</text>
      <text x="182" y="95" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#1F2937">1,847</text>
      <text x="182" y="108" fontFamily="system-ui, sans-serif" fontSize="9" fill="#10B981">+12% {t.growth}</text>
      
      {/* AOV Card */}
      <rect x="320" y="50" width="140" height="65" rx="10" fill="#F3F4F6"/>
      <text x="332" y="72" fontFamily="system-ui, sans-serif" fontSize="10" fill="#6B7280">{t.aov}</text>
      <text x="332" y="95" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#1F2937">₺232</text>
      <text x="332" y="108" fontFamily="system-ui, sans-serif" fontSize="9" fill="#10B981">+5% {t.growth}</text>
      
      {/* Chart Section */}
      <text x="480" y="72" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#374151">{t.trend}</text>
      
      {/* Chart Grid Lines */}
      <line x1="480" y1="190" x2="770" y2="190" stroke="#E5E7EB" strokeWidth="1"/>
      <line x1="480" y1="160" x2="770" y2="160" stroke="#E5E7EB" strokeWidth="1"/>
      <line x1="480" y1="130" x2="770" y2="130" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Chart Line */}
      <path 
        d="M485 170 Q520 155, 555 145 T625 140 T695 150 T765 135" 
        stroke="#2563EB" 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Chart Fill */}
      <path 
        d="M485 170 Q520 155, 555 145 T625 140 T695 150 T765 135 L765 190 L485 190 Z" 
        fill="url(#chartGradient)"
      />
      
      {/* Chart Point */}
      <circle cx="625" cy="140" r="5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2"/>
      
      {/* X Axis Labels */}
      <text x="485" y="205" fontFamily="system-ui, sans-serif" fontSize="9" fill="#9CA3AF">Pzt</text>
      <text x="555" y="205" fontFamily="system-ui, sans-serif" fontSize="9" fill="#9CA3AF">Sal</text>
      <text x="625" y="205" fontFamily="system-ui, sans-serif" fontSize="9" fill="#9CA3AF">Çar</text>
      <text x="695" y="205" fontFamily="system-ui, sans-serif" fontSize="9" fill="#9CA3AF">Per</text>
      <text x="760" y="205" fontFamily="system-ui, sans-serif" fontSize="9" fill="#9CA3AF">Cum</text>
      
      {/* Mini Pie Chart - Category Split */}
      <text x="20" y="145" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#374151">
        {isTr ? "Kategoriler" : "Categories"}
      </text>
      
      {/* Small Doughnut */}
      <g transform="translate(80, 195)">
        <circle cx="0" cy="0" r="35" fill="none" stroke="#2563EB" strokeWidth="12" strokeDasharray="88 220" strokeLinecap="round"/>
        <circle cx="0" cy="0" r="35" fill="none" stroke="#F97316" strokeWidth="12" strokeDasharray="55 220" strokeDashoffset="-88" strokeLinecap="round"/>
        <circle cx="0" cy="0" r="35" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="35 220" strokeDashoffset="-143" strokeLinecap="round"/>
        <circle cx="0" cy="0" r="20" fill="#FAFBFC"/>
      </g>
      
      {/* Legend */}
      <circle cx="20" cy="250" r="4" fill="#2563EB"/>
      <text x="30" y="254" fontFamily="system-ui, sans-serif" fontSize="9" fill="#4B5563">{isTr ? "Elektronik" : "Electronics"}</text>
      
      <circle cx="100" cy="250" r="4" fill="#F97316"/>
      <text x="110" y="254" fontFamily="system-ui, sans-serif" fontSize="9" fill="#4B5563">{isTr ? "Ev" : "Home"}</text>
      
      <circle cx="160" cy="250" r="4" fill="#10B981"/>
      <text x="170" y="254" fontFamily="system-ui, sans-serif" fontSize="9" fill="#4B5563">{isTr ? "Kozmetik" : "Beauty"}</text>
      
      {/* Top Products - Mini List */}
      <text x="260" y="145" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#374151">
        {isTr ? "Çok Satanlar" : "Top Products"}
      </text>
      
      {/* Product 1 */}
      <rect x="260" y="155" width="180" height="28" rx="6" fill="#F3F4F6"/>
      <text x="270" y="173" fontFamily="system-ui, sans-serif" fontSize="10" fill="#1F2937">{isTr ? "Kablosuz Kulaklık" : "Wireless Headphones"}</text>
      <text x="425" y="173" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#2563EB">1,247</text>
      
      {/* Product 2 */}
      <rect x="260" y="188" width="180" height="28" rx="6" fill="#F3F4F6"/>
      <text x="270" y="206" fontFamily="system-ui, sans-serif" fontSize="10" fill="#1F2937">{isTr ? "Saç Kurutma" : "Hair Dryer"}</text>
      <text x="425" y="206" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#2563EB">892</text>
      
      {/* Product 3 */}
      <rect x="260" y="221" width="180" height="28" rx="6" fill="#F3F4F6"/>
      <text x="270" y="239" fontFamily="system-ui, sans-serif" fontSize="10" fill="#1F2937">{isTr ? "Blender" : "Blender"}</text>
      <text x="425" y="239" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#2563EB">634</text>
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
