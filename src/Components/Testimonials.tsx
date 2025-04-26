// components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-20 px-4 md:px-12 bg-[#0a101eb3] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Ce que <span className="text-[#fec544]">disent les clients</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Témoignage exemple */}
          <div className="bg-[#1a2238] p-6 rounded-xl shadow-md">
            <p className="italic mb-4">
              "Un développeur très professionnel, à l&apos;écoute et réactif. Le rendu a dépassé mes attentes."
            </p>
            <h4 className="font-semibold text-[#fec544]">Jean Dupont</h4>
            <span className="text-sm text-gray-400">CEO chez Exemple Inc.</span>
          </div>
          {/* Ajouter d'autres témoignages si besoin */}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
