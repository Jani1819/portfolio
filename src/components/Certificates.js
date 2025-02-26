import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <section id="certificates" className="p-8 bg-gray-800/40 text-white">
      <motion.h2 
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Certificates
      </motion.h2>

      <motion.div 
        className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-2xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Certificates Card */}
        <div>
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Java Milestone Certificates:</strong> Wipro (2022)</li>
            <li><strong>BEC Certificate:</strong> Cambridge (2021)</li>
            <li><strong>Embedded Systems:</strong> KPIT (2023)</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
