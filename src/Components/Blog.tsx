"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';

// Données pour les articles de blog
const blogPosts = [
  {
    title: "Comment bien démarrer en Data Science",
    description: "Découvrez les étapes essentielles pour vous lancer dans l'univers fascinant de la Data Science.",
    link: "/blog/demarrer-en-data-science",
    image: "/images/blog1.jpg", // Remplacez avec votre image
    date: "15 Avril 2025", // Date de publication
  },
  {
    title: "Les bases du développement web moderne",
    description: "Apprenez les concepts fondamentaux du développement web et comment bâtir des applications modernes.",
    link: "/blog/bases-developpement-web",
    image: "/images/blog2.jpg", // Remplacez avec votre image
    date: "10 Avril 2025", // Date de publication
  },
  {
    title: "Les meilleures pratiques en Python",
    description: "Une introduction aux bonnes pratiques en Python pour écrire du code propre et performant.",
    link: "/blog/meilleures-pratiques-python",
    image: "/images/blog3.jpg", // Remplacez avec votre image
    date: "05 Avril 2025", // Date de publication
  },
];

const Blog = () => {
  return (
    <motion.section 
      id="blog" 
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url("/blog.jpg")', // Remplace par l'URL de ton image
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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Mon Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video">
                <Image 
                  src={post.image} 
                  alt={`Image illustrant l'article : ${post.title}`} 
                  className="w-full h-full object-cover"
                  width={500}
                  height={300}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 line-clamp-2">{post.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 line-clamp-3">{post.description}</p>
                <Link 
                  href={post.link} 
                  className="text-[#fec544] hover:underline inline-block text-sm sm:text-base"
                >
                  Lire la suite
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
