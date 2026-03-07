export default function SocialAnalyticsVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Analytics Dashboard */}
      <rect x="25" y="20" width="230" height="140" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Header */}
      <rect x="35" y="30" width="80" height="8" rx="2" fill="#374151"/>
      <rect x="200" y="30" width="45" height="8" rx="4" fill="#F3F4F6"/>
      
      {/* Metrics Row */}
      <rect x="35" y="50" width="50" height="35" rx="6" fill="#F3F4F6"/>
      <rect x="42" y="58" width="20" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="42" y="68" width="30" height="8" rx="1" fill="#10B981"/>
      
      <rect x="95" y="50" width="50" height="35" rx="6" fill="#F3F4F6"/>
      <rect x="102" y="58" width="20" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="102" y="68" width="30" height="8" rx="1" fill="#6366F1"/>
      
      <rect x="155" y="50" width="50" height="35" rx="6" fill="#F3F4F6"/>
      <rect x="162" y="58" width="20" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="162" y="68" width="30" height="8" rx="1" fill="#EC4899"/>
      
      {/* Chart Area */}
      <rect x="35" y="95" width="170" height="55" rx="6" fill="#F9FAFB"/>
      
      {/* Line Chart */}
      <polyline points="45,135 70,125 95,128 120,115 145,105 170,95 195,85" 
                fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Data Points */}
      <circle cx="45" cy="135" r="3" fill="#EC4899"/>
      <circle cx="70" cy="125" r="3" fill="#EC4899"/>
      <circle cx="95" cy="128" r="3" fill="#EC4899"/>
      <circle cx="120" cy="115" r="3" fill="#EC4899"/>
      <circle cx="145" cy="105" r="3" fill="#EC4899"/>
      <circle cx="170" cy="95" r="3" fill="#EC4899"/>
      <circle cx="195" cy="85" r="3" fill="#EC4899"/>
      
      {/* Platform Breakdown */}
      <rect x="215" y="95" width="35" height="55" rx="6" fill="#F9FAFB"/>
      
      {/* Instagram */}
      <circle cx="225" cy="108" r="5" fill="#E4405F" opacity="0.3"/>
      <rect x="235" y="106" width="10" height="3" rx="1" fill="#9CA3AF"/>
      
      {/* TikTok */}
      <circle cx="225" cy="125" r="5" fill="#000000" opacity="0.2"/>
      <rect x="235" y="123" width="10" height="3" rx="1" fill="#9CA3AF"/>
      
      {/* LinkedIn */}
      <circle cx="225" cy="142" r="5" fill="#0A66C2" opacity="0.3"/>
      <rect x="235" y="140" width="10" height="3" rx="1" fill="#9CA3AF"/>
      
      {/* Insight Card */}
      <rect x="25" y="170" width="110" height="25" rx="6" fill="#F97316" opacity="0.1"/>
      <text x="35" y="182" fontFamily="system-ui" fontSize="8" fill="#F97316">En iyi performans:</text>
      <text x="35" y="190" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#F97316">Reels - Perşembe</text>
      
      <rect x="145" y="170" width="110" height="25" rx="6" fill="#6366F1" opacity="0.1"/>
      <text x="155" y="182" fontFamily="system-ui" fontSize="8" fill="#6366F1">Büyüme:</text>
      <text x="155" y="190" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#6366F1">+28% bu ay</text>
    </svg>
  );
}
