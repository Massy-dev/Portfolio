'use client';

import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    title: 'Développeur Full Stack',
    company: 'Freelance',
    year: '2023 - Aujourd\'hui',
    description: 'Réalisation de landing page pour des entreprises de location. \n'+
    'Réalisation d\'une application mobile de service avec Flutter et Dart.\n'+
    'Réalisation d\'une application web de reseau social avec NextJS et TailwindCSS.\n'
  },

  {
    title: 'Développeur logiciel ERP',
    company: 'EXIS-Digital CI',
    year: '2022 - 2024',
    description: ' Conception et réalisation de logiciel de gestion de comptabilité et de trésorerie',
  },

  {
    title: 'Développeur web',
    company: 'E-learningLabs',
    year: '2018 - 2022',
    description: 'Réalisation d\'une application web progressive d\'évaluation formative.\n' +
    'Réalisation d\'une application web progressive de parrainage pour les élections législatives et présidentiels en Côte d\'Ivoire avec Python et Django.\n' +
    'Conception et réalisation d\'une application web de suivi de payement de scolarité avec Python et Django.'
  },

  {
    title: 'Stagiaire développeur web',
    company: 'SODISTRA',
    year: 'Août 2017 - novembre 2017',
    description: 'Conception et réalisation de site web avec wordpress.\n' +
    'Amélioration du réseau local.\n' +
    'Conception et réalisation de logiciel de bon de commande et de livraison avec PHP.'
  },
];

const educations = [
  {
    title: 'Licence 3 : Informatique développeur d’application',
    institution: 'IMAT-Abidjan',
    year: '2014 - 2017',
    description: 'Formation intensive en développement web Full Stack, incluant WordPress, ReactJS, Python, Django, et Flutter.',
  },
  {
    title: 'Certification en  programmation orientée objet',
    institution: 'UDEMY',
    year: '2023',
    description: 'Études approfondies en programmation orientée objet.',
  },
  {
    title: 'Certification en Marketing des médias sociaux : Le ROI',
    institution: 'UDEMY',
    year: '2023',
    description: 'Études approfondies en marketing des médias sociaux.',
  },
];

const Resume = () => {
  return (
    <section id="resume" className="bg-[#0a0a23] py-20 px-5"
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
          Resume
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Experience */}
          <div>
            <h3 className="text-2xl text-yellow-400 flex items-center gap-3 mb-6">
              <FaBriefcase /> Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-[#1a1a40]/30 p-6 rounded-lg">
                  <h4 className="text-xl text-white font-semibold">{exp.title}</h4>
                  <p className="text-sm text-gray-400">{exp.company} | {exp.year}</p>
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl text-yellow-400 flex items-center gap-3 mb-6">
              <FaGraduationCap /> Education
            </h3>
            <div className="space-y-8">
              {educations.map((edu, index) => (
                <div key={index} className="bg-[#1a1a40]/30 p-6 rounded-lg">
                  <h4 className="text-xl text-white font-semibold">{edu.title}</h4>
                  <p className="text-sm text-gray-400">{edu.institution} | {edu.year}</p>
                  <p className="mt-2 text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
