import React from "react";
import SmartCard, { SmartCardProps } from "../home/SmartCardProps";
//import SmartCard from "../home/smartcards";
//import PropsSmartcards from "../home/propsSmartcards";
import { Brain, Plane, Heart, Home, Calendar, Users, Code } from "./icons";

interface CardItem {
  title: string;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  backgroundColor: string;
  textColor?: string;
  size?: "small" | "large";
}

export const SmartCardGrid: React.FC = () => {
  const handleCardClick = (cardName: string) => {
    console.log(`${cardName} card clicked`);
  };

  const cards: CardItem[] = [
    { title: "AI Assistant", subtitle: "Ready to help with anything", icon: Brain, backgroundColor: "bg-gray-700", size: "large" },
    { title: "Travel", subtitle: "Book trips", icon: Plane, backgroundColor: "bg-blue-500" },
    { title: "Health", subtitle: "Wellness", icon: Heart, backgroundColor: "bg-red-500" },
    { title: "Smart Home", subtitle: "Control devices", icon: Home, backgroundColor: "bg-green-500" },
    { title: "Cal", subtitle: "Calendar", icon: Calendar, backgroundColor: "bg-orange-500" },
    { title: "Finance", subtitle: "Banking", icon: Home, backgroundColor: "bg-indigo-500" },
    { title: "Settings", subtitle: "Privacy", icon: Home, backgroundColor: "bg-gray-600" },
    { title: "Social", subtitle: "Connect", icon: Users, backgroundColor: "bg-cyan-400", textColor: "text-gray-900" },
    { title: "Dev Tools", subtitle: "Code", icon: Code, backgroundColor: "bg-gray-700" },
  ];

  return (
    <div className="w-full h-full bg-gray-900 p-4 overflow-y-auto">
      {/* Render first card separately if large */}
      {cards
        .filter((card) => card.size === "large")
        .map((card, index) => (
          <div className="mb-4" key={index}>
            <SmartCard
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              backgroundColor={card.backgroundColor}
              textColor={card.textColor}
              size={card.size}
              onClick={() => handleCardClick(card.title)}
              className="mb-4"
            />
          </div>
        ))}

      {/* Render the rest of the cards in a grid */}
      <div className="grid grid-cols-2 gap-3">
        {cards
          .filter((card) => !card.size || card.size === "small")
          .map((card, index) => (
            <SmartCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              backgroundColor={card.backgroundColor}
              textColor={card.textColor}
              size={card.size}
              onClick={() => handleCardClick(card.title)}
            />
          ))}
      </div>
    </div>
  );
};
