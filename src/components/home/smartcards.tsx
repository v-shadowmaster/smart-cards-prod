import { PhoneFrame } from "../ui/PhoneFrame";
import { IconGrid } from "../ui/IconGrid";
import { SmartCardGrid } from "../ui/SmartCardGrid";
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

          {/* Arrow Divider */}
          <div className="hidden lg:flex justify-center items-center my-8 lg:my-0">
            <ArrowLeft className="w-12 h-12 text-gray-400" />
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
