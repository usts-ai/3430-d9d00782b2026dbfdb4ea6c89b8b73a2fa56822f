import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  company, 
  testimonial, 
  avatar,
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-teal-50 rounded-bl-full z-0" />
      
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 relative z-10">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={avatar}
          alt={`Avatar de ${name}`}
          className="w-16 h-16 rounded-full object-cover border-2 border-teal-400"
        />
        
        <div className="flex-1">
          <div className="mb-4 text-center sm:text-left">
            <h4 className="text-lg font-bold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-600">{role}, {company}</p>
          </div>
          
          <p className="text-gray-700 italic">"{testimonial}"</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
