import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Java Milestone Certificates",
    issuer: "Wipro",
    date: "2022",
    description: "Completed comprehensive Java programming certification covering core concepts and advanced topics."
  },
  {
    title: "Business English Certificate (BEC)",
    issuer: "Cambridge",
    date: "2021",
    description: "Achieved proficiency in business English communication and professional correspondence."
  },
  {
    title: "Embedded Systems Certification",
    issuer: "KPIT",
    date: "2023",
    description: "Specialized training in embedded systems development, AUTOSAR, and automotive software."
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="p-8 bg-gray-800/40">
      <motion.h2 
        className="text-3xl font-bold text-center mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates & Achievements
      </motion.h2>

      <motion.div 
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="bg-gray-900 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
            <div className="flex items-center gap-2 text-blue-400 text-sm mb-3">
              <span>{cert.issuer}</span>
              <span>•</span>
              <span>{cert.date}</span>
            </div>
            <p className="text-gray-300 text-sm">{cert.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificates;
