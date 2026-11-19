import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  GraduationCap, 
  Code, 
  ShieldCheck, 
  Terminal, 
  MapPin, 
  Database, 
  Sparkles, 
  Brain,
  FileText,
  Play,
  Zap,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';
import AnimatedCounter from './AnimatedCounter';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const { personal, stats } = portfolioData;

  const roles = [
    "Full-Stack Web Architect",
    "Aspiring Data Scientist & AI/ML Engineer",
    "Computer Vision & YOLOv8 Developer",
    "Upstream Open Source Contributor (Odoo & Apache)",
    "Co-Developer — Sentinel Android (Team PhishShield)",
    "Operations Coordinator — HackerRank MU"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 25 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-8 flex flex-col justify-center overflow-hidden">
      
      {/* Subtle Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none text-center -z-0 opacity-20 dark:opacity-15">
        <span className="text-[13vw] font-black uppercase tracking-tight text-stroke-bg leading-none block">
          ENGINEER
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm w-fit card-glow-hover">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
                Available for Full-Time Roles & Projects
              </span>
            </div>

            {/* Main Headline with HIGH CONTRAST */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Crafting robust software &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] via-amber-500 to-[#ff5e14]">
                  intelligent systems.
                </span>
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="min-h-[32px] mt-3 flex items-center">
                <span className="text-sm sm:text-base font-mono font-medium text-slate-700 dark:text-slate-300">
                  <span className="text-[#ff5e14] font-bold">&gt;</span> {displayText}
                  <span className="animate-pulse text-[#ff5e14] font-bold">|</span>
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Ankit Raj Sharma</strong> — Full Stack Developer, Open Source Contributor (<strong className="text-[#ff5e14] font-semibold">Odoo</strong> & <strong className="text-[#ff5e14] font-semibold">Apache Camel K</strong>), and aspiring <strong className="text-orange-600 dark:text-orange-400 font-semibold">Data Scientist & AI/ML Engineer</strong> (B.Tech Computer Engineering, <strong className="text-slate-900 dark:text-white font-semibold">Marwadi University NAAC A+, CGPA 7.91</strong>). Co-developer of <strong className="text-slate-900 dark:text-white font-semibold">Sentinel Android</strong> (Team PhishShield ML threat classifier) with expertise across <strong className="text-slate-900 dark:text-white font-semibold">YOLOv8 Computer Vision, Supabase RAG, Python, and React</strong>.
            </p>

            {/* Quick Metrics Strip with Animated Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2 max-w-xl">
              
              <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 border-l-4 border-l-amber-500 shadow-sm dark:shadow-md card-glow-hover">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  <span>CGPA</span>
                </div>
                <div className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  <AnimatedCounter end={7.91} decimals={2} />
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mt-0.5">
                  Marwadi Univ A+
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 border-l-4 border-l-[#ff5e14] shadow-sm dark:shadow-md card-glow-hover">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                  <Code className="w-3.5 h-3.5 text-[#ff5e14]" />
                  <span>Shipped</span>
                </div>
                <div className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mt-0.5">
                  Vision, ML & Web
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 border-l-4 border-l-indigo-500 shadow-sm dark:shadow-md card-glow-hover">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Open Source</span>
                </div>
                <div className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  <AnimatedCounter end={35} suffix="+" />
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mt-0.5">
                  GitHub Repositories
                </span>
              </div>

            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={() => playSound('click')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#ff5e14] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#ea580c] shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  playSound('click');
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 font-semibold text-xs tracking-wider uppercase text-slate-900 dark:text-white hover:border-[#ff5e14]/60 transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#ff5e14]" />
                <span>Get Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors shadow-sm"
                title="Launch Recruiter Terminal (Shortcut: `)"
              >
                <Terminal className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Balanced Professional Studio Portrait with Floating Tech Orbs */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            <div className="relative w-full max-w-[370px] sm:max-w-[420px]">
              
              {/* Dynamic Ambient Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-amber-500/15 to-blue-500/10 rounded-[36px] blur-3xl -z-10 animate-pulse" />

              {/* Floating Holographic Badge 1: YOLOv8 Vision (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-30 px-3 py-1.5 rounded-2xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-orange-500/30 shadow-xl flex items-center gap-2 animate-float-slow select-none">
                <span className="w-2 h-2 rounded-full bg-[#ff5e14] animate-ping" />
                <span className="text-[11px] font-mono font-bold text-slate-900 dark:text-white">
                  🎯 YOLOv8 Vision
                </span>
              </div>

              {/* Floating Holographic Badge 2: Supabase RAG (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-5 z-30 px-3 py-1.5 rounded-2xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-emerald-500/30 shadow-xl flex items-center gap-2 animate-float-delayed select-none">
                <Zap className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[11px] font-mono font-bold text-slate-900 dark:text-white">
                  ⚡ Supabase + RAG
                </span>
              </div>

              {/* Floating Holographic Badge 3: Sentinel ML (Right Middle) */}
              <div className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 z-30 px-3 py-1.5 rounded-2xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-indigo-500/30 shadow-xl items-center gap-2 animate-float-slow select-none">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-[11px] font-mono font-bold text-slate-900 dark:text-white">
                  🛡️ Sentinel 97.4%
                </span>
              </div>

              {/* Studio Frame with Dark/Light Adaptive Border */}
              <div className="p-3.5 rounded-[36px] bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-slate-200 dark:bg-[#0f172a] flex items-end justify-center">
                  
                  {/* Subtle inner bottom gradient for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Clean studio image */}
                  <img
                    src="./images/ankit-portrait.jpg"
                    alt="Ankit Raj Sharma — Full Stack Developer & Aspiring Data Scientist"
                    className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700"
                  />

                  {/* Bottom Info Floating Card */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 p-3.5 rounded-2xl bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-lg flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-bold font-display uppercase tracking-wider text-slate-900 dark:text-white">
                        Ankit Raj Sharma
                      </h3>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 font-mono flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#ff5e14]" />
                        Rajkot, Gujarat · Full Stack & AI/ML
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#ff5e14] font-mono text-xs font-bold">
                      A+
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
