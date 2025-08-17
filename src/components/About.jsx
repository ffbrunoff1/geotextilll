import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, TrendingUp, Award, Shield, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precisão Técnica',
      description: 'Cada projeto é executado com a máxima precisão técnica, seguindo rigorosamente as normas e especificações da engenharia rodoviária.'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Utilizamos apenas materiais certificados e tecnologias comprovadas para garantir a durabilidade e eficiência de nossas soluções.'
    },
    {
      icon: Zap,
      title: 'Inovação Constante',
      description: 'Mantemos-nos na vanguarda da tecnologia em geossintéticos, sempre buscando as melhores soluções para nossos clientes.'
    }
  ]

  const achievements = [
    { number: '15+', text: 'Anos no mercado de geossintéticos' },
    { number: '500+', text: 'Quilômetros de rodovias atendidos' },
    { number: '100%', text: 'Clientes satisfeitos com nossas soluções' },
    { number: '50+', text: 'Projetos de grande porte executados' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
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
            <Users className="h-5 w-5 text-primary-600 mr-2" />
            <span className="text-primary-700 font-medium">Sobre a Geotextilll</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Especialistas em 
            <span className="gradient-text"> Geossintéticos Road</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de 15 anos, a Geotextilll é referência em soluções avançadas para 
            infraestrutura rodoviária, oferecendo tecnologias inovadoras em geossintéticos 
            que garantem durabilidade, segurança e sustentabilidade.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-900">
                Nossa Especialidade em Road
              </h3>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                A Geotextilll desenvolveu uma expertise única em soluções Road, combinando 
                geossintéticos de alta performance com técnicas avançadas de pavimentação 
                e estabilização de solos.
              </p>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                Nossos produtos são especialmente desenvolvidos para atender às demandas 
                específicas da construção e manutenção de rodovias, oferecendo resistência 
                superior, flexibilidade e durabilidade em condições extremas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-secondary-600 text-sm leading-tight">
                    {achievement.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-primary-600 to-accent-500 rounded-3xl p-8 shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-3xl"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="text-center text-white mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Award className="h-16 w-16 mx-auto mb-4 text-white/90" />
                  <h4 className="text-2xl font-bold mb-2">Certificações e Qualidade</h4>
                  <p className="text-white/90">
                    Todos os nossos produtos seguem as mais rigorosas normas técnicas 
                    internacionais de qualidade.
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-3 gap-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">ISO</div>
                    <div className="text-sm text-white/80">9001</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">ABNT</div>
                    <div className="text-sm text-white/80">Certified</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-white/80">Awards</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">
            Nossos Valores
          </h3>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Princípios que norteiam nossa atuação e garantem a excelência em cada projeto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                <h4 className="text-xl font-bold text-secondary-900 mb-4">
                  {value.title}
                </h4>
                
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}