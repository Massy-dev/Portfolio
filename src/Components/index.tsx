import Head from 'next/head';

export default function Index() {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Mon portfolio en ligne" />
      </Head>

      {/* En-tête */}
      <header className="bg-blue-600 text-white p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Mon Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">À propos</a></li>
              <li><a href="#projects" className="hover:underline">Projets</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Section À propos */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
          <p className="text-lg">Je suis un développeur passionné par la création de solutions web innovantes. Mon expertise inclut React, Next.js, et bien plus !</p>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="py-16 px-4 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Mes projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Projet 1</h3>
              <p className="text-gray-700 mb-4">Description du projet ici.</p>
              <a href="#" className="text-blue-600 hover:underline">Voir le projet</a>
            </div>
            {/* Répéter pour d'autres projets */}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
          <form action="#" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Votre nom" className="w-full p-4 border rounded" />
            <input type="email" name="email" placeholder="Votre email" className="w-full p-4 border rounded" />
            <textarea name="message" placeholder="Votre message" className="w-full p-4 border rounded"></textarea>
            <button type="submit" className="bg-blue-600 text-white p-4 rounded">Envoyer</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 Mon Portfolio - Tous droits réservés</p>
      </footer>
    </div>
  );
}
