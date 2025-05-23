import Hero from "@/components/Hero"
import About from "@/components/about"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Skills from "@/components/skills"
import Resume from "@/components/resume"
import Blog from "@/components/Blog"
import type { Metadata } from "next";

export const metadata: Metadata = {

  metadataBase: new URL('https://portfolio-five-beta-36.vercel.app'),

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
