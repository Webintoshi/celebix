export default function GoogleAdsVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Google Search Results Page */}
      <rect x="20" y="15" width="240" height="150" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Browser Bar */}
      <rect x="20" y="15" width="240" height="24" rx="8" fill="#FAFAFA"/>
      <rect x="20" y="35" width="240" height="1" fill="#E5E7EB"/>
      
      {/* Address Bar */}
      <rect x="60" y="21" width="160" height="12" rx="6" fill="#F3F4F6"/>
      
      {/* Google Logo Area */}
      <rect x="35" y="48" width="60" height="14" rx="2" fill="#F3F4F6"/>
      
      {/* Search Box */}
      <rect x="35" y="70" width="210" height="22" rx="11" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="45" y="78" width="100" height="6" rx="1" fill="#D1D5DB"/>
      
      {/* Search Button */}
      <rect x="220" y="73" width="18" height="16" rx="3" fill="#4285F4" opacity="0.1"/>
      
      {/* Ad Result 1 */}
      <rect x="35" y="105" width="210" height="50" rx="6" fill="#FEF3E2"/>
      <rect x="40" y="108" width="25" height="10" rx="2" fill="#FFFFFF" stroke="#F97316" strokeWidth="1"/>
      <text x="44" y="115" fontFamily="system-ui" fontSize="6" fill="#F97316">Reklam</text>
      <rect x="70" y="110" width="80" height="5" rx="1" fill="#9CA3AF"/>
      <rect x="40" y="125" width="150" height="6" rx="1" fill="#1F2937"/>
      <rect x="40" y="135" width="180" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="40" y="142" width="120" height="4" rx="1" fill="#9CA3AF"/>
      
      {/* Ad Result 2 */}
      <rect x="35" y="160" width="210" height="45" rx="6" fill="#FEF3E2" opacity="0.7"/>
      <rect x="40" y="163" width="25" height="10" rx="2" fill="#FFFFFF" stroke="#F97316" strokeWidth="1"/>
      <text x="44" y="170" fontFamily="system-ui" fontSize="6" fill="#F97316">Reklam</text>
      <rect x="70" y="165" width="70" height="5" rx="1" fill="#9CA3AF"/>
      
      {/* Google "G" Icon */}
      <g transform="translate(245, 48)">
        <circle cx="8" cy="8" r="10" fill="#4285F4" opacity="0.1"/>
        <text x="5" y="12" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#4285F4">G</text>
      </g>
      
      {/* Performance Badge */}
      <rect x="200" y="130" width="50" height="20" rx="10" fill="#10B981" opacity="0.15"/>
      <text x="215" y="143" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#10B981">+240%</text>
    </svg>
  );
}
