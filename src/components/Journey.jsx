import { journey } from '../data/content.js';
import Reveal from './Reveal.jsx';

// Vertical film-reel style timeline with large year typography and editorial telemetry.
export default function Journey() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-bone/10 px-6 py-28 md:px-12 md:py-40"
    >
      {/* Subtle Warm Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-amber/5 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-1/4 h-96 w-96 rounded-full bg-amber/[0.04] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Editorial Section Index Bar */}
        <Reveal>
          <div className="mb-16 flex items-center justify-between border-b border-bone/10 pb-6 md:mb-24">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_8px_rgba(230,166,83,0.7)]" />
              <span className="font-display text-xs uppercase tracking-[0.25em] text-bone/60">
                02 / Chronology &amp; Milestones
              </span>
            </div>
            <span className="hidden font-serif text-sm italic text-bone/50 sm:inline-block">
              Selected chapters in motion
            </span>
          </div>
        </Reveal>

        {/* Section Title Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-6xl font-medium leading-[0.88] tracking-tight text-bone md:text-8xl">
              THE{' '}
              <span className="font-serif font-normal italic text-amber">
                JOURNEY.
              </span>
            </h2>
            <p className="font-body text-[11px] uppercase tracking-widest2 text-mute">
              // ARCHIVE REEL ({String(journey.length).padStart(2, '0')} ENTRIES)
            </p>
          </div>
        </Reveal>

        {/* Film-Reel Vertical Timeline */}
        <ol className="relative mt-20 ml-3 border-l border-bone/15 md:mt-28 md:ml-16 lg:ml-24">
          {journey.map((step, idx) => {
            const frameIndex = String(idx + 1).padStart(2, '0');

            return (
              <Reveal
                as="li"
                key={step.year}
                className="group relative border-b border-bone/10 py-14 pl-8 transition-colors duration-500 last:border-b-0 hover:bg-bone/[0.015] md:py-20 md:pl-16 lg:pl-24"
              >
                {/* Animated Active Rail Segment on Hover */}
                <span
                  aria-hidden="true"
                  className="
                    absolute -left-[1px] top-0 h-full w-[2px] origin-top scale-y-0 bg-amber
                    shadow-[0_0_12px_rgba(230,166,83,0.6)] transition-transform duration-500 ease-out
                    group-hover:scale-y-100
                  "
                />

                {/* Timeline Node Marker (Outer Halo + Glowing Core) */}
                <span
                  aria-hidden="true"
                  className="
                    absolute -left-[7px] top-16 flex h-3.5 w-3.5 items-center justify-center
                    rounded-full border border-amber/50 bg-[#080706] transition-all duration-500
                    group-hover:scale-125 group-hover:border-amber md:top-24
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_8px_rgba(230,166,83,0.9)]" />
                </span>

                {/* Horizontal Tick Connector */}
                <span
                  aria-hidden="true"
                  className="
                    absolute left-2 top-[4.35rem] hidden h-px w-8 bg-bone/15
                    transition-all duration-500 group-hover:w-12 group-hover:bg-amber/60
                    md:top-[6.35rem] md:block
                  "
                />

                {/* Content Row */}
                <div className="grid items-baseline gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Left: Frame Index + Monumental Year Typography */}
                  <div className="lg:col-span-6">
                    <div className="mb-3 flex items-center gap-3 font-body text-[10px] uppercase tracking-widest2 text-amber/80">
                      <span>FRAME // {frameIndex}</span>
                      <span className="h-px w-6 bg-amber/30 transition-all duration-500 group-hover:w-12 group-hover:bg-amber" />
                    </div>

                    <p className="select-none font-display text-7xl font-medium leading-none tracking-tight text-bone/85 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:text-bone md:text-[8.5vw]">
                      {step.year}
                      <span className="text-amber opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        .
                      </span>
                    </p>
                  </div>

                  {/* Right: Editorial Milestone Details */}
                  <div className="lg:col-span-6">
                    <div className="relative border-l border-bone/15 pl-6 transition-colors duration-500 group-hover:border-amber/70 md:pl-8">
                      <span className="mb-2 block font-serif text-xs italic text-bone/45 transition-colors duration-300 group-hover:text-amber/80">
                        Milestone {frameIndex}
                      </span>
                      <p className="font-body text-xs leading-relaxed tracking-widest2 text-mute transition-colors duration-300 group-hover:text-bone/90 md:text-sm">
                        {step.text.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}