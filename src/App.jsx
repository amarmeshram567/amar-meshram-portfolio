import { useState, useEffect } from 'react';
import { Toaster } from "react-hot-toast"
import Intro from './components/Intro.jsx';
import Cursor from './components/Cursor.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Journey from './components/Journey.jsx';
import Resume from './components/Resume.jsx';
import GitHubActivity from './components/GitHubActivity.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  // Lock scroll while the intro plays
  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [introDone]);

  return (
    <>
      <Toaster />
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <Cursor />
      <Nav />
      <main className={`transition-opacity duration-1000 ${introDone ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Projects />
        <About />
        <Journey />
        <Skills />
        <Resume />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
