import React from 'react';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Dark Base Canvas */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Ambient Radial Mesh Orbs */}
      {/* 1. Cyan Glow Orb (Top Left) */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full opacity-20 filter blur-[120px] pointer-events-none animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 80%)'
        }}
      />

      {/* 2. Purple / Violet Glow Orb (Right Center) */}
      <div 
        className="absolute top-[35%] -right-[12%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full opacity-20 filter blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 80%)'
        }}
      />

      {/* 3. Deep Blue Glow Orb (Bottom Left) */}
      <div 
        className="absolute -bottom-[10%] left-[15%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full opacity-15 filter blur-[150px] pointer-events-none animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.7) 0%, rgba(6, 182, 212, 0.2) 60%, transparent 80%)'
        }}
      />

      {/* Subtle Developer Tech Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_85%)]" />
      
      {/* Subtle Vignette for Edge Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(3,7,18,0.7)_100%)]" />

      {/* Static Floating Ambient Particles / Tech Dots */}
      <div className="absolute inset-0 opacity-25">
        <span className="absolute top-[18%] left-[22%] w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]" />
        <span className="absolute top-[42%] left-[82%] w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_10px_#8b5cf6]" />
        <span className="absolute top-[75%] left-[30%] w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]" />
        <span className="absolute top-[88%] left-[70%] w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_6px_#06b6d4]" />
        <span className="absolute top-[30%] left-[65%] w-1 h-1 bg-indigo-300 rounded-full shadow-[0_0_6px_#6366f1]" />
        <span className="absolute top-[60%] left-[12%] w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_10px_#38bdf8]" />
      </div>
    </div>
  );
}
