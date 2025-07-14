"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Shield, 
  Users, 
  Zap,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Escalabilidad Garantizada",
      description: "Sistemas diseñados para crecer contigo. Desde 10 hasta 10,000 leads mensuales sin perder calidad.",
      stat: "500% Crecimiento Promedio",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "ROI Optimizado",
      description: "Cada peso invertido genera retornos medibles. Optimización continua para maximizar tu inversión.",
      stat: "4.2x ROI Promedio",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Resultados Inmediatos",
      description: "Primeros leads calificados en las primeras 48 horas. Sin esperas largas ni procesos complejos.",
      stat: "48h Primeros Resultados",
      color: "from-red-600 to-orange-600"
    },
    {
      icon: Target,
      title: "Precisión Total",
      description: "Targeting avanzado que llega exactamente a tu audiencia ideal. Menos desperdicio, más conversiones.",
      stat: "92% Precisión de Targeting",
      color: "from-orange-600 to-red-600"
    }
  ];

  const stats = [
    { value: "98%", label: "Satisfacción del Cliente" },
    { value: "2.5M+", label: "Leads Generados" },
    { value: "180+", label: "Clientes Activos" },
    { value: "5 años", label: "Experiencia" }
  ];

  const technologies = [
    "🔍 Google", "📘 Meta", "💼 LinkedIn", "🎵 TikTok", "📺 YouTube", "🧠 HubSpot"
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              NovaLeads?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            No somos una agencia más. Somos especialistas en transformar datos en crecimiento exponencial. 
            Nuestro enfoque único combina inteligencia artificial, análisis predictivo y estrategias probadas.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid - Mejorada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 overflow-hidden relative bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-red-600 transition-colors duration-300">{reason.title}</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">{reason.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className={`flex items-center gap-2 text-2xl font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                    <TrendingUp className="w-6 h-6 text-green-500" />
                    {reason.stat}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">Somos Partners Certificados de</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              La Tecnología que Nos{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Diferencia
              </span>
            </h3>
            <p className="text-gray-600">
              Combinamos las últimas tendencias en marketing digital con tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Targeting de Precisión", desc: "94% Precisión" },
              { icon: Zap, title: "Velocidad de Implementación", desc: "48h Primeros Leads" },
              { icon: TrendingUp, title: "Análisis Predictivo", desc: "340% Incremento Promedio" },
              { icon: Users, title: "Optimización Continua", desc: "24/7 Monitoreo" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            ¿Listo para Revolucionar tu Marketing?
          </h3>
          <p className="text-gray-600 mb-6">
            Únete a más de 180 empresas que ya multiplicaron sus resultados con nosotros
          </p>
          <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
            Comenzar Ahora - Sin Riesgo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
