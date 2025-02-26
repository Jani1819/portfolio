import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Edge Computing",
      description: "Developed a real-time person detection system using YOLO models and edge computing for drones.",
      link: "https://github.com/Jani1819/Person_Detection-From-Drone"
    },
    {
      title: "Leader-Follower Drone System",
      description: "Integrated Firebase to synchronize multiple drones for autonomous navigation in defense applications.",
    },
    {
      title: "Heavy Payload Drone",
      description: "Designed India's first 60-100kg payload drone, optimizing stability and waypoint navigation.",
    },
    {
      title: "Embedded Systems & AUTOSAR",
      description: "Worked on Advanced Driver Assistance Systems (ADAS) at KPIT Technologies using Embedded C.",
    },
    {
      title: "Full-Stack Web Application",
      description: "Developed a real-time control interface for autonomous drones using Python, HTML, CSS, and Firebase.",
    },
    {
      title: "AI-Based Path Planning",
      description: "Implemented machine learning algorithms for dynamic path planning in autonomous defense vehicles.",
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-800/40 text-white">
      <motion.h2 
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Conditional link */}
            {proj.link ? (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-400 hover:underline mb-2 block"
              >
                {proj.title}
              </a>
            ) : ( 
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{proj.title}</h3>
            )}
            <p className="text-gray-300">{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
