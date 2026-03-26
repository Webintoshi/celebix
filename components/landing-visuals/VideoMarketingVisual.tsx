"use client";

import { motion } from "framer-motion";

export default function VideoMarketingVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[600px]"
      >
        {/* Background */}
        <motion.circle
          cx="300"
          cy="250"
          r="180"
          fill="url(#vidGradient1)"
          opacity="0.1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Main Video Player */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <rect x="120" y="80" width="360" height="220" rx="16" fill="#1E1B4B" />
          <rect x="130" y="90" width="340" height="180" rx="12" fill="#312E81" />
          
          {/* Play Button */}
          <motion.circle
            cx="300"
            cy="180"
            r="40"
            fill="#EF4444"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
          />
          <motion.path
            d="M290 165 L320 180 L290 195 Z"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
          
          {/* Progress Bar */}
          <rect x="130" y="285" width="340" height="6" rx="3" fill="#4B5563" />
          <motion.rect
            x="130"
            y="285"
            width="180"
            height="6"
            rx="3"
            fill="#EF4444"
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </motion.g>

        {/* YouTube Logo */}
        <motion.g
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <rect x="60" y="150" width="60" height="45" rx="12" fill="#EF4444" />
          <path d="M85 165 L100 172.5 L85 180 Z" fill="white" />
        </motion.g>

        {/* TikTok Logo */}
        <motion.g
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <rect x="480" y="120" width="50" height="50" rx="12" fill="#111827" />
          <text x="495" y="155" fill="white" fontSize="28" fontWeight="bold">♪</text>
        </motion.g>

        {/* Instagram Reels */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <rect x="500" y="250" width="50" height="50" rx="12" fill="url(#instaGradient)" />
          <circle cx="525" cy="275" r="12" stroke="white" strokeWidth="3" fill="none" />
          <circle cx="538" cy="262" r="3" fill="white" />
        </motion.g>

        {/* Analytics Chart */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <rect x="100" y="340" width="120" height="80" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
          <text x="115" y="365" fill="#111827" fontSize="12" fontWeight="bold">Views</text>
          <text x="115" y="385" fill="#10B981" fontSize="18" fontWeight="bold">+247%</text>
          <motion.path
            d="M115 405 L135 395 L155 400 L175 385 L195 390"
            stroke="#10B981"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.g>

        {/* Subscribers Badge */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
        >
          <rect x="380" y="350" width="140" height="70" rx="12" fill="#FEF3C7" />
          <text x="395" y="375" fill="#92400E" fontSize="10" fontWeight="bold">Subscribers</text>
          <text x="395" y="400" fill="#92400E" fontSize="22" fontWeight="bold">100K+</text>
          <motion.path
            d="M485 365 L495 355 L505 365"
            stroke="#10B981"
            strokeWidth="3"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
        </motion.g>

        {/* Mobile Phone with Video */}
        <motion.g
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <rect x="180" y="380" width="50" height="90" rx="8" fill="#1F2937" />
          <rect x="185" y="390" width="40" height="70" rx="4" fill="#000" />
          <circle cx="205" cy="465" r="4" fill="#4B5563" />
          
          {/* Video Content on Phone */}
          <motion.rect
            x="188"
            y="395"
            width="34"
            height="20"
            rx="2"
            fill="#EF4444"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
          <circle cx="205" cy="405" r="5" fill="white" opacity="0.8" />
        </motion.g>

        {/* Gradients */}
        <defs>
          <radialGradient id="vidGradient1" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </radialGradient>
          <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
