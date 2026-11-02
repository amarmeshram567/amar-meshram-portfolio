



// import { useEffect, useRef, useState } from 'react';
// import { toolbox } from '../data/content.js';
// import SkillSpotlight from './SkillSpotlight.jsx';
// import { Cpu, Sparkles, Terminal } from 'lucide-react';

// // One colour per category so the ring reads as four groups.
// const categoryColors = ['#F5C067', '#6EA8FE', '#F5F5F5', '#8E8E93'];

// // Flatten all tools into one ring, keeping their category.
// const ringItems = toolbox.flatMap((group, gi) =>
//   group.items.map((item) => ({ ...item, category: group.category, color: categoryColors[gi % categoryColors.length] }))
// );

// function useInView(threshold = 0.2) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           io.disconnect();
//         }
//       },
//       { threshold }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// // Circular toolbox: every tool sits on one ring, grouped by colour. The centre
// // always shows the heading, and switches to focus and usage on hover or focus.
// function ToolboxOrbit() {
//   const [active, setActive] = useState(null);
//   const [ref, inView] = useInView();
//   const [rotationOffset, setRotationOffset] = useState(0);
//   const count = ringItems.length;

//   // Continuous orbiting loop using requestAnimationFrame
//   useEffect(() => {
//     let animationFrameId;
//     let lastTime = performance.now();

//     const animate = (currentTime) => {
//       const delta = (currentTime - lastTime) / 1000;
//       lastTime = currentTime;

//       // Pause rotation if a tool is hovered/active so it's easy to read
//       if (!active) {
//         setRotationOffset((prev) => prev + delta * 0.12); // Smooth, refined speed
//       }

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, [active]);

//   return (
//     <div ref={ref} className="relative mx-auto hidden aspect-square w-full max-w-[680px] lg:block">
//       {/* Ambient background glow */}
//       <div className="absolute inset-1/4 rounded-full bg-amber/5 blur-3xl pointer-events-none" />

//       {/* Rotating dashed rings */}
//       <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-amber/20 shadow-[0_0_50px_rgba(245,192,103,0.03)]" aria-hidden="true" />
//       <div className="absolute inset-[8%] rounded-full border border-bone/10 bg-ink-900/30 backdrop-blur-sm" aria-hidden="true" />
//       <div className="absolute inset-[24%] rounded-full border border-bone/10" aria-hidden="true" />

//       {/* SVG Connecting lines for active node */}
//       <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full pointer-events-none z-0" aria-hidden="true">
//         {ringItems.map((item, i) => {
//           if (!active || active.name !== item.name) return null;
//           const a = (i / count) * Math.PI * 2 - Math.PI / 2 + rotationOffset;
//           const r = i % 2 === 0 ? 39 : 45;
//           const x = 50 + r * Math.cos(a);
//           const y = 50 + r * Math.sin(a);
//           return (
//             <line
//               key={item.name}
//               x1="50"
//               y1="50"
//               x2={x}
//               y2={y}
//               stroke={item.color}
//               strokeWidth="0.5"
//               strokeDasharray="1 1"
//               className="animate-pulse"
//             />
//           );
//         })}
//       </svg>

//       {/* Centre: always visible with premium layout */}
//       <div
//         className="absolute inset-[29%] z-10 flex flex-col items-center justify-center rounded-full border border-bone/15 bg-gradient-to-b from-ink-900/95 to-ink-950/95 p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300"
//         aria-live="polite"
//       >
//         {active ? (
//           <div className="animate-fadeIn px-4">
//             <span className="inline-flex items-center gap-1.5 font-body text-[10px] tracking-widest2 uppercase px-2.5 py-1 rounded-full border border-bone/10 bg-ink-800/80 mb-3" style={{ color: active.color }}>
//               <span className="h-1.5 w-1.5 rounded-full" style={{ background: active.color }} />
//               {active.category}
//             </span>
//             <h4 className="font-serif text-2xl italic leading-tight text-bone mb-2">{active.name}</h4>
//             <p className="font-body text-[11px] font-medium text-bone/90 mb-1">{active.focus}</p>
//             <p className="font-body text-[10px] leading-relaxed text-mute line-clamp-2">{active.usage}</p>
//           </div>
//         ) : (
//           <div className="px-4">
//             <span className="font-display text-3xl font-medium leading-[0.9] tracking-tight md:text-4xl">
//               MY
//               <br />
//               <span className="font-serif font-normal italic text-amber">TOOLBOX</span>
//             </span>
//             <ul className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2">
//               {toolbox.map((g, gi) => (
//                 <li key={g.category} className="flex items-center gap-1.5 font-body text-[9px] tracking-widest2 text-mute">
//                   <span className="h-1.5 w-1.5 rounded-full" style={{ background: categoryColors[gi % categoryColors.length] }} />
//                   {g.category}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Tools on the ring with continuous rotation */}
//       {ringItems.map((item, i) => {
//         const a = (i / count) * Math.PI * 2 - Math.PI / 2 + rotationOffset;
//         const c = Math.cos(a);
//         const s = Math.sin(a);

//         // Alternate radius so neighbouring labels don't collide
//         const r = i % 2 === 0 ? 39 : 45;
//         const x = 50 + r * c;
//         const y = 50 + r * s;

//         const labelPos =
//           c > 0.3
//             ? 'left-5 top-1/2 -translate-y-1/2'
//             : c < -0.3
//               ? 'right-5 top-1/2 -translate-y-1/2'
//               : s > 0
//                 ? 'top-5 left-1/2 -translate-x-1/2'
//                 : 'bottom-5 left-1/2 -translate-x-1/2';

//         const isActive = active?.name === item.name;

//         return (
//           <div
//             key={item.name}
//             className="absolute h-0 w-0 transition-opacity duration-700 ease-out z-20"
//             style={{
//               left: `${x}%`,
//               top: `${y}%`,
//               opacity: inView ? 1 : 0,
//             }}
//           >
//             <button
//               type="button"
//               aria-label={`${item.name}: ${item.focus}`}
//               onMouseEnter={() => setActive(item)}
//               onMouseLeave={() => setActive(null)}
//               onFocus={() => setActive(item)}
//               onBlur={() => setActive(null)}
//               className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border transition-all duration-300 ${isActive ? 'h-6 w-6 scale-125 shadow-[0_0_20px_currentColor]' : 'h-4 w-4 hover:scale-150 focus-visible:scale-150'
//                 }`}
//               style={{
//                 borderColor: item.color,
//                 background: isActive ? item.color : '#0D0D0F',
//                 color: item.color,
//               }}
//             />
//             <span
//               className={`pointer-events-none absolute whitespace-nowrap font-body text-[11px] tracking-wide transition-all duration-300 ${labelPos} ${isActive ? 'text-amber font-semibold scale-105 drop-shadow-[0_2px_10px_rgba(245,192,103,0.4)]' : 'text-bone/75 hover:text-bone'
//                 }`}
//             >
//               {item.name}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="relative overflow-hidden border-t border-bone/10 px-6 py-32 md:px-12 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950">
//       <div className="mx-auto max-w-[1600px]">
//         <div className="flex items-center gap-2">
//           <span className="h-1.5 w-1.5 rounded-full bg-amber" />
//           <p className="font-body text-[11px] tracking-widest2 text-mute">CAPABILITIES &amp; STACK</p>
//         </div>

//         <div className="mt-16">
//           <ToolboxOrbit />

//           {/* Mobile and tablet: stacked glassmorphic categories */}
//           <div className="grid gap-8 lg:hidden">
//             <div className="mb-4">
//               <h2 className="font-display text-5xl font-medium leading-[0.9] tracking-tight md:text-7xl">
//                 MY
//                 <br />
//                 <span className="font-serif font-normal italic text-amber">TOOLBOX</span>
//               </h2>
//               <p className="mt-3 font-body text-xs text-mute">
//                 Explore the frameworks, engineering tools, and AI systems powering high-performance development.
//               </p>
//             </div>

//             <div className="grid gap-6 sm:grid-cols-2">
//               {toolbox.map((group, gi) => {
//                 const groupColor = categoryColors[gi % categoryColors.length];
//                 return (
//                   <div
//                     key={group.category}
//                     className="relative rounded-2xl border border-bone/10 bg-ink-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-bone/20"
//                   >
//                     <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" style={{ background: groupColor }} />
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="font-body text-xs tracking-widest2 font-semibold uppercase" style={{ color: groupColor }}>
//                         {group.category}
//                       </h3>
//                       <span className="font-body text-[9px] text-mute tracking-widest">{group.items.length} TOOLS</span>
//                     </div>
//                     <div className="space-y-3">
//                       {group.items.map((item) => (
//                         <div key={item.name} className="rounded-xl border border-bone/5 bg-ink-950/50 p-3.5">
//                           <div className="flex items-center justify-between">
//                             <span className="font-display text-lg tracking-tight text-bone">{item.name}</span>
//                             <span className="font-body text-[9px] text-amber uppercase tracking-wider">{item.focus}</span>
//                           </div>
//                           <p className="mt-1 font-body text-[11px] text-mute leading-relaxed">{item.usage}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <div className="mt-16">
//           <SkillSpotlight />
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from 'react';
import { toolbox } from '../data/content.js';
import SkillSpotlight from './SkillSpotlight.jsx';
import { Cpu, Sparkles, Terminal, Activity } from 'lucide-react';

// Exactly 3 sophisticated colors so categories and items cycle through a 3-color theme
const categoryColors = ['#E2B764', '#7AA2F7', '#9ECE6A'];

// Flatten all tools into one ring, keeping their category and assigned color.
const ringItems = toolbox.flatMap((group, gi) =>
  group.items.map((item) => ({
    ...item,
    category: group.category,
    color: categoryColors[gi % categoryColors.length]
  }))
);

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function ToolboxOrbit() {
  const [active, setActive] = useState(null);
  const [ref, inView] = useInView();
  const [rotationOffset, setRotationOffset] = useState(0);
  const count = ringItems.length;

  // Continuous orbiting loop using requestAnimationFrame with easing pause on hover
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!active) {
        setRotationOffset((prev) => prev + delta * 0.08); // Slower, more hypnotic velocity
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [active]);

  return (
    <div ref={ref} className="relative mx-auto hidden aspect-square w-full max-w-[720px] lg:block">
      {/* Luxurious Ambient Background Glows */}
      <div className="absolute inset-1/3 rounded-full bg-amber/10 blur-[100px] pointer-events-none" />
      <div className="absolute inset-1/4 rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

      {/* Multi-layered Glass Rings & HUD Grids */}
      <div className="absolute inset-0 rounded-full border border-dashed border-bone/10 animate-[spin_120s_linear_infinite]" aria-hidden="true" />
      <div className="absolute inset-[6%] rounded-full border border-bone/5 bg-gradient-to-b from-ink-900/60 to-ink-950/80 backdrop-blur-md shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]" aria-hidden="true" />
      <div className="absolute inset-[22%] rounded-full border border-bone/10 bg-ink-950/40" aria-hidden="true" />
      <div className="absolute inset-[26%] rounded-full border border-dashed border-bone/15 opacity-50" aria-hidden="true" />

      {/* Ultra-thin Laser Pointer Line for Active Node Only */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full pointer-events-none z-0" aria-hidden="true">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {ringItems.map((item, i) => {
          if (!active || active.name !== item.name) return null;
          const a = (i / count) * Math.PI * 2 - Math.PI / 2 + rotationOffset;
          const r = i % 2 === 0 ? 38 : 46;
          const x = 50 + r * Math.cos(a);
          const y = 50 + r * Math.sin(a);
          return (
            <g key={item.name}>
              <line
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke={item.color}
                strokeWidth="0.35"
                strokeDasharray="1 1"
                filter="url(#glow)"
                className="animate-pulse opacity-80"
              />
              <circle cx={x} cy={y} r="1" fill={item.color} filter="url(#glow)" />
            </g>
          );
        })}
      </svg>

      {/* Center Console: Dynamic Focus Display */}
      <div
        className="absolute inset-[29%] z-10 flex flex-col items-center justify-center rounded-full border border-bone/20 bg-gradient-to-b from-ink-900/98 via-ink-950/98 to-ink-950 p-8 text-center shadow-[0_0_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-500"
        aria-live="polite"
      >
        {active ? (
          <div className="animate-fadeIn px-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ background: active.color }} />
              <span
                className="font-body text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border bg-ink-800/90 shadow-sm"
                style={{ color: active.color, borderColor: `${active.color}40` }}
              >
                {active.category}
              </span>
            </div>
            <h4 className="font-serif text-2xl italic leading-tight text-bone mb-2 drop-shadow-sm">{active.name}</h4>
            <p className="font-body text-[11px] font-medium text-amber tracking-wide mb-1.5">{active.focus}</p>
            <p className="font-body text-[10px] leading-relaxed text-mute line-clamp-2 max-w-[220px] mx-auto">{active.usage}</p>
          </div>
        ) : (
          <div className="px-4">
            <span className="font-display text-3xl font-medium leading-[0.9] tracking-tight md:text-4xl text-bone">
              MY
              <br />
              <span className="font-serif font-normal italic text-amber drop-shadow-[0_0_15px_rgba(245,192,103,0.3)]">TOOLBOX</span>
            </span>
            <div className="mt-4 h-[1px] w-12 mx-auto bg-bone/20" />
            <ul className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1.5">
              {toolbox.map((g, gi) => (
                <li key={g.category} className="flex items-center gap-1.5 font-body text-[9px] tracking-widest uppercase text-mute/80">
                  <span className="h-1 w-1 rounded-full" style={{ background: categoryColors[gi % categoryColors.length] }} />
                  {g.category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Ring Nodes & Interactive Labels */}
      {ringItems.map((item, i) => {
        const a = (i / count) * Math.PI * 2 - Math.PI / 2 + rotationOffset;
        const c = Math.cos(a);
        const s = Math.sin(a);

        // Alternating orbital radius to prevent label overlaps
        const r = i % 2 === 0 ? 38 : 46;
        const x = 50 + r * c;
        const y = 50 + r * s;

        const labelPos =
          c > 0.3
            ? 'left-6 top-1/2 -translate-y-1/2 text-left'
            : c < -0.3
              ? 'right-6 top-1/2 -translate-y-1/2 text-right'
              : s > 0
                ? 'top-6 left-1/2 -translate-x-1/2 text-center'
                : 'bottom-6 left-1/2 -translate-x-1/2 text-center';

        const isActive = active?.name === item.name;
        const isDimmed = active && !isActive;

        return (
          <div
            key={item.name}
            className={`absolute h-0 w-0 transition-opacity duration-700 ease-out z-20 ${isDimmed ? 'opacity-30' : 'opacity-100'}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <button
              type="button"
              aria-label={`${item.name}: ${item.focus}`}
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(item)}
              onBlur={() => setActive(null)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border transition-all duration-300 ${isActive
                ? 'h-7 w-7 scale-125 shadow-[0_0_25px_currentColor] z-30'
                : 'h-4 w-4 hover:scale-155 focus-visible:scale-155'
                }`}
              style={{
                borderColor: item.color,
                background: isActive ? item.color : '#0A0A0C',
                color: item.color,
                boxShadow: isActive ? `0 0 20px ${item.color}80` : 'none'
              }}
            >
              <span className={`h-1.5 w-1.5 rounded-full transition-transform ${isActive ? 'bg-ink-950 scale-125' : 'bg-current'}`} />
            </button>
            <span
              className={`pointer-events-none absolute whitespace-nowrap font-body text-[11px] tracking-wide transition-all duration-300 ${labelPos} ${isActive
                ? 'text-bone font-semibold scale-110 drop-shadow-[0_2px_12px_rgba(245,192,103,0.5)] z-30'
                : 'text-bone/70 hover:text-bone'
                }`}
            >
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-bone/10 px-6 py-32 md:px-12 bg-gradient-to-b from-ink-950 via-ink-900/90 to-ink-950">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1600px] relative z-10">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_8px_rgba(245,192,103,0.8)]" />
          <p className="font-body text-[11px] tracking-[0.25em] text-mute uppercase">CAPABILITIES &amp; STACK</p>
        </div>

        <div className="mt-16">
          <ToolboxOrbit />

          {/* Mobile and tablet: stacked luxury glassmorphic categories */}
          <div className="grid gap-8 lg:hidden">
            <div className="mb-4">
              <h2 className="font-display text-5xl font-medium leading-[0.9] tracking-tight md:text-7xl">
                MY
                <br />
                <span className="font-serif font-normal italic text-amber">TOOLBOX</span>
              </h2>
              <p className="mt-3 font-body text-xs text-mute leading-relaxed">
                Explore the frameworks, engineering tools, and AI systems powering high-performance development.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {toolbox.map((group, gi) => {
                const groupColor = categoryColors[gi % categoryColors.length];
                return (
                  <div
                    key={group.category}
                    className="relative rounded-2xl border border-bone/10 bg-gradient-to-b from-ink-900/80 to-ink-950/80 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-bone/25 shadow-xl"
                  >
                    <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl" style={{ background: groupColor, boxShadow: `0 0 12px ${groupColor}` }} />
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="font-body text-xs tracking-[0.2em] font-semibold uppercase" style={{ color: groupColor }}>
                        {group.category}
                      </h3>
                      <span className="font-body text-[9px] text-mute tracking-widest">{group.items.length} TOOLS</span>
                    </div>
                    <div className="space-y-3.5">
                      {group.items.map((item) => (
                        <div key={item.name} className="rounded-xl border border-bone/5 bg-ink-900/40 p-4 transition-colors hover:border-bone/15">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-display text-base tracking-tight text-bone">{item.name}</span>
                            <span className="font-body text-[9px] text-amber uppercase tracking-wider font-medium">{item.focus}</span>
                          </div>
                          <p className="font-body text-[11px] text-mute leading-relaxed">{item.usage}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SkillSpotlight />
        </div>
      </div>
    </section>
  );
}