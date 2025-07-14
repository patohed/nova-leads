"use client";

import React from "react";
import { Zap } from "lucide-react";

const SimpleHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Zap className="h-7 w-7 text-red-500" />
            <span className="font-bold text-lg text-red-600">NovaLeads</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600">Inicio</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600">Servicios</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600">Nosotros</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600">Casos</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600">Contacto</button>
          </nav>
          
          <button className="bg-red-500 text-white text-sm px-5 py-2 rounded-full">
            Empezar
          </button>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
