'use client'
import { Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
    
    // Data only for certifications
    const certifications = [
        {
            name: "Python and Django Training Certification",
            issuer: "Besant Technologies",
            year: "2025",
        },
    ];

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

    // Unified color classes
    const ACCENT_COLOR_CLASSES = {
        bg: "bg-blue-100 dark:bg-blue-900/40",
        text: "text-blue-800 dark:text-blue-300",
    };


    return (
        <section 
            id="certifications" 
            className="py-12 md:py-24 px-5 sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
        >
            <div className="max-w-5xl mx-auto">
                
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400 mb-2 tracking-widest">— Professional Validation</p>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-gray-100 leading-tight">
                      Certifications
                    </h2>
                </div>

                {/* Certifications List (Centered in a single column) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-6"
                >
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 flex items-center">
                        <Award className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400" /> Key Certifications
                    </h3>

                    {certifications.map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={itemVariants}
                            className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg 
                                border-l-4 border-blue-500 dark:border-blue-400 
                                border-y border-r border-gray-100 dark:border-gray-700 
                                transition duration-300 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <div className="flex justify-between items-start flex-wrap">
                                {/* Certification Name */}
                                <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{item.name}</p>
                                
                                {/* Year */}
                                <p className="flex items-center text-gray-500 dark:text-gray-400 text-sm flex-shrink-0">
                                    <Calendar className="w-4 h-4 mr-1" /> {item.year}
                                </p>
                            </div>
                            
                            {/* Issuer Badge */}
                            <span 
                                className={`inline-flex items-center text-sm font-semibold mt-2 px-3 py-1 rounded-full 
                                    ${ACCENT_COLOR_CLASSES.bg} ${ACCENT_COLOR_CLASSES.text} border border-blue-200 dark:border-blue-800`}
                            >
                                <Award className="w-4 h-4 mr-1" /> {item.issuer}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}