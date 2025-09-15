"use client";
import React from "react";


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
      className={`p-4 rounded-xl ${backgroundColor} ${textColor} ${className} cursor-pointer flex flex-col items-center justify-center`}
      style={size === "large"
        ? { minHeight: 120 }
        : { minHeight: 90 }
      }
    >
      <Icon className="h-6 w-6 mb-2" />
      <h3 className="font-bold text-center">{title}</h3>
      <p className="text-sm text-center">{subtitle}</p>
    </div>
  );
};

export default SmartCard;
