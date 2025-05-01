import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-2xl"
    >
      <motion.div
        whileHover={{ rotate: 5, scale: 1.1 }}
        className="text-teal-600 text-4xl mb-4 bg-teal-50 p-3 rounded-full"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
