import { useState } from 'react';
import { Download, FileText, ExternalLink, Briefcase, Code, Cpu, GraduationCap, User, Terminal, Mail, Phone, MapPin, Globe, Github, Linkedin, Code2 } from 'lucide-react';
import { profile, resumePreview } from '../data/content.js';
import Reveal from './Reveal.jsx';

// Map section keys to icons for a polished look
const sectionIcons = {
  'PROFILE SUMMARY': <User size={14} className="text-amber" />,
  EXPERIENCE: <Briefcase size={14} className="text-amber" />,
  PROJECTS: <Code size={14} className="text-amber" />,
  'TECHNICAL SKILLS': <Terminal size={14} className="text-amber" />,
  'AI AUTOMATION SKILLS': <Cpu size={14} className="text-amber" />,
  EDUCATION: <GraduationCap size={14} className="text-amber" />,
};

export default function Resume() {
  const sections = Object.keys(resumePreview);
  const [activeTab, setActiveTab] = useState(sections[0]);

  return (
    <section
      id="resume"
      className="relative overflow-hidden border-t border-bone/10 bg-ink-900 px-6 py-28 md:px-12 md:py-40"
    >
      {/* Subtle Warm Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-amber/[0.05] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-amber/[0.04] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Editorial Section Index Bar */}
        <div className="mb-16 flex items-center justify-between border-b border-bone/10 pb-6 md:mb-24">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_8px_rgba(230,166,83,0.7)]" />
            <span className="font-display text-xs uppercase tracking-[0.25em] text-bone/60">
              04 / Career &amp; Credentials
            </span>
          </div>
          <span className="hidden font-serif text-sm italic text-bone/50 sm:inline-block">
            Verified professional telemetry
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Column: Heading, Bio, and Contact / Download Actions */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <h2 className="font-display text-6xl font-medium leading-[0.88] tracking-tight text-bone md:text-8xl">
                CURIOUS
                <br />
                ABOUT
                <br />
                <span className="font-serif font-normal italic text-amber drop-shadow-[0_0_28px_rgba(230,166,83,0.12)]">
                  THE DETAILS?
                </span>
              </h2>

              <div className="mt-10 border-l-2 border-amber/60 pl-6">
                <span className="mb-2 block font-body text-[10px] uppercase tracking-widest2 text-amber">
                  // PROFESSIONAL DOSSIER
                </span>
                <p className="font-serif text-xl italic leading-relaxed text-bone/85 md:text-2xl">
                  Explore my background spanning full-stack development, construction project management, and production-ready applications.
                </p>
              </div>

              <p className="mt-5 font-body text-sm leading-relaxed text-bone/70">
                Download the complete PDF or review individual sections interactively through the live terminal view.
              </p>
            </Reveal>

            {/* Contact Details Quick View */}
            <div className="mt-10 grid grid-cols-1 gap-3.5 border-y border-bone/10 py-6 font-body text-xs text-bone/85">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-amber shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-amber shrink-0" />
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="transition-colors hover:text-amber"
                >
                  {profile.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-amber shrink-0" />
                <a
                  href={`tel:${profile.contact.phone}`}
                  className="transition-colors hover:text-amber"
                >
                  {profile.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={14} className="text-amber shrink-0" />
                <span className="font-medium text-amber">
                  {profile.availability}
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href={profile.resumePdf}
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
                className="group relative inline-flex items-center gap-3 overflow-hidden border border-amber/40 bg-amber/10 px-6 py-4 font-body text-[11px] uppercase tracking-widest2 text-amber transition-all duration-300 hover:border-amber hover:bg-amber hover:text-ink-900 hover:shadow-[0_0_28px_rgba(230,166,83,0.3)]"
              >
                <FileText size={16} />
                <span>VIEW RESUME</span>
              </a>

              <a
                href={profile.resumePdf}
                download
                className="group relative inline-flex items-center gap-3 overflow-hidden border border-bone/15 bg-ink-800/60 px-6 py-4 font-body text-[11px] uppercase tracking-widest2 text-bone backdrop-blur-md transition-all duration-300 hover:border-amber/50 hover:text-amber"
              >
                <Download
                  size={16}
                  className="text-amber transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Terminal Preview Window */}
          <div className="group/terminal relative lg:col-span-7">
            {/* Offset Wireframe Border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2.5 border border-bone/10 transition-transform duration-700 ease-out group-hover/terminal:translate-x-1 group-hover/terminal:translate-y-1 group-hover/terminal:border-amber/25"
            />

            {/* Precision Amber Corner Crosshairs */}
            <span className="pointer-events-none absolute -left-2.5 -top-2.5 z-20 h-3 w-3 border-l-2 border-t-2 border-amber" />
            <span className="pointer-events-none absolute -right-2.5 -top-2.5 z-20 h-3 w-3 border-r-2 border-t-2 border-amber" />
            <span className="pointer-events-none absolute -bottom-2.5 -left-2.5 z-20 h-3 w-3 border-b-2 border-l-2 border-amber" />
            <span className="pointer-events-none absolute -bottom-2.5 -right-2.5 z-20 h-3 w-3 border-b-2 border-r-2 border-amber" />

            <div className="relative overflow-hidden border border-bone/15 bg-ink-800/90 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-md">
              {/* Document Header Bar */}
              <div className="flex items-center justify-between border-b border-bone/10 bg-[#080706]/80 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-body text-[10px] uppercase tracking-widest2 text-mute">
                    amar_meshram_resume.preview
                  </span>
                </div>

                <div className="flex items-center gap-4 text-bone/60">
                  <a
                    href="https://leetcode.com/u/amar_meshram/"
                    target="_blank"
                    rel="noreferrer"
                    title="LeetCode"
                    className="transition-colors hover:text-amber"
                  >
                    <Code2 size={15} />
                  </a>
                  <a
                    href={`https://${profile.contact.github}`}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                    className="transition-colors hover:text-amber"
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href={`https://${profile.contact.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                    className="transition-colors hover:text-amber"
                  >
                    <Linkedin size={15} />
                  </a>
                </div>
              </div>

              {/* Resume Profile Banner inside Document */}
              <div className="flex flex-col justify-between gap-4 border-b border-bone/10 bg-ink-900/40 px-8 py-6 md:flex-row md:items-center">
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-bone">
                    {profile.name}
                  </h3>
                  <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-amber">
                    {profile.title}
                  </p>
                </div>
                <div className="space-y-1 text-left font-body text-[11px] text-mute md:text-right">
                  <p>{profile.location}</p>
                  <p>
                    {profile.contact.email} &bull; {profile.contact.phone}
                  </p>
                </div>
              </div>

              {/* Navigation Tabs for Sections */}
              <div className="flex flex-wrap gap-2 border-b border-bone/10 bg-ink-900/30 p-4">
                {sections.map((section) => {
                  const isActive = activeTab === section;
                  return (
                    <button
                      key={section}
                      onClick={() => setActiveTab(section)}
                      className={`flex items-center gap-2 rounded-lg px-3.5 py-2 font-body text-[10px] uppercase tracking-widest transition-all duration-300 ${isActive
                        ? 'border border-amber/40 bg-amber/15 text-amber shadow-sm'
                        : 'border border-transparent text-bone/60 hover:bg-bone/5 hover:text-bone'
                        }`}
                    >
                      {sectionIcons[section]}
                      <span>{section}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Section Content Container */}
              <div className="flex min-h-[420px] flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="mb-6 flex items-center justify-between border-b border-bone/10 pb-4">
                    <h4 className="flex items-center gap-2.5 font-display text-xl tracking-tight text-bone">
                      {sectionIcons[activeTab]}
                      <span>{activeTab}</span>
                    </h4>
                    <span className="font-body text-[10px] uppercase tracking-widest2 text-mute">
                      SECTION {sections.indexOf(activeTab) + 1} OF{' '}
                      {sections.length}
                    </span>
                  </div>

                  <ul className="space-y-4 font-body text-sm leading-relaxed text-bone/85">
                    {resumePreview[activeTab].map((line, idx) => {
                      const isLink = line.startsWith('Live:');
                      const isSubheading =
                        idx === 0 &&
                        (activeTab === 'EXPERIENCE' ||
                          activeTab === 'PROJECTS');

                      if (isLink) {
                        const url = line.replace('Live: ', '');
                        return (
                          <li key={idx} className="pt-2">
                            <a
                              href={url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 font-body text-xs tracking-wider text-amber hover:underline"
                            >
                              <ExternalLink size={13} />
                              <span>{url}</span>
                            </a>
                          </li>
                        );
                      }

                      if (isSubheading) {
                        return (
                          <li
                            key={idx}
                            className="pt-1 font-display text-lg font-medium tracking-tight text-bone"
                          >
                            {line}
                          </li>
                        );
                      }

                      return (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/80 shadow-[0_0_6px_rgba(230,166,83,0.7)]" />
                          <span>{line}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Bottom Footer Info inside Preview */}
                <div className="mt-12 flex items-center justify-between border-t border-bone/10 pt-6 font-body text-[10px] uppercase tracking-widest2 text-mute">
                  <span>{profile.name.toUpperCase()}</span>
                  <span>{profile.title.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}