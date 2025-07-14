'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, Target, TrendingUp, BarChart3, Users, Zap, Award } from 'lucide-react'

interface AccordionItem {
  id: string
  title: string
  description: string
  features: string[]
}

const accordionData: AccordionItem[] = [
  {
    id: 'strategy',
    title: 'Estrategias con propósito',
    description: 'Cada acción que diseñamos responde a un objetivo claro. Nada se improvisa.',
    features: ['Análisis predictivo con IA', 'Segmentación avanzada', 'ROI optimizado']
  },
  {
    id: 'content',
    title: 'Contenido que convierte',
    description: 'Creamos piezas alineadas con tu marca para generar confianza, visibilidad y ventas.',
    features: ['Copy persuasivo', 'Diseño visual impactante', 'Storytelling efectivo']
  },
  {
    id: 'results',
    title: 'Resultados medibles',
    description: 'Cada campaña se mide, analiza y optimiza para maximizar tu inversión.',
    features: ['Dashboard en tiempo real', 'Reportes detallados', 'Métricas de conversión']
  }
]

const WhyChooseUs = () => {
  const [activeItem, setActiveItem] = useState<string>('strategy')

  const getIcon = (id: string) => {
    switch (id) {
      case 'strategy': return <Target className="w-6 h-6" />
      case 'content': return <TrendingUp className="w-6 h-6" />
      case 'results': return <BarChart3 className="w-6 h-6" />
      default: return <Target className="w-6 h-6" />
    }
  }

  const getFeatureIcon = (index: number) => {
    const icons = [
      <Users key="users" className="w-5 h-5" />, 
      <Zap key="zap" className="w-5 h-5" />, 
      <Award key="award" className="w-5 h-5" />
    ]
    return icons[index] || <Users key="default" className="w-5 h-5" />
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen/Ilustración */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-48 h-48 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <BarChart3 className="w-24 h-24 text-white" />
                </motion.div>
              </div>
              
              {/* Elementos decorativos flotantes */}
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-br from-red-400 to-orange-400 rounded-full"
                style={{ left: '20%', top: '15%' }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-br from-red-400 to-orange-400 rounded-full"
                style={{ left: '75%', top: '25%' }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-br from-red-400 to-orange-400 rounded-full"
                style={{ left: '15%', top: '70%' }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.4 }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-br from-red-400 to-orange-400 rounded-full"
                style={{ left: '85%', top: '65%' }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: 0.6 }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-br from-red-400 to-orange-400 rounded-full"
                style={{ left: '60%', top: '80%' }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-br from-red-400 to-orange-400 rounded-full"
                style={{ left: '40%', top: '10%' }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 4.2, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h4 
                className="text-red-600 font-semibold text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                ¿Por qué elegirnos?
              </motion.h4>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Impulsamos tu crecimiento digital con{' '}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  estrategias que venden
                </span>
              </motion.h2>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <Card 
                  key={item.id}
                  className={`overflow-hidden transition-all duration-300 ${
                    activeItem === item.id 
                      ? 'border-red-500 shadow-lg shadow-red-500/20' 
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full p-6 justify-between text-left h-auto ${
                        activeItem === item.id ? 'bg-gradient-to-r from-red-50 to-orange-50' : ''
                      }`}
                      onClick={() => setActiveItem(item.id)}
                      onMouseEnter={() => setActiveItem(item.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl transition-colors ${
                          activeItem === item.id 
                            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {getIcon(item.id)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: activeItem === item.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </Button>

                    <AnimatePresence>
                      {activeItem === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {item.description}
                            </p>
                            
                            {/* Features relacionadas */}
                            <div className="grid gap-3">
                              {item.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={feature}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.1 }}
                                  className="flex items-center space-x-3 p-3 rounded-lg bg-white border border-gray-100"
                                >
                                  <div className="text-red-500">
                                    {getFeatureIcon(featureIndex)}
                                  </div>
                                  <span className="font-medium text-gray-700">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
