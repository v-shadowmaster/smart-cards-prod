import { GeistSans } from "geist/font/sans";
import React from "react";
import {
  ArrowRight,
  Bot,
  Apple,
  Brain,
  CheckCircle,
  Star,
  Sparkles,
  Users,
} from "@/components/ui/lucide";
import CategoryHeader from './category-header';
import GridContainer from '../grid-container';

// --- Custom Components based on new design ---

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`bg-white rounded-lg border-2 border-gray-200/20 hover:border-gray-300/30 transition-all duration-300 group ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <h3 className={`text-xl font-bold text-gray-900 ${className}`}>{children}</h3>
);

const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
);

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Button = ({ className, variant, size, children }: { className?: string; variant?: string; size?: string; children: React.ReactNode }) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all h-9 py-2 px-6 rounded-lg font-medium";
  const variantClasses =
    variant === "outline"
      ? "border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100"
      : "bg-gray-900 text-white shadow-sm hover:bg-gray-800";
  return <button className={`${baseClasses} ${variantClasses} ${className}`}>{children}</button>;
};

const Badge = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <span className={`inline-flex items-center justify-center text-xs w-fit whitespace-nowrap rounded-full px-3 py-1 font-medium mb-2 ${className}`}>
    {children}
  </span>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
    <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);



// --- Available Platforms Section ---

const geistSans = GeistSans;

export default function AvailablePlatforms() {
  return (
    <section className="w-full py-2 bg-white text-gray-900 dark:bg-black dark:text-white px-7 transition-colors duration-300">

      <div className="w-full px-0 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 ">
          <GridContainer className="2xl:before:hidden 2xl:after:hidden text-left ml-0">
            <CategoryHeader className="text-sky-900 dark:text-blue-400">
            Available <br/>
            Across Platforms
            </CategoryHeader>
          </GridContainer>

          {/* <h2 className={`px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl font-sans ${geistSans.variable} text-gray-900 text-left leading-tight`}>
              Available 
          </h2>
          <h2 className={`px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl font-sans ${geistSans.variable} text-gray-900 text-left leading-tight`}>
            Across Platforms
          </h2> */}
          <div className="mt-4"></div>

          <p className="px-5 text-lg/7 font-medium text-gray-600 dark:text-gray-400 max-sm:px-4 text-left">
              Start today, scale tomorrow
          </p>
        </div>

      <div className="space-y-16">
  {/* Platform Timeline */}
  <div className="relative">
    {/* Timeline line (hide on very small screens if needed) */}
    <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent"></div>

    <div className="space-y-12">
      {/* Android */}
      <div className="relative flex items-center gap-x-2 sm:gap-x-6 md:gap-x-8">
        {/* Left Card */}
        <div className="flex-1 w-[180px] sm:w-[220px] md:w-1/2 pr-2 sm:pr-4 md:pr-8 text-right hover:animate-fade-in-left">
          <Card className="scale-90 sm:scale-95 md:scale-100">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-center justify-end space-x-2 sm:space-x-4 mb-3 sm:mb-4">
                <div>
                  <CardTitle className="text-sm sm:text-base">Android App</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Native Android experience</CardDescription>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center border border-green-500/30">
                  <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-end text-gray-500">
                  <span>50,000+ downloads</span>
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 ml-1 sm:ml-2" />
                </div>
                <div className="flex items-center justify-end text-gray-500">
                  <span>4.8★ rating</span>
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 ml-1 sm:ml-2 fill-yellow-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-end">
                <Button className="text-xs sm:text-sm">
                  Download
                  <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 sm:border-4 border-white z-10"></div>

        {/* Right Card */}
        <div className="flex-1 w-[180px] sm:w-[220px] md:w-1/2 pl-2 sm:pl-4 md:pl-8">
          <div className="bg-green-400/10 rounded-lg p-2 sm:p-4 border border-green-400/20">
            <Badge className="bg-green-400 text-green-900 text-[10px] sm:text-xs">Available Now</Badge>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Full feature set including AI integrations, smart cards, and real-time sync.
            </p>
          </div>
        </div>
      </div>

      {/* iOS */}
      <div className="relative flex items-center gap-x-2 sm:gap-x-6 md:gap-x-8">
        {/* Left */}
        <div className="flex-1 w-[180px] sm:w-[220px] md:w-1/2 pr-2 sm:pr-4 md:pr-8">
          <div className="bg-blue-400/10 rounded-lg p-2 sm:p-4 border border-blue-400/20">
            <Badge className="bg-blue-400 text-blue-900 text-[10px] sm:text-xs">Coming Q2 2025</Badge>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Native iOS experience with seamless iCloud integration.
            </p>
            <div className="mt-2 sm:mt-3">
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                <div className="bg-blue-400 h-1.5 sm:h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full border-2 sm:border-4 border-white z-10"></div>

        {/* Right */}
        <div className="flex-1 w-[180px] sm:w-[220px] md:w-1/2 pl-2 sm:pl-4 md:pl-8 hover:animate-fade-in-right">
          <Card className="scale-90 sm:scale-95 md:scale-100">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-2 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                  <Apple className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-sm sm:text-base">iOS App</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Premium iOS experience</CardDescription>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center text-gray-500">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-1 sm:mr-2" />
                  <span>Beta with 1,000+ users</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-1 sm:mr-2" />
                  <span>App Store review</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Button variant="outline" className="text-xs sm:text-sm">
                Join Waitlist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Future AI-OS */}
      <div className="relative flex items-center gap-x-2 sm:gap-x-6 md:gap-x-8">
        {/* Left */}
        <div className="flex-1 w-[180px] sm:w-[220px] md:w-1/2 pr-2 sm:pr-4 md:pr-8 text-right hover:animate-fade-in-left">
          <Card className="scale-90 sm:scale-95 md:scale-100">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-center justify-end space-x-2 sm:space-x-4 mb-3 sm:mb-4">
                <div>
                  <CardTitle className="text-sm sm:text-base">Future AI-OS</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Next-gen platform</CardDescription>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-end text-gray-500">
                  <span>Research</span>
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 ml-1 sm:ml-2" />
                </div>
                <div className="flex items-center justify-end text-gray-500">
                  <span>AI Partnerships</span>
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 ml-1 sm:ml-2" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-end">
                <Button variant="outline" className="text-xs sm:text-sm">
                  Stay Updated
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full border-2 sm:border-4 border-white z-10"></div>

        {/* Right */}
        <div className="flex-1 w-[180px] sm:w-[220px] md:w-1/2 pl-2 sm:pl-4 md:pl-8">
          <div className="bg-purple-400/10 rounded-lg p-2 sm:p-4 border border-purple-400/20">
            <Badge className="bg-purple-400 text-purple-900 text-[10px] sm:text-xs">Future Vision</Badge>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Preparing for AI-native operating systems and ambient computing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* Divider */}
      <div
        className="mt-10 w-full h-px bg-neutral-300 dark:bg-neutral-700"
        aria-hidden="true"
      />

    </section>
  );
}
