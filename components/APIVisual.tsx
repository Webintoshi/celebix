export default function APIVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Server/Database Box */}
      <rect x="30" y="60" width="80" height="70" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="40" y="45" width="60" height="15" rx="4" fill="#6366F1" opacity="0.1"/>
      <text x="55" y="55" fontFamily="system-ui" fontSize="9" fill="#6366F1">SERVER</text>
      
      {/* Database Cylinders */}
      <ellipse cx="70" cy="80" rx="25" ry="8" fill="#6366F1" opacity="0.2"/>
      <rect x="45" y="80" width="50" height="20" rx="2" fill="#6366F1" opacity="0.3"/>
      <ellipse cx="70" cy="100" rx="25" ry="8" fill="#6366F1" opacity="0.4"/>
      
      <rect x="45" y="85" width="50" height="3" rx="1" fill="#6366F1" opacity="0.2"/>
      <rect x="45" y="92" width="50" height="3" rx="1" fill="#6366F1" opacity="0.2"/>
      
      {/* API Methods */}
      <rect x="130" y="35" width="50" height="22" rx="6" fill="#10B981" opacity="0.15"/>
      <text x="138" y="50" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#10B981">GET</text>
      
      <rect x="130" y="65" width="55" height="22" rx="6" fill="#F97316" opacity="0.15"/>
      <text x="138" y="80" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#F97316">POST</text>
      
      <rect x="130" y="95" width="60" height="22" rx="6" fill="#6366F1" opacity="0.15"/>
      <text x="138" y="110" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#6366F1">PATCH</text>
      
      <rect x="130" y="125" width="55" height="22" rx="6" fill="#EC4899" opacity="0.15"/>
      <text x="138" y="140" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#EC4899">DELETE</text>
      
      {/* Client Box */}
      <rect x="200" y="55" width="60" height="70" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="210" y="40" width="40" height="15" rx="4" fill="#10B981" opacity="0.1"/>
      <text x="217" y="50" fontFamily="system-ui" fontSize="8" fill="#10B981">CLIENT</text>
      
      {/* Screen */}
      <rect x="210" y="65" width="40" height="50" rx="4" fill="#F3F4F6"/>
      <rect x="215" y="72" width="30" height="8" rx="2" fill="#10B981" opacity="0.3"/>
      <rect x="215" y="85" width="30" height="4" rx="1" fill="#E5E7EB"/>
      <rect x="215" y="93" width="20" height="4" rx="1" fill="#E5E7EB"/>
      <rect x="215" y="101" width="25" height="4" rx="1" fill="#E5E7EB"/>
      
      {/* Connection Lines */}
      <path d="M110 85 L125 50" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M110 90 L125 75" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M110 95 L125 105" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M110 100 L125 135" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      
      <path d="M185 50 L200 75" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M185 80 L200 90" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M185 110 L200 105" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3"/>
    </svg>
  );
}
