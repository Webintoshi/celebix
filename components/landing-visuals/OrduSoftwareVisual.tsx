"use client";

import { motion } from "framer-motion";

export default function OrduSoftwareVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[600px]"
      >
        {/* Background Elements */}
        <motion.circle
          cx="300"
          cy="250"
          r="200"
          fill="url(#gradient1)"
          opacity="0.1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        <motion.circle
          cx="300"
          cy="250"
          r="150"
          fill="url(#gradient2)"
          opacity="0.15"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />

        {/* Main Computer Screen */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Monitor */}
          <rect x="150" y="100" width="300" height="200" rx="12" fill="#6366F1" />
          <rect x="160" y="110" width="280" height="170" rx="8" fill="#1E1B4B" />
          
          {/* Code Lines */}
          <motion.rect
            x="180" y="130" width="120" height="8" rx="4" fill="#22D3EE"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.rect
            x="180" y="150" width="180" height="8" rx="4" fill="#A78BFA"
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
          <motion.rect
            x="180" y="170" width="100" height="8" rx="4" fill="#22D3EE"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.rect
            x="180" y="190" width="160" height="8" rx="4" fill="#F472B6"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
          <motion.rect
            x="180" y="210" width="140" height="8" rx="4" fill="#A78BFA"
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          
          {/* Stand */}
          <rect x="270" y="300" width="60" height="20" fill="#6366F1" />
          <rect x="250" y="320" width="100" height="10" rx="5" fill="#4F46E5" />
        </motion.g>

        {/* Floating Elements */}
        <motion.g
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Code Bracket */}
          <rect x="80" y="150" width="50" height="60" rx="8" fill="#818CF8" opacity="0.9" />
          <text x="95" y="190" fill="white" fontSize="28" fontWeight="bold">&lt;/&gt;</text>
        </motion.g>

        <motion.g
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Mobile Phone */}
          <rect x="470" y="180" width="60" height="120" rx="12" fill="#8B5CF6" />
          <rect x="477" y="190" width="46" height="90" rx="6" fill="#1E1B4B" />
          <circle cx="500" cy="295" r="8" fill="#4F46E5" />
          
          {/* Mobile App UI */}
          <rect x="485" y="200" width="30" height="6" rx="3" fill="#22D3EE" />
          <rect x="485" y="212" width="20" height="6" rx="3" fill="#A78BFA" />
          <rect x="485" y="224" width="25" height="6" rx="3" fill="#F472B6" />
        </motion.g>

        {/* Cloud Icons */}
        <motion.g
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <path
            d="M420 80 Q440 60 460 80 Q480 60 500 80 Q520 80 520 100 Q520 120 500 120 L440 120 Q420 120 420 100 Q420 80 440 80"
            fill="#C4B5FD"
            opacity="0.8"
          />
          <text x="455" y="110" fill="#4C1D95" fontSize="14" fontWeight="bold">Cloud</text>
        </motion.g>

        {/* Database Icon */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ellipse cx="100" cy="350" rx="30" ry="15" fill="#22D3EE" />
          <rect x="70" y="350" width="60" height="40" fill="#06B6D4" />
          <ellipse cx="100" cy="390" rx="30" ry="15" fill="#0891B2" />
          <line x1="70" y1="360" x2="130" y2="360" stroke="#06B6D4" strokeWidth="2" />
          <line x1="70" y1="375" x2="130" y2="375" stroke="#06B6D4" strokeWidth="2" />
        </motion.g>

        {/* Checkmark Badge */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1, type: "spring" }}
        >
          <circle cx="500" cy="380" r="35" fill="#22C55E" />
          <path
            d="M485 380 L495 390 L515 370"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.g>

        {/* Location Pin (Ordu) */}
        <motion.g
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <path
            d="M100 100 Q100 70 125 70 Q150 70 150 100 Q150 125 125 150 Q100 125 100 100"
            fill="#EF4444"
          />
          <circle cx="125" cy="95" r="15" fill="white" />
          <text x="118" y="100" fill="#EF4444" fontSize="12" fontWeight="bold">O</text>
        </motion.g>

        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="gradient1" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </radialGradient>
          <radialGradient id="gradient2" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#6366F1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
