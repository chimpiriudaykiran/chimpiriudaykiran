import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Knobs from "@/components/Knobs";
import { motion } from "framer-motion";

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
