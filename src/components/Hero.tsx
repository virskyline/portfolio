
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative min-h-screen flex items-center bg-cover" 
      id="hero" 
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%',
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      {/* Background decorations */}
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">👋</span>
              <span>Welcome to my portfolio</span>
            </div>
            
            <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Hi, I'm <span className="text-pulse-500">Niraj Patel</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6 font-medium opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Senior Full Stack Web Developer
            </h2>
            
            <p className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-600 font-normal text-base sm:text-lg text-center lg:text-left" style={{ animationDelay: "0.5s" }}>
              With 2.5+ years of experience building modern, responsive websites. 
              Currently leading a team at <span className="text-pulse-500 font-semibold">Hype Marketing Agency</span>. 
              Specialized in React, Next.js, Vue, and e-commerce solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <a 
                href="#contact" 
                className="flex items-center justify-center group w-full sm:w-auto text-center"
                style={{
                  background: 'linear-gradient(135deg, #3781fc 0%, #1951fc 48%, #0b2cb1 100%)',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px',
                  border: '1px solid rgba(203,233,253,.55)',
                  boxShadow: '0 12px 32px rgba(25,81,252,.32), inset 0 1px 0 rgba(255,255,255,.35)',
                  backdropFilter: 'blur(18px)',
                }}
              >
                Hire Me
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#projects" 
                className="button-secondary flex items-center justify-center w-full sm:w-auto text-center px-6 py-4 rounded-full font-medium transition-all duration-300"
              >
                View Projects
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <a 
                href="mailto:work.virskyline@gmail.com" 
                className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center text-pulse-500 hover:bg-pulse-500 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center text-pulse-500 hover:bg-pulse-500 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center text-pulse-500 hover:bg-pulse-500 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Profile Image/Avatar Area */}
          <div className="flex-1 flex justify-center lg:justify-end opacity-0 animate-fade-in" ref={containerRef} style={{ animationDelay: "0.8s" }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-pulse-400 to-pulse-600 flex items-center justify-center shadow-2xl">
                <div className="w-[95%] h-[95%] rounded-full bg-white flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-pulse-500">NP</span>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                <span className="text-sm font-semibold text-pulse-500">20+ Projects</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-semibold text-pulse-500">2.5+ Years Exp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
