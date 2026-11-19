import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer fine devices (desktop/laptops)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering interactive element
      const target = e.target;
      const interactive = target.closest('button, a, input, textarea, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animateRing = () => {
      // Smooth lerp for outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className={`pointer-events-none fixed top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full bg-[#ff5e14] z-[100] transition-opacity duration-300 hidden md:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'scale-0' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing Fluid Ring */}
      <div
        ref={cursorRingRef}
        className={`pointer-events-none fixed top-0 left-0 -ml-6 -mt-6 rounded-full border flex items-center justify-center z-[99] transition-[width,height,background-color,border-color] duration-200 hidden md:flex ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? 'w-16 h-16 -ml-8 -mt-8 bg-orange-500/15 border-[#ff5e14]/70 backdrop-blur-[2px] shadow-[0_0_25px_rgba(255,94,20,0.3)]'
            : 'w-12 h-12 border-slate-400/40 dark:border-white/20'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#ff5e14] uppercase animate-fadeIn">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
