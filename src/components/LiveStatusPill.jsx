import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Volume2, Sparkles } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function LiveStatusPill() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      
      {/* Availability Status */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#111827]/90 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
          Available For Roles & Contracts
        </span>
      </div>

      {/* Live Local Clock */}
      <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-[#111827]/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md text-[11px] font-mono text-slate-600 dark:text-slate-300">
        <Clock className="w-3.5 h-3.5 text-[#ff5e14]" />
        <span>Rajkot (IST):</span>
        <span className="font-bold text-slate-900 dark:text-white tabular-nums">
          {time || 'Loading...'}
        </span>
      </div>

      {/* Dancing Equalizer Wave / Focus Sound Pill */}
      <div 
        onClick={() => playSound('click')}
        className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 text-[#ff5e14] text-[11px] font-mono cursor-pointer hover:bg-orange-500/20 transition-all select-none"
        title="Engineering Flow Mode: Active"
      >
        <span className="text-[10px] font-bold">FLOW</span>
        <div className="flex items-end gap-0.5 h-3">
          <span className="w-0.5 bg-[#ff5e14] rounded-full animate-[equalizer_0.8s_ease-in-out_infinite_alternate]" />
          <span className="w-0.5 bg-[#ff5e14] rounded-full animate-[equalizer_1.2s_ease-in-out_infinite_alternate_0.2s]" />
          <span className="w-0.5 bg-[#ff5e14] rounded-full animate-[equalizer_0.9s_ease-in-out_infinite_alternate_0.4s]" />
          <span className="w-0.5 bg-[#ff5e14] rounded-full animate-[equalizer_1.4s_ease-in-out_infinite_alternate_0.1s]" />
        </div>
      </div>

    </div>
  );
}
