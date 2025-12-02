'use client'
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            title: "Fullstack Developer Intern",
            company: "Softreey Technologies",
            location: "Bengaluru, Karnataka",
            period: "October 2025 - Present",
            bullets: [
                "Built and deployed modern full-stack web applications using Next.js, Tailwind CSS, and Node.js (Express), ensuring responsive design and optimal performance.",
                "Collaborated with cross-functional teams in an Agile environment using Jira and Slack, participating in daily stand-ups and sprint planning.",
                "Utilized GitHub for version control, pull requests, and collaborative development workflows.",
                "Implemented and tested RESTful APIs to streamline data exchange between frontend and backend.",
            ],
        },
        {
            title: "MERN Stack Developer Intern",
            company: "Upcode Software Labs",
            location: "Kannur, Kerala",
            period: "January 2024 - June 2025",
            bullets: [
                "Developed and maintained web applications using MongoDB, Express.js, React.js, and Node.js.",
                "Designed and implemented responsive, user-friendly UIs with Bootstrap, Tailwind CSS, and Material-UI.",
                "Built and optimized RESTful APIs for seamless frontend-backend communication, improving application performance.",
                "Worked with JWT authentication to secure user login and data access.",
                "Gained experience with Next.js, TypeScript, Mongoose, PostgreSQL, and NestJS.",
                "Managed code versions and collaborated using Git & GitHub for smooth development and deployment.",
            ],
        },
    ];

    // Animation variants for staggered appearance
    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
    };

    return (
        <section 
            id="experience" 
            className="py-12 md:py-24 px-5 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400 mb-2 tracking-widest">— Professional Journey</p>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-gray-100 leading-tight">
                        My Experience
                    </h2>
                </div>

                {/* Experience Timeline Container */}
                <div className="relative border-l-4 border-blue-200 dark:border-blue-800 space-y-16 ml-4 md:ml-0 md:pl-8">
                    
                    {experiences.map((exp, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative mb-12 p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition duration-300"
                        >
                            
                            {/* Timeline Dot/Marker */}
                            <div 
                                // Positioned to align perfectly with the border line
                                className={`absolute w-4 h-4 rounded-full -left-[30px] md:-left-[35px] transform translate-x-[2px] 
                                    bg-blue-600 dark:bg-blue-400 ring-4 ring-gray-50 dark:ring-gray-900 shadow-md`}
                            ></div>

                            <div className="md:ml-0 space-y-4">
                                
                                {/* Job Title and Company */}
                                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500 dark:text-gray-400 text-sm">
                                    <span className="flex items-center text-lg font-bold text-blue-700 dark:text-blue-400">
                                        <Briefcase className="w-4 h-4 mr-2" /> {exp.company}
                                    </span>
                                    <span className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                                    </span>
                                    <span className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-2" /> {exp.location}
                                    </span>
                                </div>

                                {/* Key Achievements/Bullets */}
                                <ul className="list-none space-y-3 pt-2 text-gray-700 dark:text-gray-300 text-base">
                                    {exp.bullets.map((bullet, bulletIdx) => (
                                        <li key={bulletIdx} className="flex items-start">
                                            {/* Custom bullet point using the accent color */}
                                            <span className={`h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0 mt-2 mr-3`}></span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}