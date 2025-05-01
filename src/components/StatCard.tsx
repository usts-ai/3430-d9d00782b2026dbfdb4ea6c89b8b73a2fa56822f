import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, suffix = '', index }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.1 }
      });
      
      // Animation du compteur
      let startTimestamp: number;
      const duration = 2000; // 2 secondes pour l'animation
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, controls, value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        className="text-teal-600 text-3xl mb-3"
      >
        {icon}
      </motion.div>
      
      <div className="flex items-baseline justify-center">
        <span className="text-3xl sm:text-4xl font-bold text-gray-800">
          {count}
        </span>
        {suffix && <span className="text-xl text-gray-600 ml-1">{suffix}</span>}
      </div>
      
      <p className="text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
};

export default StatCard;
