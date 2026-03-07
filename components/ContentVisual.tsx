export default function ContentVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} fill="none">
      <rect width="280" height="180" rx="12" fill="#F8F8F8"/>
      
      {/* Blog Post Card */}
      <rect x="20" y="20" width="110" height="140" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Blog Image */}
      <rect x="25" y="25" width="100" height="60" rx="6" fill="#E5E7EB"/>
      <rect x="45" y="45" width="60" height="20" rx="4" fill="#D1D5DB" opacity="0.5"/>
      
      {/* Blog Title */}
      <rect x="30" y="95" width="80" height="6" rx="1" fill="#374151"/>
      <rect x="30" y="105" width="60" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="30" y="112" width="70" height="4" rx="1" fill="#9CA3AF"/>
      
      {/* Read More */}
      <rect x="30" y="130" width="50" height="8" rx="2" fill="#F97316" opacity="0.2"/>
      <rect x="33" y="133" width="30" height="3" rx="1" fill="#F97316"/>
      
      {/* Newsletter Card */}
      <rect x="145" y="20" width="115" height="80" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="155" y="30" width="25" height="25" rx="4" fill="#6366F1" opacity="0.15"/>
      <rect x="160" y="40" width="15" height="6" rx="1" fill="#6366F1" opacity="0.4"/>
      <rect x="185" y="35" width="50" height="5" rx="1" fill="#374151"/>
      <rect x="185" y="45" width="40" height="4" rx="1" fill="#9CA3AF"/>
      <rect x="155" y="65" width="95" height="8" rx="2" fill="#F3F4F6"/>
      <rect x="230" y="65" width="25" height="8" rx="2" fill="#6366F1" opacity="0.3"/>
      
      {/* Infographic Card */}
      <rect x="145" y="110" width="55" height="50" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="152" y="118" width="30" height="4" rx="1" fill="#374151"/>
      {/* Pie Chart */}
      <circle cx="172" cy="142" r="12" fill="none" stroke="#10B981" strokeWidth="6" strokeDasharray="20 38"/>
      <circle cx="172" cy="142" r="12" fill="none" stroke="#6366F1" strokeWidth="6" strokeDasharray="15 43" strokeDashoffset="-20"/>
      <circle cx="172" cy="142" r="12" fill="none" stroke="#F97316" strokeWidth="6" strokeDasharray="8 50" strokeDashoffset="-35"/>
      
      {/* Video Content Card */}
      <rect x="205" y="110" width="55" height="50" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="212" y="118" width="30" height="4" rx="1" fill="#374151"/>
      {/* Video Thumbnail */}
      <rect x="212" y="128" width="40" height="25" rx="4" fill="#E5E7EB"/>
      <circle cx="232" cy="140" r="8" fill="#FFFFFF" opacity="0.9"/>
      <polygon points="230,137 230,143 236,140" fill="#374151"/>
      
      {/* Content Type Tags */}
      <rect x="20" y="170" width="35" height="14" rx="7" fill="#10B981" opacity="0.15"/>
      <text x="27" y="180" fontFamily="system-ui" fontSize="7" fill="#10B981">Blog</text>
      
      <rect x="60" y="170" width="50" height="14" rx="7" fill="#6366F1" opacity="0.15"/>
      <text x="67" y="180" fontFamily="system-ui" fontSize="7" fill="#6366F1">E-Bülten</text>
      
      <rect x="115" y="170" width="55" height="14" rx="7" fill="#F97316" opacity="0.15"/>
      <text x="122" y="180" fontFamily="system-ui" fontSize="7" fill="#F97316">İnfografik</text>
      
      <rect x="175" y="170" width="40" height="14" rx="7" fill="#EC4899" opacity="0.15"/>
      <text x="182" y="180" fontFamily="system-ui" fontSize="7" fill="#EC4899">Video</text>
    </svg>
  );
}
