"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title mb-12"
        >
          Expérience professionnelle
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative md:w-1/2 ${
                  idx % 2 === 0
                    ? "md:ml-0 md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1 md:translate-x-0 md:left-1/2 md:-translate-x-1/2 ring-4 ring-gray-950" />

                <div className="card-glass p-6 ml-8 md:ml-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-400 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}