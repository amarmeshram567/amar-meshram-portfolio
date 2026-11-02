import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [label, setLabel] = useState('');
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Ensure you have CSS hiding the default cursor:
    // .has-custom-cursor * { cursor: none !important; }
    document.documentElement.classList.add('has-custom-cursor');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };

    const over = (e) => {
      const el = e.target.closest?.('[data-cursor]');
      if (el && ring.current && dot.current) {
        setLabel(el.getAttribute('data-cursor') || 'VIEW');
        ring.current.dataset.active = 'true';
        dot.current.dataset.active = 'true';
      }
    };

    const out = (e) => {
      const el = e.target.closest?.('[data-cursor]');
      if (el && ring.current && dot.current) {
        setLabel('');
        ring.current.dataset.active = 'false';
        dot.current.dataset.active = 'false';
      }
    };

    const loop = () => {
      // Lowered from 0.18 to 0.12 for a smoother, slightly heavier follow effect
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring.current) {
        // Keeping translate(-50%, -50%) in the transform ensures it stays perfectly centered
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={ring}
        aria-hidden="true"
        data-active="false"
        className="pointer-events-none fixed left-0 top-0 z-[150] flex h-8 w-8 items-center justify-center rounded-none border-2 border-white mix-blend-difference transition-all duration-300 ease-out will-change-transform data-[active=true]:h-24 data-[active=true]:w-24 data-[active=true]:rounded-full data-[active=true]:border-transparent data-[active=true]:bg-white"
      >
        <span className="opacity-0 transition-opacity duration-300 delay-100 font-body text-[10px] uppercase tracking-widest text-black data-[active=true]:opacity-100" data-active={!!label}>
          {label}
        </span>
      </div>
      <div
        ref={dot}
        aria-hidden="true"
        data-active="false"
        className="pointer-events-none fixed left-0 top-0 z-[151] h-1.5 w-1.5 bg-white mix-blend-difference transition-transform duration-300 ease-out will-change-transform data-[active=true]:scale-0"
      />
    </>
  );
}

