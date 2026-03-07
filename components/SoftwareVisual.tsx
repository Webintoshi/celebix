export default function SoftwareVisual({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 600 220" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Light Background */}
      <rect width="600" height="220" rx="16" fill="#F8F8F8"/>
      
      {/* Code Editor Window */}
      <rect x="20" y="20" width="340" height="180" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="20" y="20" width="340" height="32" rx="12" fill="#FAFAFA"/>
      <rect x="20" y="48" width="340" height="1" fill="#E5E7EB"/>
      
      {/* Window Controls - Aurora Colors */}
      <circle cx="40" cy="36" r="5" fill="#EC4899" opacity="0.8"/>
      <circle cx="55" cy="36" r="5" fill="#F97316" opacity="0.8"/>
      <circle cx="70" cy="36" r="5" fill="#10B981" opacity="0.8"/>
      
      {/* Code Lines with Aurora Theme */}
      {/* Line 1 - Import */}
      <text x="35" y="75" fontFamily="monospace" fontSize="11" fill="#9CA3AF">1</text>
      <rect x="55" y="68" width="50" height="8" rx="2" fill="#6366F1" opacity="0.9"/>
      <rect x="115" y="68" width="80" height="8" rx="2" fill="#8B5CF6" opacity="0.6"/>
      
      {/* Line 2 - Function */}
      <text x="35" y="95" fontFamily="monospace" fontSize="11" fill="#9CA3AF">2</text>
      <rect x="55" y="88" width="70" height="8" rx="2" fill="#EC4899" opacity="0.8"/>
      <rect x="135" y="88" width="60" height="8" rx="2" fill="#6366F1" opacity="0.5"/>
      
      {/* Line 3 - Variable */}
      <text x="35" y="115" fontFamily="monospace" fontSize="11" fill="#9CA3AF">3</text>
      <rect x="75" y="108" width="40" height="8" rx="2" fill="#F97316" opacity="0.8"/>
      <rect x="125" y="108" width="100" height="8" rx="2" fill="#10B981" opacity="0.5"/>
      
      {/* Line 4 - Return */}
      <text x="35" y="135" fontFamily="monospace" fontSize="11" fill="#9CA3AF">4</text>
      <rect x="75" y="128" width="50" height="8" rx="2" fill="#8B5CF6" opacity="0.8"/>
      <rect x="135" y="128" width="80" height="8" rx="2" fill="#6366F1" opacity="0.4"/>
      
      {/* Line 5 */}
      <text x="35" y="155" fontFamily="monospace" fontSize="11" fill="#9CA3AF">5</text>
      <rect x="55" y="148" width="200" height="8" rx="2" fill="#E5E7EB"/>
      
      {/* Line 6 */}
      <text x="35" y="175" fontFamily="monospace" fontSize="11" fill="#9CA3AF">6</text>
      <rect x="55" y="168" width="120" height="8" rx="2" fill="#E5E7EB"/>
      
      {/* Terminal Window - Glass Effect */}
      <rect x="370" y="20" width="210" height="100" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="370" y="20" width="210" height="28" rx="12" fill="#FAFAFA"/>
      <rect x="370" y="46" width="210" height="1" fill="#E5E7EB"/>
      <text x="385" y="39" fontFamily="system-ui" fontSize="11" fill="#6B7280">Terminal</text>
      
      {/* Terminal Content */}
      <text x="385" y="70" fontFamily="monospace" fontSize="11" fill="#10B981">$</text>
      <text x="398" y="70" fontFamily="monospace" fontSize="11" fill="#374151">npm run build</text>
      
      <text x="398" y="88" fontFamily="monospace" fontSize="10" fill="#9CA3AF">✓ Building optimized bundle...</text>
      
      <text x="385" y="108" fontFamily="monospace" fontSize="11" fill="#10B981">$</text>
      <text x="398" y="108" fontFamily="monospace" fontSize="11" fill="#374151">deploy --prod</text>
      
      {/* Success Badge */}
      <rect x="385" y="118" width="130" height="20" rx="6" fill="#10B981" opacity="0.1"/>
      <text x="395" y="131" fontFamily="monospace" fontSize="9" fill="#10B981">✓ Deployed successfully</text>
      
      {/* API Card - Glass */}
      <rect x="370" y="130" width="210" height="70" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <text x="385" y="152" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#374151">API Endpoints</text>
      
      {/* GET Badge */}
      <rect x="385" y="162" width="36" height="18" rx="4" fill="#10B981" opacity="0.15"/>
      <text x="392" y="174" fontFamily="monospace" fontSize="9" fontWeight="600" fill="#10B981">GET</text>
      <text x="428" y="174" fontFamily="monospace" fontSize="9" fill="#6B7280">/api/users</text>
      
      {/* POST Badge */}
      <rect x="385" y="184" width="40" height="18" rx="4" fill="#F97316" opacity="0.15"/>
      <text x="392" y="196" fontFamily="monospace" fontSize="9" fontWeight="600" fill="#F97316">POST</text>
      <text x="432" y="196" fontFamily="monospace" fontSize="9" fill="#6B7280">/api/orders</text>
      
      {/* Floating Elements - Aurora Colors */}
      {/* Database Icon */}
      <g transform="translate(530, 150)">
        <circle cx="25" cy="25" r="22" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <ellipse cx="25" cy="20" rx="10" ry="5" fill="#6366F1" opacity="0.3"/>
        <rect x="15" y="20" width="20" height="10" rx="2" fill="#6366F1" opacity="0.5"/>
        <ellipse cx="25" cy="30" rx="10" ry="5" fill="#6366F1" opacity="0.7"/>
      </g>
      
      {/* Mobile Icon */}
      <g transform="translate(280, 170)">
        <circle cx="18" cy="18" r="16" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <rect x="12" y="10" width="12" height="16" rx="2" fill="#EC4899" opacity="0.3"/>
        <rect x="14" y="13" width="8" height="10" rx="1" fill="#EC4899" opacity="0.6"/>
      </g>
      
      {/* Connection Lines - Soft */}
      <path d="M360 80 Q365 100, 370 110" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
      <path d="M340 160 Q345 170, 370 170" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
      
      {/* Subtle Aurora Glow */}
      <circle cx="150" cy="110" r="80" fill="url(#auroraGlow)" opacity="0.3"/>
    </svg>
  );
}
