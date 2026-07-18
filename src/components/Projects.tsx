"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Camera, Compass, BarChart4, Hand, Play } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

interface Project {
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  icon: React.ComponentType<any>;
  github: string;
  demo: string;
  previewColor: string;
}

const projectsData: Project[] = [
  {
    title: "AI Smart Parking Management System",
    desc: "A computer vision-driven intelligent parking system analyzing live feeds to track and allocate parking slots automatically.",
    features: [
      "Real-time slot detection & tracking",
      "QR code routing for drivers",
      "Live analytics admin dashboard",
      "Camera feed vacancy indicators"
    ],
    tech: ["Python", "OpenCV", "YOLOv8", "Flask", "MongoDB"],
    icon: Camera,
    github: "https://github.com/baladevaraj/ai-smart-parking",
    demo: "https://ai-parking-demo.vercel.app",
    previewColor: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Student Result Analysis Console",
    desc: "An analytical compiler dashboard that ingests excel/csv data to perform statistical grades analytics and generate reports.",
    features: [
      "Dynamic Excel/CSV dataset upload",
      "High-fidelity data visualizations",
      "Automated reports compilation",
      "Student performance logs"
    ],
    tech: ["Python", "Flask", "Pandas", "Matplotlib", "Bootstrap"],
    icon: BarChart4,
    github: "https://github.com/baladevaraj/result-analyzer",
    demo: "https://result-analyzer.vercel.app",
    previewColor: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AR Hand Gesture Controller",
    desc: "A gesture recognition controller that maps hand coordinates to manipulate and control 3D meshes in virtual reality environments.",
    features: [
      "Multi-point hand skeleton tracking",
      "Interactive gesture templates",
      "3D canvas object translation",
      "Low latency camera execution"
    ],
    tech: ["Python", "OpenCV", "MediaPipe", "PyVista", "Numpy"],
    icon: Hand,
    github: "https://github.com/baladevaraj/ar-hand-gesture",
    demo: "https://ar-gesture-demo.vercel.app",
    previewColor: "from-green-500/20 to-cyan-500/20",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Map coords to rotations (-15 to 15 degrees)
    const rotX = -(y / (rect.height / 2)) * 12;
    const rotY = (x / (rect.width / 2)) * 12;
    setCoords({ x: rotY, y: rotX });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const IconComponent = project.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg)`,
        transition: isHovered ? "none" : "transform 0.5s ease",
      }}
      className="glass-panel holo-corner relative rounded border border-white/10 overflow-hidden flex flex-col h-full bg-slate-900/30 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group"
    >
      {/* Top Banner (Terminal bar) */}
      <div className="flex justify-between items-center px-4 py-2.5 bg-black/60 border-b border-white/5 font-mono text-[9px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>PROJECT_CONTAINER</span>
        </span>
        <span>SHA256: EXEC_BIN</span>
      </div>

      {/* Styled Project Graphic Preview */}
      <div className={`h-40 bg-gradient-to-br ${project.previewColor} relative flex items-center justify-center border-b border-white/5 overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-slate-950/40" />
        
        {/* Glowing holographic shape inside preview */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-black/50 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-transform duration-500 group-hover:scale-110">
          <IconComponent className="w-8 h-8 text-cyan-400" />
        </div>

        {/* Binary watermarks */}
        <div className="absolute bottom-2 right-4 font-mono text-[8px] text-white/10 select-none">
          01100110 01101001
        </div>
      </div>

      {/* Project Details */}
      <div className="p-5 flex-1 flex flex-col gap-4">
        <h3 className="font-heading font-bold text-lg md:text-xl text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-xs text-slate-400 leading-relaxed font-sans">
          {project.desc}
        </p>

        {/* Feature lines */}
        <div className="flex flex-col gap-1.5 mt-2">
          {project.features.map((feat) => (
            <div key={feat} className="flex items-start gap-2 font-mono text-[10px] text-slate-300">
              <span className="text-cyan-400">&gt;</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] font-mono text-cyan-300/80 bg-cyan-950/30 border border-cyan-500/20 px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions (Buttons) */}
      <div className="grid grid-cols-2 border-t border-white/5 font-mono text-xs text-center bg-black/30">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 border-r border-white/5 text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          <span>REPOSIT_DB</span>
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all font-semibold"
        >
          <ExternalLink className="w-3.5 h-3.5 animate-pulse" />
          <span>RUN_LIVE</span>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const { glow } = useThemeGlow();

  const glowTextMap = {
    cyan: "text-cyan-400 drop-shadow-[0_0_8px_#06B6D4]",
    purple: "text-purple-400 drop-shadow-[0_0_8px_#7C3AED]",
    green: "text-green-400 drop-shadow-[0_0_8px_#22C55E]",
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              [REPOSITORY: /USER/PROJECTS]
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
            COMPLETED <span className={glowTextMap[glow]}>PROJECTS</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={project.title}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
