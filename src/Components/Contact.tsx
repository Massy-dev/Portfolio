// components/Contact.tsx
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_hxtl8i2",
        "template_m6eyvye",
        formData,
        "XYgcmANRUQSkUL4ft"
      );
      console.log(result.text);
      setSuccess(true);
      setError(false);
      setFormData({ user_name: "", user_email: "", user_message: "" });
    } catch (error) {
      console.log(error);
      setError(true);
      setSuccess(false);
    }
  };

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
        <h2 className="text-3xl md:text-4xl text-[#fec544] font-bold mb-10 text-center">
          CONTACTEZ MOI
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4" />
        </h2>
        
        {/* Contenu de contact */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Formulaire de contact */}
          <div className="bg-transparent p-6 rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="Nom"
              className="w-full px-4 py-3 bg-[#1a2238] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec544] placeholder-gray-400"
            />
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-4 py-3 bg-[#1a2238] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec544] placeholder-gray-400"
            />
          </div>
         
          <textarea
            placeholder="Message"
            name="user_message"
            value={formData.user_message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-[#1a2238] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec544] placeholder-gray-400"
          />
          <button
            type="submit"
            className=" w-full bg-[#fec544] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#e5b935] transition"
          >
            Envoyer
          </button>
          {success && <p className="text-green-400">Message envoyé avec succès !</p>}
          {error && <p className="text-red-500">Oups ! Une erreur s&apos;est produite. Réessayez.</p>}
        </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#fec544] text-2xl" />
                <div className="text-white">
                  <p>Email</p>
                  <p>massy1833.dev@gmail.com</p>
                  
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#fec544] text-2xl" />
                <div className="text-white">
                  <p>Phone</p>
                  <p>+225 07 49 20 0389</p>
                  <p>+225 07 79 34 6339</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#fec544] text-2xl" />
                <div className="text-white">
                  <p>Address</p>
                  <p>Cocody, Abidjan, Côte d&apos;Ivoire</p>
                </div>
              </div>
            </div>

            <p className="text-white mt-6">
              Visitez mon profil social et restez connecté.
            </p>
            <div className="flex justify-start gap-6 text-[#fec544] text-2xl mt-4">
              <a href="https://www.linkedin.com/in/yakouba-meite-951b5914a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Massy-dev" target="_blank" rel="noopener noreferrer">
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
