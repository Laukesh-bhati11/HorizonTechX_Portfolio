import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Database, BrainCircuit, Rocket, Compass, CheckCircle, GraduationCap, MapPin, FileDown } from 'lucide-react';
import { personalInfo, aboutStats } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Academic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
        </div>

        {/* Large Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 sm:p-10 lg:p-12 border border-white/[0.1] bg-dark-900/60 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight inside card corner */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                <GraduationCap className="w-4 h-4" />
                <span>Dr. A. P. J. Abdul Kalam Technical University (AKTU), Lucknow</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Computer Science Engineer with an{' '}
                <span className="text-gradient-cyan-purple">AI & Practical Vision Perspective</span>.
              </h3>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {personalInfo.aboutText}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                {personalInfo.subIntro}
              </p>

              {/* Core Strengths Checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Computer Vision & OpenCV</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>MySQL Database Schemas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>DSA & Algorithmic Optimization</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Google AI Certified</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  download="Laukesh_Bhati_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/30 text-xs font-mono font-semibold transition-all hover:scale-105"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Full Resume</span>
                </a>
              </div>
            </div>

            {/* Statistics Grid (4 Key Highlights) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {aboutStats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]"
                >
                  <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors font-mono mb-1">
                    {stat.value}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-200 mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-400 line-clamp-2">
                      {stat.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
