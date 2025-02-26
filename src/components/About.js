import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-800/40 text-white">
      <motion.h2 
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.div 
        className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-2xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Professional Summary Card */}
        <div>
          <h3 className="text-xl font-semibold">Professional Summary</h3>
          <p className="list-disc list-inside mt-2">
            Passionate software developer with a strong foundation in Embedded Systems, AI, and Full-Stack Development. Experienced in real-time applications, software engineering, and problem-solving using cutting-edge technologies.
          </p>
        </div>

        {/* Education Card */}
        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>B.Tech (Electrical and Electronics Engineering):</strong> - KL University (2019-2023) | CGPA: 8.03</li>
            <li><strong>MPC (Physics, Chemistry & Mathematics):</strong> - Sri Chaitanya Junior College (2017-2019) | CGPA: 9.67</li>
            <li><strong>SSC:</strong> - ZPHS Govt School (2017) | CGPA: 8.5</li>
          </ul>
        </div>

        {/* Technical Skills Card */}
        <div>
          <h3 className="text-xl font-semibold">Technical Skills</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Programming:</strong> Python, C, C++, Java, MySQL</li>
            <li><strong>Tools & Technologies:</strong> Firebase, Docker, AWS, GitHub, VS Code</li>
            <li><strong>Frameworks & Libraries:</strong> React, Tailwind CSS, Framer Motion</li>
          </ul>
        </div>

        {/* Achievements Card */}
        <div>
          <h3 className="text-xl font-semibold">Achievements</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Developed AI-driven edge computing models for real-time person detection on drones.</li>
            <li>Built leader-follower drone systems using Firebase for real-time navigation.</li>
            <li>Designed and developed heavy payload drones (60-100 kg) at IIT Hyderabad.</li>
            <li>Gold Medalist in District-Level Baseball Tournament (2015).</li>
            <li>Runner-up in Cricket University League (2022).</li>
          </ul>
        </div>

        {/* Resume Button */}
        <motion.a 
          href={`${process.env.PUBLIC_URL}/Resume.pdf`} 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center"
        >
          View Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
