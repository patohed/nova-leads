"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import { Button } from "./button";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de hacer scroll hacia abajo un poco
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollY > windowHeight * 0.3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Quiero saber más sobre sus servicios de generación de leads. ¿Podrían ayudarme?");
    window.open(`https://wa.me/5491112345678?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+541112345678', '_self');
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">¿Necesitas ayuda?</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsExpanded(false)}
                    className="h-6 w-6 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-sm text-gray-600 mb-6">
                  Obtén una consulta gratuita y descubre cómo podemos ayudarte a generar más leads.
                </p>
                
                <div className="space-y-3">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                  
                  <Button
                    onClick={handleCallClick}
                    variant="outline"
                    className="w-full border-red-200 text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    📞 Llamar ahora
                  </Button>
                  
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center gap-2"
                  >
                    Formulario
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main floating button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-16 w-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-2xl border-4 border-white relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isExpanded ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <MessageCircle className="w-6 h-6 text-white" />
                )}
              </motion.div>
              
              {/* Pulsing animation */}
              {!isExpanded && (
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                />
              )}
            </Button>
            
            {/* Badge notification */}
            {!isExpanded && (
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
              >
                !
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
