import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Laptop, BookOpen, Bot, Award, ArrowUpRight } from 'lucide-react';
import { achievements } from '../data/portfolioData';

function getAchievementIcon(iconName) {
  switch (iconName) {
    case 'Trophy':
      return <Trophy className="w-6 h-6 text-amber-400" />;
    case 'Laptop':
      return <Laptop className="w-6 h-6 text-cyan-400" />;
    case 'BookOpen':
      return <BookOpen className="w-6 h-6 text-blue-400" />;
    case 'Bot':
      return <Bot className="w-6 h-6 text-purple-400" />;
    default:
      return <Award className="w-6 h-6 text-cyan-400" />;
  }
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors & Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Activities
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
          <p className="mt-4 text-slate-400 max-w-xl text-sm sm:text-base">
            Recognitions, active community initiatives, and technical milestones driven by curiosity and problem solving.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 border border-white/[0.08] bg-dark-900/40 hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 shadow-glass-sm group flex flex-col justify-between"
            >
              <div>
                {/* Top Bar: Icon + Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all">
                    {getAchievementIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300/90 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tag / Pillar */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Core Impact:</span>
                <span className="text-xs font-mono font-medium text-purple-300">
                  {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
