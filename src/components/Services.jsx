import React from 'react'
import { motion } from 'framer-motion'
import { 
  Layers, 
  Shield, 
  Droplets, 
  Mountain, 
  Truck, 
  Settings,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Layers,
      title: 'Geotêxteis para Pavimentação',
      description: 'Soluções avançadas em geotêxteis para reforço e separação em pavimentos rodoviários, aumentando a vida útil das estradas.',
      features: [
        'Reforço de base e sub-base',
        'Separação de camadas',
        'Resistência à tração superior',
        'Instalação rápida e eficiente'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Droplets,
      title: 'Sistemas de Drenagem',
      description: 'Geossintéticos especializados para drenagem e filtração, garantindo a estabilidade e durabilidade da infraestrutura.',
      features: [
        'Geodrenos de alta eficiência',
        'Filtração e proteção',
        'Controle de erosão',
        'Sustentabilidade ambiental'
      ],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Mountain,
      title: 'Estabilização de Taludes',
      description: 'Tecnologias Road para estabilização de encostas e taludes, prevenindo erosão e garantindo segurança viária.',
      features: [
        'Geogrids de reforço',
        'Contenção de encostas',
        'Proteção contra erosão',
        'Soluções personalizadas'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Impermeabilização',
      description: 'Geomembranas e sistemas de impermeabilização para proteção total contra infiltrações e umidade.',
      features: [
        'Geomembranas HDPE/LDPE',
        'Vedação completa',
        'Resistência UV',
        'Longa durabilidade'
      ],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Truck,
      title: 'Reforço de Pavimentos',
      description: 'Soluções Road para reforço estrutural de pavimentos existentes, aumentando capacidade de carga.',
      features: [
        'Geogrids de alta resistência',
        'Reabilitação de pavimentos',
        'Redução de custos',
        'Tecnologia comprovada'
      ],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Settings,
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada em projetos de geossintéticos, desde dimensionamento até supervisão de obras.',
      features: [
        'Projeto e dimensionamento',
        'Supervisão técnica',
        'Laudos e relatórios',
        'Suporte pós-obra'
      ],
      gradient: 'from-slate-500 to-gray-600'
    }
  ]

  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="h-5 w-5 text-primary-600 mr-2" />
            <span className="text-primary-700 font-medium">Nossos Serviços</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Soluções Completas em 
            <span className="gradient-text"> Geossintéticos</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de produtos e serviços especializados 
            para infraestrutura rodoviária, com tecnologia Road de ponta.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Card Header */}
                <div className={`h-32 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-black/10"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-white" />
                  </div>
                  
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-4 w-4 text-accent-500 flex-shrink-0" />
                        <span className="text-sm text-secondary-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={handleContactClick}
                    className="w-full mt-6 bg-secondary-100 hover:bg-primary-600 text-secondary-700 hover:text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="bg-gradient-to-br from-secondary-900 to-primary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="bg-pattern h-full w-full"></div>
          </div>

          <div className="relative z-10">
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Precisa de uma Solução Personalizada?
            </motion.h3>
            
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Nossa equipe de especialistas está pronta para desenvolver a solução 
              ideal para seu projeto rodoviário.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={handleContactClick}
                className="bg-white text-secondary-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              
              <motion.a
                href="tel:+5544991040774"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Falar com Especialista
              </motion.a>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 bg-primary-400/30 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}