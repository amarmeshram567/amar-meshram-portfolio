import { useEffect, useState } from 'react';

// Cinematic opening: name → role → line expands → reveal. ~2s, skippable.
export default function Intro({ onDone }) {
  const [phase, setPhase] = useState(0);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1100),
      setTimeout(() => finish(), 1900),
    ];
    const counter = setInterval(() => setPct((p) => (p >= 100 ? 100 : p + 5)), 40);

    const key = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') finish();
    };
    window.addEventListener('keydown', key);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(counter);
      window.removeEventListener('keydown', key);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => onDone();

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-900"
      role="dialog"
      aria-label="Introduction"
    >
      <button
        onClick={finish}
        className="absolute bottom-8 right-8 font-body text-[11px] tracking-widest2 text-mute hover:text-bone"
      >
        SKIP
      </button>

      <p
        className={`font-display text-xs tracking-widest2 text-mute transition-opacity duration-700 ${
          phase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        AMAR MESHRAM
      </p>
      <p
        className={`mt-3 font-display text-sm tracking-widest2 text-bone transition-opacity duration-700 ${
          phase >= 2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        FULL STACK DEVELOPER
      </p>
      <div
        className={`mt-8 h-px bg-amber transition-all duration-[900ms] ease-out ${
          phase >= 3 ? 'w-64 md:w-96' : 'w-0'
        }`}
      />
      <p className="absolute bottom-8 left-8 font-body text-[11px] tracking-widest2 text-mute">
        INITIALIZING EXPERIENCE… {pct}%
      </p>
    </div>
  );
}
