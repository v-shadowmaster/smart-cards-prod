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
      <div className="relative w-full h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-[20px] sm:rounded-[40px] lg:rounded-[60px] p-[2px] sm:p-[3px] lg:p-[4px]">
        {/* Outer frame highlight */}
        <div className="absolute inset-0 rounded-[20px] sm:rounded-[40px] lg:rounded-[60px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 p-[1px] sm:p-[1.5px] lg:p-[2px]">
          <div className="w-full h-full rounded-[19px] sm:rounded-[38px] lg:rounded-[58px] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500"></div>
        </div>

        {/* Power button - responsive positioning and sizing */}
        <div className="absolute -top-[2px] sm:-top-[3px] lg:-top-[4px] right-[30px] sm:right-[60px] lg:right-[80px] w-[30px] sm:w-[60px] lg:w-[80px] h-[3px] sm:h-[4px] lg:h-[6px] bg-gray-500 rounded-t-sm"></div>

        {/* Volume buttons - responsive positioning and sizing */}
        <div className="absolute -right-[2px] sm:-right-[3px] lg:-right-[4px] top-[50px] sm:top-[90px] lg:top-[120px] w-[2px] sm:w-[3px] lg:w-[4px] h-[25px] sm:h-[45px] lg:h-[60px] bg-gray-500 rounded-r-sm"></div>

        {/* Screen with responsive thick bezel */}
        <div className="relative w-full h-full rounded-[18px] sm:rounded-[38px] lg:rounded-[56px] bg-black overflow-hidden p-3 sm:p-6 lg:p-[34px]">
          {/* Actual screen content area */}
          <div className="w-full h-full bg-gray-100 dark:bg-zinc-900 rounded-[8px] sm:rounded-[16px] lg:rounded-[24px] overflow-hidden relative">
            {/* Screen content */}
            <div className="absolute inset-0 overflow-hidden">{children}</div>

            {/* Home indicator - responsive sizing */}
            <div className="absolute bottom-[4px] sm:bottom-[6px] lg:bottom-[8px] left-1/2 transform -translate-x-1/2 w-[40px] sm:w-[60px] lg:w-[80px] h-[2px] sm:h-[2.5px] lg:h-[3px] bg-black/30 rounded-full"></div>
          </div>
        </div>

        {/* Screen reflection effect - responsive border radius */}
        <div className="absolute inset-[2px] sm:inset-[3px] lg:inset-[4px] rounded-[8px] sm:rounded-[16px] lg:rounded-[24px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};
