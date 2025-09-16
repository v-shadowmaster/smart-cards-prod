import Hero from "@/components/home/hero";
import WhyUseSmartCards from "@/components/home/WhyUseSmartCards";
import SmartCards from "@/components/home/SmartCards";
import AvailablePlatforms from "@/components/home/AvailablePlatforms";
import TechIntegrated from "@/components/home/TechIntegrated";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <Hero />
      <div className="w-full mt-10 mb-10" />

      {/* Why Use Smart Cards */}
      <WhyUseSmartCards />
      <div className="w-full mt-10 mb-10" />

      {/* Smart Cards */}
      <SmartCards />
      <div className="w-full mt-10 mb-10" />

      {/* Available Platforms - Full width section */}
      <div className="w-full">
        <AvailablePlatforms />
      </div>
      <div className="w-full mt-10 mb-10" />

      {/* Tech Integration - Full width section */}
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
