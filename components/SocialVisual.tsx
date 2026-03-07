export default function SocialVisual({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 500 200" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Light Background */}
      <rect width="500" height="200" rx="12" fill="#F8F8F8"/>
      
      {/* Phone Mockup - Left */}
      <rect x="20" y="20" width="90" height="160" rx="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="24" y="35" width="82" height="130" rx="8" fill="#FAFAFA"/>
      
      {/* Story Ring */}
      <circle cx="65" cy="60" r="18" fill="none" stroke="#EC4899" strokeWidth="2.5" strokeDasharray="6 3"/>
      <circle cx="65" cy="60" r="12" fill="#F3E8FF"/>
      
      {/* Content Cards */}
      <rect x="32" y="90" width="66" height="40" rx="6" fill="#EC4899" opacity="0.12"/>
      <rect x="38" y="98" width="24" height="24" rx="4" fill="#EC4899" opacity="0.25"/>
      
      <rect x="32" y="138" width="66" height="20" rx="6" fill="#8B5CF6" opacity="0.12"/>
      
      {/* Stats Card - Center */}
      <rect x="125" y="20" width="160" height="85" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <text x="140" y="42" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#374151">Etkileşim</text>
      
      {/* Heart */}
      <path d="M140 58 C140 54, 143 52, 146 52 C149 52, 150 54, 150 56 C150 54, 151 52, 154 52 C157 52, 160 54, 160 58 C160 63, 155 67, 150 72 C145 67, 140 63, 140 58Z" fill="#EC4899"/>
      <text x="168" y="68" fontFamily="system-ui" fontSize="18" fontWeight="700" fill="#374151">24.5K</text>
      
      {/* Comment */}
      <rect x="230" y="55" width="28" height="20" rx="4" fill="#6366F1" opacity="0.15"/>
      <circle cx="238" cy="65" r="2" fill="#6366F1"/>
      <circle cx="244" cy="65" r="2" fill="#6366F1"/>
      <circle cx="250" cy="65" r="2" fill="#6366F1"/>
      <text x="265" y="68" fontFamily="system-ui" fontSize="18" fontWeight="700" fill="#374151">1,247</text>
      
      {/* Growth */}
      <text x="140" y="88" fontFamily="system-ui" fontSize="10" fill="#10B981">+18% bu ay</text>
      
      {/* Progress Bar */}
      <rect x="140" y="98" width="130" height="6" rx="3" fill="#F3F4F6"/>
      <rect x="140" y="98" width="85" height="6" rx="3" fill="#EC4899" opacity="0.5"/>
      
      {/* Calendar Card - Below Stats */}
      <rect x="125" y="115" width="160" height="70" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <text x="140" y="135" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#374151">İçerik Takvimi</text>
      
      {/* Days */}
      <rect x="140" y="145" width="18" height="18" rx="5" fill="#6366F1" opacity="0.12"/>
      <text x="144" y="157" fontFamily="system-ui" fontSize="8" fill="#6366F1">Pzt</text>
      
      <rect x="165" y="145" width="18" height="18" rx="5" fill="#EC4899" opacity="0.12"/>
      <text x="169" y="157" fontFamily="system-ui" fontSize="8" fill="#EC4899">Sal</text>
      
      <rect x="190" y="145" width="18" height="18" rx="5" fill="#10B981" opacity="0.12"/>
      <text x="194" y="157" fontFamily="system-ui" fontSize="8" fill="#10B981">Çar</text>
      
      <rect x="215" y="145" width="18" height="18" rx="5" fill="#F3F4F6"/>
      <text x="219" y="157" fontFamily="system-ui" fontSize="8" fill="#9CA3AF">Per</text>
      
      <rect x="240" y="145" width="18" height="18" rx="5" fill="#F3F4F6"/>
      <text x="244" y="157" fontFamily="system-ui" fontSize="8" fill="#9CA3AF">Cum</text>
      
      {/* Hashtags */}
      <rect x="140" y="170" width="50" height="12" rx="6" fill="#6366F1" opacity="0.1"/>
      <text x="147" y="179" fontFamily="system-ui" fontSize="8" fill="#6366F1">#trending</text>
      
      <rect x="198" y="170" width="40" height="12" rx="6" fill="#EC4899" opacity="0.1"/>
      <text x="205" y="179" fontFamily="system-ui" fontSize="8" fill="#EC4899">#viral</text>
      
      {/* Reels Card - Right */}
      <rect x="300" y="20" width="170" height="165" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <text x="315" y="40" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#374151">Reels / Shorts</text>
      
      {/* Video 1 */}
      <rect x="315" y="52" width="140" height="50" rx="8" fill="#8B5CF6" opacity="0.12"/>
      <rect x="325" y="60" width="34" height="34" rx="6" fill="#8B5CF6" opacity="0.25"/>
      <circle cx="342" cy="77" r="8" fill="#FFFFFF" opacity="0.9"/>
      <polygon points="340,74 340,80 347,77" fill="#8B5CF6"/>
      <rect x="368" y="65" width="45" height="5" rx="2" fill="#E5E7EB"/>
      <rect x="368" y="75" width="30" height="4" rx="1" fill="#D1D5DB"/>
      <text x="368" y="92" fontFamily="system-ui" fontSize="9" fill="#10B981">12K görüntülenme</text>
      
      {/* Video 2 */}
      <rect x="315" y="110" width="140" height="50" rx="8" fill="#EC4899" opacity="0.12"/>
      <rect x="325" y="118" width="34" height="34" rx="6" fill="#EC4899" opacity="0.25"/>
      <circle cx="342" cy="135" r="8" fill="#FFFFFF" opacity="0.9"/>
      <polygon points="340,132 340,138 347,135" fill="#EC4899"/>
      <rect x="368" y="123" width="45" height="5" rx="2" fill="#E5E7EB"/>
      <text x="368" y="150" fontFamily="system-ui" fontSize="9" fill="#10B981">8.5K görüntülenme</text>
    </svg>
  );
}
