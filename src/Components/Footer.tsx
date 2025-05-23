// components/Footer.tsx
"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      className="relative bg-[#0a101eb3] backdrop-blur-md text-gray-400 py-5 mt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} MEITE Yakouba. Tous droits réservés.
        </p>
      </div>

      {/* Bouton "Retour en haut" avec scroll condition */}
      {showButton && (
        <div className="fixed bottom-6 rounded-full right-6 z-50">
          <a
              href="#home"
              className="w-10 h-10 flex items-center justify-center bg-[#fec544] text-black rounded-full shadow-md hover:bg-white transition-all duration-300 border border-white/20 backdrop-blur-md fixed bottom-6 right-6 z-50"
              aria-label="Retour en haut"
            >
              <FaArrowUp className="text-base" />
            </a>

                  </div>
                )}
    </motion.footer>
  );
};

export default Footer;
