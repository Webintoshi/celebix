export default function MobileDevVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Phone 1 - iOS Style */}
      <rect x="50" y="35" width="70" height="120" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="55" y="45" width="60" height="100" rx="4" fill="#FAFAFA"/>
      <rect x="80" y="40" width="10" height="2" rx="1" fill="#E5E7EB"/>
      
      {/* Screen Content 1 */}
      <rect x="60" y="55" width="50" height="25" rx="4" fill="#6366F1" opacity="0.2"/>
      <rect x="70" y="65" width="30" height="6" rx="2" fill="#6366F1" opacity="0.4"/>
      
      <rect x="60" y="88" width="50" height="8" rx="2" fill="#E5E7EB"/>
      <rect x="60" y="100" width="35" height="6" rx="2" fill="#E5E7EB"/>
      <rect x="60" y="112" width="40" height="6" rx="2" fill="#E5E7EB"/>
      
      <rect x="85" y="130" width="15" height="8" rx="4" fill="#EC4899" opacity="0.3"/>
      
      {/* Phone 2 - Android Style */}
      <rect x="160" y="45" width="70" height="110" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="165" y="52" width="60" height="96" rx="2" fill="#FAFAFA"/>
      
      {/* Screen Content 2 */}
      <rect x="170" y="60" width="50" height="30" rx="4" fill="#10B981" opacity="0.15"/>
      <rect x="180" y="72" width="30" height="8" rx="2" fill="#10B981" opacity="0.3"/>
      
      <rect x="170" y="98" width="50" height="6" rx="2" fill="#E5E7EB"/>
      <rect x="170" y="108" width="30" height="4" rx="1" fill="#D1D5DB"/>
      <rect x="170" y="118" width="40" height="4" rx="1" fill="#D1D5DB"/>
      
      <rect x="195" y="128" width="20" height="12" rx="6" fill="#F97316" opacity="0.3"/>
      
      {/* Connection Arrow */}
      <path d="M125 95 L150 95" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 3"/>
      <polygon points="148,92 148,98 154,95" fill="#E5E7EB"/>
    </svg>
  );
}
