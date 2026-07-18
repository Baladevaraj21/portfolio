"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeGlow = "cyan" | "purple" | "green";

interface ThemeContextType {
  glow: ThemeGlow;
  setGlow: (glow: ThemeGlow) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [glow, setGlow] = useState<ThemeGlow>("cyan");

  useEffect(() => {
    // Sync with HTML body or root data attributes if needed
    const body = document.body;
    body.setAttribute("data-glow", glow);
  }, [glow]);

  return (
    <ThemeContext.Provider value={{ glow, setGlow }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeGlow() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeGlow must be used within a ThemeProvider");
  }
  return context;
}
