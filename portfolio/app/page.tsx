"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";

// Dynamically import Knobs so it loads only on the client
const Knobs = dynamic(() => import("@/components/Knobs"), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Knobs />
    </>
  );
}
