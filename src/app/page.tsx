// app/page.tsx
import Footer from '@/components/home/footer';
import Hero from '@/components/home/hero';
import SmartCards from '@/components/home/smartcards';
import TechIntegrated from '@/components/home/tech-integrated';
import WhyUseSmartCards from '@/components/home/why-use-smart-cards';

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="grid grid-cols-1 grid-rows-[1fr_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
        {/* Candy cane */}
        <div
          className="col-start-1 row-span-full row-start-1 hidden md:block"
          aria-hidden="true"
        />

        {/* Main content area */}
        <Hero />
        <div className="w-full mt-10 mb-10" />

        <WhyUseSmartCards />
        <div className="w-full mt-10 mb-10" />

        {/* SmartCards Section */}
        <SmartCards />
        <div className="w-full mt-10 mb-10" />

        <TechIntegrated />
        <div className="w-full mt-10 mb-10" />
        <div className="w-full mt-10 mb-10" />

        <Footer />
        <div className="w-full mt-10 mb-10" />
        <div className="w-full mt-10 mb-10" />

        {/* Candy cane */}
        <div
          className="row-span-full row-start-1 hidden md:col-start-3 md:block"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
