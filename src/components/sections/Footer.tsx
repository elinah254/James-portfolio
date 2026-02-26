import {  Linkedin, Mail } from "lucide-react";
import type React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Name / Logo */}
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Samwel James
          </div>

          {/* Tagline */}
          <p className="text-slate-300 mb-6">
            Offering learner centrered education 
          </p>

          {/* Social links with pulse animation */}
          <div className="flex justify-center space-x-6 mb-6">
            {[
              // { href: "https://github.com/elinah254", icon: <Github className="w-6 h-6" />, color: "hover:text-pink-500" },
              { href: "https://www.linkedin.com/in/owino-samwel", icon: <Linkedin className="w-6 h-6" />, color: "hover:text-purple-500" },
              { href: "mailto:owinojs014@gmail.com", icon: <Mail className="w-6 h-6" />, color: "hover:text-blue-400" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 transition-colors duration-200 ${item.color} animate-pulse-slow`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Dynamic copyright */}
          <p className="text-slate-500 text-sm">
            © {currentYear} Built with passion & code. Made for the web, powered by creativity. 🌐
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
