
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, Send, CheckCircle, Briefcase, Users } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:work.virskyline@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 md:py-24 section-surface" id="contact" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Let's <span className="text-pulse-500">Work Together</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Have a project in mind? I'm available for freelance work and collaboration.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side - Info */}
          <div className="opacity-0 fade-in-element">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-gray-600 mb-8">
              Whether you need a new website, an e-commerce platform, or a custom web application, 
              I'm here to help. Let's discuss your project and create something amazing together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1951fc]/15 border border-[#78c1fc]/25 rounded-full flex items-center justify-center text-pulse-500 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Me</h4>
                  <a href="mailto:work.virskyline@gmail.com" className="text-pulse-500 hover:underline">
                    work.virskyline@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center text-pulse-500 flex-shrink-0">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Freelance Projects</h4>
                  <p className="text-gray-600">Available for new opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center text-pulse-500 flex-shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Collaboration</h4>
                  <p className="text-gray-600">Open to working with teams and agencies</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="opacity-0 fade-in-element">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pulse-500 focus:ring-2 focus:ring-pulse-200 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pulse-500 focus:ring-2 focus:ring-pulse-200 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pulse-500 focus:ring-2 focus:ring-pulse-200 outline-none transition-all bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="Freelance Project">Freelance Project</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pulse-500 focus:ring-2 focus:ring-pulse-200 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className={cn(
                  "w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300",
                  isSubmitted 
                    ? "bg-green-500 text-white" 
                    : "bg-pulse-500 text-white hover:bg-pulse-600"
                )}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
