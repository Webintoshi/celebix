export default function SEOVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Search Engine Results Page */}
      <rect x="25" y="15" width="230" height="150" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Search Bar */}
      <rect x="35" y="25" width="210" height="28" rx="14" fill="#F3F4F6"/>
      <circle cx="50" cy="39" r="6" fill="none" stroke="#9CA3AF" strokeWidth="1.5"/>
      <line x1="54" y1="43" x2="58" y2="47" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="65" y="35" width="120" height="6" rx="1" fill="#374151"/>
      
      {/* Results Stats */}
      <rect x="35" y="62" width="80" height="4" rx="1" fill="#9CA3AF"/>
      
      {/* Result 1 - #1 Ranked */}
      <rect x="35" y="75" width="210" height="55" rx="6" fill="#ECFDF5"/>
      <rect x="40" y="80" width="120" height="5" rx="1" fill="#9CA3AF"/>
      <rect x="40" y="90" width="180" height="8" rx="1" fill="#059669"/>
      <rect x="40" y="103" width="160" height="4" rx="1" fill="#6B7280"/>
      <rect x="40" y="110" width="140" height="4" rx="1" fill="#6B7280"/>
      
      {/* #1 Badge */}
      <rect x="215" y="78" width="25" height="14" rx="7" fill="#10B981"/>
      <text x="222" y="88" fontFamily="system-ui" fontSize="8" fontWeight="700" fill="#FFFFFF">#1</text>
      
      {/* Result 2 */}
      <rect x="35" y="138" width="210" height="20" rx="4" fill="#F9FAFB"/>
      <rect x="40" y="143" width="100" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="40" y="150" width="140" height="4" rx="1" fill="#4B5563"/>
      
      {/* SEO Metrics Panel */}
      <rect x="210" y="45" width="55" height="120" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Metric: Keywords */}
      <rect x="218" y="55" width="40" height="25" rx="4" fill="#F3F4F6"/>
      <rect x="225" y="62" width="25" height="4" rx="1" fill="#6366F1" opacity="0.5"/>
      <rect x="230" y="70" width="16" height="6" rx="1" fill="#6366F1" opacity="0.3"/>
      
      {/* Metric: Backlinks */}
      <rect x="218" y="85" width="40" height="25" rx="4" fill="#F3F4F6"/>
      <rect x="225" y="92" width="25" height="4" rx="1" fill="#10B981" opacity="0.5"/>
      <rect x="230" y="100" width="16" height="6" rx="1" fill="#10B981" opacity="0.3"/>
      
      {/* Metric: Traffic */}
      <rect x="218" y="115" width="40" height="25" rx="4" fill="#F3F4F6"/>
      <rect x="225" y="122" width="25" height="4" rx="1" fill="#F97316" opacity="0.5"/>
      <rect x="230" y="130" width="16" height="6" rx="1" fill="#F97316" opacity="0.3"/>
      
      {/* Keyword Tags */}
      <rect x="30" y="165" width="45" height="18" rx="9" fill="#6366F1" opacity="0.1"/>
      <text x="38" y="177" fontFamily="system-ui" fontSize="8" fill="#6366F1">SEO</text>
      
      <rect x="80" y="165" width="55" height="18" rx="9" fill="#6366F1" opacity="0.1"/>
      <text x="88" y="177" fontFamily="system-ui" fontSize="8" fill="#6366F1">Analytics</text>
      
      <rect x="140" y="165" width="50" height="18" rx="9" fill="#6366F1" opacity="0.1"/>
      <text x="148" y="177" fontFamily="system-ui" fontSize="8" fill="#6366F1">Ranking</text>
      
      <rect x="195" y="165" width="60" height="18" rx="9" fill="#6366F1" opacity="0.1"/>
      <text x="203" y="177" fontFamily="system-ui" fontSize="8" fill="#6366F1">Backlinks</text>
    </svg>
  );
}
