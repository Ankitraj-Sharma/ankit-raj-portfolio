import React from 'react';
import { Sparkles, Terminal, Code2, Cpu, Database, Flame, Zap, CheckCircle2 } from 'lucide-react';

const ITEMS = [
  { icon: "🎯", label: "Ultralytics YOLOv8", sub: "Computer Vision" },
  { icon: "⚡", label: "Supabase & Postgres", sub: "Vector & RLS" },
  { icon: "🛡️", label: "Sentinel Android", sub: "97.4% Threat ML" },
  { icon: "🐍", label: "Python Data Science", sub: "NumPy & Pandas" },
  { icon: "🏢", label: "Odoo Core PR #292724", sub: "Upstream Fix" },
  { icon: "☁️", label: "Apache Camel K #6870", sub: "Cloud Native" },
  { icon: "⚛️", label: "React 18 & Next.js", sub: "Full Stack" },
  { icon: "👁️", label: "MediaPipe Vision", sub: "3D Face & Pose" },
  { icon: "🕸️", label: "Microsoft GraphRAG", sub: "Knowledge Graphs" },
  { icon: "🤖", label: "Google Gemini Flash", sub: "Autonomous Agents" },
  { icon: "📊", label: "Scikit-Learn ML", sub: "Model Evaluation" },
  { icon: "🐳", label: "Docker & Linux", sub: "Container Systems" }
];

export default function MarqueeStrip() {
  return (
    <div className="relative w-full py-6 overflow-hidden select-none border-y border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-[#070b12]/60 backdrop-blur-md">
      
      {/* Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FAFC] dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FAFC] dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />

      {/* Infinite Track (Double array for seamless loop) */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
        {[...ITEMS, ...ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#ff5e14]/50 transition-all group whitespace-nowrap"
          >
            <span className="text-base group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs font-display font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#ff5e14] transition-colors">
                {item.label}
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 -mt-0.5">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
