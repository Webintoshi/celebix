export default function TechStackVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 350" className={className} fill="none">
      <rect width="500" height="350" rx="16" fill="#1A1A1A"/>
      
      {/* Central Hub */}
      <g transform="translate(250, 175)">
        <circle cx="0" cy="0" r="70" fill="#2A2A2A" stroke="#3D3D3D" strokeWidth="1"/>
        <circle cx="0" cy="0" r="50" fill="#333333"/>
        <text x="0" y="5" fontFamily="system-ui" fontSize="16" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Stack</text>
      </g>
      
      {/* Frontend Section */}
      <g transform="translate(80, 60)">
        <rect x="0" y="0" width="100" height="80" rx="12" fill="#2A2A2A" stroke="#6366F1" strokeWidth="1.5" opacity="0.5"/>
        <text x="50" y="25" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#6366F1" textAnchor="middle">Frontend</text>
        <rect x="10" y="40" width="80" height="12" rx="3" fill="#6366F1" opacity="0.3"/>
        <rect x="10" y="58" width="50" height="12" rx="3" fill="#6366F1" opacity="0.2"/>
      </g>
      
      {/* Backend Section */}
      <g transform="translate(320, 60)">
        <rect x="0" y="0" width="100" height="80" rx="12" fill="#2A2A2A" stroke="#10B981" strokeWidth="1.5" opacity="0.5"/>
        <text x="50" y="25" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#10B981" textAnchor="middle">Backend</text>
        <rect x="10" y="40" width="80" height="12" rx="3" fill="#10B981" opacity="0.3"/>
        <rect x="10" y="58" width="55" height="12" rx="3" fill="#10B981" opacity="0.2"/>
      </g>
      
      {/* Database Section */}
      <g transform="translate(80, 210)">
        <rect x="0" y="0" width="100" height="80" rx="12" fill="#2A2A2A" stroke="#F97316" strokeWidth="1.5" opacity="0.5"/>
        <text x="50" y="25" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#F97316" textAnchor="middle">Database</text>
        <rect x="10" y="40" width="80" height="12" rx="3" fill="#F97316" opacity="0.3"/>
        <rect x="10" y="58" width="45" height="12" rx="3" fill="#F97316" opacity="0.2"/>
      </g>
      
      {/* Cloud Section */}
      <g transform="translate(320, 210)">
        <rect x="0" y="0" width="100" height="80" rx="12" fill="#2A2A2A" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.5"/>
        <text x="50" y="25" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#8B5CF6" textAnchor="middle">Cloud</text>
        <rect x="10" y="40" width="80" height="12" rx="3" fill="#8B5CF6" opacity="0.3"/>
        <rect x="10" y="58" width="60" height="12" rx="3" fill="#8B5CF6" opacity="0.2"/>
      </g>
      
      {/* Connection Lines */}
      <line x1="180" y1="100" x2="185" y2="150" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="320" y1="100" x2="315" y2="150" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="180" y1="250" x2="185" y2="200" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="320" y1="250" x2="315" y2="200" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4"/>
      
      {/* Tech Icons */}
      <g transform="translate(50, 30)">
        <rect x="0" y="0" width="40" height="22" rx="6" fill="#6366F1" opacity="0.15"/>
        <text x="20" y="14" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#6366F1" textAnchor="middle">React</text>
      </g>
      
      <g transform="translate(410, 30)">
        <rect x="0" y="0" width="40" height="22" rx="6" fill="#10B981" opacity="0.15"/>
        <text x="20" y="14" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#10B981" textAnchor="middle">Node</text>
      </g>
      
      <g transform="translate(50, 300)">
        <rect x="0" y="0" width="50" height="22" rx="6" fill="#F97316" opacity="0.15"/>
        <text x="25" y="14" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#F97316" textAnchor="middle">PostgreSQL</text>
      </g>
      
      <g transform="translate(400, 300)">
        <rect x="0" y="0" width="40" height="22" rx="6" fill="#8B5CF6" opacity="0.15"/>
        <text x="20" y="14" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#8B5CF6" textAnchor="middle">AWS</text>
      </g>
    </svg>
  );
}
