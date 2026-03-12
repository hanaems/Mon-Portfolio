"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title mb-12"
        >
          Mes Projets
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(idx)}
              className="group cursor-pointer"
            >
              <div className="card-glass p-8 flex flex-col h-full relative overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Icon and Year */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{project.image}</span>
                    <span className="text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-500 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      Code Source
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 pt-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/20 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">
                    {portfolioData.projects[selectedProject].image}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-400">
                      {portfolioData.projects[selectedProject].title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                      {portfolioData.projects[selectedProject].year}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {portfolioData.projects[selectedProject].fullDescription}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.projects[selectedProject].technologies.map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={portfolioData.projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Github size={20} />
                  Voir le code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}