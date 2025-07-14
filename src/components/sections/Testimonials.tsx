"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María Fernanda López",
      role: "CEO",
      company: "TechStart Solutions",
      content: "Agencia Nova transformó completamente nuestra estrategia de marketing digital. En solo 3 meses aumentamos nuestras ventas en 280% y el ROI superó todas las expectativas. La atención personalizada es excepcional.",
      avatar: "MF",
      rating: 5,
      results: "280% aumento ventas",
      stats: {
        leads: "45 → 320",
        conversion: "12% → 35%",
        roi: "280% aumento"
      }
    },
    {
      name: "Carlos Mendoza",
      role: "Director Comercial", 
      company: "EcoTech Argentina",
      content: "La metodología de Agencia Nova es excepcional. Su enfoque basado en datos nos ayudó a identificar oportunidades que nunca habríamos visto. Resultados desde la primera semana, equipo muy profesional.",
      avatar: "CM",
      rating: 5,
      results: "150% más leads",
      stats: {
        leads: "150% aumento",
        cost: "40% reducción",
        time: "60% menos"
      }
    },
    {
      name: "Ana Rodriguez",
      role: "Fundadora",
      company: "HealthPlus",
      content: "Profesionales de primer nivel. No solo ejecutan campañas, sino que educan y empoderan a nuestro equipo interno. Una verdadera alianza estratégica para el crecimiento.",
      avatar: "AR",
      stats: {
        leads: "200% aumento",
        patients: "125% más",
        revenue: "340% crecimiento"
      }
    }
  ];

  const caseStudies = [
    {
      category: "E-commerce Fashion",
      icon: "👗",
      challenge: "Baja conversión en campañas digitales",
      solution: "Implementamos funnels inteligentes con retargeting avanzado",
      results: {
        sales: "+420%",
        traffic: "+250%",
        cac: "-35%"
      },
      time: "4 meses",
      color: "from-red-500 to-orange-500"
    },
    {
      category: "SaaS B2B",
      icon: "💻",
      challenge: "Leads de baja calidad y ciclos de venta largos",
      solution: "Scoring predictivo de leads y automatización de nurturing",
      results: {
        qualified: "+380%",
        cycle: "-45%",
        roi: "+600%"
      },
      time: "6 meses",
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Servicios Financieros",
      icon: "🏦",
      challenge: "Regulaciones estrictas y audiencia específica",
      solution: "Compliance automation y targeting ultra-específico",
      results: {
        compliance: "+220%",
        approval: "+90%",
        cost: "-50%"
      },
      time: "5 meses",
      color: "from-red-600 to-orange-600"
    }
  ];

  return (
    <section id="casos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              clientes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados reales de empresas que confiaron en nosotros para acelerar su crecimiento
          </p>
        </motion.div>

        {/* Testimonials Grid - Mejorado con más interactividad */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Quote className="w-8 h-8 text-red-300 mb-4 group-hover:text-red-400 transition-colors duration-300" />
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">{testimonial.content}</p>
                  
                  {/* Results highlight */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {testimonial.results}
                      </div>
                      <div className="text-sm text-green-700">Resultado obtenido</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(testimonial.stats).map(([key, value]) => (
                      <motion.div 
                        key={key} 
                        className="bg-gray-50 p-3 rounded-lg group-hover:bg-red-50 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-sm font-bold text-red-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Case Studies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Casos de{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Éxito
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados medibles que demuestran el poder de nuestras estrategias
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${caseStudy.color}`} />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{caseStudy.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{caseStudy.category}</CardTitle>
                      <CardDescription className="text-sm">Tiempo: {caseStudy.time}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-medium text-sm text-red-600 mb-1">Desafío:</h5>
                    <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm text-blue-600 mb-1">Solución:</h5>
                    <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm text-green-600 mb-2">Resultados:</h5>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(caseStudy.results).map(([key, value]) => (
                        <div key={key} className="text-center bg-gray-50 p-2 rounded">
                          <div className={`text-sm font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
