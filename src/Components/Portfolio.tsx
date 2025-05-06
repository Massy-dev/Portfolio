"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

const projects = [
  {
    title: "Imperial Rent",
    description: "Une landing page pour un site de location de voiture.",
    image: "/land.jpg",
    github: "https://github.com/Massy-dev/imperial-rent-landing",
    demo: "https://imperial-rent-landing.vercel.app/",
  },
  {
    title: "Dev Nation",
    description: 'Un reseau social pour les développeurs \n(en cours de développement).',
    image: "/DevNation.jpg",
    github: "https://github.com/Massy-dev/dev-nation",
    demo: "https://dev-nation.vercel.app/",
  },
  {
    title: "Clean Auto",
    description: "Une application de gestion de lavage automobile (en cours de développement).",
    image: "/Lavage.jpg",
    github: "https://github.com/Massy-dev/CleanAuto",
    demo: "https://clean-auto-nine.vercel.app/login",
  },
  // Ajoute plus de projets ici
];

const Portfolio = () => {
  return (
    <motion.section id="portfolio" className="py-20 px-5 md:px-12  bg-[#0a101eb3]"
   
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#fec544] font-bold mb-12 text-center">
          Mon Portfolio
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1f2b]  rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transition-all duration-300 hover:opacity-80" 
                width={500}
                height={300}
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#fec544]">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#fec544]">Live</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
