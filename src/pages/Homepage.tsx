import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaTree, FaUserTie, FaClipboardList, FaMobileAlt, FaChartLine, FaLeaf, FaCalendarAlt, FaFileInvoiceDollar, FaUsers } from 'react-icons/fa';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import StatCard from '../components/StatCard';
import AppScreenshot from '../components/AppScreenshot';
import CtaSection from '../components/CtaSection';

// Importation des images
import heroImage from '../assets/images/hero-landscape.jpg';
import garden1 from '../assets/images/garden1.jpg';
import garden2 from '../assets/images/garden2.jpg';
import garden3 from '../assets/images/garden3.jpg';

// Types pour les données mockées
type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
};

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Screenshot = {
  id: number;
  image: any;
  title: string;
  description: string;
};

// Données mockées
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michel Dupont",
    role: "Directeur",
    company: "Jardins Élégants",
    text: "Cette application a révolutionné ma façon de gérer mes devis clients. Je gagne un temps précieux chaque jour et mes clients apprécient le professionnalisme des documents générés.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sophie Martin",
    role: "Paysagiste",
    company: "Paysages Créatifs",
    text: "L'interface intuitive me permet de suivre facilement tous mes projets en cours et de gérer mes contrats efficacement. Un outil indispensable pour mon activité quotidienne.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Jean Lefebvre",
    role: "Gérant",
    company: "Nature & Design",
    text: "Mes clients sont impressionnés par le professionnalisme des devis générés par l'application. Un outil indispensable qui m'a permis d'augmenter mon taux de conversion de 30% !",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const features: Feature[] = [
  {
    id: 1,
    title: "Prise de renseignements",
    description: "Saisissez facilement tous les détails des projets paysagers de vos clients avec des formulaires intuitifs et personnalisables.",
    icon: <FaClipboardList />
  },
  {
    id: 2,
    title: "Gestion des devis",
    description: "Créez et modifiez des devis professionnels en quelques clics, avec calcul automatique des coûts et marges.",
    icon: <FaFileInvoiceDollar />
  },
  {
    id: 3,
    title: "Notation des contrats",
    description: "Suivez et évaluez l'avancement de vos contrats existants pour optimiser votre service client et votre rentabilité.",
    icon: <FaTree />
  },
  {
    id: 4,
    title: "Multiplateforme",
    description: "Disponible sur iOS, Android et en version web, pour travailler où que vous soyez, même sans connexion internet.",
    icon: <FaMobileAlt />
  },
  {
    id: 5,
    title: "Gestion de planning",
    description: "Organisez efficacement les interventions de vos équipes et optimisez les déplacements sur le terrain.",
    icon: <FaCalendarAlt />
  },
  {
    id: 6,
    title: "Gestion d'équipe",
    description: "Attribuez des tâches à vos collaborateurs et suivez leur avancement en temps réel pour une meilleure coordination.",
    icon: <FaUsers />
  }
];

const screenshots: Screenshot[] = [
  {
    id: 1,
    image: garden1,
    title: "Création de devis simplifiée",
    description: "Générez des devis professionnels en quelques minutes grâce à notre interface intuitive. Personnalisez chaque aspect selon vos besoins et envoyez-les directement à vos clients."
  },
  {
    id: 2,
    image: garden2,
    title: "Suivi de projets en temps réel",
    description: "Visualisez l'avancement de tous vos projets paysagers sur un tableau de bord intuitif. Suivez les étapes, les coûts et les délais pour une gestion optimale."
  },
  {
    id: 3,
    image: garden3,
    title: "Gestion des contrats et avenants",
    description: "Créez, modifiez et suivez vos contrats et avenants en toute simplicité. Gardez une trace de toutes les modifications et validations pour une transparence totale."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Composant pour les sections avec animation au scroll
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section avec effet parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0" 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/70 z-0" />

        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
              <FaLeaf className="text-4xl text-teal-400" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block">PaysaApp</span>
            <motion.span 
              className="block text-2xl sm:text-3xl md:text-4xl mt-3 text-teal-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              La solution digitale pour les professionnels du paysage
            </motion.span>
          </motion.h1>

          <motion.p 
            className="max-w-2xl mx-auto text-xl text-white/90 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Gérez efficacement vos devis, contrats et suivis de projets paysagers en quelques clics. 
            Disponible sur iOS, Android et en version web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition duration-300"
            >
              Télécharger l'app
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white/10 transition duration-300"
            >
              Essai gratuit
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2, y: -5 }}
            className="bg-white/20 backdrop-blur-md p-3 rounded-full cursor-pointer"
          >
            <FaChartLine className="text-white text-xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section Statistiques */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
            >
              Pourquoi choisir PaysaApp ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-lg text-gray-600"
            >
              Rejoignez des milliers de professionnels du paysage qui ont déjà transformé leur activité grâce à notre solution.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              icon={<FaUsers />} 
              value={15000} 
              label="Utilisateurs actifs" 
              suffix="+" 
              index={0} 
            />
            <StatCard 
              icon={<FaFileInvoiceDollar />} 
              value={250000} 
              label="Devis générés" 
              suffix="+" 
              index={1} 
            />
            <StatCard 
              icon={<FaTree />} 
              value={98} 
              label="Satisfaction client" 
              suffix="%" 
              index={2} 
            />
            <StatCard 
              icon={<FaChartLine />} 
              value={35} 
              label="Gain de productivité" 
              suffix="%" 
              index={3} 
            />
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
            >
              Fonctionnalités principales
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-lg text-gray-600"
            >
              Découvrez comment PaysaApp peut simplifier votre quotidien et vous faire gagner du temps.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Screenshots */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
            >
              Découvrez l'application
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-lg text-gray-600"
            >
              Une interface intuitive et moderne pour une expérience utilisateur optimale.
            </motion.p>
          </div>

          <div className="space-y-20">
            {screenshots.map((screenshot, index) => (
              <AppScreenshot
                key={screenshot.id}
                image={screenshot.image}
                title={screenshot.title}
                description={screenshot.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
            >
              Ce que disent nos utilisateurs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-lg text-gray-600"
            >
              Découvrez comment PaysaApp a transformé l'activité de nos clients.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.text}
                avatar={testimonial.avatar}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <CtaSection />
    </div>
  );
};

export default Homepage;
