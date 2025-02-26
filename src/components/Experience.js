import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="p-8 bg-gray-800/40 text-white">
      <motion.h2 
        className="text-3xl font-bold text-center mb-6" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Work Experience
      </motion.h2>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Junior Research Fellow @ TiHAN, IIT Hyderabad</h3>
          <p className="text-sm text-gray-400">Aug 2023 - Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed autonomous drones and AI-powered defense applications.</li>
            <li>Designed navigation systems for drones and ground vehicles using robotics, computer vision, and sensor fusion.</li>
            <li>Implemented AI and ML algorithms for object detection, path planning, and decision-making in hazardous environments.</li>
            <li>Led R&D on driverless vehicles, real-time tracking, and precision control.</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bg-gray-900 p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Embedded C Intern @ KPIT Technologies</h3>
          <p className="text-sm text-gray-400">Jan 2023 - Apr 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>Worked on Embedded C programming for automotive applications.</li>
            <li>Gained experience with AUTOSAR development and real-world embedded systems.</li>
            <li>Contributed to Advanced Driver Assistance Systems (ADAS) projects.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
