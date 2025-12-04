import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links data including icons
  const socialLinks = [
    {
      Icon: Github,
      name: "GitHub",
      link: "https://github.com/Manzoor-Khiliriya"
    },
    {
      Icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/manzoor-a-k-fullstack/"
    },
  ];

  return (
    <footer className="bg-gray-950 text-white border-t border-blue-700/50 dark:border-blue-500/30 py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center">
        {/* Copyright */}
        <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
          © {currentYear} Manzoor A K. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 my-2">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={`View my ${item.name} profile`}
              className="text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <item.Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}