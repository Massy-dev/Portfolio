'use client';

import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiFlutter, SiPython, SiDjango, SiTypescript,SiWordpress } from 'react-icons/si';

const skills = [
  { name: 'Python', level: 85, icon: <SiPython size={30} className="text-yellow-300" /> },
  { name: 'Django', level: 80, icon: <SiDjango size={30} className="text-green-500" /> },
  { name: 'WordPress', level: 75, icon: <SiWordpress size={30} className="text-cyan-400" /> },
  { name: 'ReactJS', level: 75, icon: <SiReact size={30} className="text-cyan-400" /> },
  { name: 'Flutter', level: 70, icon: <SiFlutter size={30} className="text-blue-400" /> },
  { name: 'NextJS', level: 65, icon: <SiNextdotjs size={30} className="text-white" /> },
  { name: 'TypeScript', level: 60, icon: <SiTypescript size={30} className="text-blue-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a0a23] py-20 px-5"
    style={{
      backgroundImage: 'url("/portfolio2.jpg")', // Remplace par l'URL de ton image
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed', 
      // Effet de parallax
    }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#fec544] mb-10 text-center">
          My Skills
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-yellow-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="bg-yellow-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
