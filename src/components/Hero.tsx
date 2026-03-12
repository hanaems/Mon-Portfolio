"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import CVDownload from "./CVDownload";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl -z-10" />

      <motion.div
        className="max-w-5xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  {portfolioData.personal.name}
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-2xl md:text-3xl text-gray-300 mb-2">
                {portfolioData.personal.title}
              </p>
              <p className="text-lg text-gray-400 max-w-xl">
                {portfolioData.personal.description}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Me contacter
              </a>
              <button
                onClick={() => {
                  const btn = document.querySelector("button[class*='fixed']") as HTMLButtonElement;
                  btn?.click();
                }}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Télécharger CV
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 text-gray-400"
            >
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                Email
              </a>
              <span>•</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Photo de profil */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-40" />

              {/* Image container */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl h-full">
                <Image
                  src={portfolioData.personal.image}
                  alt={portfolioData.personal.name}
                  width={320}
                  height={384}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-blue-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* CV Download Component */}
      <CVDownload />
    </section>
  );
}