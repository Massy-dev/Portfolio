import Hero from "@/Components/Hero"
import About from "@/Components/about"
import Services from "@/Components/Services"
import Portfolio from "@/Components/Portfolio"
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer"
import Skills from "@/Components/skills"
import Resume from "@/Components/resume"
import Blog from "@/Components/Blog"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEITE Yakouba | Portfolio",
  description: "Transformons vos idées en projets réels.",
  viewport: "width=device-width, initial-scale=1.0",
  keywords:[
    "MEITE YAKOUBA", 
    "Meité Yakouba", 
    "Portfolio", 
    "Développeur web", 
    "Développeur FullStack", 
    "Software engener",
    
  ],


authors: [{ name: "Boli Conseil", url: "https://portfolio-five-beta-36.vercel.app/" }],
  creator: "MEITE YAKOUBA",
  publisher: "Meité Yakouba",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  
  openGraph: {
    title: "MEITE YAKOUBA – DEVELOPPEUR FULLSTACK",
    description: "Transformons vos idées en projets réels.",
    url: "https://portfolio-five-beta-36.vercel.app/",
    siteName: "MEITE YAKOUBA",
    locale: "fr_FR",
    type: "website",
  },


};



export default function Home() {
  return (
 
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Resume />
      <Blog />
      
      

      <Contact />
      <Footer />
      
    </>
    
   
   
  );
}
