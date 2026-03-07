export default function SocialPlatformsVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 350" className={className} fill="none">
      <rect width="500" height="350" rx="16" fill="#1A1A1A"/>
      
      {/* Central Hub */}
      <g transform="translate(250, 175)">
        <circle cx="0" cy="0" r="80" fill="#2A2A2A" stroke="#3D3D3D" strokeWidth="2"/>
        <circle cx="0" cy="0" r="55" fill="#333333"/>
        <text x="0" y="-8" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Sosyal</text>
        <text x="0" y="12" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Medya</text>
      </g>
      
      {/* Instagram */}
      <g transform="translate(70, 60)">
        <rect x="0" y="0" width="85" height="70" rx="10" fill="#2A2A2A" stroke="#E4405F" strokeWidth="1.5" opacity="0.6"/>
        <rect x="25" y="20" width="35" height="35" rx="8" fill="none" stroke="#E4405F" strokeWidth="2" opacity="0.5"/>
        <circle cx="42" cy="37" r="8" fill="none" stroke="#E4405F" strokeWidth="2" opacity="0.5"/>
        <circle cx="55" cy="25" r="3" fill="#E4405F" opacity="0.5"/>
        <text x="42" y="65" fontFamily="system-ui" fontSize="10" fill="#E4405F" textAnchor="middle">Instagram</text>
      </g>
      
      {/* TikTok */}
      <g transform="translate(345, 60)">
        <rect x="0" y="0" width="85" height="70" rx="10" fill="#2A2A2A" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
        <path d="M45 25 Q55 35, 65 30 L65 20 Q55 25, 45 15 Z" fill="#25F4EE" opacity="0.6"/>
        <circle cx="55" cy="20" r="5" fill="#FE2C55"/>
        <text x="42" y="65" fontFamily="system-ui" fontSize="10" fill="#FFFFFF" textAnchor="middle">TikTok</text>
      </g>
      
      {/* LinkedIn */}
      <g transform="translate(50, 220)">
        <rect x="0" y="0" width="85" height="70" rx="10" fill="#2A2A2A" stroke="#0A66C2" strokeWidth="1.5" opacity="0.6"/>
        <rect x="20" y="20" width="10" height="25" rx="2" fill="#0A66C2" opacity="0.4"/>
        <circle cx="25" cy="15" r="5" fill="#0A66C2" opacity="0.4"/>
        <rect x="35" y="25" width="25" height="4" rx="1" fill="#0A66C2" opacity="0.3"/>
        <rect x="35" y="33" width="20" height="3" rx="1" fill="#0A66C2" opacity="0.2"/>
        <text x="42" y="65" fontFamily="system-ui" fontSize="10" fill="#0A66C2" textAnchor="middle">LinkedIn</text>
      </g>
      
      {/* Twitter/X */}
      <g transform="translate(365, 220)">
        <rect x="0" y="0" width="85" height="70" rx="10" fill="#2A2A2A" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
        <path d="M25 25 L35 25 L30 35 L40 35 L30 50 L32 40 L22 40 Z" fill="#FFFFFF" opacity="0.4"/>
        <text x="42" y="65" fontFamily="system-ui" fontSize="10" fill="#FFFFFF" textAnchor="middle">X / Twitter</text>
      </g>
      
      {/* YouTube */}
      <g transform="translate(160, 280)">
        <rect x="0" y="0" width="80" height="55" rx="10" fill="#2A2A2A" stroke="#FF0000" strokeWidth="1.5" opacity="0.6"/>
        <rect x="25" y="18" width="30" height="20" rx="4" fill="#FF0000" opacity="0.3"/>
        <polygon points="35,25 35,31 45,28" fill="#FF0000" opacity="0.6"/>
        <text x="40" y="50" fontFamily="system-ui" fontSize="9" fill="#FF0000" textAnchor="middle">YouTube</text>
      </g>
      
      {/* Facebook */}
      <g transform="translate(260, 280)">
        <rect x="0" y="0" width="80" height="55" rx="10" fill="#2A2A2A" stroke="#1877F2" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="30" cy="22" r="8" fill="#1877F2" opacity="0.3"/>
        <text x="32" y="26" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#1877F2">f</text>
        <text x="40" y="50" fontFamily="system-ui" fontSize="9" fill="#1877F2" textAnchor="middle">Facebook</text>
      </g>
      
      {/* Connection Lines */}
      <line x1="155" y1="95" x2="180" y2="130" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="345" y1="95" x2="320" y2="130" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="135" y1="255" x2="180" y2="220" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="365" y1="255" x2="320" y2="220" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="200" y1="307" x2="220" y2="255" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="300" y1="307" x2="280" y2="255" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      
      {/* Growth Stats */}
      <rect x="30" y="30" width="30" height="18" rx="9" fill="#10B981" opacity="0.2"/>
      <text x="38" y="42" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#10B981">+89%</text>
      
      <rect x="440" y="30" width="30" height="18" rx="9" fill="#EC4899" opacity="0.2"/>
      <text x="448" y="42" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#EC4899">+156%</text>
      
      <rect x="20" y="310" width="30" height="18" rx="9" fill="#0A66C2" opacity="0.2"/>
      <text x="28" y="322" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#0A66C2">+45%</text>
      
      <rect x="450" y="310" width="30" height="18" rx="9" fill="#FFFFFF" opacity="0.2"/>
      <text x="458" y="322" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#FFFFFF">+78%</text>
    </svg>
  );
}
