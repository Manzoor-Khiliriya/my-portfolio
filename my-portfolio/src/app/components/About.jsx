// About.jsx
"use client";
import { User, Code } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-24 px-5 sm:px-6 bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-shrink-0 w-full max-w-xs md:w-1/3 lg:max-w-md p-8 
            bg-white/5 backdrop-filter backdrop-blur-lg rounded-3xl 
            border border-blue-500/10 shadow-lg shadow-blue-500/20 
            flex flex-col items-center relative overflow-hidden group 
            hover:border-blue-500/20 transition duration-500"
        >
          <div className="absolute inset-0 bg-blue-500 opacity-5 blur-xl group-hover:opacity-10 transition duration-500"></div>

          <div className="relative w-36 h-36 mx-auto mb-6 z-10">
            <img
              src="/Manzoor.jpg"
              alt="Manzoor A K"
              className="rounded-full object-fill w-full h-full 
                border-4 border-transparent ring-4 ring-blue-500/50 
                shadow-xl shadow-blue-500/30"
            />
          </div>

          <div className="text-center mb-6 z-10">
            <p className="text-2xl font-extrabold text-gray-50 tracking-wide">
              Manzoor A K
            </p>
            <p className="text-lg font-medium text-blue-400 mt-1">
              Full-Stack Developer
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-2/3 text-center md:text-left"
        >
          <p className="text-sm font-semibold uppercase text-blue-400 mb-2 tracking-widest">
            — Who I Am
          </p>

          <h2
            className="text-3xl md:text-4xl font-bold mb-6 
                       text-gray-800 dark:text-gray-100 leading-tight"
          >
            Crafting High-Performance Web Experiences
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
            I’m a Full-Stack Developer passionate about building fast, scalable,
            and responsive web applications. I work extensively with{" "}
            <strong>JavaScript, TypeScript, and Python</strong>, and specialize
            in frontend frameworks and styling tools, including{" "}
            <strong>
              React.js, Next.js, Tailwind CSS, Material-UI, Bootstrap
            </strong>
            , and <strong>Advanced CSS</strong> techniques, creating clean,
            modern, and intuitive user interfaces.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
            On the backend, I am skilled in{" "}
            <strong>Node.js, Express, NestJS, and Django (DRF)</strong>, with hands-on
            experience working with both <strong>SQL</strong> and <strong>NoSQL</strong> databases, including{" "}
            <strong>PostgreSQL, MongoDB, and MySQL</strong>. I manage state
            efficiently using <strong>Redux, Zustand, and Context API</strong>,
            and design secure, <strong>RESTful APIs</strong> with{" "}
            <strong>JWT authentication</strong> for seamless frontend-backend
            integration.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
            I am experienced in deploying applications on{" "}
            <strong>Vercel and Render</strong>, with basic knowledge of{" "}
            <strong>AWS</strong>, ensuring smooth hosting, scalability, and
            performance. I thrive in collaborative environments using{" "}
            <strong>Git/GitHub</strong> and <strong>Agile</strong> workflows,
            and enjoy solving complex problems while delivering efficient,
            maintainable code to create high-performance web experiences.
          </p>

          <Link
            href="#skills"
            className="mt-8 inline-flex items-center text-lg font-bold text-blue-400 
              hover:text-blue-300 transition duration-300 border-b-2 border-blue-400 
              pb-1"
          >
            Review My Detailed Skills <Code className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
