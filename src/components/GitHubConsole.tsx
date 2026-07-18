"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { GitPullRequest, GitFork, BookOpen, Star, Clock } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<any>;
}

const statsData: StatItem[] = [
  { label: "Projects Completed", value: 15, suffix: "+", icon: GitPullRequest },
  { label: "Technologies Learned", value: 12, suffix: "+", icon: BookOpen },
  { label: "Certificates Earned", value: 8, suffix: "", icon: Star },
  { label: "GitHub Repositories", value: 22, suffix: "", icon: GitFork },
  { label: "Coding Hours Logged", value: 2500, suffix: "+", icon: Clock },
];

const languageData = [
  { subject: "Python", A: 95, fullMark: 100 },
  { subject: "JavaScript/TS", A: 85, fullMark: 100 },
  { subject: "Java", A: 75, fullMark: 100 },
  { subject: "C / C++", A: 70, fullMark: 100 },
  { subject: "Databases", A: 80, fullMark: 100 },
  { subject: "CSS/HTML", A: 90, fullMark: 100 },
];

// Helper to generate contributions grid
const generateContributions = () => {
  const weeks = 28;
  const days = 7;
  const grid = [];
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      const val = Math.random();
      // 0: none, 1: low, 2: medium, 3: high, 4: very high
      let level = 0;
      if (val > 0.85) level = 4;
      else if (val > 0.65) level = 3;
      else if (val > 0.45) level = 2;
      else if (val > 0.25) level = 1;
      week.push(level);
    }
    grid.push(week);
  }
  return grid;
};

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps
    let animId: number;

    const update = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(start));
        animId = requestAnimationFrame(update);
      }
    };

    update();
    return () => cancelAnimationFrame(animId);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function GitHubConsole() {
  const { glow } = useThemeGlow();
  const [mounted, setMounted] = useState(false);
  const [contributions, setContributions] = useState<number[][]>([]);

  useEffect(() => {
    setMounted(true);
    setContributions(generateContributions());
  }, []);

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
  const themeFillMap = {
    cyan: "rgba(6, 182, 212, 0.4)",
    purple: "rgba(124, 58, 237, 0.4)",
    green: "rgba(34, 197, 94, 0.4)",
  };
  const themeStrokeMap = {
    cyan: "#06B6D4",
    purple: "#7C3AED",
    green: "#22C55E",
  };

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 0: return "bg-slate-900/60";
      case 1: return "bg-emerald-950/40";
      case 2: return "bg-emerald-800/50";
      case 3: return "bg-emerald-600/70 shadow-[0_0_6px_rgba(16,185,129,0.3)]";
      case 4: return "bg-emerald-400 shadow-[0_0_10px_#10B981]";
      default: return "bg-slate-900";
    }
  };

  return (
    <section
      id="analytics"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              [ANALYTICS: /TELEMETRY/GIT_LOG]
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
            METRICS & <span className={glowTextMap[glow]}>TELEMETRY</span>
          </h2>
        </div>

        {/* Counter Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={stat.label}
                className={`glass-panel holo-corner relative rounded border p-5 flex flex-col gap-2 bg-slate-900/20 text-center items-center justify-center ${glowBorderMap[glow]}`}
              >
                <div className="w-8 h-8 rounded-full border border-white/5 bg-slate-950 flex items-center justify-center text-cyan-400 mb-1">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                  {mounted ? <CountUp end={stat.value} /> : 0}
                  {stat.suffix}
                </div>
                <div className="font-mono text-[9px] text-slate-400 uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Double Dashboard: Heatmap & Radar Language Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* GitHub contributions simulator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 glass-panel holo-corner relative rounded border p-6 flex flex-col gap-6 bg-slate-900/10 ${glowBorderMap[glow]}`}
          >
            {/* Terminal Mock Header */}
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-white/5 pb-3">
              <span>CONSOLE: GIT_HEATMAP_MONITOR</span>
              <span className="text-emerald-400 animate-pulse">STATUS: ACTIVE</span>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-heading font-bold text-white text-base">
                GitHub Contribution Grid
              </h4>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Mock representation of automated repository activity diagnostics parsed over the last 28 weeks.
              </p>
            </div>

            {/* Heatmap Grid Layout */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-[3px] min-w-[320px]">
                {contributions.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-[3px]">
                    {week.map((level, dIndex) => (
                      <div
                        key={dIndex}
                        className={`w-3.5 h-3.5 rounded-[2px] transition-colors duration-300 ${getHeatmapColor(
                          level
                        )}`}
                        title={`Activity level: ${level}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend indicators */}
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-t border-white/5 pt-3">
              <span>INDEX: LESS</span>
              <div className="flex gap-1 items-center">
                <div className="w-2.5 h-2.5 rounded bg-slate-900" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-950/40" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-800/50" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-600/70" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-400" />
              </div>
              <span>MORE</span>
            </div>
          </motion.div>

          {/* Recharts Language Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 glass-panel holo-corner relative rounded border p-6 flex flex-col gap-6 bg-slate-900/10 ${glowBorderMap[glow]}`}
          >
            {/* Terminal Mock Header */}
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-white/5 pb-3">
              <span>DIAG: LANG_INDEX_RADAR</span>
              <span>INDEX: VERIFIED</span>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-heading font-bold text-white text-base">
                Language Usage Diagnosis
              </h4>
            </div>

            {/* Radar chart container */}
            <div className="w-full h-64 flex items-center justify-center font-mono text-[10px]">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={languageData}>
                    <PolarGrid stroke="rgba(255,255,255,0.05)" />
                    <PolarAngleAxis dataKey="subject" stroke="#94A3B8" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                    <Radar
                      name="Expertise"
                      dataKey="A"
                      stroke={themeStrokeMap[glow]}
                      fill={themeFillMap[glow]}
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-slate-400">Loading Recharts pipeline...</div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
