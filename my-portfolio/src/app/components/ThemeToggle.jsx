"use client";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.85 }}
      className={`relative w-14 h-7 flex items-center px-1 rounded-full transition-colors duration-500 cursor-pointer
      ${theme === "light" ? "justify-start bg-gray-300" : "justify-end bg-gray-600"}`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-6 h-6 rounded-full flex items-center justify-center shadow-md bg-black dark:bg-black"
      >
        {theme === "light" ? (
          <Sun size={16} className="text-yellow-500" />
        ) : (
          <Moon size={16} className="text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
