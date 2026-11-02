import { useEffect, useState, useRef, useCallback } from 'react';

// Premium cinematic opening: HUD frame → masked typography → laser horizon → split-curtain exit.
export default function Intro({ onDone }) {
  const [phase, setPhase] = useState(0);
  const [pct, setPct] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const doneCalled = useRef(false);

  const triggerExit = useCallback(() => {
    if (doneCalled.current) return;
    doneCalled.current = true;
    setIsExiting(true);

    // Wait for the curtain split animation (750ms) before unmounting
    setTimeout(() => {
      onDone?.();
    }, 750);
  }, [onDone]);

  useEffect(() => {
    // 1. Staggered choreography phases
    const timers = [
      setTimeout(() => setPhase(1), 150),  // Name slides up from mask
      setTimeout(() => setPhase(2), 550),  // Role + status dot reveal
      setTimeout(() => setPhase(3), 950),  // Center amber laser expands
      setTimeout(() => triggerExit(), 2300), // Curtain split begins
    ];

    // 2. Smooth Cubic-Ease-Out percentage counter via requestAnimationFrame
    let rAF;
    const startTime = performance.now();
    const duration = 1900;

    const updateCounter = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out: fast initial load, deliberate final ticks
      const eased = 1 - Math.pow(1 - progress, 3);
      setPct(Math.floor(eased * 100));

      if (progress < 1) {
        rAF = requestAnimationFrame(updateCounter);
      }
    };
    rAF = requestAnimationFrame(updateCounter);

    // 3. Keyboard shortcut support
    const handleKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerExit();
      }
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(rAF);
      window.removeEventListener('keydown', handleKey);
    };
  }, [triggerExit]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden pointer-events-auto"
      role="dialog"
      aria-label="Introduction"
    >
      {/* Split Curtain Panels (Top & Bottom) */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-ink-900 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'
          }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-ink-900 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? 'translate-y-full' : 'translate-y-0'
          }`}
      />

      {/* Subtle Ambient Amber Radial Glow */}
      <div
        className={`pointer-events-none absolute h-96 w-96 rounded-full bg-amber/5 blur-3xl transition-opacity duration-1000 ${phase >= 2 && !isExiting ? 'opacity-100' : 'opacity-0'
          }`}
      />

      {/* Interactive Content Wrapper */}
      <div
        className={`relative z-10 flex h-full w-full flex-col items-center justify-center px-6 transition-all duration-500 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
      >
        {/* Top-Left Architectural HUD Marker */}
        <div className="absolute left-8 top-8 hidden items-center gap-2.5 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
          <span className="font-body text-[10px] tracking-widest2 text-mute/70">
            PORTFOLIO // EDITION &apos;26
          </span>
        </div>

        {/* Top-Right Index Coordinates */}
        <div className="absolute right-8 top-8 hidden font-body text-[10px] tracking-widest2 text-mute/60 sm:block">
          SYS.01 — READY
        </div>

        {/* Center Stage: Masked Typography & Horizon Line */}
        <div className="flex flex-col items-center">
          {/* Name Reveal (Overflow Mask) */}
          <div className="overflow-hidden py-1">
            <p
              className={`font-display text-xs md:text-sm tracking-widest2 text-mute transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${phase >= 1
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
                }`}
            >
              AMAR MESHRAM
            </p>
          </div>

          {/* Role Reveal (Overflow Mask) */}
          <div className="mt-2.5 overflow-hidden py-1">
            <p
              className={`font-display text-base md:text-xl tracking-widest2 text-bone transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${phase >= 2
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
                }`}
            >
              FULL STACK DEVELOPER
            </p>
          </div>

          {/* Center-Out Amber Horizon Line with Glow */}
          <div className="relative mt-8 flex h-px w-64 items-center justify-center md:w-96">
            {/* Subtle base track */}
            <div className="absolute inset-0 bg-bone/10" />
            {/* Animated amber beam */}
            <div
              className={`relative h-px bg-amber shadow-[0_0_12px_rgba(245,158,11,0.6)] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${phase >= 3 ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
            />
          </div>
        </div>

        {/* Bottom-Left Telemetry & Progress Bar */}
        <div className="absolute bottom-8 left-8 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <p className="font-body text-[11px] tabular-nums tracking-widest2 text-mute">
              INITIALIZING EXPERIENCE
            </p>
            <span className="font-display text-xs tabular-nums tracking-widest2 text-bone">
              {String(pct).padStart(3, '0')}%
            </span>
          </div>
          {/* Micro Progress Track */}
          <div className="h-[1px] w-40 overflow-hidden bg-bone/10">
            <div
              className="h-full bg-amber transition-all duration-75 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Bottom-Right Skip Control */}
        <button
          onClick={triggerExit}
          className="group absolute bottom-8 right-8 flex items-center gap-2 font-body text-[11px] tracking-widest2 text-mute transition-colors duration-300 hover:text-bone focus:outline-none"
        >
          <span>SKIP</span>
          <span className=" rounded border border-mute/30 px-1.5 py-0.5 text-[9px] text-mute/70 transition-all duration-300 group-hover:border-amber/60 group-hover:text-amber">
            ESC
          </span>
        </button>
      </div>
    </div>
  );
}

