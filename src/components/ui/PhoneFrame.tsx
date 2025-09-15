import { ReactNode } from "react";

export const PhoneFrame = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string; 
}) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div className="relative w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-black rounded-[2.5rem] p-1">
          <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
            
            {/* Content area */}
            <div className="w-full h-full pt-8 pb-6 px-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
