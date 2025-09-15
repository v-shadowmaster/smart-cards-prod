import React from "react";
import {
  Users,
  Code,
  Heart,
  CreditCard,
  Plane,
  Brain,
  Home,
  Calendar,
  Settings,
  Mail,
  FileText,
} from "./icons";

interface AppItem {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
}

// Generic App Icon Component
const GenericAppIcon: React.FC<AppItem> = ({ name, icon: Icon, bgColor }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center shadow-md`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-xs text-gray-800 text-center font-medium truncate w-full">
        {name}
      </span>
    </div>
  );
};

export const IconGrid: React.FC = () => {
  const apps: AppItem[] = [
    { name: "Mail", icon: Mail, bgColor: "bg-blue-500" },
    { name: "Notes", icon: FileText, bgColor: "bg-yellow-500" },
    { name: "Weather", icon: Code, bgColor: "bg-red-500" },
    { name: "App Store", icon: Users, bgColor: "bg-indigo-500" },
    { name: "Files", icon: FileText, bgColor: "bg-cyan-500" },
    { name: "Health", icon: Heart, bgColor: "bg-emerald-500" },
    { name: "Wallet", icon: CreditCard, bgColor: "bg-amber-500" },
    { name: "Maps", icon: Plane, bgColor: "bg-violet-500" },
    { name: "Clock", icon: Settings, bgColor: "bg-sky-500" },
    { name: "Books", icon: Brain, bgColor: "bg-fuchsia-500" },
    { name: "Voice", icon: Users, bgColor: "bg-slate-500" },
    { name: "Games", icon: Code, bgColor: "bg-stone-500" },
    { name: "Camera", icon: Users, bgColor: "bg-zinc-500" },
    { name: "Music", icon: Heart, bgColor: "bg-pink-500" },
    { name: "Photos", icon: Users, bgColor: "bg-green-500" },
    { name: "Calendar", icon: Calendar, bgColor: "bg-orange-500" },
    { name: "Settings", icon: Settings, bgColor: "bg-gray-600" },
    { name: "Home", icon: Home, bgColor: "bg-teal-500" },
    { name: "Safari", icon: Code, bgColor: "bg-blue-600" },
    { name: "Messages", icon: Mail, bgColor: "bg-green-600" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-start pt-4">
      <div className="grid grid-cols-4 gap-4 px-4">
        {apps.map((app, index) => (
          <GenericAppIcon
            key={index}
            name={app.name}
            icon={app.icon}
            bgColor={app.bgColor}
          />
        ))}
      </div>
    </div>
  );
};
