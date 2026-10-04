import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Globe, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Terminal, 
  Cpu, 
  Server, 
  Layout, 
  BarChart3, 
  Eye, 
  GitBranch, 
  FileCode, 
  Send, 
  Check, 
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Helper to get matching icons
function getTechIcon(name) {
  switch (name) {
    case 'Python':
    case 'Java':
    case 'C/C++':
      return <Terminal className="w-5 h-5 text-cyan-400" />;
    case 'JavaScript':
      return <Code2 className="w-5 h-5 text-amber-300" />;
    case 'React':
      return <Layers className="w-5 h-5 text-cyan-400" />;
    case 'Flask':
      return <Server className="w-5 h-5 text-slate-200" />;
    case 'HTML5':
    case 'CSS3':
      return <Layout className="w-5 h-5 text-blue-400" />;
    case 'MySQL':
    case 'SQL':
      return <Database className="w-5 h-5 text-emerald-400" />;
    case 'Machine Learning':
    case 'Data Science':
      return <BrainCircuit className="w-5 h-5 text-purple-400" />;
    case 'NumPy':
    case 'Pandas':
      return <BarChart3 className="w-5 h-5 text-sky-400" />;
    case 'OpenCV':
      return <Eye className="w-5 h-5 text-cyan-400" />;
    case 'Scikit-learn':
      return <Cpu className="w-5 h-5 text-amber-400" />;
    case 'Git':
    case 'GitHub':
      return <GitBranch className="w-5 h-5 text-orange-400" />;
    case 'VS Code':
    case 'Jupyter':
      return <FileCode className="w-5 h-5 text-blue-400" />;
    case 'Postman':
      return <Send className="w-5 h-5 text-rose-400" />;
    default:
      return <Code2 className="w-5 h-5 text-cyan-400" />;
  }
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capabilities & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Tech Stack
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
          <p className="mt-4 text-slate-400 max-w-xl text-sm sm:text-base">
            Core programming languages, frameworks, AI/ML libraries and engineering tools I leverage to build robust digital solutions.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card p-6 sm:p-8 border border-white/[0.08] bg-dark-900/40"
            >
              {/* Category Titlebar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Code2 className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {category.skills.length} Technologies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300 transform hover:-translate-y-1 group shadow-sm hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)] cursor-default"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-2 rounded-lg bg-dark-950/80 border border-white/[0.08] group-hover:border-cyan-500/30 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all">
                        {getTechIcon(skill.name)}
                      </div>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {skill.category}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
