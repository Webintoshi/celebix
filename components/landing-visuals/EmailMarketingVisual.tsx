"use client";

import { motion } from "framer-motion";

export default function EmailMarketingVisual() {
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
          r="170"
          fill="url(#emailGradient1)"
          opacity="0.1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Main Envelope */}
        <motion.g
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <rect x="150" y="120" width="300" height="200" rx="16" fill="#6366F1" />
          <rect x="160" y="130" width="280" height="180" rx="12" fill="white" />
          
          {/* Envelope Flap */}
          <motion.path
            d="M160 130 L300 220 L440 130"
            fill="#818CF8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          
          {/* Email Content Preview */}
          <rect x="190" y="160" width="100" height="8" rx="4" fill="#E5E7EB" />
          <rect x="190" y="180" width="180" height="6" rx="3" fill="#E5E7EB" />
          <rect x="190" y="195" width="140" height="6" rx="3" fill="#E5E7EB" />
          <rect x="190" y="210" width="160" height="6" rx="3" fill="#E5E7EB" />
          
          {/* CTA Button in Email */}
          <motion.rect
            x="190"
            y="240"
            width="100"
            height="30"
            rx="6"
            fill="#10B981"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
          />
          <text x="210" y="260" fill="white" fontSize="12" fontWeight="bold">GÖNDER</text>
        </motion.g>

        {/* Floating Email Icons */}
        <motion.g
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <rect x="80" y="200" width="50" height="50" rx="12" fill="#FEF3C7" />
          <path d="M95 215 L105 225 L115 215" stroke="#F59E0B" strokeWidth="3" fill="none" />
          <path d="M95 215 L105 235 L115 215" stroke="#F59E0B" strokeWidth="3" fill="none" opacity="0.5" />
        </motion.g>

        <motion.g
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <rect x="470" y="180" width="50" height="50" rx="12" fill="#DBEAFE" />
          <rect x="485" y="195" width="20" height="8" rx="2" fill="#3B82F6" />
          <rect x="485" y="208" width="12" height="8" rx="2" fill="#60A5FA" />
        </motion.g>

        {/* Analytics Cards */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Open Rate */}
          <rect x="100" y="360" width="130" height="90" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
          <text x="120" y="390" fill="#6B7280" fontSize="11">Open Rate</text>
          <text x="120" y="420" fill="#111827" fontSize="26" fontWeight="bold">42%</text>
          <motion.path
            d="M120 435 L140 430 L160 435"
            stroke="#10B981"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          
          {/* Click Rate */}
          <rect x="250" y="360" width="130" height="90" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
          <text x="270" y="390" fill="#6B7280" fontSize="11">Click Rate</text>
          <text x="270" y="420" fill="#111827" fontSize="26" fontWeight="bold">5.2%</text>
          <motion.path
            d="M270 435 L290 425 L310 430"
            stroke="#10B981"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
          
          {/* Subscribers */}
          <rect x="400" y="360" width="130" height="90" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
          <text x="420" y="390" fill="#6B7280" fontSize="11">Subscribers</text>
          <text x="420" y="420" fill="#111827" fontSize="26" fontWeight="bold">12.5K</text>
          <text x="420" y="435" fill="#10B981" fontSize="11">+15% bu ay</text>
        </motion.g>

        {/* Automation Flow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <circle cx="450" cy="100" r="25" fill="#8B5CF6" />
          <text x="442" y="106" fill="white" fontSize="12" fontWeight="bold">1</text>
          
          <motion.path
            d="M475 100 L500 100"
            stroke="#8B5CF6"
            strokeWidth="3"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          
          <circle cx="525" cy="100" r="25" fill="#EC4899" />
          <text x="517" y="106" fill="white" fontSize="12" fontWeight="bold">2</text>
          
          <motion.path
            d="M550 100 L575 100"
            stroke="#EC4899"
            strokeWidth="3"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          
          <circle cx="600" cy="100" r="25" fill="#10B981" />
          <text x="592" y="106" fill="white" fontSize="12" fontWeight="bold">3</text>
        </motion.g>

        {/* Segmentation Tags */}
        <motion.g
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <rect x="60" y="120" width="70" height="28" rx="14" fill="#DBEAFE" />
          <text x="75" y="138" fill="#1D4ED8" fontSize="11" fontWeight="bold">KOBİ</text>
          
          <rect x="60" y="160" width="90" height="28" rx="14" fill="#FCE7F3" />
          <text x="75" y="178" fill="#BE185D" fontSize="11" fontWeight="bold">E-Ticaret</text>
        </motion.g>

        {/* Checkmark */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.3, type: "spring" }}
        >
          <circle cx="530" cy="280" r="30" fill="#10B981" />
          <path d="M515 280 L525 290 L545 270" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>

        {/* Gradients */}
        <defs>
          <radialGradient id="emailGradient1" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
