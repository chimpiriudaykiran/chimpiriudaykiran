"use client";

import { motion } from "framer-motion";
import { portfolioData, Skill } from "@/data/portfolioData";

const About: React.FC = () => (
    <section id="about" className="py-20 bg-base-100">
        <div className="container mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-10"
            >
                About Me
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-center max-w-3xl mx-auto"
            >
                {portfolioData.about}
            </motion.p>
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
                                    <span key={item} className="badge badge-outline">{item}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default About;