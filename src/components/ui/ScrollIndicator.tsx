"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Nosotros" },
  { id: "casos", label: "Casos" },
  { id: "contacto", label: "Contacto" }
];

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      // Calcular progreso de scroll
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Detectar sección activa
      const currentPosition = window.scrollY + 100; // Offset para mejor detección
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= currentPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    // Ejecutar inmediatamente y en scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70; // Altura del header fijo actualizada
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Scroll Indicator Sidebar con mejor contraste */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-gray-300/70 ring-1 ring-black/5">
          <div className="space-y-4">
            {/* Progress bar con mejor visibilidad */}
            <div className="relative w-1.5 h-28 bg-gray-300 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-red-500 to-orange-500 rounded-full"
                style={{ height: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 rounded-full pointer-events-none" />
            </div>

            {/* Section dots con mayor contraste */}
            <div className="space-y-2.5">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                
                return (
                  <div key={section.id} className="relative group">
                    <motion.button
                      onClick={() => scrollToSection(section.id)}
                      className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div 
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border ${
                          isActive 
                            ? 'bg-gradient-to-r from-red-500 to-orange-500 border-red-400 scale-125 shadow-lg shadow-red-300/50' 
                            : 'bg-gray-200 border-gray-400 group-hover:bg-red-100 group-hover:border-red-400 group-hover:scale-110 shadow-sm'
                        }`} 
                      />
                    </motion.button>

                    {/* Tooltip con mejor contraste */}
                    <div className="absolute left-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg border ${
                        isActive 
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white border-red-400' 
                          : 'bg-gray-900 text-white border-gray-700'
                      }`}>
                        {section.label}
                        <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-1.5 h-1.5 rotate-45 ${
                          isActive 
                            ? 'bg-red-500' 
                            : 'bg-gray-900'
                        }`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button con mejor contraste */}
      {scrollProgress > 20 && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-white border-2 border-gray-300 text-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white hover:border-red-400"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </>
  );
};

export default ScrollIndicator;
