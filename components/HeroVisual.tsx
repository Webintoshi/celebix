export default function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 320" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft Background Glow */}
      <circle cx="200" cy="160" r="120" fill="url(#softGlow)" opacity="0.4"/>
      
      {/* Main Device - Laptop - Light Theme */}
      <rect x="80" y="100" width="240" height="150" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="90" y="110" width="220" height="125" rx="6" fill="#FAFAFA"/>
      
      {/* Screen Content - E-commerce */}
      {/* Header */}
      <rect x="100" y="125" width="200" height="18" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.5"/>
      <circle cx="115" cy="134" r="4" fill="#6366F1" opacity="0.8"/>
      <rect x="130" y="131" width="30" height="5" rx="2" fill="#E5E7EB"/>
      
      {/* Product Cards */}
      <rect x="105" y="155" width="55" height="50" rx="6" fill="#6366F1" opacity="0.1"/>
      <rect x="115" y="165" width="35" height="25" rx="4" fill="#6366F1" opacity="0.3"/>
      <rect x="105" y="210" width="40" height="5" rx="2" fill="#E5E7EB"/>
      <rect x="105" y="218" width="25" height="4" rx="1" fill="#D1D5DB"/>
      
      <rect x="172" y="155" width="55" height="50" rx="6" fill="#EC4899" opacity="0.1"/>
      <rect x="182" y="165" width="35" height="25" rx="4" fill="#EC4899" opacity="0.3"/>
      <rect x="172" y="210" width="40" height="5" rx="2" fill="#E5E7EB"/>
      <rect x="172" y="218" width="25" height="4" rx="1" fill="#D1D5DB"/>
      
      <rect x="239" y="155" width="55" height="50" rx="6" fill="#10B981" opacity="0.1"/>
      <rect x="249" y="165" width="35" height="25" rx="4" fill="#10B981" opacity="0.3"/>
      <rect x="239" y="210" width="40" height="5" rx="2" fill="#E5E7EB"/>
      <rect x="239" y="218" width="25" height="4" rx="1" fill="#D1D5DB"/>
      
      {/* Laptop Base */}
      <path d="M60 250 L340 250 L320 265 L80 265 Z" fill="#F3F4F6"/>
      <rect x="185" y="255" width="30" height="3" rx="1.5" fill="#D1D5DB"/>
      
      {/* Floating Icons - Aurora Colors with White Background */}
      
      {/* Code Icon */}
      <g transform="translate(50, 50)">
        <circle cx="25" cy="25" r="24" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <rect x="18" y="20" width="14" height="10" rx="2" fill="#6366F1" opacity="0.2"/>
        <path d="M20 25 L23 28 L26 22" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      
      {/* Shopping Cart */}
      <g transform="translate(300, 40)">
        <circle cx="25" cy="25" r="24" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <rect x="18" y="20" width="14" height="10" rx="2" fill="#EC4899" opacity="0.2"/>
        <circle cx="21" cy="32" r="2" fill="#EC4899"/>
        <circle cx="29" cy="32" r="2" fill="#EC4899"/>
      </g>
      
      {/* Chart */}
      <g transform="translate(320, 140)">
        <circle cx="25" cy="25" r="24" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <rect x="18" y="28" width="4" height="8" rx="1" fill="#10B981" opacity="0.6"/>
        <rect x="24" y="22" width="4" height="14" rx="1" fill="#10B981" opacity="0.6"/>
        <rect x="30" y="26" width="4" height="10" rx="1" fill="#10B981" opacity="0.6"/>
      </g>
      
      {/* Mobile */}
      <g transform="translate(290, 220)">
        <rect x="0" y="0" width="45" height="75" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <rect x="4" y="8" width="37" height="59" rx="4" fill="#FAFAFA"/>
        <rect x="10" y="18" width="25" height="6" rx="2" fill="#6366F1" opacity="0.3"/>
        <rect x="10" y="30" width="25" height="4" rx="1" fill="#E5E7EB"/>
        <rect x="10" y="38" width="20" height="3" rx="1" fill="#D1D5DB"/>
        <rect x="10" y="48" width="25" height="15" rx="3" fill="#10B981" opacity="0.2"/>
      </g>
      
      {/* SEO/Search */}
      <g transform="translate(40, 200)">
        <circle cx="25" cy="25" r="24" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <circle cx="22" cy="22" r="8" stroke="#F97316" strokeWidth="2" fill="none"/>
        <line x1="28" y1="28" x2="34" y2="34" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
      </g>
      
      {/* Connection Lines - Soft Gray */}
      <path d="M75 75 Q100 90, 120 110" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>
      <path d="M300 65 Q280 90, 260 110" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>
      <path d="M320 165 Q300 180, 280 190" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>
      
      {/* Gradients */}
      <defs>
        <radialGradient id="softGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.15"/>
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#F8F8F8" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
