import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  // Animation pour les liens et icônes
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      }
    }),
    hover: {
      y: -5,
      color: '#4FD1C5',
      transition: { duration: 0.2 }
    }
  };

  // Sections du footer
  const footerSections = [
    {
      title: 'Application',
      links: [
        { text: 'Fonctionnalités', href: '#' },
        { text: 'Télécharger', href: '#' },
        { text: 'Tarifs', href: '#' },
        { text: 'FAQ', href: '#' },
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { text: 'À propos', href: '#' },
        { text: 'Équipe', href: '#' },
        { text: 'Carrières', href: '#' },
        { text: 'Contact', href: '#' },
      ]
    },
    {
      title: 'Ressources',
      links: [
        { text: 'Blog', href: '#' },
        { text: 'Tutoriels', href: '#' },
        { text: 'Support', href: '#' },
        { text: 'Partenaires', href: '#' },
      ]
    }
  ];

  // Icônes des réseaux sociaux
  const socialIcons = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mr-2"
              >
                <FaLeaf className="text-2xl text-teal-400" />
              </motion.div>
              <span className="text-xl font-bold">PaysaApp</span>
            </motion.div>
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              L'application mobile qui révolutionne la gestion des projets paysagers. Simplifiez vos devis, suivez vos contrats et développez votre activité.
            </motion.p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mb-8">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="text-gray-400 hover:text-teal-400 text-xl transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sections de liens */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <motion.h3 
                className="text-lg font-semibold mb-4 text-teal-400"
                custom={sectionIndex}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    custom={linkIndex + sectionIndex}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.a 
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                      whileHover="hover"
                    >
                      {link.text}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Séparateur */}
        <motion.div 
          className="border-t border-gray-800 my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        />

        {/* Copyright et mentions légales */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-500 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            © {new Date().getFullYear()} PaysaApp. Tous droits réservés.
          </motion.p>
          <div className="flex space-x-6">
            {['Mentions légales', 'Politique de confidentialité', 'Conditions d\'utilisation'].map((text, index) => (
              <motion.a
                key={index}
                href="#"
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="text-gray-500 hover:text-teal-400 text-sm transition-colors"
              >
                {text}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
