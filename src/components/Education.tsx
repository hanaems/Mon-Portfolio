"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title mb-12"
        >
          Formation
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-glass p-8 border-l-4 border-blue-500"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">
                        {edu.degree}
                      </h3>
                      <p className="text-cyan-400 font-medium">
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-sm text-gray-400 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-gray-300">
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 card-glass p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            🌐 Langues
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.languages.map((lang, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <span className="font-semibold">{lang.language}</span>
                <span className="text-cyan-400 text-sm">{lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}