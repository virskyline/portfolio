import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Braces, Boxes, Cloud, Code2, Database, Workflow } from "lucide-react";

const ecosystems = [
  { number: "01", title: "Frontend", description: "Responsive interfaces focused on usability, performance, and maintainable components.", icon: Code2, technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "GSAP"] },
  { number: "02", title: "Backend & APIs", description: "Application logic, REST APIs, integrations, and reliable server-side workflows.", icon: Braces, technologies: ["PHP", "Laravel", "Node.js", "Express", "Filament", "REST APIs"] },
  { number: "03", title: "Data & Storage", description: "Structured application data and storage patterns chosen for each product.", icon: Database, technologies: ["MySQL", "MongoDB", "Redis", "Firebase", "Cloudflare R2"] },
  { number: "04", title: "CMS & Commerce", description: "Content-managed websites and e-commerce experiences, from setup to customisation.", icon: Boxes, technologies: ["WordPress", "Shopify", "WooCommerce", "Elementor", "Liquid"] },
  { number: "05", title: "Infrastructure", description: "Deployment platforms, containers, web servers, and delivery pipelines.", icon: Cloud, technologies: ["Docker", "Nginx", "Cloudflare", "Vercel", "Hostinger", "GitHub Actions"] },
  { number: "06", title: "Integrations & Workflow", description: "Connecting products to payment services and the tools teams already use.", icon: Workflow, technologies: ["Razorpay", "Stripe", "Git", "GitHub", "Figma", "Postman"] },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.querySelectorAll(".skill-reveal").forEach((element, index) => {
          (element as HTMLElement).style.transitionDelay = `${index * 75}ms`;
          element.classList.add("is-visible");
        });
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-surface-alt relative isolate overflow-hidden py-20 sm:py-24 lg:py-28" id="skills" ref={sectionRef}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1951fc]/10 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#78c1fc]/[.07] blur-[130px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#78c1fc]/20 to-transparent" />
      </div>
      <div className="section-container">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl skill-reveal">
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-[#78c1fc]">
              <span className="h-px w-8 bg-[#78c1fc]/70" /> Tools of the trade <span className="text-[#78c1fc]/45">/ 04</span>
            </div>
            <h2 className="section-title text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl lg:text-6xl">
              Technology <span className="text-[#78c1fc]">Stack.</span>
            </h2>
          </div>
          <p className="skill-reveal max-w-md text-base leading-7 text-[#b9d8f7]/80">
            The tools I use to design, build, integrate, and ship digital products.
          </p>
        </div>

        <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[#cbe9fd]/10 py-4 text-xs font-medium uppercase tracking-[.18em] text-[#78a8d7]/75 skill-reveal">
          <span className="text-[#cbe9fd]">Core workflow</span>
          <span>Design</span><span className="text-[#78c1fc]/50">/</span><span>Develop</span><span className="text-[#78c1fc]/50">/</span><span>Integrate</span><span className="text-[#78c1fc]/50">/</span><span>Deploy</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ecosystems.map(({ number, title, description, icon: Icon, technologies }) => (
            <article key={number} className="skill-reveal group relative flex min-h-[260px] flex-col overflow-hidden rounded-[1.6rem] border border-[#cbe9fd]/[.13] bg-gradient-to-br from-white/[.065] via-[#0b2cb1]/[.08] to-[#03195b]/25 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#78c1fc]/35 hover:bg-white/[.07] sm:p-7">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-[#1951fc]/10 blur-[65px] transition-colors duration-500 group-hover:bg-[#1951fc]/20" />
              <div className="relative mb-8 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#78c1fc]/25 bg-[#1951fc]/15 text-[#cbe9fd]"><Icon size={20} strokeWidth={1.7} /></div>
                <span className="font-mono text-xs tracking-[.2em] text-[#78a8d7]/55">{number}</span>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold tracking-[-.02em] text-[#f4f9ff]">{title}</h3>
                <p className="mt-2 min-h-[3rem] text-sm leading-6 text-[#b9d8f7]/75">{description}</p>
              </div>
              <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                {technologies.map((technology) => <span key={technology} className="rounded-full border border-[#cbe9fd]/[.13] bg-white/[.035] px-3 py-1.5 text-xs font-medium text-[#cbe9fd]/85 transition-colors group-hover:border-[#78c1fc]/25">{technology}</span>)}
              </div>
              <ArrowUpRight aria-hidden="true" size={17} className="absolute bottom-7 right-7 text-[#78c1fc]/0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#78c1fc]/70" />
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .skill-reveal { opacity: 0; transform: translateY(18px); transition: opacity .65s ease, transform .65s ease; }
        .skill-reveal.is-visible { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) { .skill-reveal { opacity: 1; transform: none; transition: none; } }
      `}</style>
    </section>
  );
};

export default Skills;
