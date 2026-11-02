
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  platform: string;
  url?: string;
  description: string;
  index: number;
}

const ProjectCard = ({ title, category, platform, url, description, index }: ProjectCardProps) => {
  return (
    <div 
      className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 opacity-0 fade-in-element group"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-[#3781fc] via-[#1951fc] to-[#03195b] flex items-center justify-center relative overflow-hidden">
        <Globe className="w-16 h-16 text-white/30" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {url && (
            <a 
              href={`https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#cbe9fd]/90 text-[#03195b] px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-white transition-colors"
            >
              Visit Site <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-pulse-50 text-pulse-600 text-xs font-medium rounded-full">
            {category}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
            {platform}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {url && (
          <a 
            href={`https://${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pulse-500 font-medium text-sm flex items-center gap-1 hover:text-pulse-600"
          >
            {url} <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  
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

  const projects = [
    {
      title: "CreateHype",
      category: "Marketing",
      platform: "Custom",
      url: "createhype.co",
      description: "Full development of the CreateHype marketing agency website with modern design and responsive layout."
    },
    {
      title: "Kashmir Organic Canada",
      category: "E-commerce",
      platform: "WordPress",
      url: "kashmirorganiccanada.com",
      description: "Full-featured e-commerce website for organic products with payment integration and inventory management."
    },
    {
      title: "Lumeva Care",
      category: "E-commerce",
      platform: "Wix",
      url: "lumevacare.com",
      description: "Healthcare and wellness products e-commerce platform with modern UI and seamless checkout experience."
    },
    {
      title: "Pearl Skin",
      category: "E-commerce",
      platform: "Shopify",
      url: "pearlskin.co.in",
      description: "Skincare e-commerce store built on Shopify with custom theme and optimized for conversions."
    },
    {
      title: "Trivance Marine Services",
      category: "Corporate",
      platform: "WordPress",
      url: "trivancemarineservices.com",
      description: "Professional corporate website for marine services company with service showcase and contact forms."
    },
    {
      title: "Digital Marketing Campaigns",
      category: "Marketing",
      platform: "Various",
      description: "Multiple campaign landing pages built for marketing initiatives under Hype Marketing Agency."
    },
    {
      title: "EdTech Platforms",
      category: "EdTech",
      platform: "Custom",
      description: "Educational technology solutions with course management and student portals."
    },
    {
      title: "Arteiza",
      category: "Web Design",
      platform: "Website",
      url: "arteiza.com",
      description: "Website project for Arteiza. Visit the live website to explore its design and user experience."
    }
  ];

  const filters = ["all", "E-commerce", "Corporate", "Marketing", "EdTech", "Web Design"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
  
  return (
    <section className="py-16 md:py-24 section-surface" id="projects" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>My Work</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Featured <span className="text-pulse-500">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            A selection of projects I've worked on for clients across different industries.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 opacity-0 fade-in-element">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#3781fc] to-[#1951fc] text-white shadow-[0_6px_20px_rgba(25,81,252,.3)]"
                  : "bg-white/5 border border-white/10 text-[#b9d8f7] hover:bg-[#1951fc]/20 hover:text-white"
              )}
            >
              {filter === "all" ? "All Projects" : filter}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 fade-in-element">
          <p className="text-gray-500 mb-4">
            + Many more projects delivered under Hype Marketing Agency
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
