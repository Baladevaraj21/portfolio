"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

export default function Footer() {
  const { glow } = useThemeGlow();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const glowTextMap = {
    cyan: "text-cyan-400 drop-shadow-[0_0_8px_#06B6D4]",
    purple: "text-purple-400 drop-shadow-[0_0_8px_#7C3AED]",
    green: "text-green-400 drop-shadow-[0_0_8px_#22C55E]",
  };

  return (
    <footer className="relative bg-black/60 border-t border-white/5 pt-12 pb-8 px-6 md:px-12 mt-auto overflow-hidden">
      {/* Animated Digital SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-full text-cyan-500/10"
        >
          <path
            d="M0,60 C150,90 350,30 500,60 C650,90 850,30 1000,60 C1150,90 1300,60 1400,60 L1400,120 L0,120 Z"
            className="fill-current animate-[wave_10s_ease-in-out_infinite]"
          />
          <path
            d="M0,60 C180,30 300,90 480,60 C660,30 780,90 960,60 C1140,30 1260,90 1440,60 L1440,120 L0,120 Z"
            className="fill-current text-purple-500/5 animate-[wave_15s_ease-in-out_infinite_reverse]"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs">
        {/* Left Side: Developer Info */}
        <div className="flex flex-col gap-1 text-center md:text-left text-slate-400">
          <div>
            DESIGNED & DEVELOPED BY{" "}
            <span className={`font-bold ${glowTextMap[glow]}`}>BALADEVA RAJ</span>
          </div>
          <div className="text-[10px] text-slate-600">
            © 2026 // ALL DIGITAL RIGHTS VERIFIED // SECURED VIA SHA-256
          </div>
        </div>

        {/* Center: Social Nodes */}
        <div className="flex gap-4">
          <a
            href="https://github.com/baladevaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded border border-white/10 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/baladevaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded border border-white/10 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:baladevaraj.work@gmail.com"
            className="w-8 h-8 rounded border border-white/10 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back-to-top */}
        <button
          onClick={handleBackToTop}
          className="flex items-center gap-2 px-3 py-2 rounded border border-white/10 bg-slate-950/80 text-slate-400 hover:text-white hover:border-cyan-400 transition-all duration-300 cursor-pointer group"
        >
          <span>SYS_TOP</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>

      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-100px); }
        }
      `}</style>
    </footer>
  );
}
