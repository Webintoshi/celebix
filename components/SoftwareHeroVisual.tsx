export default function SoftwareHeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 600 400" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Light Background */}
      <rect width="600" height="400" rx="20" fill="#F8F8F8"/>
      
      {/* Main Code Editor Window */}
      <rect x="40" y="40" width="350" height="280" rx="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="40" y="40" width="350" height="36" rx="14" fill="#FAFAFA"/>
      <rect x="40" y="68" width="350" height="1" fill="#E5E7EB"/>
      
      {/* Window Controls */}
      <circle cx="60" cy="58" r="6" fill="#EC4899" opacity="0.7"/>
      <circle cx="78" cy="58" r="6" fill="#F97316" opacity="0.7"/>
      <circle cx="96" cy="58" r="6" fill="#10B981" opacity="0.7"/>
      
      {/* Code Lines */}
      <rect x="60" y="90" width="45" height="8" rx="2" fill="#6366F1" opacity="0.8"/>
      <rect x="115" y="90" width="80" height="8" rx="2" fill="#8B5CF6" opacity="0.5"/>
      
      <rect x="60" y="110" width="35" height="8" rx="2" fill="#EC4899" opacity="0.7"/>
      <rect x="105" y="110" width="100" height="8" rx="2" fill="#6366F1" opacity="0.4"/>
      
      <rect x="60" y="130" width="50" height="8" rx="2" fill="#F97316" opacity="0.7"/>
      <rect x="120" y="130" width="90" height="8" rx="2" fill="#10B981" opacity="0.5"/>
      
      <rect x="80" y="150" width="180" height="6" rx="2" fill="#E5E7EB"/>
      <rect x="80" y="165" width="140" height="6" rx="2" fill="#E5E7EB"/>
      
      <rect x="60" y="185" width="40" height="8" rx="2" fill="#8B5CF6" opacity="0.8"/>
      <rect x="110" y="185" width="70" height="8" rx="2" fill="#EC4899" opacity="0.6"/>
      
      <rect x="60" y="205" width="200" height="6" rx="2" fill="#E5E7EB"/>
      <rect x="60" y="220" width="150" height="6" rx="2" fill="#E5E7EB"/>
      <rect x="60" y="235" width="180" height="6" rx="2" fill="#E5E7EB"/>
      
      <rect x="60" y="255" width="35" height="8" rx="2" fill="#10B981" opacity="0.8"/>
      <rect x="105" y="255" width="60" height="8" rx="2" fill="#6366F1" opacity="0.6"/>
      
      <rect x="60" y="275" width="120" height="6" rx="2" fill="#E5E7EB"/>
      <rect x="60" y="290" width="80" height="6" rx="2" fill="#E5E7EB"/>
      
      {/* Line Numbers */}
      <text x="48" y="96" fontFamily="monospace" fontSize="8" fill="#9CA3AF">1</text>
      <text x="48" y="116" fontFamily="monospace" fontSize="8" fill="#9CA3AF">2</text>
      <text x="48" y="136" fontFamily="monospace" fontSize="8" fill="#9CA3AF">3</text>
      <text x="48" y="156" fontFamily="monospace" fontSize="8" fill="#9CA3AF">4</text>
      <text x="48" y="171" fontFamily="monospace" fontSize="8" fill="#9CA3AF">5</text>
      <text x="48" y="191" fontFamily="monospace" fontSize="8" fill="#9CA3AF">6</text>
      <text x="48" y="211" fontFamily="monospace" fontSize="8" fill="#9CA3AF">7</text>
      <text x="48" y="226" fontFamily="monospace" fontSize="8" fill="#9CA3AF">8</text>
      <text x="48" y="241" fontFamily="monospace" fontSize="8" fill="#9CA3AF">9</text>
      <text x="44" y="261" fontFamily="monospace" fontSize="8" fill="#9CA3AF">10</text>
      <text x="44" y="281" fontFamily="monospace" fontSize="8" fill="#9CA3AF">11</text>
      <text x="44" y="296" fontFamily="monospace" fontSize="8" fill="#9CA3AF">12</text>
      
      {/* Terminal Window - Top Right */}
      <rect x="410" y="40" width="150" height="120" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="410" y="40" width="150" height="28" rx="12" fill="#FAFAFA"/>
      <rect x="410" y="64" width="150" height="1" fill="#E5E7EB"/>
      <text x="425" y="58" fontFamily="system-ui" fontSize="10" fill="#6B7280">Terminal</text>
      
      {/* Terminal Content */}
      <text x="425" y="88" fontFamily="monospace" fontSize="10" fill="#10B981">$</text>
      <text x="435" y="88" fontFamily="monospace" fontSize="10" fill="#374151">npm run build</text>
      
      <text x="435" y="108" fontFamily="monospace" fontSize="9" fill="#9CA3AF">✓ Building...</text>
      
      <text x="425" y="128" fontFamily="monospace" fontSize="10" fill="#10B981">$</text>
      <text x="435" y="128" fontFamily="monospace" fontSize="10" fill="#374151">deploy --prod</text>
      
      <rect x="425" y="138" width="110" height="18" rx="4" fill="#10B981" opacity="0.1"/>
      <text x="432" y="150" fontFamily="monospace" fontSize="8" fill="#10B981">✓ Deployed successfully</text>
      
      {/* API Card - Middle Right */}
      <rect x="410" y="175" width="150" height="100" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="410" y="175" width="150" height="28" rx="12" fill="#FAFAFA"/>
      <rect x="410" y="199" width="150" height="1" fill="#E5E7EB"/>
      <text x="425" y="193" fontFamily="system-ui" fontSize="10" fill="#6B7280">API Endpoints</text>
      
      {/* API Methods */}
      <rect x="425" y="212" width="32" height="16" rx="4" fill="#10B981" opacity="0.15"/>
      <text x="430" y="224" fontFamily="monospace" fontSize="8" fontWeight="600" fill="#10B981">GET</text>
      <text x="463" y="224" fontFamily="monospace" fontSize="8" fill="#6B7280">/api/users</text>
      
      <rect x="425" y="235" width="36" height="16" rx="4" fill="#F97316" opacity="0.15"/>
      <text x="430" y="247" fontFamily="monospace" fontSize="8" fontWeight="600" fill="#F97316">POST</text>
      <text x="470" y="247" fontFamily="monospace" fontSize="8" fill="#6B7280">/api/orders</text>
      
      <rect x="425" y="255" width="38" height="16" rx="4" fill="#6366F1" opacity="0.15"/>
      <text x="430" y="267" fontFamily="monospace" fontSize="8" fontWeight="600" fill="#6366F1">PATCH</text>
      <text x="473" y="267" fontFamily="monospace" fontSize="8" fill="#6B7280">/api/data</text>
      
      {/* Server Status Card - Bottom Right */}
      <rect x="410" y="290" width="150" height="70" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="410" y="290" width="150" height="28" rx="12" fill="#FAFAFA"/>
      <rect x="410" y="314" width="150" height="1" fill="#E5E7EB"/>
      <text x="425" y="308" fontFamily="system-ui" fontSize="10" fill="#6B7280">Server Status</text>
      
      <circle cx="435" cy="340" r="6" fill="#10B981" opacity="0.2"/>
      <circle cx="435" cy="340" r="3" fill="#10B981"/>
      <text x="450" y="344" fontFamily="system-ui" fontSize="10" fill="#374151">Online</text>
      
      <rect x="425" y="355" width="120" height="4" rx="2" fill="#E5E7EB"/>
      <rect x="425" y="355" width="115" height="4" rx="2" fill="#10B981" opacity="0.5"/>
      
      {/* Floating Elements */}
      {/* Database Icon */}
      <g transform="translate(520, 340)">
        <circle cx="25" cy="25" r="20" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <ellipse cx="25" cy="20" rx="8" ry="4" fill="#6366F1" opacity="0.3"/>
        <rect x="17" y="20" width="16" height="8" rx="1" fill="#6366F1" opacity="0.5"/>
        <ellipse cx="25" cy="28" rx="8" ry="4" fill="#6366F1" opacity="0.7"/>
      </g>
      
      {/* Mobile Icon */}
      <g transform="translate(40, 340)">
        <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
        <rect x="13" y="10" width="14" height="20" rx="3" fill="#EC4899" opacity="0.2"/>
        <rect x="15" y="14" width="10" height="12" rx="1" fill="#EC4899" opacity="0.4"/>
        <circle cx="20" cy="30" r="1.5" fill="#EC4899" opacity="0.6"/>
      </g>
      
      {/* Connection Lines - Soft */}
      <path d="M390 100 Q400 120, 410 130" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
      <path d="M390 220 Q400 235, 410 240" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
      
      {/* Soft Aurora Glow */}
      <circle cx="300" cy="200" r="100" fill="url(#softGlow)" opacity="0.2"/>
      
      {/* Gradients */}
      <defs>
        <radialGradient id="softGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#F8F8F8" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
