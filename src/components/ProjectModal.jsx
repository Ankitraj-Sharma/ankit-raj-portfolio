import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Activity, 
  GitBranch, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { playSound } from '../utils/audio';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl max-h-[92vh] rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-slate-50 dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                // {project.year} · {project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white leading-snug">
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff5e14] font-bold mb-2">
              Executive Summary & Problem Statement
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architectural Innovations / Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff5e14] font-bold mb-3">
              Engineering Architecture & Technical Achievements
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-50 dark:bg-[#080d16] border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline / Flow */}
          {project.pipeline && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff5e14] font-bold mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Execution Pipeline Architecture</span>
              </h4>
              <div className="p-4 rounded-2xl bg-[#080d16] border border-slate-800 text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed">
                <pre>{project.pipeline}</pre>
              </div>
            </div>
          )}

          {/* Benchmark Metrics if available */}
          {project.metrics && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff5e14] font-bold mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>Key Performance Benchmarks</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#080d16] border border-slate-200 dark:border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block mb-1">
                      {m.label}
                    </span>
                    <span className="text-lg font-bold font-display text-slate-900 dark:text-white">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff5e14] font-bold mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Author: Ankit Raj Sharma
          </div>

          <div className="flex items-center gap-2">
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#ff5e14] hover:bg-[#ea580c] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-500/20"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-mono transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
