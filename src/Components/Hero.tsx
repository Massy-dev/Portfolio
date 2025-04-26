// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="w-full  h-screen py-24 px-4 md:px-12 bg-transparent text-white relative flex items-center justify-center">
      <div className="absolute inset-0 z-10 bg-cover bg-center" 
      style={{ backgroundImage: 'url("/digitization.jpg")' ,
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        
        opacity: 0.2,
      }} />
      
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Salut, je suis <span className="text-[#fec544]">Ton Nom</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Développeur Web | Data Enthusiast
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Je conçois des applications modernes, performantes et orientées résultats.
        </p>
        <div className="flex justify-center gap-6 text-[#fec544] text-2xl transition duration-300 ease-in-out hover:text-[#fff]">
          <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/ton-utilisateur" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:ton.email@example.com">
            <FaEnvelope className="hover:scale-110 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
