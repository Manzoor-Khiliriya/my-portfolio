// Navbar.jsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, GithubIcon, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
// Import the ThemeToggle component
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always solid background (no transparency)
  const bg =
    theme === "dark"
      ? "bg-gray-950/90  shadow-xl border-b border-gray-800"
      : "bg-white/90  shadow-lg border-b border-gray-200";

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experiences", href: "#experiences" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Manzoor-Khiliriya",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/manzoor-a-k-fullstack/",
      icon: Linkedin,
    },
  ];

  return (
    <motion.nav
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}
    >
      <div className="mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
          >
            Manzoor A K
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={link.href}
                  className="relative text-base font-medium transition-colors duration-300
                    text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300
                    after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[3px] after:rounded-full
                    after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Socials + Theme Toggle (Desktop Integration) */}
            <div className="flex items-center space-x-4 pl-6 border-l border-gray-300 dark:border-gray-700">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
              {/* Theme Toggle for Desktop */}
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden z-50 relative">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
      text-gray-800 dark:text-gray-300 
      hover:text-blue-600 dark:hover:text-blue-400 
      transition-transform duration-300 focus:outline-none 
      ${isOpen ? "rotate-90" : "rotate-0"} 
    `}
            >
              <Menu className="h-7 w-7 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="fixed right-0 top-0 h-full w-50 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden border-l border-gray-300 dark:border-gray-800"
            >
              <div className="absolute top-5 left-6 z-10">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                >
                  <X className="h-6 w-6 text-gray-700 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-200 text-2xl font-bold z-50 transition-transform duration-300 hover:rotate-180" />
                </motion.button>
              </div>

              <div className="p-8 pt-16 space-y-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="block text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Socials (already in Mobile Menu) */}
                <div className="pt-10 border-t border-gray-300 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                    Connect
                  </p>
                  <div className="flex space-x-6 mb-6">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all"
                        >
                          <Icon size={28} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
