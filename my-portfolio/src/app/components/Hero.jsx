// Hero.jsx
"use client";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-5 sm:px-6
      bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-hidden pt-20"
    >
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
        <h1 className="text-3xl md:text-4xl dark:text-gray-100 font-extrabold tracking-tighter mb-2">
          Hi, I’m Manzoor A K
        </h1>

        {/*  Contact & Profile Summary Block */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-10">
          <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
            I turn ideas into scalable, user-focused web applications —
            combining clean UI, optimized backend logic, and modern full-stack
            architecture.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 mx-0 md:mx-10 lg:mx-20">
          <motion.a
            whileHover={{ scale: 1.03 }}
            href="#projects"
            className="h-14 flex items-center justify-center px-8 rounded-full text-md md:text-lg font-bold
    bg-blue-600 text-white shadow-lg shadow-blue-500/30
    hover:bg-blue-700 transition duration-300 w-full"
          >
            <Zap size={20} className="mr-2" /> View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/Manzoor-AK-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 flex items-center justify-center px-8 rounded-full text-md md:text-lg font-bold
  bg-green-600 text-white shadow-lg shadow-green-500/30
  hover:bg-green-700 transition duration-300 w-full"
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
              className="mr-2"
            >
              📄
            </motion.span>
            Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            href="#contact"
            className="h-14 flex items-center justify-center px-8 rounded-full text-md md:text-lg font-bold
    border-2 border-gray-700 hover:border-gray-800 dark:border-gray-700 bg-gray-700
    text-gray-100 dark:text-gray-200 hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100
    transition duration-300 w-full"
          >
            <span className="inline-block mr-2">🤝</span> Get In Touch
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
