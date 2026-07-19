"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Database, BrainCircuit, Wrench, Sparkles, Shield, Layers } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

interface Skill {
  name: string;
  level: number; // percentage
  category: "prog" | "front" | "back" | "db" | "auth" | "tools" | "aitools";
}

const skillsData: Skill[] = [
  // Programming
  { name: "Python", level: 90, category: "prog" },
  { name: "JavaScript", level: 85, category: "prog" },
  { name: "HTML5", level: 90, category: "prog" },
  { name: "CSS3", level: 85, category: "prog" },
  
  // Frontend
  { name: "React", level: 90, category: "front" },
  { name: "Vite", level: 85, category: "front" },
  
  // Backend
  { name: "Node.js", level: 80, category: "back" },
  { name: "Express.js", level: 85, category: "back" },
  
  // Database
  { name: "MongoDB", level: 80, category: "db" },
  
  // Authentication
  { name: "JWT (JSON Web Token)", level: 85, category: "auth" },
  
  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },

  // AI Tools
  { name: "ChatGPT", level: 95, category: "aitools" },
  { name: "GitHub Copilot", level: 90, category: "aitools" },
  { name: "Gemini", level: 95, category: "aitools" },
];

const categories = [
  { id: "all", label: "All Sectors", icon: Sparkles },
  { id: "prog", label: "Programming", icon: Code2 },
  { id: "front", label: "Frontend", icon: Globe },
  { id: "back", label: "Backend", icon: Layers },
  { id: "db", label: "Database", icon: Database },
  { id: "auth", label: "Authentication", icon: Shield },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "aitools", label: "AI Tools", icon: BrainCircuit },
];

export default function Skills() {
  const { glow } = useThemeGlow();
  const [selectedCat, setSelectedCat] = useState("all");

  const glowTextMap = {
    cyan: "text-cyan-400 drop-shadow-[0_0_8px_#06B6D4]",
    purple: "text-purple-400 drop-shadow-[0_0_8px_#7C3AED]",
    green: "text-green-400 drop-shadow-[0_0_8px_#22C55E]",
  };
  const glowBorderMap = {
    cyan: "border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]",
    purple: "border-purple-500/30 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(124,58,237,0.15)]",
    green: "border-green-500/30 hover:border-green-400/60 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]",
  };
  const ringColorMap = {
    cyan: "#06B6D4",
    purple: "#7C3AED",
    green: "#22C55E",
  };

  const filteredSkills = selectedCat === "all" 
    ? skillsData 
    : skillsData.filter(s => s.category === selectedCat);

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden"
    >
      <div className="flex flex-col gap-12">
        {/* Section Title */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              [SYSTEM_SKILLS_DIRECTORY]
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
            TECHNICAL <span className={glowTextMap[glow]}>COMPETENCY</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 font-mono text-xs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded border transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? "bg-slate-900 border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]" 
                    : "border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const radius = 32;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.level / 100) * circumference;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={skill.name}
                className={`glass-panel holo-corner relative rounded p-5 flex flex-col items-center justify-center gap-4 border transition-all duration-300 text-center ${glowBorderMap[glow]}`}
              >
                {/* SVG Progress Ring */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-20 h-20 transform -rotate-90">
                    {/* Background Ring */}
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      fill="transparent"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="4"
                    />
                    {/* Glowing Progress Ring */}
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      fill="transparent"
                      stroke={ringColorMap[glow]}
                      strokeWidth="4"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                      style={{
                        filter: `drop-shadow(0 0 4px ${ringColorMap[glow]})`,
                      }}
                    />
                  </svg>
                  {/* Skill level text overlay */}
                  <span className="absolute font-mono text-xs font-semibold text-white">
                    {skill.level}%
                  </span>
                </div>

                {/* Skill Name */}
                <div className="font-mono text-xs tracking-wider font-semibold text-slate-200">
                  {skill.name}
                </div>

                {/* Sub corner brackets styling wrapper */}
                <div className="hidden"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
