'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    title: 'Pourquoi avoir un site web en 2025 est indispensable pour votre entreprise',
    description: 'Découvrez comment un site professionnel booste votre crédibilité, génère plus de clients et vous distingue de vos concurrents.',
    imageUrl: '/COMMENTCREER.png',
    link: 'https://www.youtube.com/watch?v=A465LzzEoAA&t=2919s',
  },
  {
    title: 'Applications mobiles : la clé pour atteindre vos clients partout',
    description: 'Les applications mobiles permettent une relation directe et personnalisée avec vos utilisateurs. Voici pourquoi vous devez investir.',
    imageUrl: '/htmlcss.jpg',
    link: 'https://www.youtube.com/watch?v=BI8Z547DkvY&t=2015s',
  },
  {
    title: 'Les dernières tendances en développement web et mobile en 2025',
    description: 'Des Progressive Web Apps aux super applications mobiles, restez à jour sur les tendances qui transforment le digital.',
    imageUrl: '/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=00sg5xTs6FU',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-[#0a0a23] py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#fec544] mb-10 text-center">
          Derniers Articles
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-[#1a1a40] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative w-full h-56">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-300 mb-6">{post.description}</p>
                <Link href={post.link} className="text-yellow-400 flex items-center gap-2 font-semibold hover:underline">
                  Lire l&apos;article
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
