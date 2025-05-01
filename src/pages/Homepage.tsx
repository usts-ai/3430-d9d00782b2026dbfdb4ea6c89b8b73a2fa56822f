import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaTree, FaUserTie, FaClipboardList, FaMobileAlt, FaChartLine } from 'react-icons/fa';

// Types pour les données mockées
type Testimonial = {
  id: number;
  name: string;
  company: string;
  text: string;
};

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

// Données mockées
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michel Dupont",
    company: "Jardins Élégants",
    text: "Cette application a révolutionné ma façon de gérer mes devis clients. Je gagne un temps précieux chaque jour !"
  },
  {
    id: 2,
    name: "Sophie Martin",
    company: "Paysages Créatifs",
    text: "L'interface intuitive me permet de suivre facilement tous mes projets en cours et de gérer mes contrats efficacement."
  },
  {
    id: 3,
    name: "Jean Lefebvre",
    company: "Nature & Design",
    text: "Mes clients sont impressionnés par le professionnalisme des devis générés par l'application. Un outil indispensable !"
  }
];

const features: Feature[] = [
  {
    id: 1,
    title: "Prise de renseignements",
    description: "Saisissez facilement tous les détails des projets paysagers de vos clients",
    icon: <FaClipboardList size={36} className="text-teal-400 mb-4" />
  },
  {
    id: 2,
    title: "Gestion des devis",
    description: "Créez et modifiez des devis professionnels en quelques clics",
    icon: <FaUserTie size={36} className="text-teal-400 mb-4" />
  },
  {
    id: 3,
    title: "Notation des contrats",
    description: "Suivez et évaluez l'avancement de vos contrats existants",
    icon: <FaTree size={36} className="text-teal-400 mb-4" />
  },
  {
    id: 4,
    title: "Multiplateforme",
    description: "Disponible sur iOS, Android et en version web, pour travailler où que vous soyez",
    icon: <FaMobileAlt size={36} className="text-teal-400 mb-4" />
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />

        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block">PaysaApp</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-3">
              La solution digitale pour les professionnels du paysage
            </span>
          </motion.h1>

          <motion.p 
            className="max-w-lg mx-auto text-xl text-white mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Gérez efficacement vos devis, contrats et suivis de projets paysagers en quelques clics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            >
              Télécharger l'app
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
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
          <FaChartLine className="text-white text-2xl" />
        </motion.div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
            >
              Fonctionnalités principales
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg text-gray-600"
            >
              Découvrez comment PaysaApp peut transformer votre quotidien professionnel
            </motion.p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section App Preview avec animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <AnimatedSection className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
              >
                Une interface intuitive pour plus d'efficacité
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8"
              >
                Notre application a été conçue pour simplifier votre quotidien. Avec son interface utilisateur intuitive, accédez rapidement à toutes les fonctionnalités essentielles à votre activité de paysagiste.
              </motion.p>
              <motion.ul variants={containerVariants} className="space-y-4 mb-8">
                {[
                  "Création de devis en moins de 5 minutes",
                  "Suivi en temps réel de l'avancement des projets",
                  "Synchronisation automatique sur tous vos appareils",
                  "Notifications pour ne manquer aucune opportunité"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <span className="bg-teal-500 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedSection>

            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mx-auto"
                style={{ maxWidth: "300px" }}
              >
                {/* Mockup de téléphone */}
                <div className="relative z-10 border-8 border-gray-800 rounded-[40px] shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1598901847919-b95dd0fabbb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Interface de l'application" 
                    className="w-full h-full object-cover"
                  />
                  {/* Barre de statut */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-black bg-opacity-75 flex items-center justify-between px-4">
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Éléments décoratifs */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500 bg-opacity-20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 bg-opacity-20 rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Témoignages clients
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg opacity-90"
            >
              Découvrez ce que nos utilisateurs disent de PaysaApp
            </motion.p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -5 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="inline-block w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm opacity-80">{testimonial.company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Call-to-Action */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
            >
              Prêt à transformer votre activité de paysagisme ?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg text-gray-600 mb-10"
            >
              Essayez PaysaApp gratuitement pendant 14 jours et découvrez comment notre application peut simplifier votre quotidien professionnel.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
              >
                Commencer l'essai gratuit
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
              >
                Voir nos tarifs
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">PaysaApp</h3>
              <p className="mb-4 text-gray-400">La solution complète pour les professionnels du paysage.</p>
              <div className="flex space-x-4">
                {/* Icônes réseaux sociaux */}
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-teal-600"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Icône simplifiée */}
                    <div className="w-5 h-5 bg-white mask-size-contain" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Solutions</h3>
              <ul className="space-y-2">
                {["Pour paysagistes", "Pour architectes", "Pour pépiniéristes", "Pour jardineries"].map((item) => (
                  <motion.li key={item} whileHover={{ x: 3 }}>
                    <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Ressources</h3>
              <ul className="space-y-2">
                {["Centre d'aide", "Tutoriels vidéo", "Webinaires", "Blog"].map((item) => (
                  <motion.li key={item} whileHover={{ x: 3 }}>
                    <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-400">
                  <span className="mr-2">📍</span>
                  123 Avenue des Paysagistes, 75000 Paris
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2">📞</span>
                  01 23 45 67 89
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2">✉️</span>
                  contact@paysaapp.fr
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PaysaApp. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              {["Confidentialité", "Conditions", "Mentions légales"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
