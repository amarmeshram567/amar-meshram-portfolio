import { profile } from '../data/content.js';

// Cinematic identity panel: monochrome, grain, thin gold frame, scanning light.
// Replace the placeholder with a real photo at /public/amar.jpg (kept realistic, lightly graded).
export default function Portrait() {
  return (
    <figure className="relative mx-auto w-full max-w-sm">
      {/* Atmospheric Burnt-Orange & Dark Amber Backlighting Behind Portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(156,64,22,0.24)_0%,rgba(230,166,83,0.10)_42%,transparent_72%)] blur-2xl"
      />

      <div className="group relative aspect-[3/4] overflow-hidden bg-[#110E0B] p-3 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(230,166,83,0.05)] ring-1 ring-[#2B2017]">
        {/* Thin Warm Amber Frame */}
        <div
          className="pointer-events-none absolute inset-3 z-20 border border-[#E6A653]/55 shadow-[inset_0_0_20px_rgba(230,166,83,0.06)]"
          aria-hidden="true"
        />

        <div className="relative h-full w-full overflow-hidden bg-[#080706]">
          <img
            src="/profile.jpeg"
            alt="Portrait of Amar Meshram"
            loading="lazy"
            className="h-full w-full object-cover grayscale contrast-110 brightness-95 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />

          {/* Subtle Warm Charcoal & Burnt-Amber Cinema Grade Vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080706]/75 via-[#2B160A]/10 to-transparent"
          />

          {/* Warm Amber Scanning Light */}
          <div className="scan-line pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-[#E6A653]/12 to-transparent" />

          {/* Film Grain Overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>\")",
            }}
          />
        </div>
      </div>

      <figcaption className="mt-6 space-y-2 font-body text-[11px] tracking-widest2">
        <p className="font-display text-sm text-[#F5E9D8]">
          {profile.name.toUpperCase()}
        </p>
        <p className="text-[#9E9080]">{profile.title.toUpperCase()}</p>
        <p className="text-[#9E9080]">{profile.location.toUpperCase()}</p>
        <p className="flex items-center gap-2 text-[#E6A653]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E6A653] shadow-[0_0_8px_rgba(230,166,83,0.75)]" />
          {profile.availability.toUpperCase()}
        </p>
      </figcaption>
    </figure>
  );
}