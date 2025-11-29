'use client';
// Skills.jsx
import { Code, Database, Server, Settings, Zap, Terminal, GitBranch, Layers, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
    
    // Unified color palette for all elements
    const ACCENT_COLOR_CLASSES = {
        icon: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900/40",
        text: "text-blue-800 dark:text-blue-300",
    };

    // Mapped your specific skills to 7 distinct technical categories
    const categorizedSkills = [
        {
            title: "Programming Languages",
            icon: Terminal,
            skills: ["JavaScript (ES6+)", "TypeScript", "Python"],
        },
        {
            title: "Frontend & UI/UX",
            icon: Code,
            skills: [
                "React.js", "Next.js", "Vite.js", "Tailwind CSS", "Material-UI", "Bootstrap", "Advanced CSS"
            ],
        },
        {
            title: "Backend & Frameworks",
            icon: Server,
            skills: [
                "Node.js (Express)", "NestJS", "Django", "Django REST Framework"
            ],
        },
        {
            title: "Databases & APIs",
            icon: Database,
            skills: [
                "PostgreSQL", "MongoDB", "MySql", "SQL/NoSQL", "RESTful API Design", "JWT Authentication"
            ],
        },
        {
            title: "State & Libraries",
            icon: Layers,
            skills: ["Redux", "Zustand", "Context API", "Axios", "React Router"],
        },
        {
            title: "DevOps & Deployment",
            icon: Cloud,
            // Dedicated card for deployment and hosting platforms
            skills: ["Vercel", "Render", "Netlify", "Cloudflare"], 
        },
        {
            title: "Tools & Workflow",
            icon: Settings,
            // Dedicated card for tools and version control
            skills: [ "Git", "GitHub", "Gitlab", "Postman", "Jira", "VS Code"], 
        },
    ];

    const softSkills = [
        "Problem-solving",
        "Team Work",
        "Adaptability",
        "Attention to Detail",
        "Effective Communication" 
    ];

    // Animation variant for grid items
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };


    return (
        <section
            className="py-12 md:py-24 px-5 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400 mb-2 tracking-widest">
                        — Core Strengths
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-gray-100 leading-tight">
                        My Technical Stack
                    </h2>
                </div>

                {/* Technical Skills Grid (7 categories) */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ staggerChildren: 0.08 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" 
                >
                    {categorizedSkills.map((category, catIdx) => {
                        const { icon, bg, text } = ACCENT_COLOR_CLASSES;
                        return (
                            <motion.div
                                key={catIdx}
                                variants={itemVariants}
                                className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl 
                                hover:shadow-2xl transition duration-300 hover:-translate-y-1"
                            >
                                <div className={`flex items-center mb-4 ${icon}`}>
                                    <category.icon className="w-6 h-6 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className={`px-4 py-1 text-sm font-medium rounded-full ${bg} ${text} 
                                            shadow-sm transition hover:scale-[1.05]`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* --- SEPARATOR --- */}
                <hr className="w-full my-16 h-px bg-gray-300 dark:bg-gray-700 border-0" />

                {/* --- SOFT SKILLS SECTION (SEPARATE AND CONSISTENT) --- */}
                <div className="text-center">
                    
                    
                    {/* Soft Skills Card (Mirrors the look of a technical skill card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl 
                        bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 
                        shadow-2xl hover:shadow-2xl transition duration-300"
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-10">
                        <Zap className="w-6 h-6 inline mr-2 text-blue-600 dark:text-blue-400" /> Essential Soft Skills
                    </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {softSkills.map((skill, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                                    viewport={{ once: true }}
                                    // Soft skills pills are styled exactly like the technical pills
                                    className={`px-4 py-1 text-sm font-medium rounded-full ${ACCENT_COLOR_CLASSES.bg} ${ACCENT_COLOR_CLASSES.text} 
                                    shadow-sm transition hover:scale-[1.05]`}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
                {/* ------------------------------------------- */}
                
            </div>
        </section>
    );
}