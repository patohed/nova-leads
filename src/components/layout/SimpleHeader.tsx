"use client";

import React from "react";
import { Rocket } from "lucide-react";

const SimpleHeader = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleContactClick = () => {
    // Ir a WhatsApp directamente
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre los servicios de Agencia Nova. ¿Podrían ayudarme?");
    window.open(`https://wa.me/5491112345678?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Agencia Nova
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("servicios")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection("nosotros")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection("casos")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              Casos
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              Contacto
            </button>
          </nav>
          
          <button 
            onClick={handleContactClick}
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-sm px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Empezar
          </button>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
