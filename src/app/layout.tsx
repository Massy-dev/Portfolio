// components/Layout.tsx

"use client"
import "./globals.css"
import Sidebar from "@/components/SideBar" 
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
});


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    
      <html lang="fr" className={poppins.className}>
        <head>
          <link rel="canonical" href="https://portfolio-five-beta-36.vercel.app/" />
        </head>
        <body className="bg-[#0a101e] text-white">
        <div className="flex min-h-screen">
          {/* Sidebar à gauche */}
          <aside className="w-64 fixed h-full  z-50">
            <Sidebar />
          </aside>

          {/* Contenu principal avec un décalage à droite */}
          <motion.div 
                className="md:ml-64 sm:ml-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
            {children}
            <Analytics />
          </motion.div>
        </div>
        </body>
      </html>

    
  );
}

export default Layout;
