"use client";

import React from "react";
import { motion } from "framer-motion";
import HoverCard from "./HoverCard";

interface MinimalStatProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
}

const MinimalStat: React.FC<MinimalStatProps> = ({
  value,
  label,
  description,
  icon,
  trend,
  trendValue
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-green-500";
      case "down": return "text-red-500";
      case "stable": return "text-gray-500";
      default: return "text-gray-500";
    }
  };

  const hoverContent = (
    <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl max-w-xs">
      {description && (
        <p className="text-sm text-gray-300 mb-2">{description}</p>
      )}
      {trend && trendValue && (
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-400">Tendencia:</span>
          <span className={`text-xs font-medium ${getTrendColor()}`}>
            {trend === "up" ? "↗" : trend === "down" ? "↘" : "→"} {trendValue}
          </span>
        </div>
      )}
      {/* Flecha del tooltip */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900 rotate-45" />
    </div>
  );

  return (
    <HoverCard
      hoverContent={description || trend ? hoverContent : null}
      className="group cursor-help"
      delay={0.1}
    >
      <motion.div
        whileHover={{ y: -2 }}
        className="text-center p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 border border-gray-100 hover:border-red-200 hover:shadow-sm"
      >
        {icon && (
          <div className="flex justify-center mb-2 text-red-500 group-hover:text-red-600 transition-colors">
            {icon}
          </div>
        )}
        <div className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
          {value}
        </div>
        <div className="text-sm text-gray-600 mt-1">
          {label}
        </div>
      </motion.div>
    </HoverCard>
  );
};

export default MinimalStat;
