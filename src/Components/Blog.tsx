'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    title: 'Débuter en HTML / CSS',
    description: 'Découvrez dans cette vidéo comment créer une page web en HTML / CSS.',
    imageUrl: '/COMMENTCREER.png',
    link: 'https://www.youtube.com/watch?v=A465LzzEoAA&t=2919s',
  },
  {
    title: 'Maîtrisez la création de blog avec le Framework Bootstrap 5',
    description: 'Découvrez dans ce tutoriel vidéo complet comment maîtriser la création de blogs avec Bootstrap.',
    imageUrl: '/htmlcss.jpg',
    link: 'https://www.youtube.com/watch?v=BI8Z547DkvY&t=2015s',
  },
  {
    title: 'Comment créer un blog avec PHP/MYSQL', 
    description: 'Dans cette vidéo vous apprendrez à créer un article  avec le minimum nécéssaire en PHP : Enregistrer un article dans la base de donnée .',
    imageUrl: '/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=00sg5xTs6FU',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-[#0a0a23] py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#fec544] mb-10 text-center">
          Mes formations
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
