'use client';
import React from 'react';

export const Ipad = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        aspectRatio: '1.43', // More rectangular like real iPad Pro (roughly 11" x 8.5")
      }}
      className="max-w-6xl mx-auto w-full relative"
    >
      {/* iPad Body - Aluminum frame */}
      <div className="relative w-full h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-[60px] p-[4px]">
        {/* Outer frame highlight */}
        <div className="absolute inset-0 rounded-[60px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 p-[2px]">
          <div className="w-full h-full rounded-[58px] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500"></div>
        </div>

        {/* Power button */}
        <div className="absolute -top-[4px] right-[80px] w-[80px] h-[6px] bg-gray-500 rounded-t-sm"></div>

        {/* Volume buttons */}
        <div className="absolute -right-[4px] top-[120px] w-[4px] h-[60px] bg-gray-500 rounded-r-sm"></div>

        {/* Screen with proper thick bezel */}
        <div
          className="relative w-full h-full rounded-[56px] bg-black overflow-hidden"
          style={{ padding: '34px' }}
        >
          {/* Actual screen content area */}
          <div className="w-full h-full bg-gray-100 dark:bg-zinc-900 rounded-[24px] overflow-hidden relative">
            {/* Screen content */}
            <div className="absolute inset-0 overflow-hidden">{children}</div>

            {/* Home indicator */}
            <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[80px] h-[3px] bg-black/30 rounded-full"></div>
          </div>
        </div>

        {/* Screen reflection effect */}
        <div className="absolute inset-[4px] rounded-[24px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};
