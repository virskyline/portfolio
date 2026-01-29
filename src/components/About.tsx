
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, Users, Code2 } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Senior Developer",
      description: "Leading a team of 2 developers at Hype Marketing Agency"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Expert",
      description: "Proficient in both frontend and backend technologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "20+ Projects",
      description: "Successfully delivered projects for 10+ real clients"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "BBA(CA) Graduate",
      description: "From MITACSC Alandi"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="about" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>About Me</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Passionate About Creating <br className="hidden sm:block" />
            <span className="text-pulse-500">Digital Experiences</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            I'm a Senior Full Stack Developer with expertise in building modern, responsive websites
            and web applications that drive business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Text */}
          <div className="opacity-0 fade-in-element">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building the Web, One Project at a Time
            </h3>
            <p className="text-gray-600 mb-4">
              With <strong>1.5 years of industry experience</strong> at Hype Marketing Agency and 
              <strong> 1 year of independent projects</strong>, I've developed a deep understanding 
              of what it takes to build successful web solutions.
            </p>
            <p className="text-gray-600 mb-4">
              As a <strong>Senior Developer</strong>, I currently lead a team of 2 developers, 
              managing projects from conception to deployment. My expertise spans across various 
              platforms including <strong>WordPress, Wix, Shopify</strong>, and custom solutions 
              using modern frameworks.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in <strong>payment integrations, backend development, and form integrations</strong>, 
              ensuring seamless functionality for e-commerce and business applications.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-pulse-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pulse-600 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
          
          {/* Right Side - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "glass-card p-6 opacity-0 fade-in-element",
                  "hover:bg-gradient-to-br hover:from-white hover:to-pulse-50",
                  "transition-all duration-300"
                )}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center text-pulse-500 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
