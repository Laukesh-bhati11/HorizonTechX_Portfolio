import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  FileDown, 
  Terminal, 
  Code2, 
  Cpu, 
  Layers, 
  CheckCircle2,
  ExternalLink,
  MapPin,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom LeetCode Icon
function LeetCodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.223-1.799-5.498-1.554-7.423.51L4.85 9.206c-.15.16-.28.33-.39.51L7.545 6.42 12.52 1.38A1.374 1.374 0 0 0 13.483 0zm4.907 7.224a1.38 1.38 0 0 0-1.38 1.38v8.792a1.38 1.38 0 1 0 2.76 0V8.604a1.38 1.38 0 0 0-1.38-1.38z" />
    </svg>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Beacon Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/[0.08] border border-cyan-500/20 backdrop-blur-md mb-5 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-cyan-300">
                {personalInfo.badge}
              </span>
            </div>

            {/* Small Monospace Greeting */}
            <div className="text-sm sm:text-base font-mono text-cyan-400 font-medium mb-3 flex items-center gap-2 flex-wrap">
              <span>Hi, I'm {personalInfo.name}</span>
              <span className="w-8 h-[1px] bg-cyan-500/50 inline-block" />
              <span className="text-xs text-slate-400 flex items-center gap-1 font-sans">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Dominant Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] mb-6">
              Engineering{' '}
              <span className="text-gradient-cyan-purple">Intelligent Systems</span>{' '}
              with Code, Vision & AI.
            </h1>

            {/* Sub-Headline / Description */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Laukesh_Bhati_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white font-medium text-sm border border-cyan-500/30 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons & Quick Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] w-full sm:w-auto flex-wrap">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
                Direct Profiles:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub: Laukesh-bhati11"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.09] text-slate-300 hover:text-cyan-300 border border-white/[0.07] hover:border-cyan-500/30 transition-all hover:scale-105 flex items-center gap-1.5 text-xs font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: laukesh-bhati"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.09] text-slate-300 hover:text-blue-400 border border-white/[0.07] hover:border-blue-500/30 transition-all hover:scale-105 flex items-center gap-1.5 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  title="LeetCode: Laukesh_bhati22"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.09] text-slate-300 hover:text-amber-400 border border-white/[0.07] hover:border-amber-500/30 transition-all hover:scale-105 flex items-center gap-1.5 text-xs font-mono"
                >
                  <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">LeetCode</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  title={`Email: ${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.09] text-slate-300 hover:text-purple-400 border border-white/[0.07] hover:border-purple-500/30 transition-all hover:scale-105 flex items-center gap-1.5 text-xs font-mono"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Holographic Avatar & Developer Entity Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Backlight Glow behind card */}
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-cyan-500/25 via-blue-600/20 to-purple-600/25 opacity-70 filter blur-xl -z-10 group-hover:opacity-100 transition duration-1000 animate-pulse-slow" />

            {/* Main Frosted Glass Card Container */}
            <div className="glass-card p-6 sm:p-7 relative border border-white/[0.12] bg-dark-900/70 backdrop-blur-2xl">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>laukesh.bhati.dev</span>
                </div>
              </div>

              {/* Profile Avatar & Identity Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative group/avatar shrink-0">
                  {/* Glowing Radar Ring */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 blur-sm group-hover/avatar:opacity-100 transition-opacity" />
                  <img 
                    src={personalInfo.avatarUrl} 
                    alt={personalInfo.name}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534972195531-a756b11297d5?w=200&auto=format&fit=crop&q=80";
                    }}
                  />
                  <span className="absolute -bottom-1 -right-1 p-1 rounded-full bg-dark-950 border border-cyan-400/60 shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                    <span className="block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </span>
                </div>

                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase mb-1">
                    Verified Engineer
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    B.Tech CSE • AKTU Lucknow
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      OpenCV & Vision
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      Full-Stack
                    </span>
                  </div>
                </div>
              </div>

              {/* Code Snippet Box with Syntax Accents */}
              <div className="rounded-xl bg-dark-950/80 border border-white/[0.06] p-4 font-mono text-xs text-slate-300 space-y-2 mb-5">
                <div className="text-slate-500 flex items-center justify-between text-[11px]">
                  <span>// Core Competencies</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live System
                  </span>
                </div>
                <div className="space-y-1">
                  <p><span className="text-purple-400">const</span> <span className="text-cyan-300">stack</span> = {`{`}</p>
                  <p className="pl-4 text-slate-300">primary: [<span className="text-amber-300">'Java'</span>, <span className="text-amber-300">'Python'</span>, <span className="text-amber-300">'C'</span>],</p>
                  <p className="pl-4 text-slate-300">vision: [<span className="text-cyan-300">'OpenCV'</span>, <span className="text-cyan-300">'Facial Recognition'</span>],</p>
                  <p className="pl-4 text-slate-300">web: [<span className="text-emerald-300">'JavaScript'</span>, <span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Flask'</span>],</p>
                  <p className="pl-4 text-slate-300">database: [<span className="text-blue-300">'MySQL'</span>, <span className="text-blue-300">'MongoDB'</span>]</p>
                  <p>{`}`};</p>
                </div>
              </div>

              {/* Highlights & Metrics Badges */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Specialty</div>
                    <div className="text-white font-semibold text-xs">Biometrics & Vision</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Core Focus</div>
                    <div className="text-white font-semibold text-xs">DSA & Smart Systems</div>
                  </div>
                </div>
              </div>

              {/* Floating Glass Pill Badges attached to card */}
              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Ready for Opportunities
                </span>
                <span className="text-cyan-400/80 hover:text-cyan-300 flex items-center gap-1">
                  <span>Greater Noida, UP</span>
                </span>
              </div>
            </div>

            {/* Small Floating Glass Accent Badge */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl glass-pill bg-dark-900/90 border border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] items-center gap-2 animate-float">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span className="text-xs font-semibold text-slate-200">
                Google AI Certified 2026
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
