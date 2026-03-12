"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: "blue",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      color: "cyan",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: portfolioData.personal.location,
      href: null,
      color: "purple",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Hanae Messaoudi",
      href: portfolioData.personal.linkedin,
      color: "blue",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@hanaems",
      href: portfolioData.personal.github,
      color: "gray",
    },
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
    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title mb-12"
        >
          Me Contacter
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets, d'opportunités
            de collaboration ou simplement pour échanger.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              blue: "bg-blue-500/20 group-hover:bg-blue-500/30 text-blue-400",
              cyan: "bg-cyan-500/20 group-hover:bg-cyan-500/30 text-cyan-400",
              purple: "bg-purple-500/20 group-hover:bg-purple-500/30 text-purple-400",
              gray: "bg-gray-500/20 group-hover:bg-gray-500/30 text-gray-400",
            };

            const Component = item.href ? motion.a : motion.div;
            const props = item.href
              ? {
                  href: item.href,
                  target: item.href.startsWith("http") ? "_blank" : undefined,
                  rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                }
              : {};

            return (
              <Component
                key={index}
                variants={itemVariants}
                whileHover={item.href ? { y: -5, scale: 1.02 } : {}}
                className={`card-glass p-6 flex flex-col items-center text-center group ${
                  item.href ? "cursor-pointer" : ""
                }`}
                {...props}
              >
                <div
                  className={`p-4 rounded-full mb-4 transition-all ${
                    colorClasses[item.color as keyof typeof colorClasses]
                  }`}
                >
                  <Icon size={28} />
                </div>
                <p className="text-sm text-gray-400 mb-2">{item.label}</p>
                <p className="text-white font-medium break-all">{item.value}</p>
              </Component>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
          >
            <Mail size={24} />
            Envoyez-moi un email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
