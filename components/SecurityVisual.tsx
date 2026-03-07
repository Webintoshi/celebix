export default function SecurityVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Central Shield */}
      <g transform="translate(140, 90)">
        <circle cx="0" cy="0" r="55" fill="#10B981" opacity="0.1"/>
        <circle cx="0" cy="0" r="45" fill="#10B981" opacity="0.15"/>
        <circle cx="0" cy="0" r="35" fill="#10B981" opacity="0.2"/>
        
        {/* Shield Shape */}
        <path d="M0 -25 L20 -15 L20 5 Q20 20 0 30 Q-20 20 -20 5 L-20 -15 Z" fill="#10B981" opacity="0.3" stroke="#10B981" strokeWidth="2"/>
        <path d="M-8 -2 L-3 3 L8 -8" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
      
      {/* SSL Lock */}
      <g transform="translate(60, 50)">
        <rect x="0" y="15" width="30" height="25" rx="4" fill="#FFFFFF" stroke="#6366F1" strokeWidth="1.5"/>
        <rect x="5" y="0" width="20" height="15" rx="8" fill="none" stroke="#6366F1" strokeWidth="2"/>
        <circle cx="15" cy="27" r="3" fill="#6366F1" opacity="0.5"/>
      </g>
      
      {/* Firewall Wall */}
      <g transform="translate(200, 40)">
        <rect x="0" y="0" width="40" height="40" rx="4" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" opacity="0.5"/>
        <line x1="0" y1="13" x2="40" y2="13" stroke="#F97316" strokeWidth="1" opacity="0.3"/>
        <line x1="0" y1="26" x2="40" y2="26" stroke="#F97316" strokeWidth="1" opacity="0.3"/>
        <line x1="13" y1="0" x2="13" y2="40" stroke="#F97316" strokeWidth="1" opacity="0.3"/>
        <line x1="26" y1="0" x2="26" y2="40" stroke="#F97316" strokeWidth="1" opacity="0.3"/>
      </g>
      
      {/* Encryption Key */}
      <g transform="translate(50, 120)">
        <circle cx="15" cy="15" r="18" fill="#FFFFFF" stroke="#EC4899" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="15" cy="15" r="6" fill="#EC4899" opacity="0.3"/>
        <rect x="13" y="21" width="4" height="10" rx="1" fill="#EC4899" opacity="0.5"/>
      </g>
      
      {/* Performance Speed */}
      <g transform="translate(210, 110)">
        <rect x="0" y="20" width="35" height="25" rx="4" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.5"/>
        <path d="M5 32 L12 25 L18 30 L25 18 L30 22" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
      
      {/* Connection Lines */}
      <path d="M90 65 L100 75" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M200 60 L180 75" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M75 120 L100 100" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M210 110 L180 105" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      
      {/* Check Badges */}
      <circle cx="230" cy="145" r="12" fill="#10B981" opacity="0.15"/>
      <path d="M225 145 L228 148 L235 141" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      
      <circle cx="55" cy="85" r="10" fill="#6366F1" opacity="0.15"/>
      <path d="M51 85 L54 88 L59 82" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
