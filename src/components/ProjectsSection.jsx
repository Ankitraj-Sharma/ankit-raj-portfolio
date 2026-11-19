import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  FolderGit2, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  GitPullRequest,
  Star,
  Terminal,
  Database,
  Brain,
  Info,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import PhishingMLPlayground from './PhishingMLPlayground';
import TiltCard from './TiltCard';
import BorderBeam from './BorderBeam';
import { playSound } from '../utils/audio';

export default function ProjectsSection() {
  const { projects, openSourceContributions } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'AI & Computer Vision', 'AI & Data Science', 'ML & Cybersecurity', 'Full Stack'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleOpenModal = (project) => {
    playSound('click');
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none text-center -z-10 opacity-20 dark:opacity-15">
        <span className="text-[13vw] font-black uppercase tracking-tight text-stroke-bg leading-none block">
          WORKS
        </span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff5e14] uppercase mb-2">
          // 02 · PRODUCTION DELIVERABLES & AI SYSTEMS
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900 dark:text-white">
          FEATURED <span className="text-[#ff5e14]">PROJECTS</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-2 font-mono">
          YOLOv8 Computer Vision, on-device threat ML, Supabase RAG architectures, and autonomous AI agents.
        </p>
        <div className="w-16 h-1 bg-[#ff5e14] rounded-full mt-3" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playSound('click');
              setActiveCategory(cat);
            }}
            data-cursor="FILTER"
            className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
              activeCategory === cat
                ? 'bg-[#ff5e14] text-white shadow-md shadow-orange-500/25 font-bold scale-105'
                : 'bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-[#ff5e14]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid with 3D TiltCards & BorderBeam on Flagships */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <TiltCard
            key={project.id}
            maxTilt={6}
            scale={1.02}
            className="rounded-3xl"
          >
            <div className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md hover:border-[#ff5e14]/60 transition-all flex flex-col justify-between h-full group overflow-hidden">
              
              {/* Border Beam on Top 2 Flagships */}
              {idx < 2 && (
                <BorderBeam 
                  size={190} 
                  duration={10 + idx * 2} 
                  colorFrom={idx === 0 ? '#ff5e14' : '#38bdf8'} 
                  colorTo={idx === 0 ? '#fbbf24' : '#818cf8'} 
                />
              )}

              <div>
                {/* Header: Index & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 group-hover:text-[#ff5e14] transition-colors">
                    0{idx + 1} // {project.year}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold border border-orange-500/20">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-[#ff5e14] transition-colors mb-2.5 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Architectural Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800 mb-5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-[10px] font-mono font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenModal(project)}
                    data-cursor="DEEP DIVE"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-[#ff5e14] hover:text-white dark:hover:bg-[#ff5e14] text-slate-800 dark:text-slate-200 font-semibold text-xs font-mono uppercase tracking-wider transition-all border border-slate-200 dark:border-slate-700 hover:border-transparent"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Deep Dive</span>
                  </button>

                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="LIVE DEMO"
                      className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#ff5e14] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#ea580c] shadow-md shadow-orange-500/20 transition-all"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="REPO"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-[#ff5e14] transition-all"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </TiltCard>
        ))}
      </div>

      {/* LIVE INTERACTIVE ML PHISHING CLASSIFIER PLAYGROUND */}
      <div className="mt-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 text-[#ff5e14]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                Interactive Model Playground
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
                Empirical on-device ML heuristics simulator running client-side with zero telemetry leakage.
              </p>
            </div>
          </div>
        </div>

        <PhishingMLPlayground />
      </div>

      {/* DEDICATED OPEN SOURCE CONTRIBUTIONS SECTION */}
      <div className="mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-2xl bg-orange-500/10 text-[#ff5e14]">
            <GitPullRequest className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              Open Source Contributions & Upstream Ecosystem
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
              Upstream bugfixes, core pull requests, collaborative systems, and developer mentorship.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {openSourceContributions.map((item, idx) => (
            <TiltCard key={idx} maxTilt={6} scale={1.02} className="rounded-3xl">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md flex flex-col justify-between hover:border-[#ff5e14]/60 transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold border border-orange-500/20">
                      {item.badge || item.type}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-medium">
                      {item.role}
                    </span>
                  </div>
                  <h4 className="text-base font-display font-bold text-slate-900 dark:text-white group-hover:text-[#ff5e14] transition-colors mt-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    {item.tag || item.type}
                  </span>
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="PULL REQ"
                    className="text-xs font-mono text-[#ff5e14] hover:text-[#ea580c] flex items-center gap-1 font-semibold"
                  >
                    <span>View Code / PR</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* GitHub Repository Banner */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 card-glow-hover">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#ff5e14] flex-shrink-0 animate-bounce">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
              35+ Repositories & Continuous Commits
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
              @Ankitraj-Sharma · Computer vision, ML models, RAG pipelines, and full-stack architectures
            </p>
          </div>
        </div>

        <a
          href="https://github.com/Ankitraj-Sharma"
          target="_blank"
          rel="noreferrer"
          data-cursor="GITHUB"
          className="px-6 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-[#ff5e14] dark:hover:bg-[#ff5e14] dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap shadow-md"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Explore GitHub Profile</span>
        </a>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
