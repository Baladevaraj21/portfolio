import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Timeline from "@/components/Timeline";
import Internship from "@/components/Internship";
import Certificates from "@/components/Certificates";
import GitHubConsole from "@/components/GitHubConsole";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import SpaceBackground from "@/components/SpaceBackground";
import CursorTrail from "@/components/CursorTrail";

export default function Home() {
  return (
    <>
      {/* Background Interactive neural particles */}
      <SpaceBackground />
      
      {/* Glowing cursor trail particles */}
      <CursorTrail />
      
      {/* Transparent blur sticky Header */}
      <Navbar />
      
      {/* OS Page Sections */}
      <main className="relative flex flex-col flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Timeline />
        <Internship />
        <Certificates />
        <GitHubConsole />
        <Contact />
      </main>
      
      {/* OS Footer & digital waves */}
      <Footer />
      
      {/* Floating AI HUD control panel */}
      <AIAssistant />
    </>
  );
}
