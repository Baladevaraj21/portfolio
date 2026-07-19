"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle, BrainCircuit, Code, Terminal, Sparkles, BookOpen, ChevronRight } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

const techBadges = [
  { name: "React", glowColor: "group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.4)]" },
  { name: "JavaScript", glowColor: "group-hover:border-yellow-400 group-hover:text-yellow-400 group-hover:shadow-[0_0_12px_rgba(234,179,8,0.4)]" },
  { name: "Node.js", glowColor: "group-hover:border-green-500 group-hover:text-green-400 group-hover:shadow-[0_0_12px_rgba(34,197,94,0.4)]" },
  { name: "Express.js", glowColor: "group-hover:border-slate-400 group-hover:text-slate-200 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]" },
  { name: "MongoDB", glowColor: "group-hover:border-emerald-500 group-hover:text-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.4)]" },
  { name: "Python", glowColor: "group-hover:border-blue-400 group-hover:text-blue-400 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]" }
];

const learningTimeline = [
  { topic: "Artificial Intelligence", desc: "Neural networks, ML algorithms, computer vision pipelines" },
  { topic: "AI Productivity Tools", desc: "Automating workflows with LLMs, Copilots, and prompts" },
  { topic: "Digital Marketing", desc: "SEO, conversion optimization, search & content strategies" },
  { topic: "UI/UX Design", desc: "Figma wireframes, usability paradigms, responsive interface layouts" },
  { topic: "Modern Web Development", desc: "Next.js App Router, SSR, performance tuning, animations" }
];

export default function Achievements() {
  const { glow } = useThemeGlow();

  const glowTextMap = {
    cyan: "text-cyan-400 drop-shadow-[0_0_8px_#06B6D4]",
    purple: "text-purple-400 drop-shadow-[0_0_8px_#7C3AED]",
    green: "text-green-400 drop-shadow-[0_0_8px_#22C55E]",
  };
  const glowBorderMap = {
    cyan: "border-cyan-500/20 hover:border-cyan-400/50",
    purple: "border-purple-500/20 hover:border-purple-400/50",
    green: "border-green-500/20 hover:border-green-400/50",
  };
  const glowIndicatorMap = {
    cyan: "bg-cyan-400 shadow-[0_0_8px_#06B6D4]",
    purple: "bg-purple-400 shadow-[0_0_8px_#7C3AED]",
    green: "bg-green-400 shadow-[0_0_8px_#22C55E]",
  };

  return (
    <section
      id="achievements"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              [LOG_SECTOR: /USER/ACHIEVEMENTS]
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl flex items-center gap-3">
            🏆 <span className={glowTextMap[glow]}>ACHIEVEMENTS</span>
          </h2>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Full-Stack Project Expo (Col-span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 glass-panel holo-corner relative rounded border bg-slate-900/10 p-6 md:p-8 flex flex-col gap-6 ${glowBorderMap[glow]}`}
          >
            {/* Terminal Top telemetry */}
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-white/5 pb-3">
              <span>MODULE: EXPO_EVENT_CONSOLE</span>
              <span>TYPE: FULL_STACK_APP</span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white flex items-center gap-2.5">
                <Terminal className="w-6 h-6 text-cyan-400 animate-pulse" />
                Expo – College Events
              </h3>
              <p className="text-xs md:text-sm text-slate-400 font-sans leading-relaxed">
                Designed and developed a complete Full Stack web application that centralizes inter-college event management for students and administrators.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="flex flex-col gap-3 mt-2">
              <span className="font-mono text-[10px] text-cyan-400/80 uppercase tracking-widest">
                [SYSTEM_HIGHLIGHTS]
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {[
                  "Student Dashboard",
                  "College Dashboard",
                  "Event Registration",
                  "Authentication using JWT",
                  "Certificate Upload",
                  "Student ID Upload",
                  "Responsive Design",
                  "Dark & Light Theme",
                  "MongoDB Database",
                  "REST API Development"
                ].map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400/90 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="flex flex-col gap-3 border-t border-white/5 pt-4">
              <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest">
                [TECH_STACK_STACK]
              </span>
              <div className="flex flex-wrap gap-2">
                {["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Axios", "Multer"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono text-cyan-300 bg-cyan-950/20 border border-cyan-500/25 px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Technology Badges & Learning Timeline (Col-span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Tech Badges Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`glass-panel holo-corner relative rounded border bg-slate-900/10 p-6 flex flex-col gap-5 ${glowBorderMap[glow]}`}
            >
              {/* Telemetry bar */}
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-white/5 pb-3">
                <span>CORE: FULL_STACK_BUILDER</span>
                <span className="text-emerald-400 animate-pulse">VERIFIED</span>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-heading font-bold text-white text-base">
                  Full Stack Deployment Matrix
                </h4>
                <p className="text-[11px] text-slate-400 font-sans">
                  Successfully engineered modern full-stack systems using:
                </p>
              </div>

              {/* Interactive Glowing Badges */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 mt-1">
                {techBadges.map((badge, idx) => (
                  <motion.div
                    key={badge.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`group flex items-center justify-center p-3 rounded border border-white/5 bg-slate-950/50 hover:bg-slate-900/30 text-xs font-mono font-semibold text-slate-300 transition-all duration-300 cursor-pointer ${badge.glowColor}`}
                  >
                    <Code className="w-3.5 h-3.5 mr-2 opacity-60 group-hover:opacity-100 group-hover:animate-pulse" />
                    {badge.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learning Timeline Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`glass-panel holo-corner relative rounded border bg-slate-900/10 p-6 flex flex-col gap-5 ${glowBorderMap[glow]}`}
            >
              {/* Telemetry bar */}
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-white/5 pb-3">
                <span>DIAG: COGNITIVE_UPGRADE</span>
                <span>STATUS: ACQUIRING</span>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-heading font-bold text-white text-base flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-purple-400" />
                  Continuous Learning Timeline
                </h4>
                <p className="text-[11px] text-slate-400 font-sans">
                  Active educational tracks and development specializations:
                </p>
              </div>

              {/* Mini Timeline layout */}
              <div className="relative pl-4 border-l border-white/10 flex flex-col gap-4 mt-2">
                {learningTimeline.map((item, idx) => (
                  <div key={item.topic} className="relative group">
                    {/* Glowing dot */}
                    <span className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border border-slate-950 ${glowIndicatorMap[glow]} transition-all duration-300 group-hover:scale-125`} />
                    
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.topic}
                      </span>
                      <span className="text-[10px] text-slate-400 leading-normal">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
