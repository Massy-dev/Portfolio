"use client";

//import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa";
import { Code, Smartphone, Layout, Database } from "lucide-react"; 
import { motion } from "framer-motion";

const services = [
  {
    title: "Création de sites vitrines modernes",
    description: "Je conçois des sites web élégants et performants pour représenter votre entreprise et attirer vos clients.",
    icon: <Layout size={40} />,
  },
  {
    title: "Développement d'applications web avancées",
    description: "Je développe des applications web robustes et sur mesure en utilisant Next.js et les dernières technologies.",
    icon: <Code size={40} />,
  },
  {
    title: "Développement d'applications mobiles",
    description: "Je réalise vos applications mobiles Android et iOS avec Flutter pour une expérience fluide et rapide.",
    icon: <Smartphone size={40} />,
  },
  {
    title: "Création de bases de données & APIs",
    description: "Je crée des bases de données efficaces et sécurisées, connectées à des APIs performantes selon vos besoins.",
    icon: <Database size={40} />,
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="py-20 px-1 md:mx-55 bg-[#0a101e] text-white"
      
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
           <span className="text-[#fec544]">Mes Services</span>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4" />
        </h2>
        <p className="text-lg md:text-xl">
          Découvrez mes services professionnels et comment je peux vous aider à réaliser vos projets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#131c31] border border-[#232935] rounded-lg p-8 shadow-lg hover:shadow-[#fec544]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6 text-[#fec544]">
                {service.icon}
              </div>
              <h3 className="text-xl text-center font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
    </motion.section>
  );
};

export default Services;
