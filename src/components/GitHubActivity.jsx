import { Github } from 'lucide-react';
import { profile } from '../data/content.js';
import Reveal from './Reveal.jsx';

// Contribution graph from a public SVG service; no fake numbers are shown.
const USERNAME = profile.github.split('/').pop();
const GRAPH = `https://ghchart.rshah.org/e6a653/${USERNAME}`;

export default function GitHubActivity() {
  return (
    <section
      id="activity"
      className="relative overflow-hidden border-t border-bone/10 px-6 py-28 md:px-12 md:py-40"
    >
      {/* Subtle Warm Ambient Backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/5 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Editorial Section Index Bar */}
        <Reveal>
          <div className="mb-16 flex items-center justify-between border-b border-bone/10 pb-6 md:mb-24">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_8px_rgba(230,166,83,0.7)]" />
              <span className="font-display text-xs uppercase tracking-[0.25em] text-bone/60">
                03 / Open Source &amp; Telemetry
              </span>
            </div>
            <span className="hidden font-serif text-sm italic text-bone/50 sm:inline-block">
              Continuous shipping log
            </span>
          </div>
        </Reveal>

        {/* Section Header + Handle Callout */}
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="font-display text-6xl font-medium leading-[0.88] tracking-tight text-bone md:text-8xl">
              CODE
              <br />
              <span className="font-serif font-normal italic text-amber">
                AFTER DARK.
              </span>
            </h2>

            <div className="border-l-2 border-amber/60 pl-5 lg:max-w-sm">
              <p className="font-body text-[11px] uppercase tracking-widest2 text-amber">
                // LIVE COMMIT MATRIX
              </p>
              <p className="mt-2 font-serif text-lg italic leading-snug text-bone/80">
                Real-time contribution frequency synced directly from GitHub.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Architectural Telemetry Frame */}
        <Reveal>
          <div className="group relative mt-16 md:mt-20">
            {/* Offset Wireframe Border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2.5 border border-bone/10 transition-transform duration-700 ease-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-amber/30"
            />

            {/* Precision Amber Corner Crosshairs */}
            <span className="pointer-events-none absolute -left-2.5 -top-2.5 z-20 h-3 w-3 border-l-2 border-t-2 border-amber" />
            <span className="pointer-events-none absolute -right-2.5 -top-2.5 z-20 h-3 w-3 border-r-2 border-t-2 border-amber" />
            <span className="pointer-events-none absolute -bottom-2.5 -left-2.5 z-20 h-3 w-3 border-b-2 border-l-2 border-amber" />
            <span className="pointer-events-none absolute -bottom-2.5 -right-2.5 z-20 h-3 w-3 border-b-2 border-r-2 border-amber" />

            {/* Console Box */}
            <div className="relative overflow-hidden border border-bone/15 bg-ink-800/90 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-md">
              {/* Top Console HUD Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-bone/10 bg-[#080706]/60 px-6 py-4 md:px-10">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-widest2 text-bone/80">
                    GITHUB.COM/{USERNAME.toUpperCase()}
                  </span>
                </div>

                <span className="font-body text-[10px] uppercase tracking-widest2 text-mute">
                  STREAM // VERIFIED SVG
                </span>
              </div>

              {/* Scrollable Contribution Matrix */}
              <div className="relative overflow-x-auto px-6 py-10 md:px-10 md:py-12">
                {/* Subtle Warm Inner Radial Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,166,83,0.06),transparent_70%)]"
                />

                <img
                  src={GRAPH}
                  alt={`GitHub contribution graph for ${USERNAME}`}
                  loading="lazy"
                  className="relative z-10 mx-auto w-full min-w-[720px] opacity-90 contrast-125 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>

              {/* Bottom Console Legend Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-bone/10 bg-[#080706]/40 px-6 py-3.5 md:px-10">
                <span className="font-body text-[10px] uppercase tracking-widest2 text-mute">
                  SCROLL HORIZONTALLY ON MOBILE →
                </span>

                {/* Authentic Heatmap Legend (No Fake Numbers) */}
                <div className="flex items-center gap-2 font-body text-[10px] uppercase tracking-widest2 text-mute">
                  <span>LESS</span>
                  <span className="h-2.5 w-2.5 border border-bone/15 bg-ink-800" />
                  <span className="h-2.5 w-2.5 bg-amber/25" />
                  <span className="h-2.5 w-2.5 bg-amber/50" />
                  <span className="h-2.5 w-2.5 bg-amber/75" />
                  <span className="h-2.5 w-2.5 bg-amber shadow-[0_0_6px_rgba(230,166,83,0.6)]" />
                  <span>MORE</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Action Row */}
        <Reveal>
          <div className="mt-12 flex items-center justify-between">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN"
              className="link-line group inline-flex items-center gap-3.5 font-body text-[11px] uppercase tracking-widest2 text-bone transition-colors duration-300 hover:text-amber"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bone/15 bg-ink-800 text-amber transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-[#080706]">
                <Github size={14} />
              </span>
              <span>VIEW ALL REPOSITORIES ON GITHUB</span>
              <span
                aria-hidden="true"
                className="font-display text-sm text-amber transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}