"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Projet 1",
    description: "Une application moderne de gestion.",
    image: "/images/projet1.jpg",
    github: "https://github.com/ton-user/projet1",
    demo: "https://projet1.netlify.app",
  },
  {
    title: "Projet 2",
    description: "Un site vitrine interactif.",
    image: "/images/projet2.jpg",
    github: "https://github.com/ton-user/projet2",
    demo: "https://projet2.netlify.app",
  },
  {
    title: "Projet 3",
    description: "Un site vitrine interactif.",
    image: "/images/projet2.jpg",
    github: "https://github.com/ton-user/projet2",
    demo: "https://projet2.netlify.app",
  },
  // Ajoute plus de projets ici
];

const Portfolio = () => {
  return (
    <motion.section id="portfolio" className="py-50 px-4 md:px-12  bg-[#0a101eb3]"
   
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-[#fec544]">Mon</span> Portfolio
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1f2b] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-all duration-300 hover:opacity-80" />
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
