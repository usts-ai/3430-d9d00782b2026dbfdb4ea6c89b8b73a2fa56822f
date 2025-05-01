import React from 'react';
import { motion } from 'framer-motion';

interface AppScreenshotProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const AppScreenshot: React.FC<AppScreenshotProps> = ({ image, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col md:flex-row items-center gap-8 mb-16"
    >
      <div className={`w-full md:w-1/2 order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-xl transform rotate-3 scale-105 opacity-20" />
          <img 
            src={image} 
            alt={title} 
            className="rounded-xl shadow-xl relative z-10 w-full h-auto"
          />
        </motion.div>
      </div>
      
      <div className={`w-full md:w-1/2 order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-800 mb-4"
        >
          {title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AppScreenshot;
