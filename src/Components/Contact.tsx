// components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section id="contact" className="py-20 px-4 md:px-12 "
    style={{
      backgroundImage: 'url("/contact.jpg")', // Remplace par l'URL de ton image
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed', 
      opacity: 0.6,
      // Effet de parallax
    }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      
      >
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          CONTACTEZ <span className="text-[#fec544]">MOI</span>
        </h2>
        
        {/* Contenu de contact */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Formulaire de contact */}
          <div className="bg-transparent p-6 rounded-lg">
          <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nom"
              className="w-full px-4 py-3 bg-[#1a2238] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec544] placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-[#1a2238] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec544] placeholder-gray-400"
            />
          </div>
          <input
            type="text"
            placeholder="Objet"
            className="w-full px-4 py-3 bg-[#1a2238] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec544] placeholder-gray-400"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full px-4 py-3 bg-[#1a2238] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec544] placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-[#fec544] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#e5b935] transition"
          >
            Envoyer
          </button>
        </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#fec544] text-2xl" />
                <div className="text-white">
                  <p>Email</p>
                  <p>devis@example.com</p>
                  <p>info@support.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#fec544] text-2xl" />
                <div className="text-white">
                  <p>Phone</p>
                  <p>+1 876-369-9009</p>
                  <p>+1 213-519-1786</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#fec544] text-2xl" />
                <div className="text-white">
                  <p>Address</p>
                  <p>2661 High Meadow Lane Bear Creek,</p>
                  <p>Olancha, KY 93544</p>
                </div>
              </div>
            </div>

            <p className="text-white mt-6">
              Visitez mon profil social et restez connecté.
            </p>
            <div className="flex justify-start gap-6 text-[#fec544] text-2xl mt-4">
              <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ton-utilisateur" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
