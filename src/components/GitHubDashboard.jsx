import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Github, 
  GitBranch, 
  GitCommit, 
  FolderGit2, 
  ArrowRight, 
  Terminal, 
  Flame, 
  CalendarDays,
  ExternalLink,
  Code2,
  CheckCircle2,
  Award
} from 'lucide-react';
import { codingStats, personalInfo } from '../data/portfolioData';

// Custom LeetCode Icon
function LeetCodeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.223-1.799-5.498-1.554-7.423.51L4.85 9.206c-.15.16-.28.33-.39.51L7.545 6.42 12.52 1.38A1.374 1.374 0 0 0 13.483 0zm4.907 7.224a1.38 1.38 0 0 0-1.38 1.38v8.792a1.38 1.38 0 1 0 2.76 0V8.604a1.38 1.38 0 0 0-1.38-1.38z" />
    </svg>
  );
}

export default function GitHubDashboard() {
  const [activeTab, setActiveTab] = useState('github');

  return (
    <section id="coding" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coding Metrics & Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            {codingStats.headline}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
          <p className="mt-4 text-slate-400 max-w-xl text-sm sm:text-base">
            {codingStats.subtext}
          </p>

          {/* Tab Switcher: GitHub vs LeetCode */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] mt-8">
            <button
              type="button"
              onClick={() => setActiveTab('github')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'github'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repositories</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('leetcode')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'leetcode'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LeetCodeIcon className="w-4 h-4 text-amber-400" />
              <span>LeetCode DSA Profile</span>
            </button>
          </div>
        </div>

        {/* Futuristic Dashboard Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-6 sm:p-8 lg:p-10 border border-white/[0.1] bg-dark-900/60 relative overflow-hidden"
        >
          {activeTab === 'github' ? (
            /* GITHUB DASHBOARD VIEW */
            <div>
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.07]">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white font-mono">
                        github.com/{codingStats.githubUsername}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        Active Contributor
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Open Source Software & Computer Vision Repositories
                    </p>
                  </div>
                </div>

                <a
                  href={codingStats.githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-200 border border-cyan-500/30 hover:border-cyan-400/60 font-semibold text-xs transition-all shadow-glass-sm group"
                >
                  <span>Visit GitHub Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Top Metrics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {codingStats.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
                  >
                    <div className="text-xs text-slate-400 font-mono mb-1">{metric.label}</div>
                    <div className="text-2xl font-bold font-mono text-white mb-0.5 text-gradient-cyan-purple">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">{metric.status}</div>
                  </div>
                ))}
              </div>

              {/* 2-Column Dashboard Body: Weekly Rhythm + Activity Stream */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Commit Rhythm Visualizer */}
                <div className="lg:col-span-6 p-5 rounded-2xl bg-dark-950/70 border border-white/[0.06] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <CalendarDays className="w-4 h-4 text-cyan-400" />
                      <span>Development Velocity (Weekly)</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                      High Consistency
                    </span>
                  </div>

                  {/* Frequency Bars */}
                  <div className="grid grid-cols-7 gap-2 items-end h-32 pt-4 px-2">
                    {codingStats.weeklyActivity.map((d) => (
                      <div key={d.day} className="flex flex-col items-center gap-2 h-full justify-end group">
                        <div
                          className="w-full rounded-t-lg bg-gradient-to-t from-cyan-500/60 to-purple-500 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                          style={{ height: `${(d.commits / 10) * 100}%` }}
                        />
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-cyan-300">
                          {d.day}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Python & Web Projects</span>
                    <span className="text-emerald-400">Weekly Commits Active</span>
                  </div>
                </div>

                {/* Right: Real Project Activity Logs */}
                <div className="lg:col-span-6 p-5 rounded-2xl bg-dark-950/70 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <GitCommit className="w-4 h-4 text-purple-400" />
                      <span>Recent Engineering Updates</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Main Branches</span>
                  </div>

                  <div className="space-y-3">
                    {codingStats.recentCommits.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/20 transition-colors"
                      >
                        <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                          <span className="text-cyan-300 font-semibold">{item.repo}</span>
                          <span className="text-slate-400">{item.time}</span>
                        </div>
                        <p className="text-xs text-slate-300 font-mono truncate">{item.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* LEETCODE DASHBOARD VIEW */
            <div>
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.07]">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                    <LeetCodeIcon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white font-mono">
                        leetcode.com/u/{codingStats.leetcodeUsername}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        Problem Solver
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Data Structures, Algorithms & Time Complexity Optimization
                    </p>
                  </div>
                </div>

                <a
                  href={codingStats.leetcodeProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-200 border border-amber-500/30 hover:border-amber-400/60 font-semibold text-xs transition-all shadow-glass-sm group"
                >
                  <span>Open LeetCode Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* LeetCode Topic Mastery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 font-mono">
                <div className="p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20">
                  <div className="text-emerald-400 font-bold text-sm mb-1 flex items-center justify-between">
                    <span>Fundamentals</span>
                    <span className="text-xs">Easy</span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans">
                    Arrays, Strings, Hash Tables, Two Pointers, Linked Lists.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/[0.05] border border-amber-500/20">
                  <div className="text-amber-400 font-bold text-sm mb-1 flex items-center justify-between">
                    <span>Core Structures</span>
                    <span className="text-xs">Medium</span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans">
                    Binary Search Trees, DFS / BFS Graph Traversals, Sliding Window.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-rose-500/[0.05] border border-rose-500/20">
                  <div className="text-rose-400 font-bold text-sm mb-1 flex items-center justify-between">
                    <span>Advanced Optimization</span>
                    <span className="text-xs">Hard</span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans">
                    Dynamic Programming, Memoization, Backtracking, Trie.
                  </p>
                </div>
              </div>

              {/* Languages & Principles */}
              <div className="p-5 rounded-2xl bg-dark-950/70 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-white font-bold">Languages Practiced:</div>
                    <div className="text-slate-400">Java (Primary OOP) • Python • C</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Emphasis on O(1) Space & O(N) Time Optimization</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
