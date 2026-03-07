export default function InfluencerVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Influencer Profile Card */}
      <rect x="30" y="30" width="100" height="120" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Profile Image */}
      <circle cx="80" cy="60" r="20" fill="#E5E7EB"/>
      <circle cx="80" cy="60" r="20" fill="none" stroke="#E4405F" strokeWidth="2" strokeDasharray="4 2"/>
      
      {/* Verified Badge */}
      <circle cx="95" cy="45" r="8" fill="#3B82F6"/>
      <path d="M92 45 L94 47 L98 43" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Profile Info */}
      <rect x="45" y="90" width="50" height="6" rx="1" fill="#374151"/>
      <rect x="55" y="100" width="30" height="4" rx="1" fill="#9CA3AF"/>
      
      {/* Stats */}
      <rect x="40" y="115" width="25" height="25" rx="4" fill="#F3F4F6"/>
      <text x="45" y="127" fontFamily="system-ui" fontSize="7" fill="#6B7280">Takipçi</text>
      <text x="45" y="136" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#374151">125K</text>
      
      <rect x="70" y="115" width="25" height="25" rx="4" fill="#F3F4F6"/>
      <text x="75" y="127" fontFamily="system-ui" fontSize="7" fill="#6B7280">Etkileşim</text>
      <text x="75" y="136" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#374151">8.5%</text>
      
      {/* Collaboration Arrow */}
      <path d="M140 90 L170 90" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 2"/>
      <polygon points="165,85 165,95 175,90" fill="#E5E7EB"/>
      
      {/* Brand Logo */}
      <rect x="180" y="60" width="70" height="60" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="195" y="75" width="40" height="15" rx="4" fill="#6366F1" opacity="0.2"/>
      <rect x="200" y="80" width="30" height="5" rx="1" fill="#6366F1" opacity="0.4"/>
      <rect x="190" y="100" width="50" height="4" rx="1" fill="#D1D5DB"/>
      <rect x="190" y="108" width="35" height="3" rx="1" fill="#E5E7EB"/>
      
      {/* Campaign Stats */}
      <rect x="150" y="140" width="100" height="30" rx="6" fill="#10B981" opacity="0.1"/>
      <text x="160" y="155" fontFamily="system-ui" fontSize="9" fill="#10B981">Kampanya ROI</text>
      <text x="160" y="165" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#10B981">+320%</text>
      
      {/* Connection Dots */}
      <circle cx="145" cy="70" r="4" fill="#E4405F" opacity="0.3"/>
      <circle cx="155" cy="50" r="4" fill="#6366F1" opacity="0.3"/>
      <circle cx="165" cy="110" r="4" fill="#10B981" opacity="0.3"/>
    </svg>
  );
}
