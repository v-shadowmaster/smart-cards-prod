import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { IconGrid } from "@/components/ui/IconGrid";
import { SmartCardGrid } from "@/components/ui/SmartCardGrid";
import { ArrowLeft } from "@/components/ui/icons"; // Replace with an existing export

export default function SmashCards() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Transform Your Digital Life
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From cluttered chaos to organized simplicity with smart card interfaces
        </p>
      </header>

      {/* Main Comparison Section */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-center">
          
          {/* Before Column */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Before: App Chaos
            </h2>
            <PhoneFrame>
              <IconGrid />
            </PhoneFrame>
          </div>

          <div className="flex flex-col justify-center items-center my-12 lg:my-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                  </svg>
              </div>
              <p className="font-bold text-gray-800 text-lg">Smart Card</p>
              <p className="text-gray-500 text-md">Transformation</p>
          </div>
          
          {/* After Column */}
          <div className="flex flex-col items-center mt-12 lg:mt-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              After: Smart Cards
            </h2>
            <PhoneFrame>
              <SmartCardGrid />
            </PhoneFrame>
          </div>
          
        </div>
      </main>
    </div>
  );
}
