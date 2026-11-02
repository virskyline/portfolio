import React from "react";
import { ArrowDownRight, ArrowRight, Mail, Github, Linkedin, Sparkles } from "lucide-react";

const Hero = () => (
  <section id="hero" className="hero-flow relative isolate flex min-h-[92svh] items-center overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_34%,rgba(25,81,252,.26),transparent_34%),radial-gradient(ellipse_at_18%_12%,rgba(120,193,252,.13),transparent_32%)]"/>
      <div className="absolute right-[5%] top-[12%] h-64 w-64 rounded-full bg-[#1951fc]/20 blur-[100px] sm:h-96 sm:w-96"/>
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent via-[#03195b]/25 to-[#03195b]/70"/>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#78c1fc]/45 to-transparent"/>
    </div>
    <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-10">
      <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#78c1fc]/30 bg-[#0b2cb1]/20 px-4 py-2 text-sm text-[#cbe9fd] shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-xl"><Sparkles size={15} className="text-[#78c1fc]"/><span>Building thoughtful digital experiences</span></div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.28em] text-[#78c1fc]">Senior Full Stack Developer</p>
          <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-.055em] text-[#f4f9ff] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">I turn complex ideas<span className="mt-2 block bg-gradient-to-r from-[#cbe9fd] via-[#78c1fc] to-[#3781fc] bg-clip-text pb-2 text-transparent">into digital reality.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#b9d8f7] sm:text-lg lg:mx-0">I’m Niraj Patel — a developer focused on reliable web applications, polished interfaces, and e-commerce experiences that work as well as they look. Currently building with the team at <span className="font-semibold text-[#edf7ff]">Hype Marketing Agency</span>.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#contact" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#cbe9fd]/40 bg-gradient-to-r from-[#3781fc] via-[#1951fc] to-[#0b2cb1] px-7 font-semibold text-white shadow-[0_12px_36px_rgba(25,81,252,.28),inset_0_1px_0_rgba(255,255,255,.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(25,81,252,.4)]">Let’s work together <ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/></a>
            <a href="#projects" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#cbe9fd]/25 bg-white/[.04] px-7 font-medium text-[#eaf6ff] backdrop-blur-xl transition hover:border-[#78c1fc]/60 hover:bg-[#1951fc]/15">Explore my work <ArrowDownRight size={18}/></a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start"><span className="mr-1 text-xs uppercase tracking-[.18em] text-[#78a8d7]">Connect</span>
            <a href="mailto:work.virskyline@gmail.com" aria-label="Email Niraj" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#cbe9fd]/20 bg-[#0b2cb1]/20 text-[#cbe9fd] transition hover:-translate-y-1 hover:border-[#78c1fc]/60 hover:bg-[#1951fc]/30"><Mail size={17}/></a>
            <a href="https://github.com/virskyline" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#cbe9fd]/20 bg-[#0b2cb1]/20 text-[#cbe9fd] transition hover:-translate-y-1 hover:border-[#78c1fc]/60 hover:bg-[#1951fc]/30"><Github size={17}/></a>
            <a href="https://www.linkedin.com/in/virskyline" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#cbe9fd]/20 bg-[#0b2cb1]/20 text-[#cbe9fd] transition hover:-translate-y-1 hover:border-[#78c1fc]/60 hover:bg-[#1951fc]/30"><Linkedin size={17}/></a>
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:min-h-[570px]">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1951fc]/20 blur-[100px]"/>
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#78c1fc]/10"/>
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#78c1fc]/15"/>
          <div aria-hidden="true" className="absolute left-[16%] top-[20%] h-2 w-2 rounded-full bg-[#cbe9fd] shadow-[0_0_24px_rgba(203,233,253,.9)]"/>
          <div aria-hidden="true" className="absolute right-[17%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#3781fc] shadow-[0_0_20px_rgba(55,129,252,.9)]"/>
          <div aria-hidden="true" className="absolute bottom-[22%] left-[24%] h-1.5 w-1.5 rounded-full bg-[#78c1fc] shadow-[0_0_18px_rgba(120,193,252,.9)]"/>
          <div className="relative flex aspect-square w-full max-w-[450px] items-center justify-center">
            <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(203,233,253,.36),transparent_22%),radial-gradient(circle_at_68%_72%,rgba(25,81,252,.28),transparent_34%)] blur-2xl"/>
            <div aria-hidden="true" className="absolute h-[68%] w-[68%] rotate-[-24deg] rounded-[38%_62%_58%_42%/42%_38%_62%_58%] border border-white/25 bg-gradient-to-br from-white/20 via-[#78c1fc]/10 to-[#1951fc]/20 shadow-[inset_1px_1px_1px_rgba(255,255,255,.5),inset_-18px_-20px_50px_rgba(3,25,91,.35),0_25px_80px_rgba(25,81,252,.18)] backdrop-blur-xl transition-transform duration-700 hover:rotate-[-12deg]"/>
            <div aria-hidden="true" className="absolute h-[50%] w-[50%] rotate-[28deg] rounded-[42%_58%_35%_65%/55%_35%_65%_45%] border border-[#cbe9fd]/30 bg-gradient-to-br from-[#cbe9fd]/30 via-[#3781fc]/15 to-[#03195b]/35 shadow-[inset_2px_2px_18px_rgba(255,255,255,.2),0_20px_60px_rgba(25,81,252,.2)] backdrop-blur-2xl transition-transform duration-700 hover:rotate-[18deg]"/>
            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/35 bg-white/[.08] shadow-[inset_0_1px_0_rgba(255,255,255,.55),0_20px_60px_rgba(3,25,91,.25)] backdrop-blur-2xl sm:h-36 sm:w-36 sm:rounded-[2.5rem]">
              <span className="bg-gradient-to-br from-white via-[#cbe9fd] to-[#78c1fc] bg-clip-text text-5xl font-semibold tracking-[-.1em] text-transparent sm:text-6xl">NP</span>
            </div>
            <div className="absolute bottom-[12%] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-[#03195b]/35 px-4 py-2 text-[11px] tracking-[.18em] text-[#cbe9fd] shadow-[inset_0_1px_0_rgba(255,255,255,.2)] backdrop-blur-xl">DESIGN · CODE · SHIP</div>
          </div>
        </div>
      </div>
      <a href="#about" className="mx-auto mt-20 flex w-fit items-center gap-3 text-xs uppercase tracking-[.24em] text-[#8bb9e5] transition hover:text-white lg:mx-0"><span className="h-px w-10 bg-gradient-to-r from-[#3781fc] to-[#78c1fc]"/>Scroll to discover <ArrowDownRight size={15}/></a>
    </div>
  </section>
);

export default Hero;
