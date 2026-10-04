import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  ShieldAlert, 
  ScanFace, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Database,
  ArrowRight,
  Fingerprint,
  Radio,
  MapPin,
  CloudSun,
  AlertTriangle,
  Code2,
  X,
  FileCode,
  FolderUp,
  Layers,
  Check
} from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';

// Custom LeetCode Icon
function LeetCodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.223-1.799-5.498-1.554-7.423.51L4.85 9.206c-.15.16-.28.33-.39.51L7.545 6.42 12.52 1.38A1.374 1.374 0 0 0 13.483 0zm4.907 7.224a1.38 1.38 0 0 0-1.38 1.38v8.792a1.38 1.38 0 1 0 2.76 0V8.604a1.38 1.38 0 0 0-1.38-1.38z" />
    </svg>
  );
}

// Bespoke Interactive Visual Previews for Each Project
function ProjectVisualPreview({ project, onOpenModal }) {
  const [sosActive, setSosActive] = useState(false);
  const [scanPulse, setScanPulse] = useState(true);

  if (project.id === '01') {
    // Face Recognition Attendance System
    return (
      <div className="w-full h-full min-h-[300px] p-5 rounded-2xl bg-dark-950/90 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/30 transition-all">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full filter blur-2xl pointer-events-none" />

        {/* Titlebar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <ScanFace className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-slate-300 font-semibold">
              OpenCV Biometric Video Stream
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            128-d Vector Lock
          </span>
        </div>

        {/* Biometric Viewport Center */}
        <div className="my-auto py-3 flex flex-col items-center justify-center">
          <div className="relative w-44 h-44 rounded-2xl border-2 border-dashed border-cyan-400/60 p-2 flex flex-col items-center justify-center bg-cyan-500/[0.03] overflow-hidden">
            {/* Animated Scanning Line */}
            <motion.div 
              animate={{ y: [-70, 70, -70] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#22d3ee] z-10"
            />

            {/* Corner brackets */}
            <span className="absolute top-1 left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400" />
            <span className="absolute top-1 right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400" />
            <span className="absolute bottom-1 left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400" />
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400" />

            <Fingerprint className="w-16 h-16 text-cyan-400/70" />
            
            <div className="mt-2 text-center">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                MATCH: 99.1% CONFIDENCE
              </span>
              <div className="text-[11px] font-mono text-white font-bold mt-1">
                Laukesh Bhati (Roll #22)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Log Info */}
        <div className="flex items-center justify-between text-[11px] font-mono p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <span className="text-slate-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            MySQL Attendance Logged
          </span>
          <span className="text-cyan-400 font-semibold">Status: Present</span>
        </div>
      </div>
    );
  }

  if (project.id === '02') {
    // SmartPath Security Dashboard (A.M.A.R.I.)
    return (
      <div className="w-full h-full min-h-[300px] p-5 rounded-2xl bg-dark-950/90 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group-hover:border-purple-500/30 transition-all">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full filter blur-2xl pointer-events-none" />

        {/* Titlebar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Radio className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-slate-300 font-semibold">
              A.M.A.R.I. TomTom GIS Telemetry
            </span>
          </div>
          <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20 flex items-center gap-1">
            <CloudSun className="w-3 h-3 text-amber-400" />
            28°C Clear
          </span>
        </div>

        {/* Interactive GIS Dashboard Simulation */}
        <div className="my-auto py-2 space-y-3">
          {/* Safe Spots Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="truncate">
                <div className="text-[10px] text-slate-400">Nearest Police</div>
                <div className="text-white font-semibold truncate">Alpha-1 Stn (0.4 km)</div>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="truncate">
                <div className="text-[10px] text-slate-400">Emergency Care</div>
                <div className="text-white font-semibold truncate">Metro Hospital (1.1 km)</div>
              </div>
            </div>
          </div>

          {/* SOS Distress Trigger Simulation */}
          <div className="p-3 rounded-xl bg-rose-500/[0.06] border border-rose-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className={`w-5 h-5 ${sosActive ? 'text-rose-400 animate-bounce' : 'text-rose-400'}`} />
              <div>
                <div className="text-xs font-bold text-white">Emergency SOS Dispatch</div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {sosActive ? 'Alert Transmitted with GPS Coordinates' : 'One-Tap Panic Trigger Available'}
                </div>
              </div>
            </div>
            <button
              onClick={() => setSosActive(!sosActive)}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                sosActive 
                  ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]' 
                  : 'bg-rose-500/80 hover:bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]'
              }`}
            >
              {sosActive ? 'DISPATCHED' : 'TRIGGER SOS'}
            </button>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="flex items-center justify-between text-[11px] font-mono p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <span className="text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            TomTom Routing Active
          </span>
          <span className="text-purple-300">Safety Index: 9.4/10</span>
        </div>
      </div>
    );
  }

  if (project.id === '03') {
    // FraudShield AI
    return (
      <div className="w-full h-full min-h-[300px] p-5 rounded-2xl bg-dark-950/90 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/30 transition-all">
        {/* Titlebar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <ShieldAlert className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-slate-300 font-semibold">FraudShield Intelligence Engine</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            SHAP Explainable
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 my-3">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="text-[10px] text-slate-400 font-mono">Risk Level</div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5">LOW (0.02)</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="text-[10px] text-slate-400 font-mono">Inference</div>
            <div className="text-sm font-bold text-cyan-400 mt-0.5">38ms</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="text-[10px] text-slate-400 font-mono">Precision</div>
            <div className="text-sm font-bold text-purple-400 mt-0.5">98.4%</div>
          </div>
        </div>

        {/* SHAP Bars */}
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>Tx Velocity Delta</span>
            <span className="text-cyan-400">+0.42</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[85%]" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>Location Anomaly</span>
            <span className="text-purple-400">+0.18</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-purple-400 to-indigo-500 h-full w-[45%]" />
          </div>
        </div>
      </div>
    );
  }

  // LeetCode / DSA Visualizer
  return (
    <div className="w-full h-full min-h-[300px] p-5 rounded-2xl bg-dark-950/90 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group-hover:border-amber-500/30 transition-all">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <LeetCodeIcon className="w-4 h-4 text-amber-400" />
          </span>
          <span className="text-xs font-mono text-slate-300 font-semibold">Algorithmic Problem Solving</span>
        </div>
        <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
          Java & Python
        </span>
      </div>

      <div className="my-auto p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3 font-mono text-xs">
        <div className="flex justify-between items-center text-slate-300">
          <span>LeetCode Handle:</span>
          <span className="text-amber-400 font-bold">Laukesh_bhati22</span>
        </div>
        <div className="space-y-1.5 text-[11px] text-slate-400">
          <div className="flex justify-between">
            <span className="text-emerald-400">● Easy (Fundamentals)</span>
            <span>Arrays, HashMaps, Two Pointers</span>
          </div>
          <div className="flex justify-between">
            <span className="text-amber-400">● Medium (Core Structures)</span>
            <span>Binary Trees, DFS/BFS, Heaps</span>
          </div>
          <div className="flex justify-between">
            <span className="text-rose-400">● Advanced (Optimization)</span>
            <span>Dynamic Programming, Graphs</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
        <span>Foundation: Clean Code & Big-O</span>
        <span className="text-amber-400 font-semibold">Continuous Practice</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAmariGuide, setShowAmariGuide] = useState(false);

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical Engineering Deliverables</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            End-to-end software applications demonstrating Computer Vision, real-time API integrations, database architectures, and algorithmic problem solving.
          </p>

          {/* Quick Action: How to Upload AMARI Guide Banner */}
          <div className="mt-6">
            <button
              onClick={() => setShowAmariGuide(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono transition-all hover:scale-105"
            >
              <FolderUp className="w-4 h-4 text-purple-400" />
              <span>A.M.A.R.I: Which folder should I upload? (Click for Instructions)</span>
            </button>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 sm:p-8 lg:p-10 border border-white/[0.1] bg-dark-900/50 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Project Narrative */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                  <div>
                    {/* Project Number & Category Badge */}
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                        PROJECT #{project.id}
                      </span>
                      <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.period && (
                        <span className="text-xs font-mono text-slate-400">
                          ({project.period})
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <div className="text-sm font-mono text-cyan-400/90 mt-1 mb-3">
                      {project.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Bullet Points from Resume */}
                    {project.bullets && (
                      <ul className="space-y-2 mb-5">
                        {project.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300/90 leading-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Technology Badges */}
                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-cyan-400/40 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Links & Architecture Modal Trigger */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.07]">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all hover:scale-105"
                    >
                      <Code2 className="w-4 h-4" />
                      <span>View Architecture & Code</span>
                    </button>

                    {project.id === '04' ? (
                      <a
                        href={personalInfo.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-xs font-mono font-medium transition-colors"
                      >
                        <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                        <span>LeetCode Profile</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-xs font-mono font-medium transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Repo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Bespoke Visual Preview */}
                <div className="lg:col-span-6">
                  <ProjectVisualPreview project={project} onOpenModal={() => setSelectedProject(project)} />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Architecture & Code Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-2xl w-full p-6 sm:p-8 bg-dark-900 border border-white/20 rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <FileCode className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-white">{selectedProject.title}</h4>
                    <p className="text-xs font-mono text-cyan-400">{selectedProject.badge}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Architecture Key Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {selectedProject.architecturePreview?.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                    <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                    <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Code Implementation Snippet */}
              <div className="mb-6">
                <div className="text-xs font-mono text-slate-300 mb-2 flex items-center justify-between">
                  <span>Architecture & Core Logic Snippet:</span>
                  <span className="text-[10px] text-emerald-400">Verified Implementation</span>
                </div>
                <pre className="p-4 rounded-xl bg-dark-950 border border-white/10 text-xs font-mono text-cyan-200 overflow-x-auto whitespace-pre leading-relaxed">
                  {selectedProject.architecturePreview?.codeSnippet}
                </pre>
              </div>

              {/* Close Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-mono font-medium transition-colors"
                >
                  Close Modal
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* AMARI Upload Guide Modal */}
      <AnimatePresence>
        {showAmariGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-2xl w-full p-6 sm:p-8 bg-dark-900 border border-purple-500/30 rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <FolderUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">A.M.A.R.I: Which Folder to Upload?</h4>
                    <p className="text-xs font-mono text-purple-300">Complete Upload & Hosting Guide</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAmariGuide(false)}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-purple-500/[0.08] border border-purple-500/20">
                  <h5 className="font-bold text-white mb-1 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    Exact Folder on your Computer:
                  </h5>
                  <p className="font-mono text-xs text-purple-200 break-all">
                    C:\Users\DELL\Desktop\A.M.A.R.I-main
                  </p>
                  <p className="mt-1 text-slate-400 text-xs">
                    Upload the <strong>contents inside this folder</strong> (where <code className="text-cyan-300">index.html</code>, <code className="text-cyan-300">home.html</code>, <code className="text-cyan-300">style.css</code>, and <code className="text-cyan-300">WEB-INF</code> are located).
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-bold text-white text-xs mb-1">Option 1: Uploading to GitHub</div>
                    <p className="text-xs text-slate-400 mb-2">Run these commands inside your terminal:</p>
                    <pre className="p-3 rounded-lg bg-dark-950 text-cyan-300 font-mono text-[11px] overflow-x-auto">
{`cd "C:\\Users\\DELL\\Desktop\\A.M.A.R.I-main"
git init
git add .
git commit -m "Initial commit of A.M.A.R.I"
git branch -M main
git remote add origin https://github.com/Laukesh-bhati11/A.M.A.R.I.git
git push -u origin main`}
                    </pre>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-bold text-white text-xs mb-1">Option 2: Deploying to Netlify / Vercel (Free Live Demo)</div>
                    <p className="text-xs text-slate-400">
                      Go to <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-cyan-400 underline">netlify.com/drop</a> and drag-and-drop the entire <strong>A.M.A.R.I-main</strong> folder. Since <code>index.html</code> is directly inside it, your website will be live in 10 seconds!
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-bold text-white text-xs mb-1">Option 3: Running with Java Servlets (Tomcat)</div>
                    <p className="text-xs text-slate-400">
                      Copy the folder or export as <code>amari.war</code> into your Apache Tomcat's <code>webapps/</code> folder.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-white/10 mt-5">
                <button
                  onClick={() => setShowAmariGuide(false)}
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold transition-colors"
                >
                  Got It!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
