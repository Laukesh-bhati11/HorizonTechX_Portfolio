import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  GraduationCap, 
  Users, 
  Trophy, 
  Laptop, 
  BrainCircuit, 
  Briefcase,
  Calendar,
  Building2,
  Tag
} from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

function getTimelineIcon(iconName) {
  switch (iconName) {
    case 'GraduationCap':
      return <GraduationCap className="w-5 h-5 text-cyan-400" />;
    case 'Users':
      return <Users className="w-5 h-5 text-purple-400" />;
    case 'Trophy':
      return <Trophy className="w-5 h-5 text-amber-400" />;
    case 'Laptop':
      return <Laptop className="w-5 h-5 text-blue-400" />;
    case 'Sparkles':
      return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
    case 'Briefcase':
      return <Briefcase className="w-5 h-5 text-emerald-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-cyan-400" />;
  }
}

export default function Journey() {
  return (
    <section id="journey" className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Journey
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
          <p className="mt-4 text-slate-400 max-w-xl text-sm sm:text-base">
            Chronological progression of academic milestones, hands-on software development, competitive hackathon involvement, and continuous AI/ML exploration.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 md:pl-0">
          
          {/* Glowing Center / Left Timeline Line */}
          <div 
            className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 opacity-30 shadow-[0_0_12px_rgba(6,182,212,0.5)]" 
            aria-hidden="true" 
          />

          <div className="space-y-12">
            {journeyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Node Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 -translate-y-1.5 md:translate-y-0 w-8 h-8 rounded-full bg-dark-950 border-2 border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.6)] flex items-center justify-center z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-60" />
                    <span className="w-2 h-2 rounded-full bg-cyan-300 absolute" />
                  </div>

                  {/* Card Container (Left or Right on desktop) */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-10 md:pl-0">
                    <div className="glass-card p-6 sm:p-7 border border-white/[0.08] bg-dark-900/40 hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 shadow-glass-sm group">
                      
                      {/* Period Badge & Icon */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:border-cyan-500/30 transition-colors">
                          {getTimelineIcon(item.icon)}
                        </div>
                      </div>

                      {/* Title & Role */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mt-1 mb-3">
                        <span>{item.role}</span>
                        <span>•</span>
                        <span className="text-purple-300">{item.organization}</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300/90 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
