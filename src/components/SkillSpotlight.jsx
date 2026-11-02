import { useEffect, useRef, useState } from 'react';
import { Bot, Code2, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import {
  dsaTopics,
  aiToolsList,
  tickerSkills,
} from '../data/content.js';

// Reveals once the element scrolls into view.
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

// Scrolling marquee: content is duplicated so the loop is seamless.
function Ticker({ items, className = '' }) {
  const row = [...items, ...items];
  return (
    <div className={`ticker-wrap overflow-hidden ${className}`} aria-hidden="true">
      <div className="ticker flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap font-display text-xl tracking-tight text-bone/70 md:text-2xl">
            {item}
            <span className="text-amber">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Short labels for the DSA ring
const ringLabels = ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Sorting', 'Recursion', 'Complexity'];

// Circular DSA diagram with continuous orbiting animation.
function DsaOrbit({ inView, activeTopic, setActiveTopic }) {
  const [rotationOffset, setRotationOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const radius = 26;
  const count = ringLabels.length;

  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isHovered) {
        setRotationOffset((prev) => prev + delta * 0.1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[320px]"
      role="img"
      aria-label="Data structures and algorithms interactive orbit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient glow backdrop */}
      <div className="absolute inset-0 rounded-full bg-amber/5 blur-2xl transition-opacity duration-700 pointer-events-none" />

      <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-amber/30 shadow-[0_0_30px_rgba(245,192,103,0.05)]" aria-hidden="true" />
      <div className="absolute inset-[12%] rounded-full border border-bone/10 bg-ink-900/40 backdrop-blur-sm" aria-hidden="true" />
      <div className="absolute inset-[30%] rounded-full border border-bone/10" aria-hidden="true" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {ringLabels.map((label, i) => {
          const a = (i / count) * Math.PI * 2 - Math.PI / 2 + rotationOffset;
          const x = 50 + radius * Math.cos(a);
          const y = 50 + radius * Math.sin(a);
          const isActive = activeTopic === label;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke={isActive ? 'rgba(245,192,103,0.9)' : 'rgba(245,192,103,0.3)'}
              strokeWidth={isActive ? '0.6' : '0.25'}
              pathLength="1"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: inView ? 0 : 1,
                transition: `stroke-dashoffset 1s ease-out ${i * 90}ms, stroke 0.3s ease`,
              }}
            />
          );
        })}
      </svg>

      {ringLabels.map((label, i) => {
        const a = (i / count) * Math.PI * 2 - Math.PI / 2 + rotationOffset;
        const c = Math.cos(a);
        const s = Math.sin(a);
        const isActive = activeTopic === label;
        const labelPos =
          c > 0.3
            ? 'left-3 top-1/2 -translate-y-1/2'
            : c < -0.3
              ? 'right-3 top-1/2 -translate-y-1/2'
              : s > 0
                ? 'top-3 left-1/2 -translate-x-1/2'
                : 'bottom-3 left-1/2 -translate-x-1/2';

        return (
          <div
            key={label}
            className="absolute h-0 w-0 cursor-pointer group/node"
            style={{
              left: `${50 + radius * c}%`,
              top: `${50 + radius * s}%`,
              transitionDelay: `${i * 90}ms`,
              opacity: inView ? 1 : 0,
              transition: 'opacity 700ms ease-out',
            }}
            onClick={() => setActiveTopic(label)}
            onMouseEnter={() => setActiveTopic(label)}
          >
            <span className={`absolute -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full border transition-all duration-300 ${isActive ? 'bg-amber border-amber scale-150 shadow-[0_0_12px_rgba(245,192,103,0.8)]' : 'border-amber bg-ink-800 hover:scale-125'}`} />
            <span className={`absolute whitespace-nowrap font-body text-[11px] tracking-wide transition-colors duration-300 ${isActive ? 'text-amber font-semibold' : 'text-bone/70 group-hover/node:text-bone'} ${labelPos}`}>
              {label}
            </span>
          </div>
        );
      })}

      <div className="absolute inset-[30%] flex flex-col items-center justify-center rounded-full bg-ink-900 border border-bone/10 text-center shadow-2xl z-10">
        <span className="font-serif text-2xl italic text-amber md:text-3xl">DSA</span>
        <span className="mt-1 font-body text-[8px] tracking-widest2 text-mute">CORE LOGIC</span>
      </div>
    </div>
  );
}

// Short labels for the AI ring
const aiRingLabels = ['Prompts', 'Agents', 'Workflows', 'APIs', 'RAG', 'Pipelines', 'LLMs', 'Automation'];

// Circular AI Automation diagram with continuous orbiting animation.
function AiOrbit({ inView, activeAi, setActiveAi }) {
  const [rotationOffset, setRotationOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const radius = 26;
  const count = aiRingLabels.length;

  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isHovered) {
        setRotationOffset((prev) => prev - delta * 0.1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[320px]"
      role="img"
      aria-label="AI automation highlights interactive orbit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient glow backdrop */}
      <div className="absolute inset-0 rounded-full bg-cobalt/5 blur-2xl transition-opacity duration-700 pointer-events-none" />

      <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-cobalt/30 shadow-[0_0_30px_rgba(110,168,254,0.05)]" aria-hidden="true" />
      <div className="absolute inset-[12%] rounded-full border border-bone/10 bg-ink-900/40 backdrop-blur-sm" aria-hidden="true" />
      <div className="absolute inset-[30%] rounded-full border border-bone/10" aria-hidden="true" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {aiRingLabels.map((label, i) => {
          const a = (i / count) * Math.PI * 2 - Math.PI / 2 + rotationOffset;
          const x = 50 + radius * Math.cos(a);
          const y = 50 + radius * Math.sin(a);
          const isActive = activeAi === label;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke={isActive ? 'rgba(110,168,254,0.9)' : 'rgba(110,168,254,0.3)'}
              strokeWidth={isActive ? '0.6' : '0.25'}
              pathLength="1"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: inView ? 0 : 1,
                transition: `stroke-dashoffset 1s ease-out ${i * 90}ms, stroke 0.3s ease`,
              }}
            />
          );
        })}
      </svg>

      {aiRingLabels.map((label, i) => {
        const a = (i / count) * Math.PI * 2 - Math.PI / 2 + rotationOffset;
        const c = Math.cos(a);
        const s = Math.sin(a);
        const isActive = activeAi === label;
        const labelPos =
          c > 0.3
            ? 'left-3 top-1/2 -translate-y-1/2'
            : c < -0.3
              ? 'right-3 top-1/2 -translate-y-1/2'
              : s > 0
                ? 'top-3 left-1/2 -translate-x-1/2'
                : 'bottom-3 left-1/2 -translate-x-1/2';

        return (
          <div
            key={label}
            className="absolute h-0 w-0 cursor-pointer group/node"
            style={{
              left: `${50 + radius * c}%`,
              top: `${50 + radius * s}%`,
              transitionDelay: `${i * 90}ms`,
              opacity: inView ? 1 : 0,
              transition: 'opacity 700ms ease-out',
            }}
            onClick={() => setActiveAi(label)}
            onMouseEnter={() => setActiveAi(label)}
          >
            <span className={`absolute -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full border transition-all duration-300 ${isActive ? 'bg-cobalt border-cobalt scale-150 shadow-[0_0_12px_rgba(110,168,254,0.8)]' : 'border-cobalt bg-ink-800 hover:scale-125'}`} />
            <span className={`absolute whitespace-nowrap font-body text-[11px] tracking-wide transition-colors duration-300 ${isActive ? 'text-cobalt font-semibold' : 'text-bone/70 group-hover/node:text-bone'} ${labelPos}`}>
              {label}
            </span>
          </div>
        );
      })}

      <div className="absolute inset-[30%] flex flex-col items-center justify-center rounded-full bg-ink-900 border border-bone/10 text-center shadow-2xl z-10">
        <span className="font-serif text-2xl italic text-cobalt md:text-3xl">AI</span>
        <span className="mt-1 font-body text-[8px] tracking-widest2 text-mute">SYSTEMS</span>
      </div>
    </div>
  );
}

function DsaPanel() {
  const [ref, inView] = useInView();
  const [activeTopic, setActiveTopic] = useState('Arrays');

  // Descriptions for interactive preview
  const topicDescriptions = {
    Arrays: 'Optimizing contiguous memory layouts, sliding windows, and two-pointer techniques for high-performance retrieval.',
    'Linked Lists': 'Managing pointers, reversing lists in-place, and detecting cycle patterns with linear time efficiency.',
    Stacks: 'Implementing monotonic stack algorithms for parsing, expression evaluation, and backtracking frameworks.',
    Queues: 'Building breadth-first search structures and rate-limiters with optimal FIFO scheduling.',
    Trees: 'Traversing BSTs, AVL self-balancing trees, and Trie nodes for fast hierarchical lookups.',
    Sorting: 'Applying merge sort, quicksort, and custom comparator heuristics tailored to dataset constraints.',
    Recursion: 'Solving complex subset, permutation, and dynamic programming memoization problems cleanly.',
    Complexity: 'Rigorous Big-O analysis minimizing CPU cycles and memory footprints in Python scripts.',
  };

  return (
    <article
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-bone/10 bg-gradient-to-b from-ink-800/90 to-ink-900/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-amber/40 hover:shadow-[0_10px_40px_rgba(245,192,103,0.06)] md:p-12"
    >
      <div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-amber to-amber/30 transition-transform duration-[1400ms] ease-out"
        style={{ transform: inView ? 'scaleX(1)' : 'scaleX(0)' }}
        aria-hidden="true"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-amber/10 p-2 text-amber border border-amber/20">
            <Code2 size={18} aria-hidden="true" />
          </div>
          <span className="font-body text-xs tracking-widest2 text-amber/90 font-medium uppercase">01 / Program Architecture</span>
        </div>
        <span className="font-body text-[10px] tracking-widest text-mute hidden sm:inline-block">PYTHON OPTIMIZED</span>
      </div>

      <div className="mt-8">
        <h3 className="font-display text-4xl font-medium leading-[0.95] tracking-tight md:text-5xl">
          DATA STRUCTURES
          <br />
          <span className="font-serif font-normal italic text-amber">&amp; ALGORITHMS</span>
        </h3>
        <p className="mt-4 font-body text-xs tracking-widest2 text-mute">COMPLEXITY ANALYSIS · CLEAN ALGORITHMIC DESIGN</p>
      </div>

      <div className="my-10">
        <DsaOrbit inView={inView} activeTopic={activeTopic} setActiveTopic={setActiveTopic} />
      </div>

      {/* Interactive Concept Caption Card */}
      <div className="rounded-xl border border-amber/20 bg-ink-900/80 p-5 shadow-inner transition-all duration-300">
        <div className="flex items-center justify-between pb-2 border-b border-bone/10 mb-2">
          <span className="font-display text-sm tracking-wide text-amber flex items-center gap-2">
            <Terminal size={14} /> {activeTopic}
          </span>
          <span className="font-body text-[9px] tracking-widest text-mute uppercase">Active Focus</span>
        </div>
        <p className="font-body text-xs text-bone/80 leading-relaxed min-h-[3rem]">
          {topicDescriptions[activeTopic]}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {dsaTopics.slice(0, 5).map((topic) => (
          <span key={topic} className="rounded-md bg-ink-900/60 border border-bone/10 px-2.5 py-1 font-body text-[10px] text-mute">
            {topic}
          </span>
        ))}
      </div>
    </article>
  );
}

function AiPanel() {
  const [ref, inView] = useInView();
  const [activeAi, setActiveAi] = useState('Agents');

  // Descriptions for interactive preview
  const aiDescriptions = {
    Prompts: 'Crafting sophisticated system instructions and few-shot examples for zero-drift LLM outputs.',
    Agents: 'Building autonomous agent loops with tool-use capability, error correction, and multi-step reasoning.',
    Workflows: 'Designing deterministic orchestration pipelines that seamlessly blend code execution with generative models.',
    APIs: 'Integrating robust LLM endpoints, vector databases, and asynchronous webhook handlers.',
    RAG: 'Constructing high-precision retrieval-augmented generation systems with semantic chunking and re-ranking.',
    Pipelines: 'Automating end-to-end data ingestion, embedding generation, and real-time synchronization.',
    LLMs: 'Leveraging state-of-the-art foundation models for automated code refactoring, test generation, and architecture.',
    Automation: 'Eliminating human-in-the-loop bottlenecks through intelligent API chaining and event triggers.',
  };

  return (
    <article
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-bone/10 bg-gradient-to-b from-ink-800/90 to-ink-900/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-cobalt/40 hover:shadow-[0_10px_40px_rgba(110,168,254,0.06)] md:p-12"
    >
      <div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-cobalt to-cobalt/30 transition-transform duration-[1400ms] ease-out"
        style={{ transform: inView ? 'scaleX(1)' : 'scaleX(0)' }}
        aria-hidden="true"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-cobalt/10 p-2 text-cobalt border border-cobalt/20">
            <Bot size={18} aria-hidden="true" />
          </div>
          <span className="font-body text-xs tracking-widest2 text-cobalt/90 font-medium uppercase">02 / Intelligent Systems</span>
        </div>
        <span className="font-body text-[10px] tracking-widest text-mute hidden sm:inline-block">AGENTIC WORKFLOWS</span>
      </div>

      <div className="mt-8">
        <h3 className="font-display text-4xl font-medium leading-[0.95] tracking-tight md:text-5xl">
          AI
          <br />
          <span className="font-serif font-normal italic text-cobalt">AUTOMATION</span>
        </h3>
        <p className="mt-4 font-body text-xs tracking-widest2 text-mute">PROMPTS · RAG PIPELINES · AI-ASSISTED DEV</p>
      </div>

      <div className="my-10">
        <AiOrbit inView={inView} activeAi={activeAi} setActiveAi={setActiveAi} />
      </div>

      {/* Interactive Concept Caption Card */}
      <div className="rounded-xl border border-cobalt/20 bg-ink-900/80 p-5 shadow-inner transition-all duration-300">
        <div className="flex items-center justify-between pb-2 border-b border-bone/10 mb-2">
          <span className="font-display text-sm tracking-wide text-cobalt flex items-center gap-2">
            <Sparkles size={14} /> {activeAi}
          </span>
          <span className="font-body text-[9px] tracking-widest text-mute uppercase">Active Feature</span>
        </div>
        <p className="font-body text-xs text-bone/80 leading-relaxed min-h-[3rem]">
          {aiDescriptions[activeAi]}
        </p>
      </div>

      <div className="mt-6 border-t border-bone/10 pt-6">
        <p className="mb-3 font-body text-[10px] tracking-widest2 text-mute">FEATURED TOOLS</p>
        <Ticker items={aiToolsList} className="py-2" />
      </div>
    </article>
  );
}

export default function SkillSpotlight() {
  return (
    <div className="mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            <p className="font-body text-[11px] tracking-widest2 text-mute">EXPERTISE &amp; CAPABILITIES</p>
          </div>
          <h3 className="mt-4 font-display text-4xl font-medium leading-[0.9] tracking-tight md:text-6xl">
            WHAT I <span className="font-serif font-normal italic text-amber">DO BEST.</span>
          </h3>
        </div>
        <p className="font-body text-xs text-mute max-w-sm">
          Bridging rigorous algorithmic engineering with state-of-the-art AI automation workflows to build resilient software systems.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <DsaPanel />
        <AiPanel />
      </div>

      <div className="mt-20 border-y border-bone/10 py-8 bg-ink-800/30 backdrop-blur-sm">
        <Ticker items={tickerSkills} />
      </div>
    </div>
  );
}