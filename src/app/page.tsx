import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import SmartCards from "@/components/home/SmartCards";
import TechIntegrated from "@/components/home/tech-integrated";
import WhyUseSmartCards from "@/components/home/why-use-smart-cards";
import AvailablePlatforms from "@/components/home/AvailablePlatforms";

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
