"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const skillCategories = [
    {
      title: "Langages",
      skills: portfolioData.skills.programming,
      color: "from-blue-500",
    },
    {
      title: "Frameworks",
      skills: portfolioData.skills.frameworks,
      color: "from-cyan-500",
    },
    {
      title: "Bases de données",
      skills: portfolioData.skills.databases,
      color: "from-purple-500",
    },
    {
      title: "Systèmes",
      skills: portfolioData.skills.systems,
      color: "from-green-500",
    },
    {
      title: "Mobile",
      skills: portfolioData.skills.mobile,
      color: "from-pink-500",
    },
    { title: "Outils", skills: portfolioData.skills.tools, color: "from-orange-500" },
  ];

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
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title mb-12"
        >
          Compétences
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-glass p-6"
            >
              <h3
                className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} to-white bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 card-glass p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Méthodologies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "MERISE",
                desc: "Méthode de conception de systèmes informatiques",
              },
              { name: "UML", desc: "Langage de modélisation unifié" },
              { name: "Agile", desc: "Méthode de développement itérative" },
              { name: "Scrum", desc: "Framework de gestion de projets" },
            ].map((method, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div>
                  <p className="font-semibold">{method.name}</p>
                  <p className="text-sm text-gray-400">{method.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}