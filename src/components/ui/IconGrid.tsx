import React from "react";
//import GenericAppIcon from "./GenericAppIcon";
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
} from "./icons";

interface AppItem {
  name?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  component?: React.ComponentType<any>;
  bgColor?: string;
}

export const IconGrid: React.FC = () => {
  const apps: AppItem[] = [
    { name: "Mail", icon: Users, bgColor: "bg-blue-500" },
    { name: "Notes", icon: Users, bgColor: "bg-yellow-500" },
    { name: "Weather", icon: Code, bgColor: "bg-red-500" },
    { name: "App Store", icon: Users, bgColor: "bg-indigo-500" },
    { name: "Files", icon: Code, bgColor: "bg-cyan-500" },
    { name: "Health", icon: Heart, bgColor: "bg-emerald-500" },
    { name: "Wallet", icon: CreditCard, bgColor: "bg-amber-500" },
    { name: "Maps", icon: Plane, bgColor: "bg-violet-500" },
    { name: "Timer", icon: Settings, bgColor: "bg-sky-500" },
    { name: "Books", icon: Brain, bgColor: "bg-fuchsia-500" },
    { name: "Voice", icon: Users, bgColor: "bg-slate-500" },
    { name: "Games", icon: Code, bgColor: "bg-stone-500" },
    { name: "Utils", icon: Users, bgColor: "bg-zinc-500" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-start pt-4">
      <div className="grid grid-cols-4 gap-4 px-4">
        {apps.map((app, index) => {
          // If a custom component exists, render it
          if (app.component) {
            const AppComponent = app.component;
            return <AppComponent key={index} />;
          }

          // Otherwise, render the generic app icon
        //   if (app.icon && app.name && app.bgColor) {
        //     return (
        //       <GenericAppIcon
        //         key={index}
        //         name={app.name}
        //         icon={app.icon}
        //         bgColor={app.bgColor}
        //       />
        //     );
        //   }
        

          return null; // Safety fallback
        })}
      </div>
    </div>
  );
};
