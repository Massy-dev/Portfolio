"use client";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.section id="resume" className="py-20 px-4 md:px-12"
    style={{
      backgroundImage: 'url("/portfolio2.jpg")', // Remplace par l'URL de ton image
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed', 
      opacity: 0.2,// Effet de parallax
    }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Mon <span className="text-[#fec544]">Parcours</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Éducation */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <FaGraduationCap className="text-[#fec544]" /> Éducation
            </h3>
            <div className="relative pl-8">
              {/* Trait vertical */}
              
              <div className="space-y-8">
                <div className="relative">
                  {/* Point */}
                  <div className="absolute left-[-30px] top-[5px] w-3 h-3 rounded-full bg-[#fec544]" />
                  <span className="text-sm text-[#fec544]">2020 - 2023</span>
                  <h4 className="text-xl font-bold">Licence en Informatique</h4>
                  <p className="text-gray-400">Université de la Côte d&apos;Ivoire</p>
                </div>
                <div className="relative">
                  {/* Point */}
                  <div className="absolute left-[-30px] top-[5px] w-3 h-3 rounded-full bg-[#fec544]" />
                  <span className="text-sm text-[#fec544]">2017 - 2020</span>
                  <h4 className="text-xl font-bold">Baccalauréat Série C</h4>
                  <p className="text-gray-400">Lycée Moderne de Yopougon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <FaBriefcase className="text-[#fec544]" /> Expérience
            </h3>
            <div className="relative pl-8">
              {/* Trait vertical */}
              
              <div className="space-y-8">
                <div className="relative">
                  {/* Point */}
                  <div className="absolute left-[-30px] top-[5px] w-3 h-3 rounded-full bg-[#fec544]" />
                  <span className="text-sm text-[#fec544]">2023 - Aujourd&apos;hui</span>
                  <h4 className="text-xl font-bold">Développeur Web Freelance</h4>
                  <p className="text-gray-400">Création de sites web modernes & performants</p>
                </div>
                <div className="relative">
                  {/* Point */}
                  <div className="absolute left-[-30px] top-[5px] w-3 h-3 rounded-full bg-[#fec544]" />
                  <span className="text-sm text-[#fec544]">2022 - 2023</span>
                  <h4 className="text-xl font-bold">Stagiaire Développeur</h4>
                  <p className="text-gray-400">Start-up Tech Abidjan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
