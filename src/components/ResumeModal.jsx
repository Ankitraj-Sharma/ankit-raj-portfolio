import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  Sparkles, 
  GraduationCap, 
  Briefcase,
  Mail,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    playSound('click');
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const recruiterSummary = `ANKIT RAJ SHARMA
Full Stack Developer · Aspiring Data Scientist & AI/ML Engineer
Email: ${personal.email} | Phone: ${personal.phone}
Location: ${personal.location}
GitHub: ${personal.social.github} | LinkedIn: ${personal.social.linkedin}

ACADEMICS:
• B.Tech Computer Engineering (CGPA 7.91), Marwadi University (NAAC A+ Accredited)

KEY HIGHLIGHTS:
• Co-developer of Sentinel Android (Team PhishShield on-device ML phishing classifier)
• Upstream Open Source Contributor to Odoo Core (PR #292724) & Apache Camel K (PR #6870)
• 8+ Shipped Production Systems (AI Interview Assistant, YOLOv8 Object Detection, Exam Proctoring AI, Supabase RAG)
• 10+ Industry Certifications (Cisco CCNA, Cybersecurity, Python for Data Science Infosys)
• Operations Coordinator — HackerRank Official Team MU`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(recruiterSummary);
    playSound('click');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[92vh] rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-7 py-4 bg-slate-50 dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff5e14]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                  Curriculum Vitae — Ankit Raj Sharma
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  CGPA 7.91
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Full Stack Developer · Aspiring Data Scientist & AI Engineer
              </p>
            </div>
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

        {/* Action Bar */}
        <div className="px-5 sm:px-7 py-3 bg-slate-100/70 dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href="./resume.pdf"
              download="Ankit_Raj_Sharma_Resume.pdf"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#ff5e14] hover:bg-[#ea580c] text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href="./resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white text-xs font-mono transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>
          </div>

          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono transition-all"
            title="Copy ATS Recruiter Summary to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Copied Summary!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy ATS Brief</span>
              </>
            )}
          </button>
        </div>

        {/* Document Viewer Frame */}
        <div className="flex-1 p-3 sm:p-5 overflow-y-auto bg-slate-200/50 dark:bg-[#070b12] flex items-center justify-center">
          <iframe
            src="./resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
            title="Ankit Raj Sharma Resume PDF"
            className="w-full h-[58vh] min-h-[420px] rounded-2xl bg-white shadow-inner border border-slate-300 dark:border-slate-800"
          />
        </div>

        {/* Footer info strip */}
        <div className="px-5 py-3 bg-slate-50 dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 gap-2">
          <span>Marwadi University · NAAC A+ Accredited · B.Tech CE</span>
          <a
            href={`mailto:${personal.email}?subject=Job%20Opportunity%20-%20Ankit%20Raj%20Sharma`}
            className="text-[#ff5e14] hover:underline font-semibold"
          >
            {personal.email} &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
