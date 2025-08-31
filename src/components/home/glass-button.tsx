'use client';
import React from 'react';

function Glass({
  onClick = () => { },
  disabled = false,
  className = '',
  children = 'Download now',
}) {
  return (
    <div className="flex  ">
      <div className="relative">
        {/* Animated Ring - Made Larger */}

        <div className="absolute inset-0 rounded-full ">
          <div
            className="w-full h-full rounded-full border-2 border-white/20 relative overflow-hidden"
            style={{
              background:
                'conic-gradient(from 0deg, transparent, #ff0000cc, transparent, transparent)',
              animation: 'spin 2s linear infinite',
            }}
          >
            {/* Inner solid ring */}
            <div className="absolute inset-[2px] rounded-full bg-black"></div>
          </div>
        </div>

        {/* Glass Button */}
        <button
          onClick={onClick}
          disabled={disabled}
          className={`
            relative z-10 px-10 py-1 m-2 rounded-full
            bg-white/10 backdrop-blur-md border border-white/20
            text-white font-medium text-lg
            hover:bg-white/15 active:bg-white/5
            transition-all duration-200 ease-out
            hover:scale-[1.02] active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-[0_8px_32px_rgba(255,255,255,0.1)]
            ${className}
          `}
        >
          {children} &nbsp; &nbsp;{'->'}
        </button>

        {/* Additional glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default Glass;
