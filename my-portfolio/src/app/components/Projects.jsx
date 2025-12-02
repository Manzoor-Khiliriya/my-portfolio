'use client';
import { Github, Globe, Code, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: "Fullstack E-Commerce App",
        tech: "Django, React, Vite, Tailwind CSS, REST API, MySQL",
        desc: "A comprehensive e-commerce platform with product browsing, cart management, order tracking, and essential role-based access (customer, manager, delivery). Implemented secure payment gateway integration and optimized database queries for performance.",
        live: "#",
        github: "https://github.com/Manzoor-Khiliriya/ecommerce-app"
    },
    {
        name: "Simple Hotel Website",
        tech: "MERN Stack, REST API, Material UI",
        desc: "Full-stack web app for room browsing, availability check, and booking, featuring advanced filtering by city, room type, and dates. Utilized MongoDB for flexible data modeling and robust error handling.",
        live: "https://simple-hotel-website-three.vercel.app/", 
        github: "https://github.com/Manzoor-Khiliriya/simple-hotel-website"
    },
    {
        name: "Token Booking App",
        tech: "MERN Stack,  REST API, JWT, Bootstrap",
        desc: "Doctor appointment booking system with secure authentication (JWT), real-time slot availability, dynamic scheduling, and appointment management. State handled efficiently using Zustand.",
        live: "https://token-booking-app.vercel.app/",
        github: "https://github.com/Manzoor-Khiliriya/token-booking-app"
    },
    {
        name: "Admin App For Employee Management",
        tech: "MERN Stack, REST API, JWT, Middleware, Bootstrap",
        desc: "Secure full-stack application for managing employee records, featuring CRUD operations, centralized data management via Redux, and token-required authentication via custom middleware.",
        live: "https://admin-employee-management-app.vercel.app/",
        github: "https://github.com/Manzoor-Khiliriya/admin-employee-management-app"
    },
    {
        name: "User Management System (Backend)",
        tech: "NestJS, PostgreSQL, TypeORM, JWT, TypeScript",
        desc: "A simple, high-performance NestJS backend providing JWT-based user authentication, user CRUD operations, and storage using PostgreSQL and TypeORM. Built with strong typing for reliability.",
        live: "#",
        github: "https://github.com/Manzoor-Khiliriya/user-management-system"
    },
    {
        name: "My College App (Frontend)",
        tech: "Next.js, React, Material UI",
        desc: "A showcase frontend application utilizing Next.js for efficient dynamic routing and server-side rendering (SSR), fetching data with Axios and styled with Material-UI for a polished user experience.",
        live: "https://my-college-app-xi.vercel.app/",
        github: "https://github.com/Manzoor-Khiliriya/my-college-app"
    }
];

// Utility to split the tech string into pills
const getTechPills = (techString) => techString.split(',').map(t => t.trim());

// Animation variants for staggered appearance
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function Projects() {
    // Unified color classes
    const ACCENT_COLOR_CLASSES = {
        bg: "bg-blue-100 dark:bg-blue-900/40",
        text: "text-blue-800 dark:text-blue-300",
    };

    return (
        <section 
            id="projects" 
            className="py-12 md:py-24 px-5 sm:px-6 bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400 mb-2 tracking-widest">— Detailed Work</p>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-gray-100 leading-tight">
                        Featured Projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={itemVariants}
                            className="group flex flex-col h-full p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl 
                                border-t-4 border-blue-500 dark:border-blue-400 
                                border-x border-b border-gray-100 dark:border-gray-700 transition duration-300 
                                hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40
                                transform hover:-translate-y-1"
                        >
                            
                            {/* Project Title and Icon */}
                            <div className="flex items-center mb-4">
                                <Code className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{project.name}</h3>
                            </div>

                            {/* Tech Stack Pills (Now at the top for immediate context) */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {getTechPills(project.tech).map((tech, i) => (
                                    <span 
                                        key={i} 
                                        className={`px-3 py-1 text-xs font-medium rounded-full 
                                            ${ACCENT_COLOR_CLASSES.bg} ${ACCENT_COLOR_CLASSES.text}
                                            border border-blue-200 dark:border-blue-800`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Project Description */}
                            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed text-sm">
                                {project.desc}
                            </p>

                            {/* Call to Action Buttons */}
                            <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                                <a 
                                    href={project.live} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`flex-1 inline-flex items-center justify-center text-base font-semibold h-10 px-4 rounded-lg 
                                            ${project.live === '#' ? 'bg-gray-400 cursor-not-allowed text-gray-700' : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white'}
                                            shadow-md transition duration-300`}
                                    onClick={(e) => project.live === '#' && e.preventDefault()}
                                >
                                    <Globe className="w-4 h-4 mr-2" /> Live Demo
                                </a>
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`flex-1 inline-flex items-center justify-center text-base font-semibold h-10 px-4 rounded-lg 
                                            ${project.github === '#' ? 'bg-gray-400 cursor-not-allowed text-gray-700' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'}
                                            shadow-inner transition duration-300`}
                                    onClick={(e) => project.github === '#' && e.preventDefault()}
                                >
                                    <Github className="w-4 h-4 mr-2" /> Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}