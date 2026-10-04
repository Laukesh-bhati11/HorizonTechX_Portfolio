import React from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import GitHubDashboard from './components/GitHubDashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Dynamic Ambient Glow & Tech Grid Mesh */}
      <BackgroundEffect />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <GitHubDashboard />
        <Contact />
      </main>

      {/* Minimal Glass Footer */}
      <Footer />
    </div>
  );
}
