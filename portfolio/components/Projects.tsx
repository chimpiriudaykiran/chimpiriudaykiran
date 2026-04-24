"use client";

import { motion } from "framer-motion";
import { portfolioData, Project as ProjectType, OtherProject, Publication } from "@/data/portfolioData";

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

            {/* Featured Projects */}
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
                            <div className="flex flex-wrap gap-1 mt-2">
                                {project.tech.map((t: string) => (
                                    <span key={t} className="badge badge-outline text-xs">{t}</span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 mt-2">{project.contribution}</p>
                            <div className="flex gap-2 mt-3">
                                {project.github && (
                                    <a href={project.github} target="_blank" className="btn btn-outline btn-sm">GitHub</a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" className="btn btn-primary btn-sm">Live Demo</a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Other Projects — compact grid */}
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-center mt-16 mb-6 text-base-content/70"
            >
                Other Projects
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {portfolioData.otherProjects.map((project: OtherProject, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="card bg-base-200 shadow p-4"
                    >
                        <p className="font-semibold text-sm">{project.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{project.tech.join(", ")}</p>
                        {project.github && (
                            <a href={project.github} target="_blank" className="link link-primary text-xs mt-2">GitHub</a>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Publications */}
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
                        {pub.venue && <p className="text-sm text-secondary font-medium">{pub.venue}</p>}
                        <p>{pub.description}</p>
                        <a href={pub.link} target="_blank" className="link link-primary">Read More</a>
                    </div>
                </motion.div>
            ))}

            {/* Awards */}
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
