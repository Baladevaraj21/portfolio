"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, BookOpen, BrainCircuit, Activity } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

const tabs = [
  { id: "bio", label: "SYS_BIO.log", icon: Terminal },
  { id: "edu", label: "EDU_LOG.dat", icon: BookOpen },
  { id: "ai", label: "AI_CORE.ini", icon: BrainCircuit },
];

export default function About() {
  const { glow } = useThemeGlow();
  const [activeTab, setActiveTab] = useState("bio");

  const glowBorderMap = {
    cyan: "border-cyan-500/30",
    purple: "border-purple-500/30",
    green: "border-green-500/30",
  };
  const glowTextMap = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    green: "text-green-400",
  };
  const glowBgMap = {
    cyan: "bg-cyan-500/10",
    purple: "bg-purple-500/10",
    green: "bg-green-500/10",
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${glowBgMap[glow]} animate-pulse`} />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              [FILE_DIRECTORY: /USER/INFO]
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
            SYSTEM DIAGNOSTICS:{" "}
            <span className={glowTextMap[glow]}>ABOUT ME</span>
          </h2>
        </div>

        {/* Console Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`glass-panel holo-corner relative rounded border ${glowBorderMap[glow]} overflow-hidden`}
        >
          {/* Console Header Bar */}
          <div className="flex justify-between items-center px-4 py-3 bg-black/50 border-b border-white/5 font-mono text-[10px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 font-semibold">BALADEVA_CORE_DUMP.sh</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>THREAD: ALIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[400px]">
            {/* Left Column: Console Sidebar Navigation */}
            <div className="lg:border-r border-white/5 bg-slate-950/40 p-4 flex flex-col gap-2 font-mono">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 px-2">
                INDEX FILES
              </div>
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded text-left text-xs transition-all ${
                      isSelected
                        ? glowBgMap[glow] + " " + glowTextMap[glow] + " border-l-2 border-current"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}

              <div className="mt-auto pt-6 text-[9px] text-slate-500 px-2">
                <div>HASH: 0x9AF03B</div>
                <div>INTEGRITY: SECURE</div>
              </div>
            </div>

            {/* Right Column: Console Details */}
            <div className="lg:col-span-3 p-6 md:p-8 flex flex-col gap-6 bg-slate-900/10 min-h-[300px]">
              {activeTab === "bio" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 font-mono text-sm leading-relaxed"
                >
                  <p className="text-cyan-400 font-bold text-base">&gt; CAT SYS_BIO.log</p>
                  <p className="text-white">
                    I am a Computer Science Engineering student who is deeply passionate about Software Engineering, Data Structures, and Algorithmic optimization. My coding journey started with general problem-solving, which quickly evolved into an obsession with creating modular, efficient systems.
                  </p>
                  <p className="text-slate-300">
                    Over the past few years, I have expanded my domain from simple scripting to full-stack applications. I look at code not just as instructions, but as digital architecture. I aim to create highly responsive, dynamic software that bridges human intuition with computing power.
                  </p>
                  <div className="mt-4 p-4 rounded border border-white/5 bg-black/30 text-xs flex flex-col gap-1.5">
                    <span className="text-cyan-400">OBJECTIVE:</span>
                    <span>To secure a challenging role as an AI / Full Stack Developer where I can apply my algorithms expertise, build premium production-grade applications, and architect intelligent solutions to solve real-world system issues.</span>
                  </div>
                </motion.div>
              )}

              {activeTab === "edu" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 font-mono text-sm leading-relaxed"
                >
                  <p className="text-cyan-400 font-bold text-base">&gt; VIEW EDU_LOG.dat</p>
                  
                  <div className="relative pl-6 border-l border-cyan-500/20 flex flex-col gap-6">
                    {/* Education Item 1 */}
                    <div className="relative">
                      <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4]" />
                      <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <h4 className="text-white font-bold text-base">Bachelor of Engineering in Computer Science</h4>
                        <span className="text-xs text-cyan-400/80 bg-slate-900 border border-cyan-500/25 px-2 py-0.5 rounded mt-1 md:mt-0 w-fit">2023 - Present</span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">Focusing on Algorithms, Systems Software, Database Management, and AI Architectures.</p>
                    </div>

                    {/* Education Item 2 */}
                    <div className="relative">
                      <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#7C3AED]" />
                      <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <h4 className="text-white font-bold text-base">Advanced AI & Machine Learning Specialization</h4>
                        <span className="text-xs text-purple-400/80 bg-slate-900 border border-purple-500/25 px-2 py-0.5 rounded mt-1 md:mt-0 w-fit">Extracurricular</span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">Deep dives into Neural Networks, Object Detection architectures (YOLOv8), and Computer Vision pipelines.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "ai" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 font-mono text-sm leading-relaxed"
                >
                  <p className="text-cyan-400 font-bold text-base">&gt; DUMP AI_CORE.ini</p>
                  <p className="text-white">
                    My core technical focus lies at the intersection of Machine Learning and Computer Vision. I am fascinated by neural networks and how computers perceive and interact with physical spaces.
                  </p>
                  <p className="text-slate-300">
                    By developing pipelines using OpenCV, MediaPipe, and YOLO, I build responsive user experiences that process visual feeds in real time. I believe that artificial intelligence should not just live behind API servers, but should be integrated into everyday tasks to solve concrete interface problems.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                    <div className="p-3 rounded border border-white/5 bg-slate-900/50 flex flex-col gap-1">
                      <span className="text-[10px] text-purple-400">VISION PIPELINE:</span>
                      <span className="text-xs text-white font-semibold">Real-time object tracking</span>
                    </div>
                    <div className="p-3 rounded border border-white/5 bg-slate-900/50 flex flex-col gap-1">
                      <span className="text-[10px] text-cyan-400">INTERACTIONS:</span>
                      <span className="text-xs text-white font-semibold">Gesture-driven UI controllers</span>
                    </div>
                    <div className="p-3 rounded border border-white/5 bg-slate-900/50 flex flex-col gap-1 col-span-2 md:col-span-1">
                      <span className="text-[10px] text-emerald-400">ML INFERENCE:</span>
                      <span className="text-xs text-white font-semibold">Local YOLOv8 deployments</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
