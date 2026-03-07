export default function ETicaretHeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 500" className={className} fill="none">
      <rect width="600" height="500" rx="16" fill="#F8F8F8"/>
      
      {/* Admin Dashboard Panel */}
      <rect x="40" y="40" width="520" height="420" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="40" y="40" width="520" height="50" rx="12" fill="#FAFAFA"/>
      <rect x="40" y="85" width="520" height="1" fill="#E5E7EB"/>
      
      {/* Window Controls */}
      <circle cx="65" cy="65" r="6" fill="#EF4444" opacity="0.6"/>
      <circle cx="85" cy="65" r="6" fill="#F59E0B" opacity="0.6"/>
      <circle cx="105" cy="65" r="6" fill="#10B981" opacity="0.6"/>
      
      {/* Sidebar */}
      <rect x="40" y="86" width="140" height="374" rx="0" fill="#F9FAFB"/>
      <rect x="180" y="86" width="1" height="374" fill="#E5E7EB"/>
      
      {/* Sidebar Menu Items */}
      <rect x="55" y="110" width="110" height="12" rx="2" fill="#1F2937"/>
      <rect x="55" y="140" width="80" height="8" rx="1" fill="#9CA3AF"/>
      <rect x="55" y="165" width="90" height="8" rx="1" fill="#9CA3AF"/>
      <rect x="55" y="190" width="70" height="8" rx="1" fill="#9CA3AF"/>
      <rect x="55" y="215" width="85" height="8" rx="1" fill="#9CA3AF"/>
      
      {/* Dashboard Content */}
      <rect x="200" y="105" width="150" height="20" rx="2" fill="#1F2937"/>
      
      {/* Stats Cards */}
      <rect x="200" y="140" width="100" height="70" rx="8" fill="#F3F4F6"/>
      <rect x="212" y="155" width="50" height="8" rx="1" fill="#6B7280"/>
      <rect x="212" y="175" width="60" height="12" rx="1" fill="#10B981"/>
      <rect x="212" y="192" width="40" height="6" rx="1" fill="#10B981" opacity="0.5"/>
      
      <rect x="315" y="140" width="100" height="70" rx="8" fill="#F3F4F6"/>
      <rect x="327" y="155" width="55" height="8" rx="1" fill="#6B7280"/>
      <rect x="327" y="175" width="65" height="12" rx="1" fill="#6366F1"/>
      <rect x="327" y="192" width="45" height="6" rx="1" fill="#6366F1" opacity="0.5"/>
      
      <rect x="430" y="140" width="100" height="70" rx="8" fill="#F3F4F6"/>
      <rect x="442" y="155" width="45" height="8" rx="1" fill="#6B7280"/>
      <rect x="442" y="175" width="55" height="12" rx="1" fill="#F59E0B"/>
      <rect x="442" y="192" width="35" height="6" rx="1" fill="#F59E0B" opacity="0.5"/>
      
      {/* Chart Area */}
      <rect x="200" y="225" width="210" height="150" rx="8" fill="#F9FAFB"/>
      <rect x="215" y="240" width="80" height="10" rx="2" fill="#374151"/>
      
      {/* Bar Chart */}
      <rect x="220" y="350" width="25" height="8" rx="2" fill="#E5E7EB"/>
      <rect x="220" y="340" width="25" height="60" rx="2" fill="#6366F1" opacity="0.3"/>
      
      <rect x="255" y="350" width="25" height="15" rx="2" fill="#E5E7EB"/>
      <rect x="255" y="310" width="25" height="90" rx="2" fill="#6366F1" opacity="0.5"/>
      
      <rect x="290" y="350" width="25" height="20" rx="2" fill="#E5E7EB"/>
      <rect x="290" y="280" width="25" height="120" rx="2" fill="#6366F1" opacity="0.7"/>
      
      <rect x="325" y="350" width="25" height="12" rx="2" fill="#E5E7EB"/>
      <rect x="325" y="300" width="25" height="100" rx="2" fill="#10B981" opacity="0.5"/>
      
      <rect x="360" y="350" width="25" height="18" rx="2" fill="#E5E7EB"/>
      <rect x="360" y="265" width="25" height="135" rx="2" fill="#10B981" opacity="0.7"/>
      
      {/* Recent Orders Panel */}
      <rect x="425" y="225" width="105" height="150" rx="8" fill="#F9FAFB"/>
      <rect x="437" y="240" width="70" height="10" rx="2" fill="#374151"/>
      
      {/* Order Items */}
      <rect x="437" y="265" width="80" height="25" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="445" y="273" width="40" height="4" rx="1" fill="#6B7280"/>
      <rect x="445" y="280" width="25" height="3" rx="1" fill="#9CA3AF"/>
      
      <rect x="437" y="298" width="80" height="25" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="445" y="306" width="35" height="4" rx="1" fill="#6B7280"/>
      <rect x="445" y="313" width="20" height="3" rx="1" fill="#9CA3AF"/>
      
      <rect x="437" y="331" width="80" height="25" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="445" y="339" width="30" height="4" rx="1" fill="#6B7280"/>
      <rect x="445" y="346" width="22" height="3" rx="1" fill="#9CA3AF"/>
      
      {/* AI Badge */}
      <rect x="480" y="100" width="70" height="28" rx="14" fill="#8B5CF6" opacity="0.15"/>
      <text x="495" y="118" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#8B5CF6">AI Powered</text>
      
      {/* Floating Product Cards */}
      <rect x="20" y="380" width="100" height="80" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" opacity="0.9"/>
      <rect x="30" y="390" width="50" height="50" rx="4" fill="#F3F4F6"/>
      <rect x="85" y="400" width="25" height="6" rx="1" fill="#10B981"/>
      <circle cx="95" cy="403" r="8" fill="#10B981" opacity="0.2"/>
      <path d="M91 403 L94 406 L99 399" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      
      <rect x="480" y="390" width="100" height="80" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" opacity="0.9"/>
      <rect x="490" y="400" width="50" height="50" rx="4" fill="#F3F4F6"/>
      <rect x="545" y="410" width="25" height="6" rx="1" fill="#6366F1"/>
      
      {/* Connection Lines */}
      <path d="M120 380 Q160 360, 200 300" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
      <path d="M480 430 Q440 400, 425 375" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
    </svg>
  );
}
