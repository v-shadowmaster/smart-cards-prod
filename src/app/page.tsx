import Hero from "@/components/home/Hero";
import WhyUseSmartCards from "@/components/home/WhyUseSmartCards";
import SmartCards from "@/components/home/SmartCards";
import AvailablePlatforms from "@/components/home/AvailablePlatforms";
import TechIntegrated from "@/components/home/TechIntegrated";
import Footer from "@/components/home/Footer";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero */}
        <section>
          <Hero />
        </section>

        {/* Why Use Smart Cards */}
        <section>
          <WhyUseSmartCards />
        </section>

        {/* Smart Cards */}
        <section>
          <SmartCards />
        </section>

        {/* Available Platforms */}
        <section>
          <AvailablePlatforms />
        </section>

        {/* Tech Integration */}
        <section>
          <TechIntegrated />
        </section>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
