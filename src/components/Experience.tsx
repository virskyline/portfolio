
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Hype Marketing Agency",
      period: "2024 - Present",
      type: "Full-time",
      responsibilities: [
        "Leading a team of 2 developers on multiple client projects",
        "Developing and maintaining 20+ websites for various clients",
        "Implementing payment integrations and backend solutions",
        "Managing e-commerce, EdTech, and marketing agency projects",
        "Code reviews and mentoring junior developers"
      ]
    },
    {
      role: "Web Developer",
      company: "Freelance / Self-employed",
      period: "2023 - 2024",
      type: "Freelance",
      responsibilities: [
        "Built personal projects and freelance client websites",
        "Developed skills in React, Vue, Next.js, and Node.js",
        "Worked with various CMS platforms including WordPress and Wix",
        "Learned e-commerce development with Shopify and WooCommerce"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 section-surface-alt" id="experience" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Career Journey</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Work <span className="text-pulse-500">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            My professional journey in web development
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={cn(
                "relative pl-8 pb-12 last:pb-0 opacity-0 fade-in-element",
                "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#3781fc]/40",
                index === experiences.length - 1 && "before:hidden"
              )}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] bg-pulse-500 rounded-full border-4 border-pulse-100"></div>
              
              <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-pulse-50 text-pulse-600 text-sm font-medium rounded-full">
                    {exp.type}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                <p className="flex items-center gap-2 text-pulse-500 font-medium mb-4">
                  <Building2 size={16} />
                  {exp.company}
                </p>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-[#78c1fc] mt-0.5 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
