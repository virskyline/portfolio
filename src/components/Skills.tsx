
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillCategory = ({ title, skills, index }: SkillCategoryProps) => {
  return (
    <div 
      className="glass-card p-6 hover:shadow-lg transition-all duration-300 opacity-0 fade-in-element"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span 
            key={i}
            className="px-3 py-1.5 bg-pulse-50 text-pulse-600 rounded-full text-sm font-medium hover:bg-pulse-100 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Next.js", "Nuxt.js", "TailwindCSS"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "MongoDB", "SQL", "REST APIs", "Payment Integration", "Form Integration"]
    },
    {
      title: "CMS & E-commerce",
      skills: ["WordPress", "Wix", "Shopify", "WooCommerce"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "Responsive Design", "SEO Optimization"]
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="skills" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Skills & Expertise</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Technologies I <span className="text-pulse-500">Work With</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            A comprehensive toolkit for building modern, scalable, and user-friendly web applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
