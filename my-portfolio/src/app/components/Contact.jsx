'use client';

import { Mail, Phone, Github, Linkedin, Send, AlertTriangle } from "lucide-react";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendContactMessage } from "../services/contactApi";  // ⬅ import service

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const contactInfo = [
    { icon: Phone, label: "Call Me", detail: "+91 8086378480", link: "tel:+918086378480" },
    { icon: Mail, label: "Email Me", detail: "akmanchu7@gmail.com", link: "mailto:akmanchu7@gmail.com" },
  ];
  const socialLinks = [
    { icon: Github, name: "GitHub", link: "https://github.com/Manzoor-Khiliriya" },
    { icon: Linkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/manzoor-a-k-fullstack/" },
  ];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    else if (formData.name.length < 2) newErrors.name = "Name must be at least 2 characters.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const { [name]: _, ...rest } = prev; return rest; });
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus({ type: "loading", msg: "Sending..." });

    const data = await sendContactMessage(formData);  // ⬅ actual request

    if (data.ok) {
      setStatus({ type: "success", msg: data.msg });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus({ type: "error", msg: data.msg });
    }

    setTimeout(() => setStatus(null), 5000);
  };

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            — Let's Connect
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-gray-100 leading-tight">
            Ready to Build Together?
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm open to full-stack, frontend and backend opportunities and exciting collaborations.
          </p>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-900/30 border border-gray-200 dark:border-gray-700"
        >
          {/* Left side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Direct Contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.link}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700/50 transition group"
                  >
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{item.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Find Me Online
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((item, i) => (
                  <a key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition shadow-md hover:shadow-xl"
                  >
                    <item.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Send a Message
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">I usually reply within 24 hours</p>
            </div>

            {/* Name */}
            <div>
              <input type="text" name="name" placeholder="Your Name *"
                value={formData.name} onChange={handleChange}
                className={`w-full px-5 py-4 rounded-xl border-2
                  ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}/>
              {errors.name && <p className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400"><AlertTriangle className="w-4 h-4 mr-1"/>{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input type="email" name="email" placeholder="Your Email *"
                value={formData.email} onChange={handleChange}
                className={`w-full px-5 py-4 rounded-xl border-2
                  ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}/>
              {errors.email && <p className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400"><AlertTriangle className="w-4 h-4 mr-1"/>{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea name="message" rows={5} placeholder="Your Message *"
                value={formData.message} onChange={handleChange}
                className={`w-full px-5 py-4 rounded-xl border-2 resize-none
                  ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}/>
              {errors.message && <p className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400"><AlertTriangle className="w-4 h-4 mr-1"/>{errors.message}</p>}
            </div>

            {status && (
              <div className={`p-4 rounded-xl text-center font-medium
                ${status.type === 'success'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                  : status.type === 'loading'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                }`}>
                {status.msg}
              </div>
            )}

            <button type="submit" disabled={status?.type === 'success' || status?.type === 'loading'}
              className="w-full flex items-center justify-center gap-2 py-4 text-lg font-semibold rounded-xl
                bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg
                hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
                disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
