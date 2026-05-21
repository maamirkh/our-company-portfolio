"use client";

import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {/* Extra Large Premium Icon */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Geometric Abstract Sphere Container */}
        <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] border-2 border-primary/20">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-8 h-8"
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Minimalist Geometric Sphere / 'D' + 'S' Abstract */}
            <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" strokeOpacity="0.2" />
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9" className="text-primary" />
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4" className="text-secondary" />
            <path d="M12 3v18" strokeOpacity="0.1" />
            <path d="M3 12h18" strokeOpacity="0.1" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
        
        {/* Subtle accent corner */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full blur-[2px] opacity-50" />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
              Dev
              <span className="text-primary not-italic">Sphere</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-[2px] w-6 bg-primary/50" />
            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-primary/80">
              Solutions
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
