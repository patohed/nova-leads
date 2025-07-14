"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Zap, 
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StatsWidget from "@/components/ui/StatsWidget";

const Footer = () => {
  const contactInfo = {
    email: "contacto@agencianova.com.ar",
    emailSecondary: "hola@agencianova.com.ar",
    phone: "+54 11 4567-8900",
    whatsapp: "+54 9 11 4567-8900",
    address: "Av. Santa Fe 1234, Piso 8°, C1059 CABA, Buenos Aires, Argentina"
  };

  const services = [
    "Generación de Leads",
    "Performance Marketing",
    "Automatización",
    "Análisis y Optimización",
    "Consultoría Estratégica"
  ];

  const company = [
    "Nosotros",
    "Casos de Éxito",
    "Blog",
    "Recursos",
    "Contacto"
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const reasons = [
    "🚀 Resultados garantizados en 30 días",
    "📊 Transparencia total en reportes",
    "🎯 Soporte dedicado 24/7",
    "⚡ Sin contratos largos, solo resultados"
  ];

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ¿Listo para{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Multiplicar
              </span>{" "}
              tus Leads?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
              Conversemos sobre cómo podemos acelerar el crecimiento de tu negocio con leads calificados y resultados medibles.
            </p>
            
            {/* Stats Widget */}
            <StatsWidget />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                  <CardDescription className="text-gray-300">
                    Estamos aquí para ayudarte a transformar tu estrategia digital
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium">Oficina Principal</h4>
                      <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-300 text-sm">
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors">
                          {contactInfo.email}
                        </a>
                      </p>
                      <p className="text-gray-300 text-sm">
                        <a href={`mailto:${contactInfo.emailSecondary}`} className="hover:text-blue-400 transition-colors">
                          {contactInfo.emailSecondary}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium">Teléfono</h4>
                      <p className="text-gray-300 text-sm">
                        <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-400 transition-colors">
                          {contactInfo.phone}
                        </a>
                      </p>
                      <p className="text-gray-300 text-sm">
                        <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} className="hover:text-blue-400 transition-colors">
                          WhatsApp: {contactInfo.whatsapp}
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">¿Por qué elegirnos?</CardTitle>
                  <CardDescription className="text-gray-300">
                    Ventajas competitivas que nos diferencian
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reasons.map((reason, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-lg">{reason.split(' ')[0]}</span>
                        <span className="text-gray-300 text-sm">{reason.split(' ').slice(1).join(' ')}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
                      Solicitar Análisis Gratuito
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-center text-sm text-gray-400 mt-2">
                      Respuesta garantizada en menos de 24 horas
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Agencia Nova
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Somos una agencia de marketing digital especializada en estrategias que convierten. 
                Creamos campañas personalizadas, optimizamos procesos y entregamos resultados medibles para impulsar tu crecimiento.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#servicios" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-4">Contacto Rápido</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📧 {contactInfo.email}</p>
                <p>📱 {contactInfo.phone}</p>
                <p>🗺️ Buenos Aires, Argentina</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Agencia Nova. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Política de Privacidad
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Términos de Servicio
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Cookies
                </a>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-xs">
                CUIT: 30-12345678-9 | Registro: Buenos Aires, Argentina
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
