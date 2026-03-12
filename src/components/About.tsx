"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title mb-12"
        >
          À propos de moi
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-50" />
              <div className="relative bg-gray-900 rounded-lg p-8">
                <p className="text-gray-300 leading-relaxed mb-4">
                  {portfolioData.about.fullBio}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">🎓 Formation</h3>
              <p className="text-gray-300">
                En 4e année à l'EMSI, spécialisée en Développement Digital des Systèmes Informatiques
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">🌍 Localisation</h3>
              <p className="text-gray-300">
                {portfolioData.personal.location}
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">📱 Contact</h3>
              <p className="text-gray-300">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-blue-400 hover:underline"
                >
                  {portfolioData.personal.email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}