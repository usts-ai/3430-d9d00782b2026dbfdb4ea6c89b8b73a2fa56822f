import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const CtaSection: React.FC = () => {
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
      {/* Formes décoratives */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-1/3 -translate-y-1/3"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white transform -translate-x-1/3 translate-y-1/3"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Prêt à révolutionner votre gestion paysagère ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-teal-100 mb-10"
          >
            Téléchargez PaysaApp dès maintenant et simplifiez vos devis, contrats et suivis de projets paysagers. Disponible sur iOS, Android et en version web.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 bg-white text-teal-700 font-semibold py-3 px-6 rounded-full"
            >
              <FaApple className="text-xl" />
              <span>App Store</span>
            </motion.a>
            
            <motion.a
              href="#"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 bg-white text-teal-700 font-semibold py-3 px-6 rounded-full"
            >
              <FaGooglePlay className="text-xl" />
              <span>Google Play</span>
            </motion.a>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-teal-200"
          >
            Essai gratuit de 14 jours, aucune carte de crédit requise
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
