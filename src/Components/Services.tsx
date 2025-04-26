"use client";

import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      id="services"
      className="py-20 px-4 md:px-12 bg-[#0a101e] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Mes <span className="text-[#fec544]">Services</span>
        </h2>
        <p className="text-lg md:text-xl">
          Découvrez mes services professionnels et comment je peux vous aider à réaliser vos projets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <motion.div
          className="service-card p-6 bg-[#1a2133] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center mb-6">
            <FaCode className="text-4xl mb-4 text-[#fec544]" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">Développement Web</h3>
          <p className="text-sm md:text-base text-center">
            Création de sites web modernes et performants, adaptés à vos besoins et à votre identité.
          </p>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="service-card p-6 bg-[#1a2133] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center mb-6">
            <FaDesktop className="text-4xl mb-4 text-[#fec544]" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">Design UI/UX</h3>
          <p className="text-sm md:text-base text-center">
            Conception d&apos;interfaces utilisateurs intuitives et esthétiques, adaptées à l&apos;expérience utilisateur.
          </p>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="service-card p-6 bg-[#1a2133] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center mb-6">
            <FaMobileAlt className="text-4xl mb-4 text-[#fec544]" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">Applications Mobiles</h3>
          <p className="text-sm md:text-base text-center">
            Développement d&apos;applications mobiles natives et hybrides pour Android et iOS.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
