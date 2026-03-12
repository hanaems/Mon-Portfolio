"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {portfolioData.personal.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Accueil", "À propos", "Compétences", "Projets"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Réseaux</h4>
            <div className="flex gap-4">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Hanae Messaoudi. Tous les droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}