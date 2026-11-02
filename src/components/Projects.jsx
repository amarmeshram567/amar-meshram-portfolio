import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { projects } from '../data/content.js';

// --- SCENE STYLING & LABELS ---
const sceneStyles = {
  ai: 'bg-[radial-gradient(ellipse_at_30%_20%,rgba(230,166,83,0.14),transparent_65%)] bg-ink-800',
  vault:
    'bg-[repeating-linear-gradient(0deg,rgba(245,233,216,0.03)_0_1px,transparent_1px_12px)] bg-ink-800',
  finance: 'bg-[linear-gradient(135deg,#080706_0%,#14110E_100%)]',
  ops: 'bg-[linear-gradient(rgba(230,166,83,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(230,166,83,0.05)_1px,transparent_1px)] bg-[length:48px_48px] bg-ink-800',
  edu: 'bg-[radial-gradient(circle_at_70%_30%,rgba(230,166,83,0.10),transparent_60%)] bg-ink-800',
};

const sceneLabels = {
  ai: 'AI / CONVERSATION',
  vault: 'ENCRYPTED / FILES',
  finance: 'INVOICES / LEDGER',
  ops: 'OPERATIONS / TELEMETRY',
  edu: 'LEARNING / COURSES',
};



function Frame({ label, children }) {
  return (
    <div className="relative w-full max-w-md border border-bone/15 bg-ink-900/95 p-6 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl">
      {/* Subtle Corner Tick Marks */}
      <span className="pointer-events-none absolute -left-px -top-px h-2 w-2 border-l border-t border-amber" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-amber" />

      <div className="mb-5 flex items-center justify-between border-b border-bone/10 pb-3 font-body text-[10px] tracking-widest2 text-mute">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          {label}
        </span>
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-bone/20" />
          <div className="h-2 w-2 rounded-full bg-bone/20" />
          <div className="h-2 w-2 rounded-full bg-amber/60" />
        </div>
      </div>
      {children}
    </div>
  );
}




// --- SUB-COMPONENTS ---
function SceneVisual({ project }) {
  const [hasImage, setHasImage] = useState(!!project.image);

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${sceneStyles[project.scene]}`}
    >
      {/* Top Telemetry Overlay Bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-bone/10 bg-ink-900/60 px-6 py-3.5 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          <span className="font-body text-[10px] tracking-widest2 text-bone/80">
            {sceneLabels[project.scene]}
          </span>
        </div>
        <span className="font-body text-[10px] tracking-widest2 text-amber">
          CASE // {project.no}
        </span>
      </div>

      {hasImage && (
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain object-center contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105"
          onError={() => setHasImage(false)}
        />
      )}

      {/* Subtle Bottom Cinema Vignette & Caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent p-6 pt-16">
        <span className="font-serif text-xs italic text-bone/70">
          {project.name} — Interactive Preview
        </span>
        <span className="border border-bone/15 bg-ink-900/80 px-2.5 py-1 font-body text-[9px] tracking-widest2 text-bone/80 backdrop-blur-sm">
          {project.no}
        </span>
      </div>
    </div>
  );
}

function ProjectScene({ project, index, onActive }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  // Even index (0, 2, etc.) -> Image left, Text right
  // Odd index (1, 3, etc.) -> Text left, Image right (Z-Pattern layout)
  const isEven = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onActive(project.no);
      },
      { threshold: 0.5 }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  }, [project.no, onActive]);

  return (
    <article
      ref={ref}
      id={project.id}
      className="grid min-h-[90vh] items-center gap-12 border-t border-bone/10 py-24 md:py-32 lg:grid-cols-12 lg:gap-16"
    >
      {/* Visual / Mockup Column (Left on even, Right on odd) */}
      <div
        className={`group relative lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        data-cursor="VIEW"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Subtle Warm Backlight on Hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 rounded-full bg-amber/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        />

        {/* Offset Architectural Wireframe */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 border border-bone/10 transition-all duration-700 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:border-amber/35"
        />

        {/* Precision Amber Corner Crosshairs */}
        <span className="pointer-events-none absolute -left-3 -top-3 z-30 h-3 w-3 border-l-2 border-t-2 border-amber" />
        <span className="pointer-events-none absolute -right-3 -top-3 z-30 h-3 w-3 border-r-2 border-t-2 border-amber" />
        <span className="pointer-events-none absolute -bottom-3 -left-3 z-30 h-3 w-3 border-b-2 border-l-2 border-amber" />
        <span className="pointer-events-none absolute -bottom-3 -right-3 z-30 h-3 w-3 border-b-2 border-r-2 border-amber" />

        {/* Main Viewport Container */}
        <div className="relative aspect-[4/3] cursor-pointer overflow-hidden border border-bone/15 bg-ink-900 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)]">
          <div
            className="h-full w-full transition-transform duration-[1200ms] ease-out"
            style={{ transform: hover ? 'scale(1.03)' : 'scale(1)' }}
          >
            <SceneVisual project={project} />
          </div>
        </div>
      </div>

      {/* Details Column (Right on even, Left on odd) */}
      <div
        className={`lg:col-span-5 ${isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'
          }`}
      >
        {/* Index Number + Category Label */}
        <div className="flex items-baseline justify-between border-b border-bone/10 pb-4">
          <p
            className={`select-none font-display text-7xl font-medium leading-none transition-colors duration-500 md:text-8xl ${hover ? 'text-amber' : 'text-bone/20'
              }`}
          >
            {project.no}
            <span className="text-amber">.</span>
          </p>
          <span className="font-body text-[10px] uppercase tracking-widest2 text-amber/80">
            // {sceneLabels[project.scene]}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="mt-6 font-display text-4xl font-medium leading-[0.95] tracking-tight text-bone md:text-5xl lg:text-6xl">
          {project.name}
        </h3>

        {/* Editorial Tagline */}
        <p className="mt-6 border-l-2 border-amber/60 pl-5 font-serif text-xl italic leading-snug text-bone/85 md:text-2xl">
          {project.tagline}
        </p>

        {/* Overview Copy */}
        <p className="mt-5 font-body text-sm leading-relaxed text-bone/70">
          {project.overview}
        </p>

        {/* Architectural Spec Sheet */}
        <dl className="mt-8 divide-y divide-bone/10 border-y border-bone/10 font-body text-sm">
          <div className="flex items-baseline justify-between py-4">
            <dt className="text-[10px] uppercase tracking-widest2 text-mute">
              // ROLE
            </dt>
            <dd className="font-medium text-bone">{project.role}</dd>
          </div>

          <div className="py-4">
            <dt className="text-[10px] uppercase tracking-widest2 text-mute">
              // ARCHITECTURE &amp; STACK
            </dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="border border-bone/15 bg-ink-800/80 px-3 py-1 font-body text-[11px] tracking-wide text-bone/90 transition-colors duration-300 hover:border-amber/50 hover:text-amber"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            data-cursor="OPEN"
            className="
              group/link inline-flex items-center gap-3 border border-amber/40 bg-amber/10 px-6
              py-3.5 font-body text-[11px] uppercase tracking-widest2 text-amber transition-all
              duration-300 hover:border-amber hover:bg-amber hover:text-ink-900
              hover:shadow-[0_0_28px_rgba(230,166,83,0.3)]
            "
          >
            <span>LIVE PROJECT</span>
            <ExternalLink
              size={14}
              className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>

          <a
            href={project.source}
            target="_blank"
            rel="noreferrer"
            data-cursor="OPEN"
            className="
              group/link inline-flex items-center gap-3 border border-bone/15 bg-ink-800/60 px-6
              py-3.5 font-body text-[11px] uppercase tracking-widest2 text-bone transition-all
              duration-300 hover:border-amber/50 hover:text-amber
            "
          >
            <Github
              size={15}
              className="transition-transform duration-300 group-hover/link:scale-110"
            />
            <span>VIEW SOURCE</span>
          </a>
        </div>
      </div>
    </article>
  );
}

// --- MAIN EXPORT ---
export default function Projects() {
  const [activeNo, setActiveNo] = useState('01');
  const onActive = (no) => setActiveNo(no);

  return (
    <section
      id="work"
      className="relative border-t border-bone/10 bg-ink-900 px-6 text-bone md:px-12"
    >
      {/* Subtle Ambient Warm Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-96 h-[32rem] w-[32rem] rounded-full bg-amber/[0.04] blur-[160px]"
      />

      <div className="mx-auto max-w-[1600px]">
        {/* Sticky Telemetry Header Indicator */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-bone/10 bg-ink-900/90 py-5 font-body text-[11px] tracking-widest2 text-mute backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_8px_rgba(230,166,83,0.7)]" />
            <span className="font-display text-xs uppercase tracking-[0.25em] text-bone/70">
              00 / Selected Works Index
            </span>
          </div>

          <div
            className="flex items-center gap-3 font-display text-sm"
            aria-live="polite"
          >
            <span className="font-body text-[10px] uppercase tracking-widest2 text-mute hidden sm:inline">
              ACTIVE REEL //
            </span>
            <span className="text-amber">{activeNo}</span>
            <span className="text-bone/30">/</span>
            <span className="text-bone/60">
              {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </header>

        {/* Section Title */}
        <div className="pt-20 pb-10 md:pt-28">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="-mx-2 whitespace-nowrap font-display text-[14.5vw] font-medium leading-[0.84] tracking-tight text-bone md:text-[11vw]">
                SELECTED
                <br />
                <span className="pl-[12%] font-serif font-normal italic text-amber">
                  WORK.
                </span>
              </h2>

              <p className="max-w-xs border-l-2 border-amber/60 pl-5 font-serif text-lg italic leading-snug text-bone/75 lg:mb-4">
                Full-stack architectures, AI interfaces, and production systems engineered from the ground up.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Projects List */}
        <div className="mt-8">
          {projects.map((p, index) => (
            <ProjectScene
              key={p.id}
              project={p}
              index={index}
              onActive={onActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}