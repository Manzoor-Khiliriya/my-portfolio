// Hero.jsx
"use client";
import { Code, Server, Database, Zap, Globe, Phone, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Concise Core Stack Icons for quick viewing
const coreStacks = [
  { name: "React/Next.js", icon: Globe },
  { name: "Node.js/NestJS", icon: Server },
  { name: "Python/Django", icon: Code },
  { name: "PostgreSQL/MongoDB", icon: Database },
];

export default function Hero() {


  // Condensed Professional Summary
  const condensedSummary = "Full-Stack Developer focused on building **fast, scalable web applications** using the **MERN Stack, Next.js, Django and NestJS**.";

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-5 sm:px-6
      bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-hidden pt-20">

      {/* Subtle background texture/pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(#444,transparent_1px)_1px] [background-size:20px_20px]"></div>

      {/* Card (Center Focus) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl w-full text-center p-8 md:p-16 rounded-3xl shadow-2xl backdrop-blur-sm
          border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80
          transition-all duration-500"
      >
        {/* Main Title Block */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-2">
          Hi, I’m Manzoor A K
        </h1>

        {/* **New:** Contact & Profile Summary Block */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-10">


          {/* The Original Concise Summary (Kept for Impact) */}
          <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mt-4">
            {/* Using dangerouslySetInnerHTML to allow for bolding within the string */}
            <span dangerouslySetInnerHTML={{ __html: condensedSummary.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <motion.a
            whileHover={{ scale: 1.03 }}
            href="#projects"
            className="h-14 flex items-center justify-center px-8 rounded-full text-md md:text-lg font-bold
    bg-blue-600 text-white shadow-xl shadow-blue-500/30
    hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
          >
            <Zap size={20} className="mr-2" /> View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            href="#contact"
            className="h-14 flex items-center justify-center px-8 rounded-full text-md md:text-lg font-bold
    border-2 border-gray-300 dark:border-gray-700
    text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800
    transition duration-300 w-full sm:w-auto"
          >
            🤝 Get In Touch
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}