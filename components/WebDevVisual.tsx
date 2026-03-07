export default function WebDevVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Browser Window */}
      <rect x="30" y="25" width="220" height="130" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="30" y="25" width="220" height="28" rx="10" fill="#FAFAFA"/>
      <rect x="30" y="49" width="220" height="1" fill="#E5E7EB"/>
      
      {/* Browser Controls */}
      <circle cx="45" cy="39" r="4" fill="#EC4899" opacity="0.6"/>
      <circle cx="58" cy="39" r="4" fill="#F97316" opacity="0.6"/>
      <circle cx="71" cy="39" r="4" fill="#10B981" opacity="0.6"/>
      
      {/* Address Bar */}
      <rect x="90" y="33" width="140" height="12" rx="6" fill="#F3F4F6"/>
      
      {/* Web Page Content */}
      <rect x="45" y="62" width="80" height="50" rx="6" fill="#6366F1" opacity="0.15"/>
      <rect x="55" y="72" width="30" height="30" rx="4" fill="#6366F1" opacity="0.3"/>
      <rect x="95" y="75" width="20" height="4" rx="1" fill="#E5E7EB"/>
      <rect x="95" y="85" width="15" height="3" rx="1" fill="#D1D5DB"/>
      
      <rect x="135" y="62" width="100" height="20" rx="4" fill="#F3F4F6"/>
      <rect x="145" y="68" width="60" height="4" rx="1" fill="#E5E7EB"/>
      
      <rect x="135" y="90" width="100" height="20" rx="4" fill="#F3F4F6"/>
      <rect x="145" y="96" width="50" height="4" rx="1" fill="#E5E7EB"/>
      
      <rect x="45" y="122" width="190" height="15" rx="4" fill="#EC4899" opacity="0.1"/>
      <rect x="55" y="128" width="80" height="4" rx="1" fill="#EC4899" opacity="0.4"/>
      
      {/* Code Tag */}
      <rect x="215" y="145" width="40" height="18" rx="9" fill="#6366F1" opacity="0.1"/>
      <text x="225" y="157" fontFamily="system-ui" fontSize="9" fill="#6366F1">&lt;/&gt;</text>
    </svg>
  );
}
