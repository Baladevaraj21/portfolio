"use client";

import React from "react";
import { motion } from "framer-motion";
import { School, Terminal, Trophy, Award, Code2 } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

interface TimelineItem {
  year: string;
  title: string;
  sub: string;
  desc: string;
  icon: React.ComponentType<any>;
  side: "left" | "right";
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2023",
    title: "Computer Science Engineering Commencement",
    sub: "Academic Journey Foundation",
    desc: "Began Bachelor of Engineering in Computer Science. Focused on Object-Oriented Programming (Java/C++), Data Structures, and Discrete Mathematics.",
    icon: School,
    side: "left",
    color: "#06B6D4",
  },
  {
    year: "2024",
    title: "Computer Vision & Algorithms Research",
    sub: "Academic & Mini Projects",
    desc: "Pivoted interest to computer vision. Developed hand-tracking models using MediaPipe and integrated YOLOv8 object detection pipelines for custom dataset feeds.",
    icon: Code2,
    side: "right",
    color: "#7C3AED",
  },
  {
    year: "2024",
    title: "Hackathon Prototypes & Collaborations",
    sub: "Speed Programming Hackathons",
    desc: "Collaborated in multi-disciplinary teams to engineer fast-paced solutions. Engineered Flask and Django dashboards parsing data pipelines in under 36 hours.",
    icon: Trophy,
    side: "left",
    color: "#22C55E",
  },
  {
    year: "2025",
    title: "Advanced AI Specializations",
    sub: "Professional Credentials",
    desc: "Acquired certifications in Machine Learning algorithms, neural networks implementation, and MongoDB database management structures.",
    icon: Award,
    side: "right",
    color: "#F59E0B",
  },
  {
    year: "2026",
    title: "Full Stack AI OS Architecture",
    sub: "Present Core Competence",
    desc: "Synthesizing deep ML algorithms with premium frontend frameworks (Next.js, Tailwind, Framer Motion) to create immersive web applications.",
    icon: Terminal,
    side: "left",
    color: "#EC4899",
  },
];

export default function Timeline() {
  const { glow } = useThemeGlow();

  const glowTextMap = {
    cyan: "text-cyan-400 drop-shadow-[0_0_8px_#06B6D4]",
    purple: "text-purple-400 drop-shadow-[0_0_8px_#7C3AED]",
    green: "text-green-400 drop-shadow-[0_0_8px_#22C55E]",
  };
  const glowBorderMap = {
    cyan: "border-cyan-500/20",
    purple: "border-purple-500/20",
    green: "border-green-500/20",
  };
  const glowTrackMap = {
    cyan: "bg-cyan-500/30",
    purple: "bg-purple-500/30",
    green: "bg-green-500/30",
  };

  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              [TIMELINE: /USER/JOURNEY]
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
            DEVELOPMENT & <span className={glowTextMap[glow]}>MILESTONES</span>
          </h2>
        </div>

        {/* Timeline Core */}
        <div className="relative mt-8">
          {/* Vertical Track Line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 ${glowTrackMap[glow]}`} />

          <div className="flex flex-col gap-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Glowing Node on Track */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <span
                      className="w-5 h-5 rounded-full border-2 bg-slate-950 flex items-center justify-center animate-pulse"
                      style={{ borderColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                    </span>
                  </div>

                  {/* Empty space for other side on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className={`glass-panel holo-corner relative rounded border p-6 flex flex-col gap-3 bg-slate-900/20 hover:border-white/20 transition-all duration-300 ${glowBorderMap[glow]}`}>
                      {/* Terminal header mock */}
                      <div className="flex justify-between items-center text-[8px] font-mono text-slate-500 border-b border-white/5 pb-2">
                        <span>NODE: {item.year}_INIT</span>
                        <span>ADDR: 0x00{index}F</span>
                      </div>

                      {/* Header info */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded border flex items-center justify-center bg-slate-950"
                          style={{ borderColor: item.color + "30", color: item.color }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-white text-sm md:text-base leading-snug">
                            {item.title}
                          </h4>
                          <span className="font-mono text-[10px] text-cyan-400/80">
                            {item.sub}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed pl-11">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
