export default function MarketplaceVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none">
      <rect width="600" height="400" rx="16" fill="#F8F8F8"/>
      
      {/* Central Management Hub */}
      <rect x="220" y="130" width="160" height="140" rx="12" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2"/>
      <rect x="235" y="145" width="130" height="30" rx="6" fill="#1F2937"/>
      <text x="260" y="165" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#FFFFFF">Celebix Panel</text>
      
      {/* Sync Icon */}
      <circle cx="300" cy="200" r="25" fill="#10B981" opacity="0.1"/>
      <path d="M290 200 L295 195 L290 190" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M310 200 L305 205 L310 210" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M292 195 Q300 185, 308 195" stroke="#10B981" strokeWidth="2" fill="none"/>
      <path d="M308 205 Q300 215, 292 205" stroke="#10B981" strokeWidth="2" fill="none"/>
      
      {/* Stock Badge */}
      <rect x="245" y="240" width="110" height="20" rx="10" fill="#10B981" opacity="0.15"/>
      <text x="280" y="253" fontFamily="system-ui" fontSize="10" fill="#10B981">Otomatik Stok</text>
      
      {/* Connection Lines */}
      <line x1="220" y1="200" x2="120" y2="120" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5 5"/>
      <line x1="220" y1="200" x2="120" y2="280" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5 5"/>
      <line x1="380" y1="200" x2="480" y2="120" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5 5"/>
      <line x1="380" y1="200" x2="480" y2="280" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5 5"/>
      
      {/* Marketplace Cards */}
      {/* Trendyol */}
      <rect x="40" y="70" width="100" height="80" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="55" y="85" width="40" height="40" rx="6" fill="#FF6000" opacity="0.15"/>
      <text x="65" y="110" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#FF6000">T</text>
      <rect x="100" y="95" width="30" height="6" rx="1" fill="#6B7280"/>
      <rect x="55" y="135" width="70" height="4" rx="1" fill="#9CA3AF"/>
      <circle cx="120" cy="100" r="8" fill="#10B981" opacity="0.2"/>
      <path d="M117 100 L119 102 L123 97" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Amazon */}
      <rect x="40" y="250" width="100" height="80" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="55" y="265" width="40" height="40" rx="6" fill="#FF9900" opacity="0.15"/>
      <text x="60" y="290" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#FF9900">a</text>
      <rect x="100" y="275" width="30" height="6" rx="1" fill="#6B7280"/>
      <rect x="55" y="315" width="70" height="4" rx="1" fill="#9CA3AF"/>
      <circle cx="120" cy="280" r="8" fill="#10B981" opacity="0.2"/>
      <path d="M117 280 L119 282 L123 277" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Hepsiburada */}
      <rect x="460" y="70" width="100" height="80" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="475" y="85" width="40" height="40" rx="6" fill="#FF6000" opacity="0.15"/>
      <text x="485" y="110" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#FF6000">H</text>
      <rect x="520" y="95" width="30" height="6" rx="1" fill="#6B7280"/>
      <rect x="475" y="135" width="70" height="4" rx="1" fill="#9CA3AF"/>
      <circle cx="540" cy="100" r="8" fill="#10B981" opacity="0.2"/>
      <path d="M537 100 L539 102 L543 97" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* n11 */}
      <rect x="460" y="250" width="100" height="80" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="475" y="265" width="40" height="40" rx="6" fill="#5D8C87" opacity="0.15"/>
      <text x="485" y="290" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#5D8C87">n</text>
      <rect x="520" y="275" width="30" height="6" rx="1" fill="#6B7280"/>
      <rect x="475" y="315" width="70" height="4" rx="1" fill="#9CA3AF"/>
      <circle cx="540" cy="280" r="8" fill="#10B981" opacity="0.2"/>
      <path d="M537 280 L539 282 L543 277" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Additional Platforms Row */}
      <rect x="160" y="340" width="80" height="45" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <circle cx="185" cy="362" r="12" fill="#00AEEF" opacity="0.15"/>
      <text x="180" y="367" fontFamily="system-ui" fontSize="10" fill="#00AEEF">ÇS</text>
      <rect x="202" y="358" width="30" height="4" rx="1" fill="#9CA3AF"/>
      
      <rect x="260" y="340" width="80" height="45" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <circle cx="285" cy="362" r="12" fill="#FFD700" opacity="0.15"/>
      <text x="280" y="367" fontFamily="system-ui" fontSize="10" fill="#B8860B">PTT</text>
      <rect x="302" y="358" width="30" height="4" rx="1" fill="#9CA3AF"/>
      
      <rect x="360" y="340" width="80" height="45" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <circle cx="385" cy="362" r="12" fill="#6366F1" opacity="0.15"/>
      <text x="381" y="367" fontFamily="system-ui" fontSize="10" fill="#6366F1">+3</text>
      <rect x="402" y="358" width="30" height="4" rx="1" fill="#9CA3AF"/>
      
      {/* Order Notification Badges */}
      <rect x="145" y="80" width="50" height="20" rx="10" fill="#10B981" opacity="0.9"/>
      <text x="160" y="93" fontFamily="system-ui" fontSize="9" fill="#FFFFFF">+12 sipariş</text>
      
      <rect x="405" y="80" width="50" height="20" rx="10" fill="#6366F1" opacity="0.9"/>
      <text x="420" y="93" fontFamily="system-ui" fontSize="9" fill="#FFFFFF">+8 sipariş</text>
      
      {/* One Panel Badge */}
      <rect x="230" y="30" width="140" height="28" rx="14" fill="#1F2937"/>
      <text x="260" y="48" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF">Tek Panel, Tümü</text>
    </svg>
  );
}
