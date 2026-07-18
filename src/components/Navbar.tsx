"use client";

import React, { useEffect, useState } from "react";
import { Cpu, Terminal, Radio, Volume2, VolumeX, Menu, X } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certificates", id: "certificates" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { glow } = useThemeGlow();
  const [activeSection, setActiveSection] = useState("home");
  const [time, setTime] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Glow theme classes
  const glowTextMap = {
    cyan: "text-cyan-400 drop-shadow-[0_0_8px_#06B6D4]",
    purple: "text-purple-400 drop-shadow-[0_0_8px_#7C3AED]",
    green: "text-green-400 drop-shadow-[0_0_8px_#22C55E]",
  };
  const glowBorderMap = {
    cyan: "border-cyan-500/30",
    purple: "border-purple-500/30",
    green: "border-green-500/30",
  };

  useEffect(() => {
    // Live clock update
    const updateClock = () => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const mins = String(date.getMinutes()).padStart(2, "0");
      const secs = String(date.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${mins}:${secs}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    // Scroll spy
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (id === "resume") {
      // Simulate Resume download
      alert("Resume compilation process initialized... Downloading Baladeva_Raj_Resume.pdf");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      {/* Top Telemetry / Status bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-1 bg-black/40 text-[10px] font-mono border-b border-white/5 text-slate-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow shadow-[0_0_6px_#10B981]" />
            <span>SYS: ONLINE</span>
          </div>
          <div>|</div>
          <div className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span>CORE: AI-OS v2.4.0</span>
          </div>
          <div>|</div>
          <div className="flex items-center gap-1">
            <Radio className="w-3 h-3 text-purple-400 animate-pulse" />
            <span>AI SCANNER: ACTIVE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="tracking-widest">
            UTC TIME: {time || "00:00:00"}
          </div>
          <div>|</div>
          <button 
            onClick={() => setIsMuted(!isMuted)} 
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3 h-3 text-red-400" />
                <span>AUDIO: OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3 h-3 text-emerald-400 animate-bounce" />
                <span>AUDIO: ON</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo("home")}>
          <div className={`w-8 h-8 rounded border flex items-center justify-center transition-all duration-300 ${glowBorderMap[glow]} bg-slate-900`}>
            <Terminal className={`w-4 h-4 transition-all duration-300 ${glowTextMap[glow]}`} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-wider leading-none">
              BALADEVA RAJ
            </span>
            <span className="text-[9px] font-mono text-cyan-400/80 uppercase tracking-widest mt-0.5">
              CS Engineer / AI Dev
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-mono text-xs uppercase tracking-wider relative py-1.5 transition-all duration-300 ${
                activeSection === item.id 
                  ? glowTextMap[glow] + " font-bold" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_8px_#06B6D4]" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed top-[57px] left-0 w-full bg-[#050816]/95 border-b border-cyan-500/20 py-6 px-8 flex flex-col gap-4 font-mono z-40 backdrop-blur-xl animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left text-sm uppercase py-2 border-b border-white/5 transition-all ${
                activeSection === item.id ? glowTextMap[glow] + " font-bold" : "text-slate-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
