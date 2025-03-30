"use client";

import { motion } from "framer-motion";
import { portfolioData, Experience as ExperienceType } from "@/data/portfolioData";

const Experience: React.FC = () => (
    <section id="experience" className="py-20 bg-base-200">
        <div className="container mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-10"
            >
                Experience
            </motion.h2>
            <div className="space-y-10">
                {portfolioData.experience.map((exp: ExperienceType, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
                    >
                        <div className="card-body">
                            <h3 className="card-title text-primary">{exp.role}</h3>
                            <p className="text-lg">{exp.company} - {exp.location}</p>
                            <p className="text-sm text-gray-500">{exp.period}</p>
                            <a href={exp.linkedin} target="_blank" className="link link-primary">Company LinkedIn</a>
                            <ul className="list-disc ml-5 mt-2">
                                {exp.responsibilities.map((resp: string, i: number) => (
                                    <li key={i} className="text-gray-700">{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;