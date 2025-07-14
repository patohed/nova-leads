"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { 
  Target, 
  Zap, 
  Brain, 
  BarChart3, 
  Users, 
  Cog, 
  ArrowRight,
  CheckCircle,
  Play,
  Pause
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: Target,
      title: "Generación de Leads Inteligente",
      description: "Transformamos visitantes en leads calificados usando IA y análisis predictivo. Aumentamos tu base de clientes potenciales en un 400% promedio.",
      features: [
        "Scoring automático de leads",
        "Segmentación avanzada", 
        "Nurturing personalizado"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Campañas de Performance",
      description: "Optimizamos cada peso invertido en publicidad digital. Campañas basadas en datos que entregan resultados medibles y escalables.",
      features: [
        "ROI optimizado",
        "Targeting de precisión",
        "Análisis en tiempo real"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Automatización de Marketing",
      description: "Automatizamos procesos repetitivos para escalar tu negocio. Desde el primer contacto hasta el cierre, todo funciona sin intervención manual.",
      features: [
        "Workflows inteligentes",
        "Secuencias de email",
        "CRM integrado"
      ],
      color: "from-red-600 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Análisis y Optimización",
      description: "Medimos todo lo que importa. Dashboards en tiempo real que te permiten tomar decisiones basadas en datos concretos.",
      features: [
        "Métricas clave",
        "Reportes automáticos",
        "Optimización continua"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Users,
      title: "Estrategia de Marketing Digital",
      description: "Desarrollamos estrategias personalizadas que se alinean perfectamente con tus objetivos comerciales y mercado objetivo.",
      features: [
        "Análisis de mercado",
        "Definición de KPIs",
        "Roadmap estratégico"
      ],
      color: "from-red-500 to-orange-400"
    },
    {
      icon: Cog,
      title: "Integración de Herramientas",
      description: "Configuramos y gestionamos herramientas publicitarias sofisticadas. Manejamos las complejidades técnicas para que tú te enfoques en tu negocio.",
      features: [
        "Setup completo",
        "Mantenimiento técnico",
        "Optimización continua"
      ],
      color: "from-orange-500 to-red-400"
    }
  ];

  // Duplicamos los servicios para el efecto infinito
  const extendedServices = [...services, ...services, ...services];

  useEffect(() => {
    if (mounted && isPlaying) {
      controls.start({
        x: "-100%",
        transition: {
          duration: 35, // Aumentado de 25 a 35 para mejor legibilidad
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [mounted, isPlaying, controls]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Soluciones integrales diseñadas para maximizar tu generación de leads y acelerar el crecimiento de tu negocio
          </p>
          
          {/* Play/Pause Control */}
          <motion.button
            onClick={togglePlayPause}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-red-200/50 rounded-full px-4 py-2 hover:bg-white/90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-gray-700">Pausar carrusel</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-gray-700">Reproducir carrusel</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden mb-16">
          <motion.div
            className="flex gap-6"
            animate={controls}
            style={{ width: `${extendedServices.length * 400}px` }}
            onHoverStart={() => setIsPlaying(false)}
            onHoverEnd={() => setIsPlaying(true)}
          >
            {extendedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={`${service.title}-${index}`}
                  className="min-w-[380px] w-[380px]"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-red-600 font-medium cursor-pointer"
                      >
                        <span className="text-sm">Saber más</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para acelerar tu crecimiento?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Obtén una auditoría gratuita de tus campañas actuales y descubre cómo podemos mejorar tus resultados
          </p>
          <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
            Obtener Auditoría Gratuita
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
