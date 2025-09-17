import Hero from "@/components/home/Hero";
import WhyUseSmartCards from "@/components/home/WhyUseSmartCards";
import SmartCards from "@/components/home/SmartCards";
import AvailablePlatforms from "@/components/home/AvailablePlatforms";
import TechIntegrated from "@/components/home/TechIntegrated";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <div className="px-8"> 
      <Hero />
      </div>
      <div className="w-full mt-10 mb-10" />

      <div className="px-8">
      {/* Why Use Smart Cards */}
      <WhyUseSmartCards />
      <div className="w-full mt-10 mb-10" />

      {/* Smart Cards */}
      <SmartCards />
      <div className="w-full mt-10 mb-10" />
      </div>

      {/* Available Platforms */}
      <div className="w-full">
      <AvailablePlatforms />
      </div>
      <div className="w-full mt-10 mb-10" />

      {/* Tech Integration  */}
      <div className="w-full">
      <TechIntegrated />
      </div>
      <div className="w-full mt-10 mb-10" />

      {/* Footer */}
      <Footer />
      <div className="w-full mt-10 mb-10" />

    </div>
  );
}