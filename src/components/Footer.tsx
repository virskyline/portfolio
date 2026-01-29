
import React from "react";
import { Mail, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Niraj Patel</h3>
            <p className="text-gray-400 text-sm">Senior Full Stack Web Developer</p>
          </div>
          
          {/* Center - Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-gray-400 hover:text-pulse-500 transition-colors text-sm">About</a>
            <a href="#projects" className="text-gray-400 hover:text-pulse-500 transition-colors text-sm">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-pulse-500 transition-colors text-sm">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-pulse-500 transition-colors text-sm">Contact</a>
          </nav>
          
          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a 
              href="mailto:work.virskyline@gmail.com" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-pulse-500 hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-pulse-500 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-pulse-500 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Niraj Patel. Made with <Heart size={14} className="text-red-500" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
