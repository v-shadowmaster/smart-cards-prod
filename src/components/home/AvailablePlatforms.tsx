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

const Button = ({ className, variant, children }: { className?: string; variant?: string; children: React.ReactNode }) => {
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

export default function AvailablePlatforms() {
  return (
    <section className="w-full py-20 bg-white">
      {/* ✅ Edge-to-edge, no container restriction */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="max-w-(--breakpoint-md) px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl font-sans geistsans_d5a4f12f-module__kHwNXG__variable text-gray-900 text-left leading-tight">
             Available Across Platforms
          </h2>
          <p className="max-w-(--breakpoint-md) px-2 text-lg/8 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400 text-left">
            Start today, scale tomorrow
          </p>
        </div>

        <div className="space-y-16">
          {/* Platform Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent"></div>

            <div className="space-y-12">
              {/* Android */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right hover:animate-fade-in-left">
                  <Card>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-end space-x-4 mb-4">
                        <div>
                          <CardTitle>Android App</CardTitle>
                          <CardDescription>Native Android experience</CardDescription>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center border border-green-500/30">
                          <Bot className="w-8 h-8 text-green-400" />
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-end text-gray-500">
                          <span>50,000+ downloads</span>
                          <CheckCircle className="w-4 h-4 text-green-400 ml-2" />
                        </div>
                        <div className="flex items-center justify-end text-gray-500">
                          <span>4.8★ rating on Play Store</span>
                          <Star className="w-4 h-4 text-yellow-400 ml-2 fill-yellow-400" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-end">
                        <Button>
                          Download Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-white z-10"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-green-400/10 rounded-lg p-4 border border-green-400/20">
                    <Badge className="bg-green-400 text-green-900">Available Now</Badge>
                    <p className="text-sm text-gray-600">
                      Full feature set including AI integrations, smart cards, and real-time sync across devices.
                    </p>
                  </div>
                </div>
              </div>

              {/* iOS */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8">
                  <div className="bg-blue-400/10 rounded-lg p-4 border border-blue-400/20">
                    <Badge className="bg-blue-400 text-blue-900">Coming Q2 2025</Badge>
                    <p className="text-sm text-gray-600">
                      Native iOS experience with seamless iCloud integration and Siri shortcuts support.
                    </p>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>Development Progress</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white z-10"></div>
                <div className="flex-1 pl-8 hover:animate-fade-in-right">
                  <Card>
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                          <Apple className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <CardTitle>iOS App</CardTitle>
                          <CardDescription>Premium iOS experience</CardDescription>
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center text-gray-500">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                          <span>Beta testing with 1,000+ users</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                          <span>App Store review in progress</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button variant="outline">Join Beta Waitlist</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Future AI-OS */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right hover:animate-fade-in-left">
                  <Card>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-end space-x-4 mb-4">
                        <div>
                          <CardTitle>Future AI-OS</CardTitle>
                          <CardDescription>Next-generation platform</CardDescription>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                          <Brain className="w-8 h-8 text-purple-400" />
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-end text-gray-500">
                          <span>Research & Development</span>
                          <Sparkles className="w-4 h-4 text-purple-400 ml-2" />
                        </div>
                        <div className="flex items-center justify-end text-gray-500">
                          <span>Partnership with AI leaders</span>
                          <Users className="w-4 h-4 text-purple-400 ml-2" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-end">
                        <Button variant="outline">Stay Updated</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-white z-10"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-purple-400/10 rounded-lg p-4 border border-purple-400/20">
                    <Badge className="bg-purple-400 text-purple-900">Future Vision</Badge>
                    <p className="text-sm text-gray-600">
                      Preparing for the next generation of AI-native operating systems and ambient computing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value="50K+" label="Active Users" />
            <StatCard value="99.9%" label="Uptime" />
            <StatCard value="500+" label="Integrations" />
            <StatCard value="24/7" label="Support" />
          </div>
        </div>
      </div>
    </section>
  );
}
