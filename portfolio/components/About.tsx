"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData, Skill } from "@/data/portfolioData";

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section ref={ref} id="about" className="py-20  relative overflow-hidden">
      <motion.div
        className="absolute bg-base-300 z-0"
        style={{ y: backgroundY }}
      />
            {/* Background Image with Parallax */}
            {/* <motion.div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50" />
      </motion.div> */}
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">{portfolioData.about}</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skill: Skill, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card bg-base-200 shadow-xl hover:scale-105 transition-transform"
            >
              <div className="card-body">
                <h3 className="card-title text-primary">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item: string) => (
                    <span key={item} className="badge badge-outline">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;