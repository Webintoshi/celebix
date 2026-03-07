export default function ContentProductionVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Video Camera / Production Setup */}
      <rect x="30" y="40" width="100" height="70" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Camera Lens */}
      <circle cx="80" cy="75" r="25" fill="#1A1A1A"/>
      <circle cx="80" cy="75" r="18" fill="#2A2A2A"/>
      <circle cx="80" cy="75" r="12" fill="#374151"/>
      <circle cx="80" cy="75" r="6" fill="#6366F1" opacity="0.5"/>
      
      {/* Recording Indicator */}
      <circle cx="45" cy="55" r="5" fill="#EF4444"/>
      <text x="53" y="58" fontFamily="system-ui" fontSize="7" fill="#EF4444">REC</text>
      
      {/* Phone with Content Creation */}
      <rect x="150" y="30" width="50" height="90" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="155" y="38" width="40" height="74" rx="4" fill="#FAFAFA"/>
      
      {/* Reels Interface */}
      <rect x="158" y="45" width="34" height="60" rx="3" fill="#E4405F" opacity="0.1"/>
      <rect x="162" y="52" width="26" height="30" rx="2" fill="#E4405F" opacity="0.2"/>
      <circle cx="175" cy="67" r="8" fill="#FFFFFF" opacity="0.8"/>
      <polygon points="172,63 172,71 180,67" fill="#E4405F"/>
      
      {/* TikTok Style Side Icons */}
      <circle cx="210" cy="50" r="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <path d="M205 45 Q210 50, 215 45" stroke="#25F4EE" strokeWidth="2" fill="none"/>
      <circle cx="215" cy="42" r="3" fill="#FE2C55"/>
      
      <circle cx="210" cy="80" r="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="204" y="76" width="12" height="8" rx="2" fill="none" stroke="#E4405F" strokeWidth="1.5"/>
      
      <circle cx="210" cy="110" r="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <path d="M206 110 L214 110 M210 106 L210 114" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Content Cards Preview */}
      <rect x="30" y="125" width="60" height="40" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="35" y="130" width="50" height="25" rx="3" fill="#F3F4F6"/>
      <rect x="40" y="135" width="30" height="4" rx="1" fill="#D1D5DB"/>
      <rect x="40" y="142" width="20" height="3" rx="1" fill="#E5E7EB"/>
      <circle cx="75" cy="158" r="6" fill="#E4405F" opacity="0.2"/>
      
      <rect x="100" y="125" width="60" height="40" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="105" y="130" width="50" height="25" rx="3" fill="#F3F4F6"/>
      <rect x="110" y="138" width="25" height="10" rx="2" fill="#6366F1" opacity="0.2"/>
      <circle cx="145" cy="158" r="6" fill="#6366F1" opacity="0.2"/>
      
      {/* Engagement Stats */}
      <rect x="180" y="135" width="70" height="35" rx="8" fill="#10B981" opacity="0.1"/>
      <text x="195" y="155" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#10B981">Viral</text>
      <rect x="195" y="160" width="40" height="4" rx="1" fill="#10B981" opacity="0.3"/>
    </svg>
  );
}
