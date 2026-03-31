"use client";
import { motion } from "framer-motion";

export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <motion.svg
      width={size} height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.08, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ filter: "drop-shadow(0 0 10px rgba(0,255,135,.6))" }}
    >
      <defs>
        <linearGradient id="lgg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00ff87"/>
          <stop offset="50%" stopColor="#00e8d4"/>
          <stop offset="100%" stopColor="#00d4ff"/>
        </linearGradient>
        <linearGradient id="lgb" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00ff87" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.05"/>
        </linearGradient>
        <filter id="glow2">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow3">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* outer hex fill */}
      <polygon points="24,2.5 42,12.5 42,35.5 24,45.5 6,35.5 6,12.5"
        fill="url(#lgb)" stroke="url(#lgg)" strokeWidth="1.2" filter="url(#glow2)"/>

      {/* inner hex */}
      <polygon points="24,9 37,16.5 37,31.5 24,39 11,31.5 11,16.5"
        fill="none" stroke="url(#lgg)" strokeWidth=".5" opacity=".3"/>

      {/* corner circuit dots — outer */}
      <circle cx="24" cy="2.5"  r="2"   fill="#00ff87" filter="url(#glow3)"/>
      <circle cx="24" cy="45.5" r="2"   fill="#00ff87" filter="url(#glow3)"/>
      <circle cx="6"  cy="12.5" r="1.5" fill="#00d4ff" opacity=".9"/>
      <circle cx="42" cy="12.5" r="1.5" fill="#00d4ff" opacity=".9"/>
      <circle cx="6"  cy="35.5" r="1.5" fill="#00d4ff" opacity=".9"/>
      <circle cx="42" cy="35.5" r="1.5" fill="#00d4ff" opacity=".9"/>

      {/* circuit trace lines outer → inner */}
      <line x1="24" y1="2.5"  x2="24" y2="9"    stroke="#00ff87" strokeWidth=".8" opacity=".7"/>
      <line x1="24" y1="39"   x2="24" y2="45.5"  stroke="#00ff87" strokeWidth=".8" opacity=".7"/>
      <line x1="6"  y1="12.5" x2="11" y2="16.5"  stroke="#00d4ff" strokeWidth=".8" opacity=".6"/>
      <line x1="42" y1="12.5" x2="37" y2="16.5"  stroke="#00d4ff" strokeWidth=".8" opacity=".6"/>
      <line x1="6"  y1="35.5" x2="11" y2="31.5"  stroke="#00d4ff" strokeWidth=".8" opacity=".6"/>
      <line x1="42" y1="35.5" x2="37" y2="31.5"  stroke="#00d4ff" strokeWidth=".8" opacity=".6"/>

      {/* inner corner dots */}
      <circle cx="24" cy="9"    r="1.2" fill="#00ff87" opacity=".6"/>
      <circle cx="24" cy="39"   r="1.2" fill="#00ff87" opacity=".6"/>
      <circle cx="11" cy="16.5" r="1"   fill="#00d4ff" opacity=".5"/>
      <circle cx="37" cy="16.5" r="1"   fill="#00d4ff" opacity=".5"/>
      <circle cx="11" cy="31.5" r="1"   fill="#00d4ff" opacity=".5"/>
      <circle cx="37" cy="31.5" r="1"   fill="#00d4ff" opacity=".5"/>

      {/* S letterform — fluid, gradient */}
      <path
        d="M17 18.5 Q17 15 20.5 15 L26 15 Q30.5 15 30.5 18.5 Q30.5 21.5 24 23.5 Q16.5 25.5 16.5 29 Q16.5 32 20.5 32 L27 32 Q31.5 32 31.5 29"
        stroke="url(#lgg)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow2)"
      />

      {/* horizontal circuit accent lines */}
      <line x1="6"  y1="24" x2="11" y2="24" stroke="#00ff87" strokeWidth=".6" opacity=".35"/>
      <line x1="37" y1="24" x2="42" y2="24" stroke="#00ff87" strokeWidth=".6" opacity=".35"/>
      <circle cx="6"  cy="24" r=".8" fill="#00ff87" opacity=".5"/>
      <circle cx="42" cy="24" r=".8" fill="#00ff87" opacity=".5"/>
    </motion.svg>
  );
}
