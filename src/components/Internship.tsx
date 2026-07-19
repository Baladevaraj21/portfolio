"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, Eye, X, Award, Cpu, QrCode, ShieldCheck } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

export default function Internship() {
  const { glow } = useThemeGlow();
  const [isOpen, setIsOpen] = useState(false);

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
  const glowBgMap = {
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <section
      id="internship"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              [TELEMETRY: /WORK/EXPERIENCE]
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
            PROFESSIONAL <span className={glowTextMap[glow]}>INTERNSHIP</span>
          </h2>
        </div>

        {/* Layout: Info Card + Certificate Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 glass-panel holo-corner relative rounded border bg-slate-900/10 p-6 md:p-8 flex flex-col gap-6 ${glowBorderMap[glow]}`}
          >
            {/* Terminal bar mock */}
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-white/5 pb-3">
              <span>NODE: SQE_UIUX_INTERN</span>
              <span>LOC: IN_TAMIL_NADU</span>
            </div>

            {/* Position info */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono border ${glowBgMap[glow]}`}>
                  ROLE: UI/UX DESIGN
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Stack Queue Education
                </span>
              </div>
              
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Professional Internship
              </h3>
            </div>

            {/* Telemetry info */}
            <div className="grid grid-cols-2 gap-4 font-mono text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>16 Dec 2025 – 30 Dec 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Salem, Tamil Nadu</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Completed a professional internship in UI/UX Design where I learned modern user interface design principles, user experience practices, wireframing, prototyping, responsive layouts, design thinking, and industry-standard development workflows while working in a collaborative environment.
            </p>
          </motion.div>

          {/* Right Column: Certificate Preview Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 glass-panel holo-corner relative rounded border bg-slate-900/10 p-6 flex flex-col justify-between ${glowBorderMap[glow]} group`}
          >
            {/* Terminal bar mock */}
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-white/5 pb-3">
              <span>ASSET: COMPLETION_CERT</span>
              <span className="text-emerald-400 animate-pulse">STATUS: DECRYPTABLE</span>
            </div>

            {/* Thumbnail preview */}
            <div className="relative border border-white/5 rounded bg-slate-950/80 p-5 my-4 flex flex-col items-center justify-center gap-3 overflow-hidden min-h-[160px]">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />

              <Award className="w-12 h-12 text-cyan-400/80 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
              <span className="font-mono text-[10px] text-slate-400 text-center tracking-wider">
                CERTIFICATE OF COMPLETION
              </span>
              <span className="text-[8px] font-mono text-slate-500 select-none uppercase tracking-widest">
                VERIFICATION ID: SQE-UIUX-2025-089
              </span>
            </div>

            {/* View Certificate Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="w-full py-3 rounded bg-slate-900 border border-white/10 hover:border-cyan-400/40 text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/5 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-inner"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW CERTIFICATE</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Holographic Certificate Decryption Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050816]/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel holo-corner relative rounded border border-cyan-400/30 bg-slate-950 p-6 md:p-8 max-w-2xl w-full flex flex-col gap-6 shadow-[0_0_40px_rgba(6,182,212,0.25)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded border border-cyan-500/20 bg-slate-900 flex items-center justify-center text-cyan-400">
                  <Award className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg md:text-xl text-white">
                    UI/UX Design Internship Certificate
                  </h3>
                  <span className="font-mono text-xs text-purple-400">
                    AUTHORITY: STACK QUEUE EDUCATION
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-slate-300">
                <div className="md:col-span-2 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase">RECIPIENT_NAME</span>
                    <span className="text-white font-bold text-sm">BALADEVA RAJ</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase">ROLE</span>
                    <span className="text-white font-bold">UI/UX DESIGN INTERN</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase">CREDENTIAL_HASH</span>
                    <span className="text-white font-bold">sha256:sqe_uiux_16122025_30122025_baladevaraj</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase">DURATION</span>
                    <span className="text-white font-bold">16 December 2025 – 30 December 2025</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase">STATUS</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 animate-spin" />
                      <span>CRYPTOGRAPHICALLY_VERIFIED_BY_STACKQUEUE</span>
                    </span>
                  </div>
                </div>

                {/* Verification Panel */}
                <div className="border border-white/5 rounded p-4 bg-slate-900/40 flex flex-col items-center justify-center gap-3">
                  <QrCode className="w-16 h-16 text-cyan-400/80 animate-pulse-slow" />
                  <div className="w-full h-3 bg-white/5 relative overflow-hidden rounded">
                    <div className="absolute top-0 bottom-0 left-0 bg-cyan-400 w-1/2 animate-[scanline_2s_linear_infinite]" />
                  </div>
                  <span className="text-[8px] text-slate-500">SCAN TO VERIFY</span>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-white/5 pt-4 text-[9px] font-mono text-slate-500 flex justify-between items-center">
                <span>SECURITY_CORE: AES_256</span>
                <span>DIGITAL_SIGNATURE: STACK_QUEUE_EDU</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
