export default function CommunityVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Chat/Messaging Interface */}
      <rect x="30" y="20" width="160" height="140" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Chat Header */}
      <rect x="30" y="20" width="160" height="35" rx="10" fill="#FAFAFA"/>
      <rect x="30" y="45" width="160" height="1" fill="#E5E7EB"/>
      <circle cx="55" cy="37" r="10" fill="#E5E7EB"/>
      <rect x="70" y="33" width="60" height="5" rx="1" fill="#374151"/>
      <rect x="70" y="41" width="40" height="3" rx="1" fill="#9CA3AF"/>
      <circle cx="170" cy="37" r="4" fill="#10B981"/>
      
      {/* Chat Messages */}
      <rect x="40" y="55" width="80" height="25" rx="8" fill="#F3F4F6"/>
      <rect x="50" y="63" width="60" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="50" y="70" width="40" height="3" rx="1" fill="#D1D5DB"/>
      
      <rect x="100" y="85" width="80" height="25" rx="8" fill="#6366F1" opacity="0.15"/>
      <rect x="110" y="93" width="60" height="4" rx="1" fill="#6366F1" opacity="0.5"/>
      
      <rect x="40" y="115" width="70" height="20" rx="8" fill="#F3F4F6"/>
      <rect x="50" y="122" width="50" height="4" rx="1" fill="#9CA3AF"/>
      
      <rect x="120" y="140" width="60" height="15" rx="8" fill="#F3F4F6"/>
      <rect x="130" y="146" width="40" height="3" rx="1" fill="#D1D5DB"/>
      
      {/* Response Panel */}
      <rect x="200" y="30" width="50" height="120" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="210" y="45" width="30" height="30" rx="15" fill="#10B981" opacity="0.1"/>
      <rect x="215" y="55" width="20" height="10" rx="2" fill="#10B981" opacity="0.3"/>
      
      <rect x="210" y="85" width="30" height="30" rx="15" fill="#F97316" opacity="0.1"/>
      <rect x="215" y="95" width="20" height="10" rx="2" fill="#F97316" opacity="0.3"/>
      
      <rect x="210" y="125" width="30" height="15" rx="7" fill="#E5E7EB"/>
      
      {/* Community Stats */}
      <rect x="30" y="170" width="70" height="25" rx="6" fill="#EC4899" opacity="0.1"/>
      <text x="40" y="182" fontFamily="system-ui" fontSize="8" fill="#EC4899">Yorum</text>
      <text x="40" y="190" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#EC4899">+89%</text>
      
      <rect x="110" y="170" width="70" height="25" rx="6" fill="#6366F1" opacity="0.1"/>
      <text x="120" y="182" fontFamily="system-ui" fontSize="8" fill="#6366F1">DM</text>
      <text x="120" y="190" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#6366F1">+124%</text>
      
      <rect x="190" y="170" width="60" height="25" rx="6" fill="#10B981" opacity="0.1"/>
      <text x="200" y="182" fontFamily="system-ui" fontSize="8" fill="#10B981">Tepki</text>
      <text x="200" y="190" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#10B981">+67%</text>
    </svg>
  );
}
