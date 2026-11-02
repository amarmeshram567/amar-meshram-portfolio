import { profile, aboutFacts } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-bone/10 px-6 py-28 md:px-12 md:py-40"
    >
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-amber/5 blur-[140px]"
      />

      <div className="mx-auto max-w-[1600px]">
        {/* Editorial Section Index Bar */}
        <Reveal>
          <div className="mb-16 flex items-center justify-between border-b border-bone/10 pb-6 md:mb-24">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber" />
              <span className="font-display text-xs uppercase tracking-[0.25em] text-bone/60">
                01 / Profile &amp; Philosophy
              </span>
            </div>
            <span className="hidden font-serif text-sm italic text-bone/50 sm:inline-block">
              Crafted with intent
            </span>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Heading + Gallery Portrait */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-6xl font-medium leading-[0.88] tracking-tight text-bone md:text-8xl">
                THE PERSON
                <br />
                <span className="inline-block py-1 font-serif font-normal italic text-amber">
                  BEHIND
                </span>
                <br />
                THE CODE.
              </h2>
            </Reveal>

            <Reveal>
              <figure className="group relative mt-14 max-w-md md:mt-20">
                {/* Offset Architectural Frame */}
                <div
                  aria-hidden="true"
                  className=" absolute -inset-3 border border-bone/10 transition-transform duration-700 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                />

                {/* Corner Accents */}
                <span className="absolute -left-3 -top-3 z-10 h-2.5 w-2.5 border-l-2 border-t-2 border-amber" />
                <span className="absolute -bottom-3 -right-3 z-10 h-2.5 w-2.5 border-b-2 border-r-2 border-amber" />

                {/* Portrait Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-800 ring-1 ring-bone/15">
                  <img
                    src="/profile.jpeg"
                    alt="Amar Meshram"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale contrast-110 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />

                  {/* Subtle Bottom Vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-800/80 via-transparent to-transparent opacity-80" />

                  {/* Floating Caption Overlay */}
                  <figcaption className="absolute bottom-0 inset-x-0 flex items-center justify-between border-t border-bone/10 bg-ink-800/60 px-5 py-3.5 backdrop-blur-md">
                    <span className="font-display text-xs uppercase tracking-[0.2em] text-bone/90">
                      Amar Meshram
                    </span>
                    <span className="font-serif text-xs italic text-amber">
                      Fig. 01 — Portrait
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>

          {/* Right Column: Editorial Bio + Interactive Facts */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
            <Reveal>
              <div className="relative">
                <span className="mb-6 block font-display text-xs uppercase tracking-[0.25em] text-amber">
                  // Overview
                </span>
                <p className="border-l-2 border-amber/60 pl-6 font-serif text-3xl leading-[1.35] tracking-tight text-bone md:pl-8 md:text-4xl lg:text-[2.65rem]">
                  {profile.about}
                </p>
              </div>
            </Reveal>

            {/* Interactive Fact Sheet */}
            <div className="mt-20 md:mt-28">
              <Reveal>
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-bone/40">
                  <span className="font-display">Index</span>
                  <span className="font-display">Highlights</span>
                </div>
              </Reveal>

              <ol className="divide-y divide-bone/10 border-y border-bone/10">
                {aboutFacts.map((f) => (
                  <Reveal
                    key={f.n}
                    as="li"
                    className="group relative overflow-hidden transition-colors duration-500 hover:bg-bone/[0.02]"
                  >
                    {/* Animated Hover Accent Bar */}
                    <span className="absolute inset-y-0 left-0 w-0.5 origin-bottom scale-y-0 bg-amber transition-transform duration-500 ease-out group-hover:scale-y-100" />

                    <div className="flex items-baseline justify-between gap-6 py-7 transition-transform duration-500 ease-out group-hover:translate-x-3 md:py-8">
                      <div className="flex items-baseline gap-6 md:gap-10">
                        <span className="font-display text-xs tracking-[0.2em] text-amber/80 transition-colors duration-300 group-hover:text-amber">
                          /{f.n}
                        </span>
                        <span className="font-display text-xl tracking-wide text-bone/90 transition-colors duration-300 group-hover:text-bone md:text-2xl">
                          {f.label}
                        </span>
                      </div>

                      {/* Subtle Editorial Arrow on Hover */}
                      <span
                        aria-hidden="true"
                        className="font-display text-lg text-amber opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        ↗
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}