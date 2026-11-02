import { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '../data/content.js';
import Portrait from './Portrait.jsx';

export default function Hero() {
  const [offset, setOffset] = useState(0);

  // Title sequence: type blocks drift apart as the user scrolls out of the hero
  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 800));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#080706] pt-32 text-[#F5E9D8] md:pt-40"
    >
      {/* Subtle Burnt-Orange & Dark Amber Radial Atmospheric Gradients */}
      <div
        aria-hidden="true"
        className="light-leak pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_16%_20%,rgba(140,58,20,0.14),transparent_70%),radial-gradient(ellipse_55%_50%_at_78%_48%,rgba(230,166,83,0.07),transparent_75%),radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(92,38,14,0.12),transparent_70%)]"
      />

      {/* Extremely Subtle Dark-Brown Architectural Grid Lines */}
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(82,58,38,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(82,58,38,0.14)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_85%_75%_at_50%_42%,#000_55%,transparent_100%)]"
      />

      <div className="relative mx-auto grid max-w-[1600px] gap-12 px-6 md:px-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="font-body text-[11px] tracking-widest2 text-[#9E9080]">
            {profile.stack}
          </p>

          <h1 className="mt-6 font-display text-[15vw] font-medium leading-[0.85] tracking-tight text-[#F5E9D8] md:text-[10vw] lg:text-[9vw]">
            <span
              className="block font-serif font-normal italic text-[#E6A653] drop-shadow-[0_0_28px_rgba(230,166,83,0.14)] will-change-transform"
              style={{ transform: `translateX(${offset * -0.08}px)` }}
            >
              Hello,
            </span>
            <span
              className="block pl-[12%] will-change-transform md:pl-[22%]"
              style={{ transform: `translateX(${offset * 0.12}px)` }}
            >
              I build
            </span>
            <span
              className="-mt-2 block whitespace-nowrap will-change-transform"
              style={{ transform: `translateX(${offset * -0.05}px)` }}
            >
              DIGITAL
            </span>
            <span
              className="block pl-[6%] will-change-transform md:pl-[12%]"
              style={{ transform: `translateX(${offset * 0.1}px)` }}
            >
              experiences
              <span className="text-[#E6A653] drop-shadow-[0_0_20px_rgba(230,166,83,0.3)]">
                .
              </span>
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg font-light leading-relaxed text-[#F5E9D8]/80">
            {profile.tagline}
          </p>
          <p className="mt-4 font-body text-xs tracking-widest2 text-[#9E9080]">
            {profile.title.toUpperCase()}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#work"
              data-cursor="VIEW"
              className="group relative flex h-36 w-36 items-center justify-center rounded-full"
            >
              {/* Restrained Warm Ambient Halo on Hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 rounded-full bg-[#E6A653]/0 blur-xl transition-all duration-500 group-hover:bg-[#E6A653]/15"
              />

              <svg
                className="spin-slow absolute inset-0 h-full w-full"
                viewBox="0 0 140 140"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="ring"
                    d="M70,70 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0"
                  />
                </defs>
                <text
                  className="fill-[#9E9080] font-body transition-colors duration-500 group-hover:fill-[#F5E9D8]"
                  style={{ fontSize: 9, letterSpacing: 3 }}
                >
                  <textPath href="#ring">
                    VIEW MY WORK • SELECTED WORK •{' '}
                  </textPath>
                </text>
              </svg>

              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#E6A653] text-[#080706] shadow-[0_0_25px_rgba(230,166,83,0.22)] ring-1 ring-[#E6A653]/50 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#eeb264] group-hover:shadow-[0_0_36px_rgba(230,166,83,0.42)]">
                <ArrowRight
                  size={20}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </span>
            </a>

            <a
              href={profile.resumePdf}
              download
              className="link-line group flex items-center gap-3 font-body text-[11px] tracking-widest2 text-[#F5E9D8] transition-all duration-300 hover:text-[#E6A653] hover:drop-shadow-[0_0_12px_rgba(230,166,83,0.25)]"
            >
              <Download
                size={14}
                className="text-[#E6A653] transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:mt-0">
          <Portrait />
        </div>
      </div>
    </section>
  );
}