"use client";

import React, { useEffect, useRef, useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  color: string;
}

export default function CursorTrail() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const sparkIdCounter = useRef(0);

  useEffect(() => {
    // Detect if mobile/touch device
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorRef.current.x = clientX;
      cursorRef.current.y = clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
      }

      // Add sparks when moving
      const canvas = canvasRef.current;
      if (canvas && Math.random() > 0.4) {
        const color = Math.random() > 0.5 ? "#06B6D4" : "#7C3AED";
        sparksRef.current.push({
          id: sparkIdCounter.current++,
          x: clientX,
          y: clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          life: 1.0,
          color,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth ring follow animation
    let animId: number;
    const updateRing = () => {
      const cursor = cursorRef.current;
      cursor.rx += (cursor.x - cursor.rx) * 0.12;
      cursor.ry += (cursor.y - cursor.ry) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${cursor.rx - 16}px, ${cursor.ry - 16}px)`;
      }

      // Draw sparks canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const sparks = sparksRef.current;

          // Update & draw sparks
          for (let i = sparks.length - 1; i >= 0; i--) {
            const s = sparks[i];
            s.x += s.vx;
            s.y += s.vy;
            s.life -= 0.03;

            if (s.life <= 0) {
              sparks.splice(i, 1);
              continue;
            }

            ctx.fillStyle = s.color;
            ctx.globalAlpha = s.life;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.globalAlpha = 1.0;
        }
      }

      animId = requestAnimationFrame(updateRing);
    };

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    updateRing();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[99999]"
      />
      {/* Floating Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[100000] shadow-[0_0_10px_#06B6D4] transition-transform duration-75 ease-out"
      />
      {/* Lagging Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-500/50 pointer-events-none z-[100000] shadow-[0_0_6px_rgba(124,58,237,0.3)] transition-transform duration-100 ease-out flex items-center justify-center"
      >
        <div className="w-1 h-1 rounded-full bg-cyan-400/20" />
      </div>
    </>
  );
}
