"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const Hero: React.FC = () => (
    <section id="home" className="hero min-h-screen bg-base-200 flex items-center justify-center">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
        >
            <h1 className="text-5xl md:text-6xl font-bold">Hello World, I am <span className="text-primary">{portfolioData.name}</span></h1>
            <p className="text-2xl mt-4">{portfolioData.intro}</p>
            <div className="mt-6 flex justify-center gap-4">
                <a href={portfolioData.linkedin} target="_blank" className="btn btn-outline">LinkedIn</a>
                <a href="/Resume.pdf" download className="btn btn-primary">Download Resume</a>
            </div>
        </motion.div>
    </section>
);

export default Hero;