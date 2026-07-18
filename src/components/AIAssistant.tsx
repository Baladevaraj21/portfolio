"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Cpu, Send, Mic, Radio, CloudRain, Sun, Cloud, Thermometer, QrCode, Sliders } from "lucide-react";
import { useThemeGlow, ThemeGlow } from "./ThemeContext";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const botResponses: Record<string, string> = {
  parking: "AI Smart Parking Management System uses YOLOv8 & OpenCV. It detects occupied/vacant spots from cameras and serves QR-based navigation maps to users. Storage is backed by MongoDB.",
  result: "Student Result Analysis Console compiles excel/csv data to display statistical grids and graphs using Flask, Pandas, and Matplotlib. Cuts analysis time by 90%.",
  gesture: "AR Hand Gesture Controller uses MediaPipe hand landmark detection to translate coordinates. Uses PyVista for 3D render translation, enabling virtual mesh control.",
  skills: "Baladeva's skills: Python, Java, C, Web Development (HTML/CSS, JS, Django, Flask), Databases (MongoDB, MySQL), AI (OpenCV, MediaPipe, Machine Learning), Tools (Git, VS Code, Figma).",
  contact: "Transmit your packets in the Contact section, or direct signal via baladevaraj.work@gmail.com / +91 98765 43210.",
  default: "System listening. Ask me about: 'parking', 'result', 'gesture', 'skills', or 'contact'.",
};

export default function AIAssistant() {
  const { glow, setGlow } = useThemeGlow();
  const [isOpen, setIsOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "AI-OS assistant online. Ask me about my skills, projects, or contact info." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [weather, setWeather] = useState({ temp: 24, condition: "Partly Cloudy", code: "cloudy" });
  const chatEndRef = useRef<HTMLDivElement>(null);

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
  const glowBgMap = {
    cyan: "bg-cyan-500/10",
    purple: "bg-purple-500/10",
    green: "bg-green-500/10",
  };

  useEffect(() => {
    // Scroll chat to bottom
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    // Simulate minor weather diagnostics variation
    const interval = setInterval(() => {
      setWeather((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const temp = Math.max(18, Math.min(32, prev.temp + delta * 0.5));
        return { ...prev, temp: parseFloat(temp.toFixed(1)) };
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // User message
    const userMsg = text.trim().toLowerCase();
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputValue("");
    setIsTyping(true);

    // AI reply simulation
    setTimeout(() => {
      let replyText = botResponses.default;
      if (userMsg.includes("parking") || userMsg.includes("car")) {
        replyText = botResponses.parking;
      } else if (userMsg.includes("result") || userMsg.includes("analysis") || userMsg.includes("excel")) {
        replyText = botResponses.result;
      } else if (userMsg.includes("gesture") || userMsg.includes("hand") || userMsg.includes("ar")) {
        replyText = botResponses.gesture;
      } else if (userMsg.includes("skills") || userMsg.includes("technologies") || userMsg.includes("know")) {
        replyText = botResponses.skills;
      } else if (userMsg.includes("contact") || userMsg.includes("email") || userMsg.includes("call")) {
        replyText = botResponses.contact;
      }

      setMessages((prev) => [...prev, { sender: "ai", text: replyText }]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <>
      {/* Floating trigger HUD button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass-panel border border-cyan-400/40 flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-bounce hover:scale-105 transition-all"
      >
        <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
      </button>

      {/* Main OS HUD Drawer Control Center */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-[#050816]/95 border-l border-cyan-400/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col font-mono text-xs overflow-hidden backdrop-blur-xl">
          {/* HUD Header */}
          <div className="flex justify-between items-center px-5 py-4 bg-black/60 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
              <span className="font-heading font-extrabold text-sm uppercase tracking-wider text-white">
                HUD CONTROL CORE
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Body Scroll */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6 scrollbar-thin">
            {/* Widget 1: Theme Accents Controller */}
            <div className="p-4 rounded border border-white/5 bg-slate-900/20 flex flex-col gap-3">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                <span>GLOW CORE ACCENT</span>
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <button
                  onClick={() => setGlow("cyan")}
                  className={`py-2 rounded border cursor-pointer transition-all ${
                    glow === "cyan" ? "bg-cyan-500/20 border-cyan-400 text-cyan-400" : "border-white/10 text-slate-400"
                  }`}
                >
                  CYBER CYAN
                </button>
                <button
                  onClick={() => setGlow("purple")}
                  className={`py-2 rounded border cursor-pointer transition-all ${
                    glow === "purple" ? "bg-purple-500/20 border-purple-400 text-purple-400" : "border-white/10 text-slate-400"
                  }`}
                >
                  NEON PURPLE
                </button>
                <button
                  onClick={() => setGlow("green")}
                  className={`py-2 rounded border cursor-pointer transition-all ${
                    glow === "green" ? "bg-green-500/20 border-green-400 text-green-400" : "border-white/10 text-slate-400"
                  }`}
                >
                  MATRIX GREEN
                </button>
              </div>
            </div>

            {/* Widget 2: AI Chatbot Panel */}
            <div className="flex-1 flex flex-col min-h-[300px] border border-white/5 rounded bg-black/40 overflow-hidden">
              <div className="px-4 py-2 bg-slate-950 border-b border-white/5 flex justify-between items-center text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AI_CORE_COMS.sh</span>
                </span>
                <span className="text-emerald-500 animate-pulse">ONLINE</span>
              </div>

              {/* Message scroll logs */}
              <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 min-h-[180px]">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                    }`}
                  >
                    <span className="text-[8px] text-slate-500 mb-0.5">
                      {msg.sender === "user" ? "USER" : "AI_CORE"}
                    </span>
                    <div
                      className={`p-2.5 rounded border text-[11px] leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-slate-950 border-white/15 text-white"
                          : "bg-cyan-950/20 border-cyan-500/20 text-cyan-300"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-[9px] text-cyan-400/80 animate-pulse">
                    AI_CORE is writing output...
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat chips shortcuts */}
              <div className="px-3 py-2 border-t border-white/5 bg-slate-950/50 flex flex-wrap gap-1">
                <button
                  onClick={() => handleSend("Tell me about the smart parking system")}
                  className="text-[9px] text-slate-400 hover:text-white border border-white/10 px-2 py-0.5 rounded cursor-pointer"
                >
                  parking
                </button>
                <button
                  onClick={() => handleSend("List his skills")}
                  className="text-[9px] text-slate-400 hover:text-white border border-white/10 px-2 py-0.5 rounded cursor-pointer"
                >
                  skills
                </button>
                <button
                  onClick={() => handleSend("How can I contact him?")}
                  className="text-[9px] text-slate-400 hover:text-white border border-white/10 px-2 py-0.5 rounded cursor-pointer"
                >
                  contact
                </button>
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t border-white/5 bg-slate-950 flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                  placeholder="Send query input..."
                  className="flex-1 bg-black/60 border border-white/10 rounded px-3 py-2 outline-none text-white placeholder-slate-600"
                />
                
                {/* Voice Command Button UI (Mock) */}
                <button
                  onClick={() => {
                    alert("Voice analyzer initialized... Recording telemetry from device microphone (simulated).");
                  }}
                  className="p-2 rounded border border-white/10 hover:border-cyan-400/50 bg-slate-900 text-slate-400 hover:text-cyan-400 cursor-pointer animate-pulse"
                  title="Voice command input (UI only)"
                >
                  <Mic className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleSend(inputValue)}
                  className="p-2 bg-cyan-500 rounded text-black font-bold hover:bg-cyan-400 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Widget 3: Live Radar & Weather Diagnostic Side-by-Side */}
            <div className="grid grid-cols-2 gap-4">
              {/* Animated Radar Scanner */}
              <div className="p-4 rounded border border-white/5 bg-slate-900/20 flex flex-col items-center justify-center gap-3 text-center">
                <span className="text-[9px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>HUD_RADAR</span>
                </span>
                
                {/* Radar sweep */}
                <div className="relative w-24 h-24 rounded-full border border-cyan-500/20 flex items-center justify-center overflow-hidden radar-grid">
                  {/* Sweep arm */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent origin-center animate-radar rounded-full" />
                  {/* Blip dots */}
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4] top-6 left-12 animate-ping" />
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#7C3AED] bottom-8 right-6 animate-pulse" />
                </div>
                
                <span className="text-[8px] text-slate-400 font-mono">SECTORS_CLEARED</span>
              </div>

              {/* Weather Widget */}
              <div className="p-4 rounded border border-white/5 bg-slate-900/20 flex flex-col items-center justify-center gap-3 text-center">
                <span className="text-[9px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Thermometer className="w-3.5 h-3.5 text-purple-400" />
                  <span>SYS_WEATHER</span>
                </span>
                
                <div className="flex flex-col items-center gap-1">
                  <Cloud className="w-8 h-8 text-cyan-300 animate-pulse-slow" />
                  <div className="font-heading font-extrabold text-base text-white">
                    {weather.temp}°C
                  </div>
                  <div className="text-[8px] text-slate-400 uppercase tracking-wider">
                    {weather.condition}
                  </div>
                </div>
                
                <span className="text-[7px] text-slate-500 font-mono">BLR_COORDS // ASIA</span>
              </div>
            </div>

            {/* Widget 4: Portfolio QR Code */}
            <div className="p-4 rounded border border-white/5 bg-slate-900/20 flex items-center gap-4">
              <div className="p-2 border border-white/10 rounded bg-white text-black">
                <QrCode className="w-12 h-12" />
              </div>
              <div className="flex flex-col font-mono">
                <span className="text-[9px] text-slate-500 uppercase tracking-widest">PORTFOLIO QR</span>
                <span className="text-[10px] text-slate-300 font-bold mt-1">SCAN VIA PHONE</span>
                <span className="text-[8px] text-slate-500 mt-0.5">Quick address redirection</span>
              </div>
            </div>
          </div>

          {/* HUD Footer status */}
          <div className="px-5 py-3 bg-black border-t border-white/10 text-[9px] text-slate-500 flex justify-between items-center">
            <span>SECURED_CHANNEL_V3</span>
            <span>MEMORY: 124MB/512MB</span>
          </div>
        </div>
      )}
    </>
  );
}
