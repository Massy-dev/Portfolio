"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, User, Wrench, Briefcase, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", icon: <Home size={20} />, label: "Accueil" },
  { href: "#about", icon: <User size={20} />, label: "À propos" },
  { href: "#services", icon: <Wrench size={20} />, label: "Services" },
  { href: "#portfolio", icon: <Briefcase size={20} />, label: "Portfolio" },
  { href: "#contact", icon: <Mail size={20} />, label: "Contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Barre du haut mobile */}
      <div className="md:hidden  fixed top-0 left-0 right-0 bg-[#0a101e] flex justify-between items-center h-17 px-6 py-6 z-50 shadow-md">
        <Image
          src="/MEITE.jpeg"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full object-cover border-2 border-[#232935] p-1"
        />
        <span className="font-bold text-[#fec544]">MEITE Yakouba</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Sidebar desktop */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-64 bg-[#0a101e] border-r border-[#232935] flex-col items-center py-8 z-40">
        <div className="mb-10">
          <Image
            src="/MEITE.jpeg"
            alt="Logo"
            width={200}
            height={200}
            className="rounded-full object-contain border-3 border-[#232935] p-1"
          />
        </div>
        <hr className="w-64 border-t border-[#232935] mb-2" />
        <nav className="flex flex-col gap-6 w-full px-6 py-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex items-center gap-4 px-4 py-1 rounded-lg hover:text-[#fec544] transition-colors text-base"
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="text-xs mt-10 text-gray-500">© 2025 MEITE Yakouba</div>
      </aside>

      {/* Menu mobile animé avec flou + spring */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* MENU avec spring */}
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
              className="md:hidden fixed top-16 left-0 right-0 bg-[#0a101e] flex flex-col items-center py-8 gap-6 shadow-lg z-50 rounded-b-2xl"
            >
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-white hover:text-[#fec544] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
