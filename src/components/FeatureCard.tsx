
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  color = "text-trading-blue",
}) => {
  return (
    <div 
      className={cn(
        "group p-6 rounded-xl feature-card-gradient border border-white/50 shadow-feature transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className={cn("rounded-full p-3 inline-flex w-12 h-12 items-center justify-center mb-4 transition-all", 
        `${color.replace('text-', 'bg-')}/10 ${color}`
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-trading-gray-medium text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
