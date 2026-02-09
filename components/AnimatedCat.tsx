
import React, { useState, useEffect } from 'react';

interface AnimatedCatProps {
  isTalking?: boolean;
}

/**
 * AnimatedOwl: A simplified Rowlet-style owl.
 * Features an oval body, small round face, and solid wings.
 */
export const AnimatedCat: React.FC<AnimatedCatProps> = ({ isTalking }) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 4000 + Math.random() * 2500);
    
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="relative w-16 h-16 flex items-end justify-center cursor-pointer group select-none overflow-visible">
      <style>
        {`
          @keyframes owlSway {
            0%, 100% { transform: translateY(0) rotate(-1.5deg); }
            50% { transform: translateY(-2px) rotate(1.5deg); }
          }
          .animate-owl-sway {
            animation: owlSway 3.5s ease-in-out infinite;
            transform-origin: bottom center;
          }
          .owl-glow {
            filter: drop-shadow(0 0 8px rgba(255, 123, 0, 0.35));
          }
          @keyframes beakMovement {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.3); }
          }
          .talking-beak {
            animation: beakMovement 0.15s ease-in-out infinite;
            transform-origin: 50px 52px;
          }
        `}
      </style>
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full owl-glow overflow-visible animate-owl-sway"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Simple Feet */}
        <g stroke="#e66e00" strokeWidth="3" strokeLinecap="round">
          <path d="M38 112 L33 118 M38 112 L38 120 M38 112 L43 118" />
          <path d="M62 112 L57 118 M62 112 L62 120 M62 112 L67 118" />
        </g>

        {/* Oval Body */}
        <path
          d="M50 115 C25 115 18 85 18 60 C18 35 32 20 50 20 C68 20 82 35 82 60 C82 85 75 115 50 115Z"
          fill="#ff7b00"
          className="transition-all duration-500 group-hover:fill-[#ff9500]"
        />

        {/* Solid Wings */}
        <path
          d="M22 55 Q12 65 20 95 L28 85 Z"
          fill="#e66e00"
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <path
          d="M78 55 Q88 65 80 95 L72 85 Z"
          fill="#e66e00"
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
        
        {/* Smaller Rounder Facial Mask */}
        <circle 
          cx="50" 
          cy="52" 
          r="24" 
          fill="white" 
          className="opacity-95" 
        />
        <circle 
          cx="42" 
          cy="48" 
          r="12" 
          fill="white" 
        />
        <circle 
          cx="58" 
          cy="48" 
          r="12" 
          fill="white" 
        />

        {/* Small Leaf Bowtie */}
        <path 
          d="M42 74 Q38 68 50 72 Q62 68 58 74 Q62 80 50 76 Q38 80 42 74" 
          fill="#222" 
          className="group-hover:fill-black transition-colors"
        />

        {/* Face Details */}
        <g>
          {/* Eyes */}
          <g className={blink ? "opacity-0" : "opacity-100 transition-opacity duration-100"}>
            <circle cx="40" cy="48" r="4.5" fill="#111" />
            <circle cx="60" cy="48" r="4.5" fill="#111" />
            <circle cx="41" cy="46.5" r="1.5" fill="white" />
            <circle cx="61" cy="46.5" r="1.5" fill="white" />
          </g>
          
          {/* Blink State */}
          <g className={blink ? "opacity-100" : "opacity-0"}>
            <line x1="36" y1="48" x2="44" y2="48" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="56" y1="48" x2="64" y2="48" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Small Beak */}
          <path 
            d="M47 52 L53 52 L50 60 Z" 
            fill="#ff7b00" 
            stroke="#111" 
            strokeWidth="1" 
            className={isTalking ? "talking-beak" : ""}
          />
        </g>
      </svg>
      
      {isTalking && (
        <div className="absolute top-4 right-2 w-2.5 h-2.5 bg-white rounded-full animate-ping shadow-lg shadow-orange/20" />
      )}
    </div>
  );
};
