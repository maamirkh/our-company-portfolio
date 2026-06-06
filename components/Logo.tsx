"use client";

import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {/* Premium Architectural Icon */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Dark Hexagonal Premium Container */}
        <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-white/10 relative overflow-hidden group">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-8 h-8 relative z-10"
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* The 'Architect' A-Frame */}
            <path 
              d="M12 3L3 21H7L12 10L17 21H21L12 3Z" 
              className="text-white" 
              fill="currentColor" 
              fillOpacity="0.05"
            />
            {/* The 'AI' Node Connection */}
            <path 
              d="M7 16H17" 
              className="text-primary" 
              strokeWidth="2.5"
            />
            {/* Top Focal Point */}
            <circle cx="12" cy="3" r="1.5" className="fill-primary text-primary" />
            {/* Structural Accents */}
            <path d="M12 10V21" className="text-white/20" strokeWidth="0.5" />
          </svg>
        </div>
        
        {/* Subtle orbit ring */}
        <div className="absolute inset-0 border border-primary/10 rounded-2xl rotate-45 scale-110" />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-white">
              MUHAMMAD
              <span className="text-primary ml-1 font-black">AMIR</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="h-[1px] w-4 bg-primary" />
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/90">
              AI Solutions Architect
            </span>
            <div className="w-1 h-1 rounded-full bg-primary/40" />
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/90">
              Full-Stack Engineer
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
