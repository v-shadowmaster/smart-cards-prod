import React from "react";
import { SmartCardGrid } from "@/components/ui/SmartCardGrid";

export interface SmartCardProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  backgroundColor: string;
  textColor?: string;
  size?: "small" | "large";
  onClick?: () => void;
  className?: string;
}

const SmartCard: React.FC<SmartCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  backgroundColor,
  textColor = "text-white",
  size = "small",
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl ${backgroundColor} ${textColor} ${className} cursor-pointer`}
    >
      <div className="flex items-center space-x-3">
        <Icon className="h-6 w-6" />
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SmartCard;
