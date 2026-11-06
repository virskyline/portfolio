import React from "react";
import { ArrowUpRight, Code2, Layers3, ShoppingBag } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    category: "Frontend development",
    title: "Interfaces that feel effortless.",
    description: "Responsive, accessible interfaces built around clarity, consistency, and real user needs.",
    capabilities: ["React & Next.js", "Tailwind CSS", "UI implementation"],
  },
  {
    number: "02",
    icon: Layers3,
    category: "Backend development",
    title: "Systems built to work reliably.",
    description: "Application logic, APIs, integrations, and data layers designed for maintainability and scale.",
    capabilities: ["Laravel & PHP", "Node.js & APIs", "MySQL & MongoDB"],
  },
  {
    number: "03",
    icon: ShoppingBag,
    category: "E-commerce",
    title: "Commerce experiences that convert.",
    description: "Storefronts and commerce workflows that make product discovery and checkout straightforward.",
    capabilities: ["Shopify", "WooCommerce", "Payment integrations"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-surface relative isolate overflow-hidden py-24 sm:py-28">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#1951fc]/10 blur-[120px]" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#78c1fc]/[.07] blur-[110px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#78c1fc]/20 to-transparent" />
    </div>

    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-[#78c1fc]">
            <span className="h-px w-8 bg-[#78c1fc]/70" />
            What I do <span className="text-[#78c1fc]/45">/ 02</span>
          </div>
          <h2 className="section-title text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl lg:text-6xl">
            My Services<span className="text-[#78c1fc]">.</span>
          </h2>
        </div>
        <p className="max-w-md text-base leading-7 text-[#b9d8f7]/80">
          From polished interfaces to dependable application backends, I build the pieces that make digital products work.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {services.map(({ number, icon: Icon, category, title, description, capabilities }) => (
          <article
            key={number}
            className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[1.75rem] border border-[#cbe9fd]/15 bg-gradient-to-br from-white/[.075] via-[#0b2cb1]/[.10] to-[#03195b]/35 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#78c1fc]/40 hover:shadow-[0_24px_70px_rgba(3,25,91,.28)] sm:p-8"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#1951fc]/10 blur-[65px] transition duration-500 group-hover:bg-[#1951fc]/20" />
            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#78c1fc]/25 bg-[#1951fc]/15 text-[#cbe9fd] shadow-[inset_0_1px_0_rgba(255,255,255,.12)]">
                <Icon size={21} strokeWidth={1.7} />
              </div>
              <span className="text-xs font-medium tracking-[.2em] text-[#78a8d7]/70">{number}</span>
            </div>

            <div className="relative mt-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-[#78c1fc]">{category}</p>
              <h3 className="max-w-sm text-2xl font-semibold leading-tight tracking-[-.025em] text-[#f4f9ff] sm:text-[1.7rem]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#b9d8f7]/80">{description}</p>
            </div>

            <div className="relative mt-auto flex flex-wrap gap-2 pt-8">
              {capabilities.map((capability) => (
                <span key={capability} className="rounded-full border border-[#cbe9fd]/15 bg-white/[.035] px-3 py-1.5 text-xs text-[#cbe9fd]/85">
                  {capability}
                </span>
              ))}
            </div>
            <div aria-hidden="true" className="absolute bottom-7 right-7 text-[#78c1fc]/45 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#cbe9fd]">
              <ArrowUpRight size={18} />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
