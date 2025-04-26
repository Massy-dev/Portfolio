"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, percentage: 90 },
  { name: "CSS", icon: <FaCss3Alt />, percentage: 85 },
  { name: "JavaScript", icon: <FaJs />, percentage: 80 },
  { name: "React", icon: <FaReact />, percentage: 75 },
  { name: "Python", icon: <FaPython />, percentage: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-12 "
    style={{
      backgroundImage: 'url("/Portfolio2.jpg")', // Remplace par l'URL de ton image
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed', 
      // Effet de parallax
    }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-[#fec544]">Compétences</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 text-lg font-medium mb-2">
                <div className="text-[#fec544] text-2xl">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
              <div className="w-full bg-white/10 h-3 rounded-md overflow-hidden">
                <motion.div
                  className="h-full bg-[#fec544]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-right text-sm mt-1 text-[#fec544]">{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
