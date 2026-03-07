export default function MarketingHeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none">
      <rect width="600" height="400" rx="16" fill="#F8F8F8"/>
      
      {/* Main Analytics Dashboard */}
      <rect x="40" y="40" width="320" height="240" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="40" y="40" width="320" height="36" rx="12" fill="#FAFAFA"/>
      <rect x="40" y="68" width="320" height="1" fill="#E5E7EB"/>
      
      {/* Dashboard Title */}
      <rect x="55" y="52" width="80" height="8" rx="2" fill="#D1D5DB"/>
      
      {/* Stats Row */}
      <rect x="55" y="85" width="70" height="45" rx="6" fill="#F3F4F6"/>
      <rect x="65" y="95" width="30" height="6" rx="1" fill="#9CA3AF"/>
      <rect x="65" y="108" width="40" height="8" rx="1" fill="#10B981"/>
      
      <rect x="135" y="85" width="70" height="45" rx="6" fill="#F3F4F6"/>
      <rect x="145" y="95" width="35" height="6" rx="1" fill="#9CA3AF"/>
      <rect x="145" y="108" width="45" height="8" rx="1" fill="#F97316"/>
      
      <rect x="215" y="85" width="70" height="45" rx="6" fill="#F3F4F6"/>
      <rect x="225" y="95" width="40" height="6" rx="1" fill="#9CA3AF"/>
      <rect x="225" y="108" width="35" height="8" rx="1" fill="#6366F1"/>
      
      {/* Chart Area */}
      <rect x="55" y="145" width="290" height="120" rx="8" fill="#F9FAFB"/>
      
      {/* Line Chart */}
      <polyline points="70,240 110,220 150,225 190,200 230,180 270,160 310,140" 
                fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Data Points */}
      <circle cx="70" cy="240" r="4" fill="#F97316"/>
      <circle cx="110" cy="220" r="4" fill="#F97316"/>
      <circle cx="150" cy="225" r="4" fill="#F97316"/>
      <circle cx="190" cy="200" r="4" fill="#F97316"/>
      <circle cx="230" cy="180" r="4" fill="#F97316"/>
      <circle cx="270" cy="160" r="4" fill="#F97316"/>
      <circle cx="310" cy="140" r="4" fill="#F97316"/>
      
      {/* Y-Axis Labels */}
      <rect x="60" y="155" width="15" height="3" rx="1" fill="#D1D5DB"/>
      <rect x="60" y="185" width="15" height="3" rx="1" fill="#D1D5DB"/>
      <rect x="60" y="215" width="15" height="3" rx="1" fill="#D1D5DB"/>
      
      {/* Side Panel - Campaigns */}
      <rect x="380" y="40" width="180" height="180" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="395" y="55" width="100" height="8" rx="2" fill="#374151"/>
      
      {/* Campaign Items */}
      <rect x="395" y="75" width="150" height="35" rx="6" fill="#F3F4F6"/>
      <rect x="405" y="85" width="25" height="15" rx="4" fill="#4285F4" opacity="0.2"/>
      <text x="412" y="95" fontFamily="system-ui" fontSize="8" fill="#4285F4">G</text>
      <rect x="438" y="83" width="60" height="5" rx="1" fill="#9CA3AF"/>
      <rect x="438" y="93" width="40" height="4" rx="1" fill="#D1D5DB"/>
      
      <rect x="395" y="118" width="150" height="35" rx="6" fill="#F3F4F6"/>
      <rect x="405" y="128" width="25" height="15" rx="4" fill="#1877F2" opacity="0.2"/>
      <text x="412" y="138" fontFamily="system-ui" fontSize="8" fill="#1877F2">f</text>
      <rect x="438" y="126" width="55" height="5" rx="1" fill="#9CA3AF"/>
      <rect x="438" y="136" width="35" height="4" rx="1" fill="#D1D5DB"/>
      
      <rect x="395" y="161" width="150" height="35" rx="6" fill="#F3F4F6"/>
      <rect x="405" y="171" width="25" height="15" rx="4" fill="#E4405F" opacity="0.2"/>
      <text x="412" y="181" fontFamily="system-ui" fontSize="8" fill="#E4405F">Ig</text>
      <rect x="438" y="169" width="50" height="5" rx="1" fill="#9CA3AF"/>
      <rect x="438" y="179" width="30" height="4" rx="1" fill="#D1D5DB"/>
      
      {/* Bottom Stats Cards */}
      <rect x="380" y="235" width="85" height="80" rx="10" fill="#10B981" opacity="0.1"/>
      <rect x="395" y="255" width="40" height="5" rx="1" fill="#10B981" opacity="0.6"/>
      <rect x="395" y="270" width="55" height="12" rx="2" fill="#10B981" opacity="0.3"/>
      <rect x="395" y="290" width="30" height="4" rx="1" fill="#10B981" opacity="0.5"/>
      
      <rect x="475" y="235" width="85" height="80" rx="10" fill="#F97316" opacity="0.1"/>
      <rect x="490" y="255" width="45" height="5" rx="1" fill="#F97316" opacity="0.6"/>
      <rect x="490" y="270" width="50" height="12" rx="2" fill="#F97316" opacity="0.3"/>
      <rect x="490" y="290" width="25" height="4" rx="1" fill="#F97316" opacity="0.5"/>
      
      {/* Target/Audience Icon */}
      <g transform="translate(55, 300)">
        <circle cx="25" cy="25" r="30" fill="#6366F1" opacity="0.1"/>
        <circle cx="25" cy="25" r="20" fill="none" stroke="#6366F1" strokeWidth="2" opacity="0.3"/>
        <circle cx="25" cy="25" r="10" fill="#6366F1" opacity="0.2"/>
        <circle cx="25" cy="25" r="4" fill="#6366F1"/>
        {/* Target crosshairs */}
        <line x1="25" y1="5" x2="25" y2="12" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        <line x1="25" y1="38" x2="25" y2="45" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        <line x1="5" y1="25" x2="12" y2="25" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        <line x1="38" y1="25" x2="45" y2="25" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
      </g>
      
      {/* Growth Arrow */}
      <g transform="translate(450, 340)">
        <path d="M0 20 L30 5 L60 15" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M50 10 L60 15 L58 25" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
    </svg>
  );
}
