export default function MarketingVisual({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 500 220" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Light Background */}
      <rect width="500" height="220" rx="16" fill="#F8F8F8"/>
      
      {/* Analytics Card */}
      <rect x="20" y="20" width="200" height="180" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <text x="35" y="45" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#374151">Analytics</text>
      
      {/* Bar Chart */}
      <rect x="35" y="65" width="25" height="100" rx="4" fill="#F3F4F6"/>
      <rect x="35" y="120" width="25" height="45" rx="4" fill="#EC4899" opacity="0.7"/>
      
      <rect x="70" y="65" width="25" height="100" rx="4" fill="#F3F4F6"/>
      <rect x="70" y="90" width="25" height="75" rx="4" fill="#8B5CF6" opacity="0.7"/>
      
      <rect x="105" y="65" width="25" height="100" rx="4" fill="#F3F4F6"/>
      <rect x="105" y="70" width="25" height="95" rx="4" fill="#6366F1" opacity="0.7"/>
      
      <rect x="140" y="65" width="25" height="100" rx="4" fill="#F3F4F6"/>
      <rect x="140" y="100" width="25" height="65" rx="4" fill="#10B981" opacity="0.7"/>
      
      {/* Stats Row */}
      <rect x="35" y="175" width="170" height="16" rx="4" fill="#F3F4F6"/>
      <rect x="35" y="178" width="60" height="10" rx="2" fill="#10B981" opacity="0.3"/>
      <text x="105" y="186" fontFamily="system-ui, sans-serif" fontSize="9" fill="#10B981">+24% this week</text>
      
      {/* Line Chart Card */}
      <rect x="235" y="20" width="245" height="100" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <text x="250" y="45" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#374151">Traffic Sources</text>
      
      {/* Line Chart */}
      <line x1="250" y1="95" x2="460" y2="95" stroke="#E5E7EB" strokeWidth="1"/>
      <line x1="250" y1="70" x2="460" y2="70" stroke="#E5E7EB" strokeWidth="1"/>
      
      <path 
        d="M250 85 Q280 75, 310 80 T370 60 T430 70 T460 55" 
        stroke="#6366F1" 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M250 95 L310 80 T370 60 T430 70 T460 55 L460 95 Z" 
        fill="url(#marketingGradient)"
      />
      
      {/* Pie Chart - Small */}
      <g transform="translate(420, 70)">
        <circle cx="0" cy="0" r="20" fill="none" stroke="#6366F1" strokeWidth="8" strokeDasharray="50 125" strokeLinecap="round"/>
        <circle cx="0" cy="0" r="20" fill="none" stroke="#EC4899" strokeWidth="8" strokeDasharray="40 125" strokeDashoffset="-50" strokeLinecap="round"/>
        <circle cx="0" cy="0" r="20" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="25 125" strokeDashoffset="-90" strokeLinecap="round"/>
        <circle cx="0" cy="0" r="12" fill="#FFFFFF"/>
      </g>
      
      {/* Campaign Card */}
      <rect x="235" y="130" width="245" height="70" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <text x="250" y="155" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#374151">Active Campaigns</text>
      
      {/* Campaign Badges */}
      <rect x="250" y="165" width="70" height="22" rx="6" fill="#6366F1" opacity="0.1"/>
      <text x="260" y="180" fontFamily="system-ui" fontSize="10" fontWeight="500" fill="#6366F1">Google</text>
      
      <rect x="330" y="165" width="65" height="22" rx="6" fill="#EC4899" opacity="0.1"/>
      <text x="340" y="180" fontFamily="system-ui" fontSize="10" fontWeight="500" fill="#EC4899">Meta</text>
      
      <rect x="405" y="165" width="60" height="22" rx="6" fill="#10B981" opacity="0.1"/>
      <text x="415" y="180" fontFamily="system-ui" fontSize="10" fontWeight="500" fill="#10B981">SEO</text>
      
      {/* Floating Elements */}
      {/* Trend Arrow */}
      <g transform="translate(460, 180)">
        <circle cx="15" cy="15" r="15" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <path d="M8 18 L12 12 L16 16 L22 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
      
      {/* Target Icon */}
      <g transform="translate(20, 160)">
        <circle cx="15" cy="15" r="15" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <circle cx="15" cy="15" r="6" stroke="#EC4899" strokeWidth="2" fill="none"/>
        <circle cx="15" cy="15" r="2" fill="#EC4899"/>
      </g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="marketingGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
