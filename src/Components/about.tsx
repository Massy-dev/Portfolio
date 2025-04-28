"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a101e] text-gray-300 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0"
        >
          <Image 
            src="/meite3.png" 
            alt="Photo de profil" 
            width={300} 
            height={300} 
            className="object-contain rounded-full border-[#fec544] p-2"
          />
        </motion.div>

        {/* Texte */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6 text-[#fec544]">
            À propos de moi
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed text-lg">
            Passionné par le développement web et mobile, je transforme vos idées en solutions digitales performantes. 
            Mon objectif est simple : livrer des applications modernes, rapides et adaptées à vos besoins.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed text-lg">
            Que vous souhaitiez un site web impactant, une application mobile intuitive ou un SaaS puissant, 
            je suis prêt à concrétiser vos projets avec rigueur et créativité.
          </p>
          <a href="#portfolio">
            <button className="bg-[#fec544] hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
              Voir mes projets
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
