"use client";

import React, { useState } from "react";
import { motion as motionComponent, AnimatePresence as FramerAnimatePresence } from "framer-motion";
import { Award, Eye, X, ShieldAlert, Cpu, QrCode } from "lucide-react";
import { useThemeGlow } from "./ThemeContext";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  hash: string;
  category: string;
}

const certificatesData: Certificate[] = [
  {
    title: "AI & Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "November 2024",
    credentialId: "DL-908A7C6B",
    hash: "sha256:7a90...df8c",
    category: "Machine Learning",
  },
  {
    title: "Advanced Computer Vision Pipeline",
    issuer: "OpenCV University",
    date: "August 2024",
    credentialId: "CV-304D1B9A",
    hash: "sha256:9b12...ef03",
    category: "Computer Vision",
  },
  {
    title: "Database Developer Associate",
    issuer: "MongoDB Academy",
    date: "February 2025",
    credentialId: "MDB-556F4E2D",
    hash: "sha256:2d8f...bc9a",
    category: "Database",
  },
  {
    title: "Python Algorithms & Data Structures",
    issuer: "HackerRank Gold Badge",
    date: "April 2024",
    credentialId: "HR-GOLD-PY",
    hash: "sha256:5e0e...fa7d",
    category: "Algorithms",
  },
];

export default function Certificates() {
  const { glow } = useThemeGlow();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

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

  return (
    <section
      id="certificates"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              [ARCHIVE: /USER/CERTIFICATES]
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
            VERIFIED <span className={glowTextMap[glow]}>CREDENTIALS</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert, index) => (
            <motionComponent.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={cert.credentialId}
              onClick={() => setSelectedCert(cert)}
              className={`glass-panel holo-corner relative rounded border p-6 flex flex-col gap-4 bg-slate-900/30 cursor-pointer transition-all duration-300 ${glowBorderMap[glow]} group`}
            >
              {/* Certificate badge heading */}
              <div className="flex justify-between items-center text-[8px] font-mono text-slate-500">
                <span>SECTOR: CRED_0{index + 1}</span>
                <Award className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              </div>

              {/* Title & Info */}
              <div className="flex flex-col gap-1.5 flex-grow">
                <span className="font-mono text-[9px] text-purple-400 uppercase tracking-widest">
                  {cert.category}
                </span>
                <h3 className="font-heading font-bold text-white text-base group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <span className="font-mono text-xs text-slate-400 mt-1">
                  ISSUER: {cert.issuer}
                </span>
              </div>

              {/* Action Hover Trigger */}
              <div className="border-t border-white/5 pt-3 mt-2 flex justify-between items-center font-mono text-[9px] text-slate-500">
                <span>ID: {cert.credentialId}</span>
                <span className="flex items-center gap-1 text-cyan-400/80 group-hover:text-cyan-400">
                  <Eye className="w-3 h-3" />
                  <span>DECRYPT</span>
                </span>
              </div>
            </motionComponent.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Overlay Decryptor */}
      <FramerAnimatePresence>
        {selectedCert && (
          <motionComponent.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050816]/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedCert(null)}
          >
            {/* Holographic Certificate Layout Box */}
            <motionComponent.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel holo-corner relative rounded border border-cyan-400/30 bg-slate-950 p-6 md:p-8 max-w-2xl w-full flex flex-col gap-6 shadow-[0_0_40px_rgba(6,182,212,0.2)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
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
                    {selectedCert.title}
                  </h3>
                  <span className="font-mono text-xs text-purple-400">
                    AUTHORITY: {selectedCert.issuer}
                  </span>
                </div>
              </div>

              {/* Certificate Inner Layout Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-slate-300">
                {/* Col 1: Holographic stamp */}
                <div className="md:col-span-2 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase">CREDENTIAL_ID</span>
                    <span className="text-white font-bold">{selectedCert.credentialId}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase">VERIFICATION_HASH</span>
                    <span className="text-white font-bold">{selectedCert.hash}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase">DATE_OF_ISSUANCE</span>
                    <span className="text-white font-bold">{selectedCert.date}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase">STATUS</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 animate-spin" />
                      <span>CRYPTOGRAPHICALLY_VERIFIED</span>
                    </span>
                  </div>
                </div>

                {/* Col 2: Decorative QR & Barcode */}
                <div className="border border-white/5 rounded p-4 bg-slate-900/40 flex flex-col items-center justify-center gap-3">
                  <QrCode className="w-16 h-16 text-cyan-400/80 animate-pulse-slow" />
                  <div className="w-full h-3 bg-white/5 relative overflow-hidden rounded">
                    <div className="absolute top-0 bottom-0 left-0 bg-cyan-400 w-1/2 animate-[scanline_2s_linear_infinite]" />
                  </div>
                  <span className="text-[8px] text-slate-500">SCAN TO VERIFY</span>
                </div>
              </div>

              {/* Bottom Decorative footer */}
              <div className="border-t border-white/5 pt-4 text-[9px] font-mono text-slate-500 flex justify-between items-center">
                <span>SECURITY_CORE: AES_256</span>
                <span>DIGITAL_SIGNATURE: BALADEVA_RAJ</span>
              </div>
            </motionComponent.div>
          </motionComponent.div>
        )}
      </FramerAnimatePresence>
    </section>
  );
}
