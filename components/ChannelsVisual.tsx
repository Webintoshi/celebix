export default function ChannelsVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 350" className={className} fill="none">
      <rect width="500" height="350" rx="16" fill="#1A1A1A"/>
      
      {/* Central Hub - Multi-Channel */}
      <g transform="translate(250, 175)">
        <circle cx="0" cy="0" r="70" fill="#2A2A2A" stroke="#3D3D3D" strokeWidth="2"/>
        <circle cx="0" cy="0" r="50" fill="#333333"/>
        <text x="0" y="-5" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Multi</text>
        <text x="0" y="12" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Channel</text>
      </g>
      
      {/* Google Search */}
      <g transform="translate(80, 60)">
        <rect x="0" y="0" width="90" height="70" rx="10" fill="#2A2A2A" stroke="#4285F4" strokeWidth="1.5" opacity="0.6"/>
        <text x="45" y="25" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#4285F4" textAnchor="middle">Google</text>
        <text x="45" y="40" fontFamily="system-ui" fontSize="9" fill="#9CA3AF" textAnchor="middle">Search &</text>
        <text x="45" y="55" fontFamily="system-ui" fontSize="9" fill="#9CA3AF" textAnchor="middle">Display</text>
      </g>
      
      {/* YouTube */}
      <g transform="translate(330, 60)">
        <rect x="0" y="0" width="90" height="70" rx="10" fill="#2A2A2A" stroke="#FF0000" strokeWidth="1.5" opacity="0.6"/>
        <text x="45" y="25" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#FF0000" textAnchor="middle">YouTube</text>
        <rect x="30" y="38" width="30" height="20" rx="4" fill="#FF0000" opacity="0.3"/>
        <polygon points="40,46 40,50 48,48" fill="#FF0000" opacity="0.6"/>
      </g>
      
      {/* Meta / Facebook */}
      <g transform="translate(50, 210)">
        <rect x="0" y="0" width="90" height="70" rx="10" fill="#2A2A2A" stroke="#1877F2" strokeWidth="1.5" opacity="0.6"/>
        <text x="45" y="25" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#1877F2" textAnchor="middle">Facebook</text>
        <circle cx="35" cy="48" r="8" fill="#1877F2" opacity="0.3"/>
        <text x="32" y="52" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#1877F2">f</text>
        <rect x="50" y="42" width="30" height="4" rx="1" fill="#9CA3AF" opacity="0.5"/>
        <rect x="50" y="50" width="25" height="4" rx="1" fill="#9CA3AF" opacity="0.3"/>
      </g>
      
      {/* Instagram */}
      <g transform="translate(360, 210)">
        <rect x="0" y="0" width="90" height="70" rx="10" fill="#2A2A2A" stroke="#E4405F" strokeWidth="1.5" opacity="0.6"/>
        <text x="45" y="25" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#E4405F" textAnchor="middle">Instagram</text>
        <rect x="32" y="38" width="26" height="26" rx="6" fill="none" stroke="#E4405F" strokeWidth="2" opacity="0.4"/>
        <circle cx="45" cy="51" r="6" fill="none" stroke="#E4405F" strokeWidth="2" opacity="0.4"/>
        <circle cx="53" cy="43" r="2" fill="#E4405F" opacity="0.4"/>
      </g>
      
      {/* LinkedIn */}
      <g transform="translate(150, 270)">
        <rect x="0" y="0" width="80" height="60" rx="10" fill="#2A2A2A" stroke="#0A66C2" strokeWidth="1.5" opacity="0.6"/>
        <text x="40" y="22" fontFamily="system-ui" fontSize="10" fontWeight="500" fill="#0A66C2" textAnchor="middle">LinkedIn</text>
        <rect x="28" y="35" width="8" height="8" rx="1" fill="#0A66C2" opacity="0.4"/>
        <rect x="38" y="35" width="8" height="8" rx="1" fill="#0A66C2" opacity="0.3"/>
        <rect x="48" y="35" width="8" height="8" rx="1" fill="#0A66C2" opacity="0.2"/>
      </g>
      
      {/* Programmatic */}
      <g transform="translate(270, 270)">
        <rect x="0" y="0" width="80" height="60" rx="10" fill="#2A2A2A" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6"/>
        <text x="40" y="20" fontFamily="system-ui" fontSize="9" fontWeight="500" fill="#8B5CF6" textAnchor="middle">Program</text>
        <text x="40" y="32" fontFamily="system-ui" fontSize="9" fontWeight="500" fill="#8B5CF6" textAnchor="middle">-matic</text>
        <rect x="20" y="42" width="40" height="10" rx="5" fill="#8B5CF6" opacity="0.3"/>
      </g>
      
      {/* Connection Lines from Hub to Channels */}
      <line x1="170" y1="95" x2="195" y2="130" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="330" y1="95" x2="305" y2="130" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="140" y1="245" x2="195" y2="220" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="360" y1="245" x2="305" y2="220" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="190" y1="300" x2="220" y2="245" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="310" y1="300" x2="280" y2="245" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      
      {/* Stats Badges */}
      <rect x="30" y="30" width="35" height="18" rx="9" fill="#10B981" opacity="0.2"/>
      <text x="38" y="42" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#10B981">+150%</text>
      
      <rect x="435" y="30" width="35" height="18" rx="9" fill="#F97316" opacity="0.2"/>
      <text x="443" y="42" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#F97316">+200%</text>
      
      <rect x="15" y="300" width="35" height="18" rx="9" fill="#6366F1" opacity="0.2"/>
      <text x="23" y="312" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#6366F1">+180%</text>
    </svg>
  );
}
