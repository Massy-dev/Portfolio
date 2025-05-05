import Hero from "@/Components/Hero"
import About from "@/Components/about"
import Services from "@/Components/Services"
import Portfolio from "@/Components/Portfolio"
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer"
import Skills from "@/Components/skills"
import Resume from "@/Components/resume"
import Blog from "@/Components/Blog"

export const metadata = {
  title: "MEITE Yakouba | Portfolio",
  description: "Portfolio de Meite Yakouba, développeur web",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Home() {
  return (
 
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Portfolio />
      <Blog />
      
      

      <Contact />
      <Footer />
    </>
    
   
   
  );
}
