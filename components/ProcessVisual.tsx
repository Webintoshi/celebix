export default function ProcessVisual({ 
  step,
  className = "" 
}: { 
  step: 1 | 2 | 3 | 4;
  className?: string;
}) {
  const renderVisual = () => {
    switch (step) {
      case 1: // Keşif & Analiz
        return (
          <>
            <rect width="200" height="140" rx="12" fill="#F8F8F8"/>
            {/* Magnifying Glass */}
            <circle cx="80" cy="60" r="25" fill="none" stroke="#6366F1" strokeWidth="3"/>
            <line x1="98" y1="78" x2="115" y2="95" stroke="#6366F1" strokeWidth="3" strokeLinecap="round"/>
            {/* Document behind */}
            <rect x="110" y="35" width="50" height="60" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <rect x="118" y="48" width="34" height="4" rx="2" fill="#D1D5DB"/>
            <rect x="118" y="58" width="24" height="4" rx="2" fill="#E5E7EB"/>
            <rect x="118" y="68" width="30" height="4" rx="2" fill="#E5E7EB"/>
            {/* Check marks */}
            <circle cx="55" cy="100" r="12" fill="#10B981" opacity="0.1"/>
            <path d="M50 100 L53 103 L60 96" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="90" cy="100" r="12" fill="#6366F1" opacity="0.1"/>
            <path d="M85 100 L88 103 L95 96" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </>
        );
      case 2: // Tasarım & Planlama
        return (
          <>
            <rect width="200" height="140" rx="12" fill="#F8F8F8"/>
            {/* Blueprint/Wireframe */}
            <rect x="30" y="25" width="70" height="90" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <rect x="40" y="40" width="50" height="8" rx="2" fill="#E5E7EB"/>
            <rect x="40" y="55" width="30" height="4" rx="1" fill="#D1D5DB"/>
            <rect x="40" y="65" width="40" height="4" rx="1" fill="#D1D5DB"/>
            <rect x="40" y="75" width="25" height="4" rx="1" fill="#D1D5DB"/>
            <rect x="40" y="90" width="50" height="15" rx="3" fill="#6366F1" opacity="0.1"/>
            
            {/* Pencil/Ruler */}
            <rect x="115" y="30" width="60" height="8" rx="4" fill="#F59E0B" opacity="0.2"/>
            <rect x="115" y="30" width="40" height="8" rx="4" fill="#F59E0B" opacity="0.4"/>
            
            {/* Color Palette */}
            <circle cx="125" cy="65" r="10" fill="#6366F1" opacity="0.6"/>
            <circle cx="150" cy="65" r="10" fill="#EC4899" opacity="0.6"/>
            <circle cx="175" cy="65" r="10" fill="#10B981" opacity="0.6"/>
            
            {/* Grid pattern */}
            <rect x="115" y="90" width="55" height="35" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <line x1="130" y1="90" x2="130" y2="125" stroke="#E5E7EB" strokeWidth="1"/>
            <line x1="145" y1="90" x2="145" y2="125" stroke="#E5E7EB" strokeWidth="1"/>
            <line x1="115" y1="105" x2="170" y2="105" stroke="#E5E7EB" strokeWidth="1"/>
          </>
        );
      case 3: // Geliştirme
        return (
          <>
            <rect width="200" height="140" rx="12" fill="#F8F8F8"/>
            {/* Code Editor Window */}
            <rect x="25" y="20" width="150" height="100" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <rect x="25" y="20" width="150" height="20" rx="8" fill="#FAFAFA"/>
            <rect x="25" y="35" width="150" height="1" fill="#E5E7EB"/>
            
            {/* Window Controls */}
            <circle cx="38" cy="30" r="3" fill="#EF4444" opacity="0.6"/>
            <circle cx="48" cy="30" r="3" fill="#F59E0B" opacity="0.6"/>
            <circle cx="58" cy="30" r="3" fill="#10B981" opacity="0.6"/>
            
            {/* Code Lines */}
            <rect x="35" y="45" width="25" height="3" rx="1" fill="#6366F1" opacity="0.5"/>
            <rect x="65" y="45" width="40" height="3" rx="1" fill="#D1D5DB"/>
            
            <rect x="45" y="55" width="30" height="3" rx="1" fill="#EC4899" opacity="0.5"/>
            <rect x="80" y="55" width="50" height="3" rx="1" fill="#D1D5DB"/>
            
            <rect x="35" y="65" width="20" height="3" rx="1" fill="#10B981" opacity="0.5"/>
            <rect x="60" y="65" width="45" height="3" rx="1" fill="#D1D5DB"/>
            
            <rect x="45" y="75" width="35" height="3" rx="1" fill="#6366F1" opacity="0.5"/>
            <rect x="85" y="75" width="30" height="3" rx="1" fill="#D1D5DB"/>
            
            {/* Cursor */}
            <rect x="120" y="45" width="2" height="10" fill="#6366F1">
              <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </rect>
            
            {/* Git Branch Icon */}
            <circle cx="165" cy="100" r="8" fill="#F59E0B" opacity="0.2"/>
            <path d="M165 92 L165 100 M161 96 L165 92 L169 96" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </>
        );
      case 4: // Test & Deploy
        return (
          <>
            <rect width="200" height="140" rx="12" fill="#F8F8F8"/>
            {/* Server/Deploy Icons */}
            <rect x="30" y="30" width="50" height="70" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
            <rect x="35" y="40" width="40" height="4" rx="2" fill="#10B981" opacity="0.3"/>
            <rect x="35" y="50" width="40" height="4" rx="2" fill="#10B981" opacity="0.3"/>
            <rect x="35" y="60" width="40" height="4" rx="2" fill="#10B981" opacity="0.3"/>
            <circle cx="55" cy="85" r="8" fill="#10B981" opacity="0.2"/>
            <path d="M51 85 L54 88 L59 82" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* Rocket/Launch */}
            <g transform="translate(110, 35)">
              <path d="M30 60 L30 30 Q30 15, 45 10 Q60 15, 60 30 L60 60" fill="#6366F1" opacity="0.15"/>
              <path d="M45 10 L45 5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
              <path d="M40 55 L45 60 L50 55" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" fill="none"/>
              {/* Flame */}
              <path d="M38 62 Q45 75, 52 62" fill="#F59E0B" opacity="0.4"/>
            </g>
            
            {/* Checkmarks */}
            <circle cx="160" cy="45" r="10" fill="#10B981" opacity="0.15"/>
            <path d="M156 45 L159 48 L164 42" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            
            <circle cx="160" cy="75" r="10" fill="#10B981" opacity="0.15"/>
            <path d="M156 75 L159 78 L164 72" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            
            <circle cx="160" cy="105" r="10" fill="#10B981" opacity="0.15"/>
            <path d="M156 105 L159 108 L164 102" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </>
        );
    }
  };

  return (
    <svg viewBox="0 0 200 140" className={className} fill="none">
      {renderVisual()}
    </svg>
  );
}
