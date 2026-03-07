export default function AISEOVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none">
      <rect width="600" height="400" rx="16" fill="#1A1A1A"/>
      
      {/* AI Assistant Panel */}
      <rect x="40" y="40" width="280" height="320" rx="12" fill="#2A2A2A" stroke="#3D3D3D" strokeWidth="1"/>
      <rect x="40" y="40" width="280" height="50" rx="12" fill="#333333"/>
      <rect x="40" y="82" width="280" height="1" fill="#3D3D3D"/>
      
      {/* AI Badge */}
      <rect x="55" y="55" width="60" height="20" rx="10" fill="#8B5CF6" opacity="0.2"/>
      <text x="70" y="68" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#8B5CF6">AI SEO</text>
      
      {/* Chat Messages */}
      <rect x="55" y="100" width="200" height="50" rx="8" fill="#3D3D3D" opacity="0.5"/>
      <rect x="65" y="110" width="80" height="6" rx="1" fill="#9CA3AF"/>
      <rect x="65" y="120" width="170" height="4" rx="1" fill="#6B7280"/>
      <rect x="65" y="128" width="150" height="4" rx="1" fill="#6B7280"/>
      
      <rect x="105" y="160" width="200" height="70" rx="8" fill="#8B5CF6" opacity="0.15"/>
      <rect x="115" y="170" width="100" height="6" rx="1" fill="#8B5CF6" opacity="0.7"/>
      <rect x="115" y="182" width="170" height="4" rx="1" fill="#A78BFA" opacity="0.6"/>
      <rect x="115" y="190" width="160" height="4" rx="1" fill="#A78BFA" opacity="0.6"/>
      <rect x="115" y="198" width="140" height="4" rx="1" fill="#A78BFA" opacity="0.6"/>
      <rect x="115" y="215" width="80" height="8" rx="4" fill="#8B5CF6" opacity="0.3"/>
      
      <rect x="55" y="240" width="200" height="50" rx="8" fill="#3D3D3D" opacity="0.5"/>
      <rect x="65" y="250" width="80" height="6" rx="1" fill="#9CA3AF"/>
      <rect x="65" y="260" width="170" height="4" rx="1" fill="#6B7280"/>
      <rect x="65" y="268" width="120" height="4" rx="1" fill="#6B7280"/>
      
      <rect x="105" y="300" width="200" height="45" rx="8" fill="#10B981" opacity="0.15"/>
      <rect x="115" y="310" width="100" height="6" rx="1" fill="#10B981" opacity="0.7"/>
      <rect x="115" y="322" width="170" height="4" rx="1" fill="#34D399" opacity="0.6"/>
      <rect x="115" y="330" width="60" height="8" rx="4" fill="#10B981" opacity="0.3"/>
      
      {/* SEO Metrics Panel */}
      <rect x="340" y="40" width="220" height="145" rx="12" fill="#2A2A2A" stroke="#3D3D3D" strokeWidth="1"/>
      <rect x="355" y="55" width="100" height="8" rx="2" fill="#FFFFFF"/>
      
      {/* Keyword Score */}
      <rect x="355" y="75" width="90" height="50" rx="8" fill="#333333"/>
      <text x="375" y="105" fontFamily="system-ui" fontSize="18" fontWeight="700" fill="#10B981">94</text>
      <text x="375" y="118" fontFamily="system-ui" fontSize="8" fill="#9CA3AF">Keyword Score</text>
      
      {/* Readability */}
      <rect x="455" y="75" width="90" height="50" rx="8" fill="#333333"/>
      <text x="475" y="105" fontFamily="system-ui" fontSize="18" fontWeight="700" fill="#F59E0B">87</text>
      <text x="475" y="118" fontFamily="system-ui" fontSize="8" fill="#9CA3AF">Readability</text>
      
      {/* Meta Tags */}
      <rect x="355" y="135" width="190" height="40" rx="6" fill="#333333"/>
      <rect x="365" y="145" width="60" height="6" rx="1" fill="#6B7280"/>
      <rect x="365" y="155" width="150" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="365" y="162" width="120" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="520" y="145" width="15" height="15" rx="7" fill="#10B981" opacity="0.2"/>
      <path d="M524 152 L527 155 L531 149" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Competitor Analysis */}
      <rect x="340" y="200" width="220" height="160" rx="12" fill="#2A2A2A" stroke="#3D3D3D" strokeWidth="1"/>
      <rect x="355" y="215" width="120" height="8" rx="2" fill="#FFFFFF"/>
      
      {/* Competitor Bars */}
      <rect x="355" y="240" width="60" height="6" rx="1" fill="#6B7280"/>
      <rect x="355" y="250" width="150" height="12" rx="4" fill="#333333"/>
      <rect x="355" y="250" width="120" height="12" rx="4" fill="#6366F1" opacity="0.5"/>
      
      <rect x="355" y="275" width="50" height="6" rx="1" fill="#6B7280"/>
      <rect x="355" y="285" width="150" height="12" rx="4" fill="#333333"/>
      <rect x="355" y="285" width="90" height="12" rx="4" fill="#9CA3AF" opacity="0.5"/>
      
      <rect x="355" y="310" width="70" height="6" rx="1" fill="#6B7280"/>
      <rect x="355" y="320" width="150" height="12" rx="4" fill="#333333"/>
      <rect x="355" y="320" width="70" height="12" rx="4" fill="#9CA3AF" opacity="0.5"/>
      
      {/* AI Suggestion Badge */}
      <rect x="490" y="320" width="55" height="22" rx="11" fill="#8B5CF6" opacity="0.2"/>
      <text x="500" y="334" fontFamily="system-ui" fontSize="9" fill="#8B5CF6">+3 öneri</text>
      
      {/* Floating Elements */}
      <circle cx="580" cy="100" r="15" fill="#10B981" opacity="0.1"/>
      <path d="M575 100 L578 103 L585 95" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      
      <circle cx="20" cy="200" r="15" fill="#F59E0B" opacity="0.1"/>
      <circle cx="20" cy="200" r="8" fill="none" stroke="#F59E0B" strokeWidth="2"/>
      <line x1="20" y1="192" x2="20" y2="188" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="208" x2="20" y2="212" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
