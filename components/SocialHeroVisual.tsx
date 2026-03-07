export default function SocialHeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none">
      <rect width="600" height="400" rx="16" fill="#F8F8F8"/>
      
      {/* Phone Mockup - Instagram Style */}
      <rect x="180" y="40" width="240" height="320" rx="20" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2"/>
      <rect x="190" y="55" width="220" height="290" rx="12" fill="#FAFAFA"/>
      
      {/* Notch */}
      <rect x="270" y="48" width="60" height="18" rx="9" fill="#1A1A1A"/>
      
      {/* Instagram Header */}
      <rect x="195" y="75" width="210" height="40" rx="4" fill="#FFFFFF"/>
      <circle cx="220" cy="95" r="12" fill="none" stroke="#E4405F" strokeWidth="2"/>
      <circle cx="220" cy="95" r="8" fill="#E5E7EB"/>
      <rect x="240" y="90" width="80" height="6" rx="2" fill="#374151"/>
      <rect x="240" y="100" width="50" height="4" rx="1" fill="#9CA3AF"/>
      
      {/* Instagram Post - Reel */}
      <rect x="205" y="125" width="190" height="240" rx="8" fill="#E5E7EB"/>
      
      {/* Video Content */}
      <rect x="215" y="140" width="170" height="200" rx="6" fill="#6366F1" opacity="0.15"/>
      <circle cx="300" cy="240" r="25" fill="#FFFFFF" opacity="0.9"/>
      <polygon points="292,230 292,250 312,240" fill="#374151"/>
      
      {/* Reel Badge */}
      <rect x="225" y="150" width="35" height="16" rx="8" fill="#E4405F"/>
      <text x="235" y="161" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#FFFFFF">REELS</text>
      
      {/* Engagement Stats Overlay */}
      <rect x="225" y="310" width="150" height="45" rx="8" fill="#FFFFFF" opacity="0.95"/>
      <g transform="translate(235, 322)">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#E4405F" transform="scale(0.6)"/>
        <text x="12" y="20" fontFamily="system-ui" fontSize="9" fill="#374151">24.5K</text>
      </g>
      <g transform="translate(295, 322)">
        <rect x="0" y="2" width="14" height="10" rx="2" fill="none" stroke="#374151" strokeWidth="1.5"/>
        <path d="M3 8 L7 12 L11 4" stroke="#374151" strokeWidth="1.5" fill="none"/>
        <text x="2" y="22" fontFamily="system-ui" fontSize="9" fill="#374151">1,247</text>
      </g>
      
      {/* Floating Icons */}
      <g transform="translate(60, 80)">
        <circle cx="30" cy="30" r="30" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <circle cx="30" cy="30" r="20" fill="none" stroke="#E4405F" strokeWidth="2"/>
        <circle cx="30" cy="30" r="10" fill="none" stroke="#E4405F" strokeWidth="2"/>
        <circle cx="30" cy="30" r="4" fill="#E4405F"/>
      </g>
      
      <g transform="translate(450, 100)">
        <rect x="0" y="0" width="60" height="80" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <rect x="8" y="10" width="44" height="44" rx="4" fill="#F3F4F6"/>
        <rect x="15" y="20" width="30" height="4" rx="1" fill="#D1D5DB"/>
        <rect x="15" y="28" width="20" height="3" rx="1" fill="#E5E7EB"/>
        <rect x="15" y="60" width="30" height="12" rx="6" fill="#000000"/>
      </g>
      
      <g transform="translate(480, 250)">
        <circle cx="25" cy="25" r="25" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <path d="M15 25 Q25 15, 35 25 Q25 35, 15 25" fill="#25F4EE"/>
        <circle cx="35" cy="18" r="6" fill="#FE2C55"/>
      </g>
      
      {/* Trend Arrows */}
      <path d="M80 280 L110 240 L140 250 L170 200" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M155 205 L170 200 L168 218" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      
      {/* Stats Cards */}
      <rect x="50" y="320" width="80" height="50" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="60" y="332" width="40" height="5" rx="1" fill="#9CA3AF"/>
      <rect x="60" y="345" width="50" height="12" rx="2" fill="#10B981" opacity="0.2"/>
      <text x="65" y="354" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#10B981">+450%</text>
    </svg>
  );
}
