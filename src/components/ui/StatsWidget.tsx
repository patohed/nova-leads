"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ 
  end, 
  duration = 2, 
  suffix = "", 
  prefix = "" 
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            
            // Easing function for smoother animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
            
            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span id={`counter-${end}`}>
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsWidget = () => {
  const stats = [
    {
      value: 2500,
      suffix: "+",
      label: "Leads Generados Mensualmente",
      icon: "🎯"
    },
    {
      value: 340,
      suffix: "%",
      label: "Crecimiento Promedio",
      icon: "📈"
    },
    {
      value: 180,
      suffix: "+",
      label: "Empresas Confiaron",
      icon: "🏢"
    },
    {
      value: 98,
      suffix: "%",
      label: "Satisfacción del Cliente",
      icon: "⭐"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-2xl mb-2">{stat.icon}</div>
          <motion.div
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatedCounter 
              end={stat.value} 
              suffix={stat.suffix} 
              duration={2.5}
            />
          </motion.div>
          <div className="text-sm text-gray-300 leading-tight">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsWidget;
