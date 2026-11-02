
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
    <section className="about-flow relative -mt-1 overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 section-surface" id="about" ref={sectionRef}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#03195b]/55 via-[#03195b]/20 to-transparent" />
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#1951fc]/10 blur-[100px]" />
        <div className="absolute -right-40 top-44 h-96 w-96 rounded-full bg-[#3781fc]/10 blur-[110px]" />
        <div className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-[#78c1fc]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#020817]/30" />
      </div>
      <div className="section-container relative z-10">
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
        
        <div className="grid items-center gap-8 md:grid-cols-[1.02fr_.98fr] md:gap-12">
          {/* Left Side - About Text */}
          <div className="opacity-0 fade-in-element">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Turning Ideas Into Useful Products
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
              className="inline-flex items-center gap-2 rounded-full border border-[#cbe9fd]/35 bg-gradient-to-r from-[#3781fc] via-[#1951fc] to-[#0b2cb1] px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(25,81,252,.25),inset_0_1px_0_rgba(255,255,255,.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(25,81,252,.38)]"
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
                  "hover:-translate-y-1",
                  "transition-all duration-300"
                )}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#78c1fc]/25 bg-gradient-to-br from-[#78c1fc]/20 to-[#1951fc]/20 text-[#78c1fc] shadow-[inset_0_1px_0_rgba(255,255,255,.18)]">
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
