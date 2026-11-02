import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { navItems } from '../data/content.js';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // Premium touch: Smooth scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Framer Motion Variants for Staggered Drawer Links
  const menuVars = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { x: "100%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    animate: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
  };

  const linkVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#080706]/70 py-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-6'
          }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] w-full origin-left bg-gradient-to-r from-amber/0 via-amber to-amber/0 opacity-50"
          style={{ scaleX }}
        />

        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12"
        >
          {/* Brand Logo with subtle hover lift */}
          <button
            onClick={() => go('top')}
            className="group relative transition-transform duration-500 hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <img src="/logo.png" className="size-10" alt="logo" />
            <div className="absolute -inset-2 rounded-full bg-amber/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
          </button>

          {/* Desktop Nav Items */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item, idx) => {
              const indexLabel = `0${idx + 1}`;
              const isActive = active === item.id;

              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => go(item.id)}
                    data-cursor="GO"
                    aria-current={isActive ? 'true' : undefined}
                    className={`group flex items-center gap-2 font-body text-[11px] tracking-widest2 transition-colors duration-500 ${isActive ? 'text-amber' : 'text-bone/60 hover:text-bone'
                      }`}
                  >
                    <span className={`text-[9px] transition-colors duration-500 ${isActive ? 'text-amber' : 'text-bone/30'}`}>
                      /{indexLabel}
                    </span>
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
                        {item.label}
                      </span>
                      <span className="absolute left-0 top-0 inline-block translate-y-full text-amber transition-transform duration-500 group-hover:translate-y-0">
                        {item.label}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-bone/10 bg-white/5 text-bone backdrop-blur-md transition-all duration-500 hover:border-amber/50 hover:bg-amber/10 hover:text-amber lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} className="transition-transform duration-500 group-hover:scale-110" />
          </button>
        </nav>
      </header>

      {/* Mobile Sliding Drawer & Backdrop */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[#080706]/90 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            {/* Sliding Panel from Right */}
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col justify-between border-l border-white/5 bg-[#080706] p-8 shadow-2xl sm:max-w-md"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber shadow-[0_0_12px_rgba(230,166,83,0.8)]" />
                  <span className="font-display text-xs uppercase tracking-[0.25em] text-bone/50">
                    Navigation
                  </span>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-bone transition-all duration-500 hover:border-amber/50 hover:bg-amber/10 hover:text-amber"
                >
                  <X size={16} className="transition-transform duration-500 group-hover:rotate-90" />
                </button>
              </div>

              {/* Drawer Links List */}
              <motion.ul
                variants={containerVars}
                initial="initial"
                animate="animate"
                exit="initial"
                className="my-auto flex flex-col gap-2 py-6"
              >
                {navItems.map((item, idx) => {
                  const indexLabel = `0${idx + 1}`;
                  const isActive = active === item.id;

                  return (
                    <motion.li key={item.id} variants={linkVars} className="overflow-hidden border-b border-white/5 py-4">
                      <button
                        onClick={() => go(item.id)}
                        className="group flex w-full items-center justify-between text-left"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-body text-xs tracking-widest2 text-amber/60 transition-colors group-hover:text-amber">
                            /{indexLabel}
                          </span>
                          <span className={`font-display text-3xl font-medium tracking-tight transition-all duration-500 sm:text-4xl ${isActive ? 'text-amber translate-x-2' : 'text-bone group-hover:translate-x-2 group-hover:text-amber'
                            }`}>
                            {item.label}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={24}
                          strokeWidth={1.5}
                          className="text-amber opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </button>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Drawer Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="border-t border-white/5 pt-6 font-body text-[10px] uppercase tracking-widest2 text-bone/40"
              >
                <div className="flex items-center justify-between">
                  <span>NAGPUR, INDIA</span>
                  <span className="flex items-center gap-2 text-amber">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber"></span>
                    </span>
                    AVAILABLE
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}