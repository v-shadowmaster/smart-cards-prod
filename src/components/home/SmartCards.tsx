import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { IconGrid } from "@/components/ui/IconGrid";
import { SmartCardGrid } from "@/components/ui/SmartCardGrid";
import { GeistSans } from "geist/font/sans";
import CategoryHeader from './category-header';
import GridContainer from '../grid-container';
//import SmartCard from "./SmartCardProps";

export default function SmartCards() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
      {/* Header Section */}
      <header className="text-center py-10 px-2">
      <GridContainer className="2xl:before:hidden 2xl:after:hidden text-left ml-0">
        <CategoryHeader className="text-sky-900 dark:text-blue-400">
          From App Chaos <br />
          to Card Clarity
        </CategoryHeader>
      </GridContainer>

        {/* <h1 className={`px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl font-sans ${GeistSans.variable} text-gray-900 text-left leading-tight`}>
          From App Chaos <br />
          to Card Clarity
        </h1> */}

        <div className="mt-8"></div>

        <p className="max-w-(--breakpoint-md) px-6 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400 text-left">
          See how Smart Cards transform the overwhelming mobile experience into something beautiful and functional
        </p>
      </header>

      {/* Main Comparison Section */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-center">
          
          {/* Before Column */}
          <div className="flex flex-col items-center">
            <h2 className={`px-2 text-2xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-3xl lg:text-4xl xl:text-4xl font-sans ${GeistSans.variable} font-bold text-gray-800  dark:text-blue-400 mb-8 text-center`}>
              Before: App Chaos
            </h2>
            <PhoneFrame>
              <IconGrid />
            </PhoneFrame>
            <ul className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8 space-y-2 list-none">
              <li>
                <span className="font-bold text-gray-800 dark:text-blue-400">100+ apps</span> cluttering your phone
              </li>
              <li>
                Average user switches apps <span className="font-bold text-gray-800 dark:text-blue-400">300x per day</span>
              </li>
              <li>
                Wasted time: <span className="font-bold text-gray-800 dark:text-blue-400">2.5 hours daily</span>
              </li>
            </ul>
          </div>
        
          {/* Arrow Indicator */}
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
            <p className="font-bold text-gray-800 text-lg dark:text-blue-400">Smart Card</p>
            <p className="text-gray-500 text-md dark:text-gray-400">Transformation</p>
          </div>

          {/* After Column */}
          <div className="flex flex-col items-center mt-12 lg:mt-0">
            <h2 className="text-2xl lg:text-4xl xl:text-4xl font-bold text-gray-800 dark:text-blue-400 mb-8 text-center">
              After: Smart Cards
            </h2>
            <PhoneFrame>
              <SmartCardGrid />
            </PhoneFrame>
            <ul className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8 space-y-2 list-none">
              <li>
                <span className="font-bold text-gray-800 dark:text-blue-400">5 dynamic cards</span> • infinite possibilities
              </li>
              <li>
                Reduce app switching by <span className="font-bold text-gray-800 dark:text-blue-400">90%</span>
              </li>
              <li>
                Save time: <span className="font-bold text-gray-800 dark:text-blue-400">2+ hours daily</span>
              </li>
            </ul>
          </div>
          
        </div>
      </main>
      {/* Divider */}
      <div
        className="mt-2 w-full h-px bg-neutral-300 dark:bg-neutral-700"
        aria-hidden="true"
      />
    </div>
  );
}
