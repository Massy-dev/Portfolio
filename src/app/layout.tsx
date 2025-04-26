// components/Layout.tsx

"use client"
import "./globals.css"
import Sidebar from "@/Components/SideBar" // On suppose que tu as un composant Sidebar
import { motion } from "framer-motion";



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    
      <html lang="fr">
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
          </motion.div>
        </div>
        </body>
      </html>

    
  );
}

export default Layout;
