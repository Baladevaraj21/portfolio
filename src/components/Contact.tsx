"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, RefreshCw, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { useThemeGlow } from "./ThemeContext";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactDetails = [
  { label: "Email Node", val: "baladevaraj.work@gmail.com", href: "mailto:baladevaraj.work@gmail.com", icon: Mail },
  { label: "Comms Link", val: "+91 98765 43210", href: "tel:+919876543210", icon: Phone },
  { label: "GitHub Core", val: "github.com/baladevaraj", href: "https://github.com/baladevaraj", icon: GithubIcon },
  { label: "LinkedIn Net", val: "linkedin.com/in/baladevaraj", href: "https://linkedin.com/in/baladevaraj", icon: LinkedinIcon },
  { label: "Coordinates", val: "Bengaluru, Karnataka, India", href: "#", icon: MapPin },
];

export default function Contact() {
  const { glow } = useThemeGlow();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "connecting" | "sending" | "success" | "error">("idle");
  const [logs, setLogs] = useState<string[]>([]);

  const glowTextMap = {
    cyan: "text-cyan-400 drop-shadow-[0_0_8px_#06B6D4]",
    purple: "text-purple-400 drop-shadow-[0_0_8px_#7C3AED]",
    green: "text-green-400 drop-shadow-[0_0_8px_#22C55E]",
  };
  const glowBorderMap = {
    cyan: "border-cyan-500/20 focus:border-cyan-400/70",
    purple: "border-purple-500/20 focus:border-purple-400/70",
    green: "border-green-500/20 focus:border-green-400/70",
  };

  const addLog = (msg: string, delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
        resolve();
      }, delay);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required data packets.");
      return;
    }

    setStatus("connecting");
    setLogs([]);

    await addLog("INITIATING DATABASE CONNECTION HANDSHAKE...", 400);
    await addLog("CONNECTING TO MONGODB REPLICA SET...", 500);
    
    setStatus("sending");
    await addLog("ESTABLISHING SECURED SSL/TLS CHANNEL...", 400);
    await addLog("ENCRYPTING PAYLOAD WITH AES-256...", 300);
    await addLog("TRANSMITTING PAYLOAD DATA TO API/CONTACT NODE...", 600);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        await addLog("TRANSMISSION SUCCESSFUL! PAYLOAD INGESTED BY MONGODB.", 300);

        // Trigger celebration
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#06B6D4", "#7C3AED", "#22C55E"],
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        await addLog(`CRITICAL ERROR: ${data.error || "Transmission rejected"}`, 100);
      }
    } catch (err: any) {
      setStatus("error");
      await addLog(`CONNECTION FAILED: ${err.message || "Network error"}`, 100);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              [COMMUNICATIONS: /CONTACT/NODE]
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
            ESTABLISH <span className={glowTextMap[glow]}>CONNECTION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Contact Console Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="font-mono text-xs text-slate-400">
              [SELECT COMS NODE FOR INBOUND SIGNALS]
            </div>

            <div className="flex flex-col gap-4">
              {contactDetails.map((node) => {
                const Icon = node.icon;
                return (
                  <a
                    key={node.label}
                    href={node.href}
                    target={node.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-panel holo-corner relative rounded border border-white/10 p-4 flex items-center gap-4 hover:border-cyan-400/40 hover:bg-slate-900/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded border border-white/5 bg-slate-950 flex items-center justify-center text-cyan-400 group-hover:text-purple-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col font-mono">
                      <span className="text-[9px] text-slate-500 uppercase tracking-widest">{node.label}</span>
                      <span className="text-xs text-slate-300 group-hover:text-white transition-colors">{node.val}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side: Glassmorphism form & Terminal console output */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <form onSubmit={handleSubmit} className="glass-panel holo-corner relative rounded border border-white/10 p-6 md:p-8 bg-slate-900/10 flex flex-col gap-5">
              {/* Form title */}
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-white/5 pb-3 mb-1">
                <span>COMMS_SHELL: INPUT_DATA_PACKETS</span>
                <span className="text-cyan-400">SECURITY: TLS_ACTIVE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5 font-mono text-xs">
                  <label className="text-slate-400 uppercase tracking-wider">Name packet *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === "connecting" || status === "sending"}
                    placeholder="Enter name..."
                    className={`bg-slate-950/80 border text-white placeholder-slate-600 rounded px-4 py-3 outline-none transition-all ${glowBorderMap[glow]}`}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5 font-mono text-xs">
                  <label className="text-slate-400 uppercase tracking-wider">Email packet *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === "connecting" || status === "sending"}
                    placeholder="Enter email..."
                    className={`bg-slate-950/80 border text-white placeholder-slate-600 rounded px-4 py-3 outline-none transition-all ${glowBorderMap[glow]}`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5 font-mono text-xs">
                <label className="text-slate-400 uppercase tracking-wider">Subject header</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  disabled={status === "connecting" || status === "sending"}
                  placeholder="Enter transmission subject..."
                  className={`bg-slate-950/80 border text-white placeholder-slate-600 rounded px-4 py-3 outline-none transition-all ${glowBorderMap[glow]}`}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 font-mono text-xs">
                <label className="text-slate-400 uppercase tracking-wider">Signal Payload *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === "connecting" || status === "sending"}
                  placeholder="Type message details here..."
                  className={`bg-slate-950/80 border text-white placeholder-slate-600 rounded px-4 py-3 outline-none resize-none transition-all ${glowBorderMap[glow]}`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "connecting" || status === "sending"}
                className={`w-full py-4 rounded bg-cyan-500 hover:bg-cyan-400 font-mono text-xs font-bold text-black tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all`}
              >
                {(status === "connecting" || status === "sending") ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>TRANSMITTING PACKETS...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT PAYLOAD</span>
                  </>
                )}
              </button>
            </form>

            {/* Terminal logs console */}
            <AnimatePresence>
              {(status !== "idle" || logs.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="glass-panel holo-corner relative rounded border border-cyan-500/20 bg-slate-950 p-4 font-mono text-[10px]"
                >
                  <div className="text-slate-500 uppercase tracking-wider border-b border-white/5 pb-2 mb-2">
                    CONNECTION MONITOR LOGS
                  </div>
                  <div className="flex flex-col gap-1.5 h-28 overflow-y-auto pr-1">
                    {logs.map((log, index) => (
                      <div key={index} className="text-emerald-400 leading-tight">
                        {log}
                      </div>
                    ))}
                    {status === "connecting" && (
                      <div className="text-cyan-400 animate-pulse">CONNECTING...</div>
                    )}
                    {status === "sending" && (
                      <div className="text-purple-400 animate-pulse">TRANSMITTING DATA PACKETS...</div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
