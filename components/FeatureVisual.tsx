export default function FeatureVisual({ 
  type,
  className = "" 
}: { 
  type: 'design' | 'unlimited' | 'seo' | 'marketplace' | 'invoice' | 'cargo' | 'payment' | 'mobile';
  className?: string;
}) {
  const renderVisual = () => {
    switch (type) {
      case 'design':
        return (
          <>
            <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
            {/* Design Canvas */}
            <rect x="30" y="30" width="120" height="120" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <rect x="40" y="45" width="50" height="50" rx="4" fill="#6366F1" opacity="0.1"/>
            <rect x="95" y="55" width="45" height="8" rx="2" fill="#D1D5DB"/>
            <rect x="95" y="70" width="35" height="6" rx="1" fill="#E5E7EB"/>
            <rect x="40" y="105" width="70" height="6" rx="1" fill="#E5E7EB"/>
            <rect x="40" y="115" width="50" height="6" rx="1" fill="#E5E7EB"/>
            
            {/* Design Tools */}
            <rect x="170" y="40" width="80" height="100" rx="8" fill="#F3F4F6"/>
            <rect x="180" y="55" width="60" height="8" rx="2" fill="#D1D5DB"/>
            <circle cx="190" cy="85" r="8" fill="#EC4899" opacity="0.3"/>
            <circle cx="210" cy="85" r="8" fill="#6366F1" opacity="0.3"/>
            <circle cx="230" cy="85" r="8" fill="#10B981" opacity="0.3"/>
            <rect x="185" y="110" width="50" height="20" rx="4" fill="#374151" opacity="0.1"/>
          </>
        );
      case 'unlimited':
        return (
          <>
            <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
            {/* Infinity Symbol */}
            <path d="M90 90 Q70 70, 90 50 Q110 30, 130 50 Q150 70, 130 90 Q110 110, 90 90" fill="none" stroke="#6366F1" strokeWidth="4" strokeLinecap="round"/>
            <path d="M150 90 Q170 70, 190 50 Q210 30, 230 50 Q250 70, 230 90 Q210 110, 190 90 Q170 70, 190 50" fill="none" stroke="#6366F1" strokeWidth="4" strokeLinecap="round"/>
            
            {/* Product Icons */}
            <rect x="40" y="130" width="40" height="40" rx="6" fill="#EC4899" opacity="0.1"/>
            <rect x="50" y="140" width="20" height="20" rx="2" fill="#EC4899" opacity="0.3"/>
            
            <rect x="90" y="130" width="40" height="40" rx="6" fill="#10B981" opacity="0.1"/>
            <rect x="100" y="140" width="20" height="20" rx="2" fill="#10B981" opacity="0.3"/>
            
            <rect x="140" y="130" width="40" height="40" rx="6" fill="#F59E0B" opacity="0.1"/>
            <rect x="150" y="140" width="20" height="20" rx="2" fill="#F59E0B" opacity="0.3"/>
            
            <rect x="190" y="130" width="40" height="40" rx="6" fill="#6366F1" opacity="0.1"/>
            <rect x="200" y="140" width="20" height="20" rx="2" fill="#6366F1" opacity="0.3"/>
            
            <text x="200" y="60" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="#6366F1">∞</text>
          </>
        );
      case 'seo':
        return (
          <>
            <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
            {/* Search Bar */}
            <rect x="30" y="35" width="220" height="35" rx="17" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <circle cx="50" cy="52" r="8" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
            <line x1="56" y1="58" x2="62" y2="64" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
            <rect x="70" y="48" width="120" height="8" rx="2" fill="#374151"/>
            
            {/* AI Brain */}
            <circle cx="140" cy="100" r="30" fill="#8B5CF6" opacity="0.1"/>
            <path d="M125 100 Q140 85, 155 100 Q140 115, 125 100" fill="#8B5CF6" opacity="0.3"/>
            <circle cx="130" cy="95" r="3" fill="#8B5CF6"/>
            <circle cx="150" cy="95" r="3" fill="#8B5CF6"/>
            <circle cx="140" cy="105" r="3" fill="#8B5CF6"/>
            
            {/* Ranking Badge */}
            <rect x="200" y="130" width="50" height="35" rx="6" fill="#10B981" opacity="0.15"/>
            <text x="210" y="152" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#10B981">#1</text>
          </>
        );
      case 'marketplace':
        return (
          <>
            <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
            {/* Central Hub */}
            <rect x="110" y="70" width="60" height="60" rx="8" fill="#1F2937"/>
            <rect x="125" y="85" width="30" height="8" rx="2" fill="#FFFFFF"/>
            <circle cx="140" cy="115" r="8" fill="#FFFFFF" opacity="0.2"/>
            
            {/* Connected Stores */}
            <rect x="30" y="35" width="50" height="40" rx="6" fill="#FF6000" opacity="0.15"/>
            <text x="45" y="60" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#FF6000">T</text>
            <line x1="80" y1="55" x2="110" y2="85" stroke="#E5E7EB" strokeWidth="2"/>
            
            <rect x="200" y="35" width="50" height="40" rx="6" fill="#FF9900" opacity="0.15"/>
            <text x="215" y="60" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#FF9900">a</text>
            <line x1="200" y1="55" x2="170" y2="85" stroke="#E5E7EB" strokeWidth="2"/>
            
            <rect x="30" y="125" width="50" height="40" rx="6" fill="#5D8C87" opacity="0.15"/>
            <text x="48" y="150" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#5D8C87">n</text>
            <line x1="80" y1="145" x2="110" y2="115" stroke="#E5E7EB" strokeWidth="2"/>
            
            <rect x="200" y="125" width="50" height="40" rx="6" fill="#00AEEF" opacity="0.15"/>
            <text x="218" y="150" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#00AEEF">ÇS</text>
            <line x1="200" y1="145" x2="170" y2="115" stroke="#E5E7EB" strokeWidth="2"/>
          </>
        );
      case 'invoice':
        return (
          <>
            <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
            {/* Invoice Document */}
            <rect x="40" y="30" width="100" height="120" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <rect x="50" y="45" width="50" height="6" rx="1" fill="#374151"/>
            <rect x="50" y="60" width="80" height="2" rx="1" fill="#E5E7EB"/>
            <rect x="50" y="70" width="70" height="2" rx="1" fill="#E5E7EB"/>
            <rect x="50" y="80" width="60" height="2" rx="1" fill="#E5E7EB"/>
            <rect x="50" y="100" width="40" height="20" rx="2" fill="#10B981" opacity="0.1"/>
            <text x="58" y="113" fontFamily="system-ui" fontSize="8" fill="#10B981">e-Fatura</text>
            
            {/* Logo Integration */}
            <rect x="160" y="50" width="80" height="60" rx="6" fill="#F3F4F6"/>
            <rect x="175" y="65" width="30" height="8" rx="2" fill="#9CA3AF"/>
            <rect x="175" y="78" width="50" height="4" rx="1" fill="#D1D5DB"/>
            <rect x="175" y="86" width="40" height="4" rx="1" fill="#D1D5DB"/>
            
            <path d="M140 90 L160 80" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead)"/>
            
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#10B981"/>
              </marker>
            </defs>
          </>
        );
      case 'cargo':
        return (
          <>
            <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
            {/* Truck */}
            <rect x="60" y="80" width="80" height="50" rx="6" fill="#F59E0B" opacity="0.15"/>
            <rect x="70" y="90" width="40" height="30" rx="4" fill="#F59E0B" opacity="0.3"/>
            <circle cx="80" cy="135" r="8" fill="#374151"/>
            <circle cx="120" cy="135" r="8" fill="#374151"/>
            
            {/* Package */}
            <rect x="160" y="70" width="50" height="50" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <rect x="170" y="80" width="30" height="6" rx="1" fill="#D1D5DB"/>
            <rect x="170" y="92" width="20" height="4" rx="1" fill="#E5E7EB"/>
            <path d="M185 105 L185 115 M175 110 L195 110" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
            
            {/* Integration Arrows */}
            <path d="M140 105 L155 105" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2"/>
            <polygon points="152,100 152,110 160,105" fill="#10B981"/>
            
            {/* Cargo Company Logos */}
            <rect x="40" y="145" width="50" height="25" rx="4" fill="#F3F4F6"/>
            <rect x="50" y="155" width="30" height="6" rx="1" fill="#9CA3AF"/>
            
            <rect x="100" y="145" width="50" height="25" rx="4" fill="#F3F4F6"/>
            <rect x="110" y="155" width="30" height="6" rx="1" fill="#9CA3AF"/>
            
            <rect x="160" y="145" width="50" height="25" rx="4" fill="#F3F4F6"/>
            <rect x="170" y="155" width="30" height="6" rx="1" fill="#9CA3AF"/>
          </>
        );
      case 'payment':
        return (
          <>
            <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
            {/* Credit Card */}
            <rect x="40" y="50" width="120" height="75" rx="8" fill="#1F2937"/>
            <rect x="55" y="65" width="40" height="8" rx="2" fill="#F59E0B" opacity="0.6"/>
            <rect x="55" y="85" width="90" height="4" rx="1" fill="#6B7280"/>
            <rect x="55" y="95" width="70" height="4" rx="1" fill="#6B7280"/>
            <rect x="140" y="105" width="12" height="12" rx="6" fill="#EF4444" opacity="0.5"/>
            <circle cx="152" cy="111" r="6" fill="#F59E0B" opacity="0.5"/>
            
            {/* Payment Providers */}
            <rect x="180" y="40" width="60" height="35" rx="6" fill="#F3F4F6"/>
            <text x="195" y="62" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#374151">iyzico</text>
            
            <rect x="180" y="85" width="60" height="35" rx="6" fill="#F3F4F6"/>
            <text x="195" y="107" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#374151">PayTR</text>
            
            <rect x="180" y="130" width="60" height="35" rx="6" fill="#F3F4F6"/>
            <text x="195" y="152" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#374151">Stripe</text>
          </>
        );
      case 'mobile':
        return (
          <>
            <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
            {/* Phone */}
            <rect x="90" y="25" width="60" height="110" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
            <rect x="95" y="33" width="50" height="94" rx="4" fill="#FAFAFA"/>
            
            {/* App Interface */}
            <rect x="100" y="45" width="40" height="30" rx="3" fill="#6366F1" opacity="0.2"/>
            <rect x="105" y="55" width="20" height="10" rx="2" fill="#6366F1" opacity="0.4"/>
            
            <rect x="100" y="82" width="40" height="8" rx="2" fill="#E5E7EB"/>
            <rect x="100" y="94" width="30" height="6" rx="1" fill="#D1D5DB"/>
            
            <rect x="100" y="108" width="40" height="15" rx="4" fill="#10B981" opacity="0.2"/>
            
            {/* App Store Badges */}
            <rect x="40" y="100" width="40" height="25" rx="4" fill="#F3F4F6"/>
            <text x="52" y="117" fontFamily="system-ui" fontSize="8" fill="#374151">iOS</text>
            
            <rect x="200" y="100" width="40" height="25" rx="4" fill="#F3F4F6"/>
            <text x="208" y="117" fontFamily="system-ui" fontSize="8" fill="#374151">Android</text>
            
            {/* Notification */}
            <rect x="160" y="50" width="70" height="35" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <rect x="170" y="60" width="50" height="6" rx="1" fill="#374151"/>
            <rect x="170" y="70" width="40" height="4" rx="1" fill="#9CA3AF"/>
            <circle cx="220" cy="62" r="6" fill="#EF4444"/>
            <text x="218" y="65" fontFamily="system-ui" fontSize="8" fill="#FFFFFF">1</text>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      {renderVisual()}
    </svg>
  );
}
