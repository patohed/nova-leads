"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Trophy, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MinimalStat from "@/components/ui/MinimalStat";
import HoverCard from "@/components/ui/HoverCard";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { 
      value: "+340%", 
      label: "Crecimiento Promedio", 
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Aumento promedio en ventas obtenido por nuestros clientes en los primeros 6 meses",
      trend: "up",
      trendValue: "+20% vs período anterior"
    },
    { 
      value: "150+", 
      label: "Campañas Exitosas", 
      icon: <Users className="w-5 h-5" />,
      description: "Campañas de marketing digital ejecutadas con resultados medibles y exitosos",
      trend: "up",
      trendValue: "+12% vs trimestre anterior"
    },
    { 
      value: "95%", 
      label: "Satisfacción Cliente", 
      icon: <Trophy className="w-5 h-5" />,
      description: "Porcentaje de clientes que renuevan nuestros servicios y recomiendan la agencia",
      trend: "stable",
      trendValue: "Consistente en el tiempo"
    },
  ];

  const benefits = [
    {
      title: "Estrategias personalizadas",
      description: "Desarrollamos estrategias de marketing digital únicas para tu negocio, basadas en datos y análisis profundo de tu mercado objetivo."
    },
    {
      title: "ROI positivo garantizado",
      description: "Nuestros clientes ven resultados medibles en las primeras 4 semanas, con un promedio de 3:1 de retorno de inversión."
    },
    {
      title: "Soporte continuo",
      description: "Acompañamiento constante con reportes detallados, optimizaciones semanales y ajustes en tiempo real de tus campañas."
    },
    {
      title: "Auditoría gratuita incluida",
      description: "Análisis completo de tu presencia digital actual, competencia y oportunidades de mercado sin costo adicional."
    }
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50" />
      
      {/* Enhanced geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-red-400/15 to-orange-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-orange-400/15 to-red-400/15 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {mounted && Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Proof Badges */}
            {/* Main Headline */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Impulsa tu{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  marketing
                </span>
                {" "}y{" "}
                <span className="relative">
                  vende más
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                  />
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
              >
                Somos tu agencia de marketing digital especializada en estrategias que convierten visitantes en clientes reales y fieles.
              </motion.p>
            </div>

            {/* Benefits List con Hover Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <HoverCard
                    hoverContent={
                      <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl max-w-xs">
                        <p className="text-sm">{benefit.description}</p>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900 rotate-45" />
                      </div>
                    }
                    className="flex items-center gap-3 cursor-help group"
                    delay={0.1}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:text-green-600 transition-colors" />
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                      {benefit.title}
                    </span>
                  </HoverCard>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons Minimalistas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <HoverCard
                hoverContent={
                  <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl text-sm">
                    Auditoría gratuita + estrategia personalizada
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900 rotate-45" />
                  </div>
                }
                delay={0.1}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 group"
                  onClick={() => {
                    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre los servicios de Agencia Nova. ¿Podrían ayudarme?");
                    window.open(`https://wa.me/5491112345678?text=${message}`, '_blank');
                  }}
                >
                  Empezar ahora
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </HoverCard>
              
              <HoverCard
                hoverContent={
                  <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl text-sm">
                    Ver casos reales de éxito
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900 rotate-45" />
                  </div>
                }
                delay={0.1}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 px-6 py-3 group"
                  onClick={() => document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Ver casos
                </Button>
              </HoverCard>
            </motion.div>

            {/* Urgency element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-4 flex items-center gap-3"
            >
              <Clock className="w-6 h-6 flex-shrink-0" />
              <div className="text-sm">
                <strong>Oferta limitada:</strong> Los primeros 10 clientes del mes reciben 
                <strong> setup gratuito valorado en $200.000</strong>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Minimal Stats */}
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <MinimalStat
                    value={stat.value}
                    label={stat.label}
                    description={stat.description}
                    icon={stat.icon}
                    trend={stat.trend as "up" | "down" | "stable"}
                    trendValue={stat.trendValue}
                  />
                </motion.div>
              ))}
            </div>

            {/* Animated visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-6xl mb-4"
                >
                  🎯
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Garantía de Resultados
                </h3>
                <p className="text-gray-600">
                  Si no ves resultados en 30 días, devolvemos el 100% de tu inversión
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
