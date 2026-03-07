export default function MetaAdsVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Phone Mockup - Instagram Style */}
      <rect x="70" y="15" width="80" height="150" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="75" y="25" width="70" height="130" rx="4" fill="#FAFAFA"/>
      
      {/* Instagram Header */}
      <rect x="75" y="25" width="70" height="18" rx="4" fill="#FFFFFF"/>
      <circle cx="85" cy="34" r="5" fill="#E5E7EB"/>
      <rect x="93" y="32" width="30" height="4" rx="1" fill="#D1D5DB"/>
      <rect x="135" y="32" width="4" height="4" rx="1" fill="#374151"/>
      
      {/* Story Ring */}
      <circle cx="110" cy="55" r="14" fill="none" stroke="#E4405F" strokeWidth="2"/>
      <circle cx="110" cy="55" r="10" fill="#E5E7EB"/>
      
      {/* Post Image */}
      <rect x="80" y="75" width="60" height="50" rx="4" fill="#E5E7EB"/>
      <rect x="90" y="90" width="40" height="20" rx="2" fill="#D1D5DB" opacity="0.5"/>
      
      {/* Ad Badge */}
      <rect x="82" y="77" width="20" height="10" rx="3" fill="#F97316" opacity="0.9"/>
      <text x="86" y="84" fontFamily="system-ui" fontSize="6" fill="#FFFFFF">Sponsor</text>
      
      {/* Engagement Icons */}
      <rect x="82" y="130" width="8" height="8" rx="2" fill="#E4405F" opacity="0.3"/>
      <rect x="95" y="130" width="8" height="8" rx="2" fill="#374151" opacity="0.3"/>
      <rect x="108" y="130" width="8" height="8" rx="2" fill="#374151" opacity="0.3"/>
      
      {/* Facebook Mockup - Smaller, behind */}
      <rect x="155" y="35" width="70" height="130" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" opacity="0.7"/>
      <rect x="160" y="43" width="60" height="114" rx="3" fill="#FAFAFA"/>
      
      {/* Facebook Header */}
      <rect x="160" y="43" width="60" height="15" rx="3" fill="#FFFFFF"/>
      <circle cx="170" cy="50" r="4" fill="#E5E7EB"/>
      <rect x="177" y="48" width="25" height="4" rx="1" fill="#D1D5DB"/>
      
      {/* Facebook Post */}
      <rect x="165" y="65" width="50" height="35" rx="3" fill="#E5E7EB"/>
      <rect x="182" y="77" width="16" height="10" rx="2" fill="#D1D5DB" opacity="0.5"/>
      
      {/* Ad Badge FB */}
      <rect x="167" y="67" width="18" height="8" rx="2" fill="#1877F2" opacity="0.9"/>
      <text x="170" y="73" fontFamily="system-ui" fontSize="5" fill="#FFFFFF">Sponsor</text>
      
      {/* Campaign Stats */}
      <rect x="30" y="45" width="30" height="50" rx="6" fill="#1877F2" opacity="0.1"/>
      <circle cx="45" cy="60" r="8" fill="#1877F2" opacity="0.2"/>
      <text x="42" y="63" fontFamily="system-ui" fontSize="8" fontWeight="700" fill="#1877F2">f</text>
      <rect x="37" y="78" width="16" height="4" rx="1" fill="#1877F2" opacity="0.4"/>
      <rect x="35" y="86" width="20" height="5" rx="1" fill="#1877F2" opacity="0.6"/>
      
      <rect x="30" y="105" width="30" height="50" rx="6" fill="#E4405F" opacity="0.1"/>
      <circle cx="45" cy="120" r="8" fill="#E4405F" opacity="0.2"/>
      <text x="41" y="124" fontFamily="system-ui" fontSize="8" fontWeight="700" fill="#E4405F">Ig</text>
      <rect x="37" y="138" width="16" height="4" rx="1" fill="#E4405F" opacity="0.4"/>
      <rect x="35" y="146" width="20" height="5" rx="1" fill="#E4405F" opacity="0.6"/>
    </svg>
  );
}
