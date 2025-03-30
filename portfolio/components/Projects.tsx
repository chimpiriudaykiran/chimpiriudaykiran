"use client";

import { motion } from "framer-motion";
import { portfolioData, Project as ProjectType, Publication } from "@/data/portfolioData";

const Projects: React.FC = () => (
    <section id="projects" className="py-20 bg-base-100">
        <div className="container mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-10"
            >
                Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.projects.map((project: ProjectType, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="card bg-base-200 shadow-xl hover:scale-105 transition-transform"
                    >
                        <div className="card-body">
                            <h3 className="card-title text-primary">{project.title}</h3>
                            <p>{project.description}</p>
                            <p><strong>Year:</strong> {project.year}</p>
                            <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
                            <p><strong>Contribution:</strong> {project.contribution}</p>
                            <div className="flex gap-2 mt-2">
                                {project.github && (
                                    <a href={project.github} target="_blank" className="btn btn-outline btn-sm">GitHub</a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" className="btn btn-primary btn-sm">Live</a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center mt-16 mb-6"
            >
                Publications
            </motion.h3>
            {portfolioData.publications.map((pub: Publication, index: number) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="card bg-base-200 shadow-xl max-w-2xl mx-auto"
                >
                    <div className="card-body">
                        <h4 className="card-title">{pub.title}</h4>
                        <p>{pub.description}</p>
                        <a href={pub.link} target="_blank" className="link link-primary">Read More</a>
                    </div>
                </motion.div>
            ))}
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center mt-16 mb-6"
            >
                Awards & Achievements
            </motion.h3>
            <ul className="list-disc max-w-2xl mx-auto">
                {portfolioData.awards.map((award: string, index: number) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="text-lg"
                    >
                        {award}
                    </motion.li>
                ))}
            </ul>
        </div>
    </section>
);

export default Projects;