"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, ArrowRight, Download, Mail } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

const roles = [
  "AI Developer",
  "Python Developer",
  "Full Stack Developer",
  "Computer Science Engineer",
  "Machine Learning Enthusiast",
];

export default function Hero() {
  const { glow } = useThemeGlow();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Theme-specific glow configurations
  const themeGlowMap = {
    cyan: "shadow-[0_0_20px_rgba(6,182,212,0.3)] border-cyan-400/50",
    purple: "shadow-[0_0_20px_rgba(124,58,237,0.3)] border-purple-400/50",
    green: "shadow-[0_0_20px_rgba(34,197,94,0.3)] border-green-400/50",
  };
  const themeTextMap = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    green: "text-green-400",
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 md:px-12 overflow-hidden"
    >
      {/* 3D Perspective Moving Grid Background Floor */}
      <div className="absolute inset-0 w-full h-full perspective-grid overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 w-full h-[60%] grid-floor animate-grid-move" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent" />
      </div>

      {/* Cyberpunk Scanline overlays */}
      <div className="crt-overlay" />
      <div className="scanline-light animate-scanline" />

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text and Greeting */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Diagnostic telemetry tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900/60 border border-cyan-500/20 w-fit">
            <Shield className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              STATUS: ACCESS_GRANTED // SECURITY_LEVEL: CLEAR
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-mono text-sm md:text-base tracking-widest text-slate-400">
              [SYSTEM_GREETING_INITIALIZED]
            </h2>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight">
              Hello, I&apos;m{" "}
              <span className={`bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.15)]`}>
                Baladeva Raj
              </span>
            </h1>
          </div>

          {/* Typing Area */}
          <div className="h-16 flex items-center">
            <span className="font-mono text-lg md:text-2xl lg:text-3xl text-slate-300">
              &gt;{" "}
              <span className={`font-semibold ${themeTextMap[glow]}`}>
                {displayText}
              </span>
              <span className="animate-pulse font-bold text-cyan-400">|</span>
            </span>
          </div>

          <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
            I am a Computer Science Engineer and AI Developer dedicated to building high-fidelity machine learning applications, deep neural networks, and interactive full-stack dashboards. Welcome to my OS portfolio environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 font-mono text-xs">
            <button
              onClick={() => handleScrollTo("projects")}
              className={`flex items-center gap-2 px-6 py-3.5 rounded bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] group cursor-pointer`}
            >
              <span>EXPLORE PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => {
                alert("Downloading Baladeva_Raj_Resume.pdf...");
              }}
              className="flex items-center gap-2 px-6 py-3.5 rounded bg-slate-900/80 text-white border border-white/10 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 group cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>DOWNLOAD RESUME</span>
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center gap-2 px-6 py-3.5 rounded bg-[#0F172A]/50 text-slate-400 border border-slate-800 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>CONTACT</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Rotating Rings and Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
            {/* Rotating Cyan Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-[spin_20s_linear_infinite]" />

            {/* Rotating Purple Ring (Reverse) */}
            <div className="absolute inset-4 rounded-full border border-double border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]" />

            {/* Glowing Spotlight effect */}
            <div className={`absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-600/10 blur-xl transition-all duration-500 ${themeGlowMap[glow].split(" ")[0]}`} />

            {/* Floating Glassmorphism Avatar Frame */}
            <div className="relative w-56 h-56 rounded-full glass-panel flex items-center justify-center overflow-hidden border border-white/15 p-2 shadow-inner">
              <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" />
              {/* Futuristic Holographic SVG representation of AI Node Brain */}
              <svg
                viewBox="0 0 100 100"
                className="w-40 h-40 relative z-10 text-cyan-400/70"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="animate-[spin_40s_linear_infinite]" />
                {/* Brain / Connections Nodes */}
                <circle cx="50" cy="25" r="3" fill="#7C3AED" className="animate-pulse" />
                <circle cx="30" cy="40" r="3" fill="#06B6D4" />
                <circle cx="70" cy="40" r="3" fill="#06B6D4" />
                <circle cx="35" cy="65" r="3" fill="#06B6D4" />
                <circle cx="65" cy="65" r="3" fill="#06B6D4" />
                <circle cx="50" cy="80" r="3" fill="#7C3AED" />
                <circle cx="50" cy="50" r="5" fill="#2563EB" className="animate-ping" />
                <circle cx="50" cy="50" r="4" fill="#2563EB" />
                
                {/* Connection lines */}
                <line x1="50" y1="25" x2="30" y2="40" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="25" x2="70" y2="40" stroke="currentColor" strokeWidth="0.5" />
                <line x1="30" y1="40" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="70" y1="40" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="35" y2="65" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="65" y2="65" stroke="currentColor" strokeWidth="0.5" />
                <line x1="35" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
                <line x1="65" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              {/* Tech Stats Inside Avatar */}
              <div className="absolute bottom-6 font-mono text-[9px] text-slate-400 bg-black/60 px-2 py-0.5 rounded border border-white/10 z-20">
                BALADEVA.AI
              </div>
            </div>

            {/* Corner Indicators */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
          </div>
        </motion.div>
      </div>

      {/* Floating control telemetry labels */}
      <div className="absolute bottom-6 left-6 hidden md:block font-mono text-[9px] text-slate-500">
        <div>LATENCY: 12ms // PACKET_LOSS: 0%</div>
        <div>GRAVITY: INERTIAL_DRIFT_NORMAL</div>
      </div>
      <div className="absolute bottom-6 right-6 hidden md:block font-mono text-[9px] text-slate-500">
        <div>SECTOR: 0x05 // ENGINE: THREE_CANVAS</div>
      </div>
    </section>
  );
}
