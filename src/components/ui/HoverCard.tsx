"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  hoverContent: React.ReactNode;
  className?: string;
  hoverClassName?: string;
  trigger?: "hover" | "click" | "both";
  placement?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

const HoverCard: React.FC<HoverCardProps> = ({
  children,
  hoverContent,
  className = "",
  hoverClassName = "",
  trigger = "hover",
  placement = "top",
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const showContent = () => {
    if (trigger === "hover" || trigger === "both") {
      setIsVisible(true);
    }
  };

  const hideContent = () => {
    if (trigger === "hover" || trigger === "both") {
      setIsVisible(false);
    }
  };

  const toggleContent = () => {
    if (trigger === "click" || trigger === "both") {
      setIsClicked(!isClicked);
    }
  };

  const shouldShow = trigger === "click" ? isClicked : isVisible;

  const getPlacementStyles = () => {
    switch (placement) {
      case "top":
        return {
          initial: { opacity: 0, y: 10, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 10, scale: 0.95 },
          className: "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
        };
      case "bottom":
        return {
          initial: { opacity: 0, y: -10, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -10, scale: 0.95 },
          className: "top-full left-1/2 transform -translate-x-1/2 mt-2"
        };
      case "left":
        return {
          initial: { opacity: 0, x: 10, scale: 0.95 },
          animate: { opacity: 1, x: 0, scale: 1 },
          exit: { opacity: 0, x: 10, scale: 0.95 },
          className: "right-full top-1/2 transform -translate-y-1/2 mr-2"
        };
      case "right":
        return {
          initial: { opacity: 0, x: -10, scale: 0.95 },
          animate: { opacity: 1, x: 0, scale: 1 },
          exit: { opacity: 0, x: -10, scale: 0.95 },
          className: "left-full top-1/2 transform -translate-y-1/2 ml-2"
        };
      default:
        return {
          initial: { opacity: 0, y: 10, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 10, scale: 0.95 },
          className: "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
        };
    }
  };

  const placementConfig = getPlacementStyles();

  return (
    <div 
      className={cn("relative inline-block", className)}
      onMouseEnter={showContent}
      onMouseLeave={hideContent}
      onClick={toggleContent}
    >
      {children}
      
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            initial={placementConfig.initial}
            animate={placementConfig.animate}
            exit={placementConfig.exit}
            transition={{ 
              duration: 0.2, 
              delay: delay,
              ease: "easeOut"
            }}
            className={cn(
              "absolute z-50 pointer-events-none",
              placementConfig.className,
              hoverClassName
            )}
          >
            {hoverContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverCard;
