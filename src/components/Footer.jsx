import { useEffect, useState } from 'react';
import { profile } from '../data/content.js';

// Final scene: fades toward black as the user reaches the bottom.
export default function Footer() {
  const [darkness, setDarkness] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const remaining = max - window.scrollY;
      const t = Math.max(0, Math.min(1, 1 - remaining / 400));
      setDarkness(t);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-ink-900 px-6 pb-14 pt-28 md:px-12 md:pt-36">
      {/* Scroll-Driven Cinema Fade Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[90] bg-ink-900 transition-opacity duration-300"
        style={{ opacity: darkness * 0.6 }}
        aria-hidden="true"
      />

      {/* Subtle Warm Horizon Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-amber/[0.06] blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Editorial Top Index Bar + Back to Top Trigger */}
        <div className="mb-16 flex items-center justify-between border-b border-bone/10 pb-6 md:mb-24">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_8px_rgba(230,166,83,0.7)]" />
            <span className="font-display text-xs uppercase tracking-[0.25em] text-bone/60">
              05 / Colophon &amp; Sign-Off
            </span>
          </div>

          <a
            href="#top"
            data-cursor="TOP"
            className="group inline-flex items-center gap-3 font-body text-[10px] uppercase tracking-widest2 text-mute transition-colors duration-300 hover:text-amber"
          >
            <span>BACK TO TOP</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-bone/15 bg-ink-800 text-amber transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-amber group-hover:bg-amber group-hover:text-ink-900">
              ↑
            </span>
          </a>
        </div>

        {/* Monumental Identity Lockup */}
        <div className="relative">
          <p className="select-none font-display text-[12vw] font-medium leading-[0.84] tracking-tight text-bone transition-colors duration-500 hover:text-bone/95">
            {profile.name.toUpperCase()}
            <span className="text-amber">.</span>
          </p>

          {/* Asymmetric Editorial Details Row */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <div className="border-l-2 border-amber/60 pl-6">
                <span className="mb-2 block font-body text-[10px] uppercase tracking-widest2 text-amber">
                  // PHILOSOPHY
                </span>
                <p className="max-w-xl font-serif text-3xl italic leading-snug text-bone/85 md:text-4xl">
                  Building digital experiences
                  <br />
                  one system at a time.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-bone/10 pt-6 lg:col-span-6 lg:col-start-7 lg:border-t-0 lg:pt-0">
              <div>
                <span className="block font-body text-[10px] uppercase tracking-widest2 text-mute/60">
                  ROLE
                </span>
                <p className="mt-1.5 font-body text-[11px] tracking-widest2 text-bone/80">
                  {profile.title.toUpperCase()}
                </p>
              </div>

              {profile.location && (
                <div>
                  <span className="block font-body text-[10px] uppercase tracking-widest2 text-mute/60">
                    BASE
                  </span>
                  <p className="mt-1.5 font-body text-[11px] tracking-widest2 text-bone/80">
                    {profile.location.toUpperCase()}
                  </p>
                </div>
              )}

              <div>
                <span className="block font-body text-[10px] uppercase tracking-widest2 text-mute/60">
                  STATUS
                </span>
                <p className="mt-1.5 flex items-center gap-2 font-body text-[11px] tracking-widest2 text-amber">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_8px_rgba(230,166,83,0.8)]" />
                  AVAILABLE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Directory & Copyright Bar */}
        <div className="mt-20 flex flex-col gap-6 border-t border-bone/10 pt-8 font-body text-[11px] tracking-widest2 md:flex-row md:items-center md:justify-between">
          <span className="text-mute">
            © {new Date().getFullYear()} AMAR MESHRAM. ALL RIGHTS RESERVED.
          </span>

          <div className="flex flex-wrap gap-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="link-line group inline-flex items-center gap-1.5 text-bone/85 transition-colors duration-300 hover:text-amber"
            >
              <span>GITHUB</span>
              <span
                aria-hidden="true"
                className="text-amber/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber"
              >
                ↗
              </span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-line group inline-flex items-center gap-1.5 text-bone/85 transition-colors duration-300 hover:text-amber"
            >
              <span>LINKEDIN</span>
              <span
                aria-hidden="true"
                className="text-amber/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber"
              >
                ↗
              </span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="link-line group inline-flex items-center gap-1.5 text-bone/85 transition-colors duration-300 hover:text-amber"
            >
              <span>EMAIL</span>
              <span
                aria-hidden="true"
                className="text-amber/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber"
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Architectural End-of-Reel Divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span aria-hidden="true" className="h-px w-12 bg-bone/10 md:w-24" />
          <p className="flex items-center gap-2.5 text-center font-body text-[10px] tracking-widest2 text-bone/35">
            <span className="h-1 w-1 rounded-full bg-amber/60" />
            END OF TRANSMISSION.
          </p>
          <span aria-hidden="true" className="h-px w-12 bg-bone/10 md:w-24" />
        </div>
      </div>
    </footer>
  );
}
