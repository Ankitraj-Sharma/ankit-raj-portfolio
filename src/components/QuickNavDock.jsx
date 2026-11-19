import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Terminal, 
  FileText, 
  Volume2, 
  VolumeX, 
  Sparkles 
} from 'lucide-react';
import { playSound, toggleSound, isSoundEnabled } from '../utils/audio';

export default function QuickNavDock({ onOpenTerminal, onOpenResume }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showDock, setShowDock] = useState(false);
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll) || 0);
      setShowDock(totalScroll > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    const next = toggleSound();
    setSoundOn(next);
    if (next) playSound('click');
  };

  return (
    <>
      {/* Top Scroll Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#ff5e14] via-amber-500 to-[#ff5e14] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Bottom Island Dock */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showDock 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
        }`}
      >
        <div className="p-1.5 rounded-full bg-white/90 dark:bg-[#111827]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center gap-1">
          
          {/* Back to Top with Circular indicator */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-[#ff5e14] dark:hover:bg-[#ff5e14] text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white transition-all flex items-center justify-center relative group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          {/* Quick Resume Modal */}
          <button
            onClick={() => {
              playSound('click');
              onOpenResume();
            }}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/20 text-slate-700 dark:text-slate-300 hover:text-[#ff5e14] transition-all flex items-center justify-center"
            title="View Resume CV"
          >
            <FileText className="w-4 h-4" />
          </button>

          {/* Quick Terminal CLI */}
          <button
            onClick={() => {
              playSound('click');
              onOpenTerminal();
            }}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500/20 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-all flex items-center justify-center"
            title="Recruiter Terminal (Shortcut: `)"
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Audio Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className={`w-9 h-9 rounded-full transition-all flex items-center justify-center ${
              soundOn 
                ? 'bg-slate-100 dark:bg-slate-800 text-[#ff5e14]' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
            }`}
            title={soundOn ? 'Sound Effects Enabled' : 'Sound Effects Muted'}
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

        </div>
      </div>
    </>
  );
}
