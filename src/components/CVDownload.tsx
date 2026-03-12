"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, X } from "lucide-react";

export default function CVDownload() {
  const [isOpen, setIsOpen] = useState(false);

  const cvOptions = [
    {
      id: "ats",
      name: "Format ATS",
      description: "Format optimisé pour les systèmes de recrutement automatisés",
      icon: "📋",
      file: "/cv/CV_HANAE_MESSAOUDI_FORMAT_ATS.pdf",
    },
    {
      id: "normal",
      name: "Format Normal",
      description: "Format design professionnel avec mise en page personnalisée",
      icon: "✨",
      file: "/cv/CV_HANAE_MESSAOUDI_FORMAT_NORMAL.pdf",
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
      >
        <Download size={24} className="text-white" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/20 rounded-xl p-8 max-w-2xl w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FileText className="text-blue-400" />
                  Télécharger mon CV
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <p className="text-gray-400 mb-6">
                Choisissez le format de CV qui correspond à vos besoins :
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {cvOptions.map((option, idx) => (
                  <motion.a
                    key={option.id}
                    href={option.file}
                    download
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-4xl mb-3">{option.icon}</div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-2 group-hover:text-cyan-400 transition-colors">
                      {option.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {option.description}
                    </p>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                      <Download size={16} />
                      <span className="text-sm font-medium">Télécharger</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}