import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Serviços', href: '#services' },
        { name: 'Contato', href: '#contact' }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Geotêxteis Road', href: '#services' },
        { name: 'Sistemas de Drenagem', href: '#services' },
        { name: 'Estabilização de Taludes', href: '#services' },
        { name: 'Consultoria Técnica', href: '#services' }
      ]
    },
    {
      title: 'Contato',
      links: [
        { name: 'Padre Lebret 801 G05 Bloco 03', href: '#', icon: MapPin },
        { name: '+55 44 99104-0774', href: 'tel:+5544991040774', icon: Phone },
        { name: 'ffbrunoff@yahoo.com.br', href: 'mailto:ffbrunoff@yahoo.com.br', icon: Mail },
        { name: 'Seg-Sex: 08h às 18h', href: '#', icon: Clock }
      ]
    }
  ]

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-pattern h-full w-full"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.5 5.16-.76 9-4.95 9-10.5V7l-10-5z"/>
                    <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="gradient-text">Geotextilll</span>
                  </h3>
                  <p className="text-sm text-gray-400">
                    Geossintéticos Road
                  </p>
                </div>
              </motion.div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Especialistas em soluções avançadas de geossintéticos para 
                infraestrutura rodoviária, oferecendo tecnologia de ponta 
                e qualidade garantida.
              </p>

              <motion.div
                className="flex items-center space-x-2 text-primary-400"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Atendimento Especializado 24/7
                </span>
              </motion.div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => {
                    const IconComponent = link.icon
                    return (
                      <motion.li
                        key={linkIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + linkIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {link.href.startsWith('#') ? (
                          <button
                            onClick={() => handleNavClick(link.href)}
                            className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors group"
                          >
                            {IconComponent && (
                              <IconComponent className="h-4 w-4 text-primary-400 flex-shrink-0" />
                            )}
                            <span className="group-hover:translate-x-1 transition-transform">
                              {link.name}
                            </span>
                          </button>
                        ) : (
                          <a
                            href={link.href}
                            className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors group"
                          >
                            {IconComponent && (
                              <IconComponent className="h-4 w-4 text-primary-400 flex-shrink-0" />
                            )}
                            <span className="group-hover:translate-x-1 transition-transform">
                              {link.name}
                            </span>
                          </a>
                        )}
                      </motion.li>
                    )
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-secondary-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Geotextilll. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm">
                Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors italic"
                >
                  Papum
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </footer>
  )
}