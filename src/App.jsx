import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './features/hero/Hero';
import { Projects } from './features/projects/Projects';
import { Experience } from './features/experience/Experience';
import { Skills } from './features/skills/Skills';
import { Contact } from './features/contact/Contact';

function App() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] font-sans selection:bg-[var(--accent-primary)] selection:text-white transition-colors duration-300">

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
