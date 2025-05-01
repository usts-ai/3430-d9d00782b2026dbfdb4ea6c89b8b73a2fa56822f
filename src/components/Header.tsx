import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaLeaf } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Liste des liens de navigation
  const navLinks = [
    { text: 'Accueil', href: '#' },
    { text: 'Fonctionnalités', href: '#features' },
    { text: 'Tarifs', href: '#' },
    { text: 'Témoignages', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  // Détection du scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation des liens du menu
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.4,
      }
    }),
    hover: {
      y: -3,
      color: '#4FD1C5',
      transition: { duration: 0.2 }
    }
  };

  // Animation du menu mobile
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="mr-2"
            >
              <FaLeaf className={`text-2xl ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
            </motion.div>
            <motion.span 
              className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              PaysaApp
            </motion.span>
          </motion.div>

          {/* Menu de navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className={`font-medium ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                } hover:text-teal-500 transition-colors`}
              >
                {link.text}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                isScrolled 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white text-teal-600'
              } font-medium py-2 px-4 rounded-full shadow hover:shadow-lg transition duration-300`}
            >
              Se connecter
            </motion.button>
          </nav>

          {/* Bouton menu mobile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? (
              <FaTimes className={`text-2xl ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <FaBars className={`text-2xl ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 pt-20 px-4"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  variants={linkVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, color: '#4FD1C5' }}
                  className="text-xl font-medium text-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.text}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 text-white font-medium py-3 px-8 rounded-full shadow hover:shadow-lg transition duration-300 mt-4"
              >
                Se connecter
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
