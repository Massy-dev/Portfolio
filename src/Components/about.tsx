"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 px-4 md:px-12 bg-[#0a101eb3] text-white shadow-lg bg-opacity-40 w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">
        À propos de <span className="text-[#fec544]">moi</span>
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center items-center bg-cover"
        style={{
            backgroundImage: "url('/yakouba.jpg')",
            backgroundPosition: "center top",  // Tu peux modifier cette valeur
            backgroundSize: "cover",
            height: "70vh",  // Ajuste la hauteur selon tes besoins
          }}
         >
        </div>

        {/* Texte */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Hi There! I&apos;m MEITE Yakouba</h3>
          <p className="text-lg font-medium mb-6">Web Developer | Data Enthusiast</p>
          <p className="text-lg leading-relaxed mb-6">
            I am a Web Developer with a strong focus on creating modern, user-centered applications. I love building clean, efficient, and performance-oriented user interfaces.
          </p>

          <ul className="text-sm md:text-base grid gap-4">
            <li><strong className="text-[#fec544]">Birthday :</strong> May 07, 1990</li>
            <li><strong className="text-[#fec544]">Phone    :</strong> +225 07 41 41 41 41</li>
            <li><strong className="text-[#fec544]">Email    :</strong> meiteyakouba@gmail.com</li>
            <li><strong className="text-[#fec544]">From     :</strong> 2661 High Meadow Lane Bear Creek</li>
            <li><strong className="text-[#fec544]">Language :</strong> English, Germanic</li>
            <li><strong className="text-[#fec544]">Freelance :</strong> Available</li>
          </ul>

          <a
            href="/path/to/your/cv.pdf"  // Remplace avec le lien vers ton CV
            className="inline-block mt-6 py-2 px-6 bg-[#fec544] text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
            download
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
