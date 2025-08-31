import {
  Brain,
  Building2,
  Shield,
  Users,
  Code,
  Heart,
  Home,
  Plane,
  Calendar,
} from 'lucide-react';

const Iphone: React.FC = () => {
  return (
    <div className="bg-transparent flex items-center justify-center">
      {/* iPhone Container with realistic shadows and perspective */}
      <div className="relative">
        {/* iPhone Body */}
        <div className="relative w-[320px] h-[650px] bg-gray-500 rounded-[55px] p-[3px] ">
          {/* Outer frame highlight */}
          <div className="absolute inset-0 rounded-[55px] bg-gray-500 p-[1px]">
            <div className="w-full h-full rounded-[54px] bg-gray-500"></div>
          </div>

          {/* Side buttons */}
          <div className="absolute -left-[2px] top-[120px] w-[3px] h-[32px] bg-gray-700 rounded-l-sm"></div>
          <div className="absolute -left-[2px] top-[170px] w-[3px] h-[60px] bg-gray-700 rounded-l-sm"></div>
          <div className="absolute -left-[2px] top-[240px] w-[3px] h-[60px] bg-gray-700 rounded-l-sm"></div>
          <div className="absolute -right-[2px] top-[180px] w-[3px] h-[80px] bg-gray-700 rounded-r-sm"></div>

          {/* Screen */}
          <div className="relative w-full h-full rounded-[52px] bg-black overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-[18px] left-1/2 transform -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-20 border border-gray-800"></div>

            {/* Screen Content */}
            <div className="absolute inset-0 top-[60px] bottom-[25px] left-[10px] right-[10px] bg-black rounded-[40px] overflow-hidden">
              {/* App Content - Your Original Bento Grid */}
              <div className="h-full p-4 overflow-y-auto scrollbar-hide">
                <div className="grid gap-3 grid-cols-12 grid-auto-rows-minmax-80px auto">
                  {/* AI Assistant - bento-item-1: col-span-12, row-span-3 */}
                  <div className="col-span-12 row-span-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 shadow-lg flex items-center">
                    <Brain className="w-10 h-10 text-white mr-4 flex-shrink-0" />
                    <div>
                      <div className="text-lg font-bold text-white">
                        AI Assistant
                      </div>
                      <div className="text-sm text-gray-400">
                        Ready to help with anything
                      </div>
                    </div>
                  </div>

                  {/* Travel - bento-item-2: col-span-6, row-span-2 */}
                  <div className="col-span-6 row-span-2 bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-3 border border-blue-700/20 shadow-md flex flex-col justify-center items-center text-center">
                    <Plane className="w-6 h-6 text-blue-300 mb-1" />
                    <div className="text-xs font-semibold text-white">
                      Travel
                    </div>
                    <div className="text-xs text-gray-400">Book trips</div>
                  </div>

                  {/* Health - bento-item-3: col-span-6, row-span-2 */}
                  <div className="col-span-6 row-span-2 bg-gradient-to-br from-red-900/20 to-pink-800/20 backdrop-blur-sm rounded-xl p-3 border border-red-700/20 shadow-md flex flex-col justify-center items-center text-center">
                    <Heart className="w-6 h-6 text-red-300 mb-1" />
                    <div className="text-xs font-semibold text-white">
                      Health
                    </div>
                    <div className="text-xs text-gray-400">Wellness</div>
                  </div>

                  {/* Smart Home - bento-item-4: col-span-7, row-span-2 */}
                  <div className="col-span-7 row-span-2 bg-gradient-to-br from-green-900/20 to-emerald-800/20 backdrop-blur-sm rounded-xl p-3 border border-green-700/20 shadow-md flex items-center">
                    <Home className="w-6 h-6 text-green-300 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Smart Home
                      </div>
                      <div className="text-xs text-gray-400">
                        Control devices
                      </div>
                    </div>
                  </div>

                  {/* Calendar - bento-item-5: col-span-5, row-span-2 */}
                  <div className="col-span-5 row-span-2 bg-gradient-to-br from-orange-900/20 to-yellow-800/20 backdrop-blur-sm rounded-xl p-3 border border-orange-700/20 shadow-md flex flex-col justify-center items-center text-center">
                    <Calendar className="w-5 h-5 text-orange-300 mb-1" />
                    <div className="text-xs font-semibold text-white">Cal</div>
                  </div>

                  {/* Finance - bento-item-6: col-span-6, row-span-2 */}
                  <div className="col-span-6 row-span-2 bg-gradient-to-br from-purple-900/20 to-indigo-800/20 backdrop-blur-sm rounded-xl p-3 border border-purple-700/20 shadow-md flex flex-col justify-center items-center text-center">
                    <Building2 className="w-6 h-6 text-purple-300 mb-1" />
                    <div className="text-xs font-semibold text-white">
                      Finance
                    </div>
                    <div className="text-xs text-gray-400">Banking</div>
                  </div>

                  {/* Settings - bento-item-7: col-span-6, row-span-2 */}
                  <div className="col-span-6 row-span-2 bg-gradient-to-br from-gray-800/30 to-gray-700/30 backdrop-blur-sm rounded-xl p-3 border border-gray-600/20 shadow-md flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Settings
                      </div>
                      <div className="text-xs text-gray-400">Privacy</div>
                    </div>
                  </div>

                  {/* Social - Bottom row spanning 6 columns */}
                  <div className="col-span-6 row-span-2 bg-gradient-to-br from-teal-900/20 to-cyan-800/20 backdrop-blur-sm rounded-xl p-3 border border-teal-700/20 shadow-md flex flex-col justify-center items-center text-center">
                    <Users className="w-6 h-6 text-teal-300 mb-1" />
                    <div className="text-xs font-semibold text-white">
                      Social
                    </div>
                    <div className="text-xs text-gray-400">Connect</div>
                  </div>

                  {/* Dev Tools - Bottom row spanning 6 columns */}
                  <div className="col-span-6 row-span-2 bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm rounded-xl p-3 border border-slate-600/20 shadow-md flex flex-col justify-center items-center text-center">
                    <Code className="w-6 h-6 text-slate-300 mb-1" />
                    <div className="text-xs font-semibold text-white">
                      Dev Tools
                    </div>
                    <div className="text-xs text-gray-400">Code</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[140px] h-[4px] bg-white/30 rounded-full"></div>
          </div>

          {/* Screen reflection effect */}
          <div className="absolute inset-[3px] rounded-[52px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Additional realistic shadow layers */}
        <div className="absolute -inset-4 bg-black/10 blur-xl rounded-full transform -rotate-1"></div>
        <div className="absolute -inset-2 bg-black/5 blur-lg rounded-full transform rotate-0.5"></div>
      </div>
    </div>
  );
};

export default Iphone;
