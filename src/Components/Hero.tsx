"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0a101e] text-gray-300 px-6">

    <div className="absolute inset-0 z-10 bg-cover bg-center" 
          style={{ backgroundImage: 'url("/digitization.jpg")' ,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            
            opacity: 0.1,
          }} />
      

      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-[#fec544]"
      >
        🚀 Transformons vos idées en projets réels
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-gray-400 max-w-2xl mb-8 text-lg md:text-xl"
      >
        Développeur web & mobile, je crée des solutions digitales sur-mesure qui propulsent votre business vers le succès.
      </motion.p>

      
        <Link href="#contact" className="bg-[#fec544] z-10 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
         
            Discutons de votre projet
        
        </Link>
      
    </section>
  );
};

export default Hero;
