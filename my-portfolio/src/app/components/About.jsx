// About.jsx
'use client';
import { User, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section
            id="about"
            className="py-12 md:py-24 px-5 sm:px-6 dark:bg-gray-950 transition-colors duration-500 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Visual Element / Avatar Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-shrink-0 w-full max-w-xs md:w-1/3 lg:max-w-md p-6
                        bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700"
                >
                    {/* Profile Image - FIX APPLIED HERE */}
                    {/* Changed the container to be a fixed-size, circular shape */}
                    <div className="relative w-36 h-36 mx-auto mb-6">
                        <img
                            src="/Manzoor.jpg" // Use the same path
                            alt="Manzoor A K"
                            className="rounded-full object-fill border-4 border-blue-500 dark:border-blue-400 w-full h-full"
                        />
                    </div>

                    {/* Name & Role */}
                    <div className="text-center">
                        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Manzoor A K
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                            Full-Stack Developer
                        </p>
                    </div>
                </motion.div>

                {/* About Text Content (Unchanged) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="md:w-2/3 text-center md:text-left"
                >
                    <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400 mb-2 tracking-widest">
                        — Who I Am
                    </p>

                    <h2
                        className="text-3xl md:text-5xl font-black mb-6 
                        text-gray-900 dark:text-gray-100 leading-tight"
                    >
                        Crafting High-Performance Web Experiences
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed mt-4">
                        Full-Stack Developer with hands-on experience in building fast,
                        scalable, and responsive web applications using the <strong>MERN stack</strong>
                        and <strong>Django</strong>. Proficient in <strong>React.js, Next.js, Tailwind CSS</strong>,
                        and modern frontend architectures, with strong backend skills in
                        <strong> Node.js, Express, NestJS, and Django REST Framework</strong>.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
                        Experienced in designing and implementing <strong>RESTful APIs, JWT
                            authentication</strong>, and working with both <strong>SQL (PostgreSQL, MySQL)</strong>
                        and <strong>NoSQL (MongoDB)</strong> databases. Adept at version control with
                        <strong> Git/GitHub</strong> and dedicated to working collaboratively in
                        <strong> Agile teams</strong>.
                    </p>


                    <a
                        href="#skills"
                        className="mt-8 inline-flex items-center text-lg font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300"
                    >
                        Review My Detailed Skills <Code className="ml-2 h-5 w-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}