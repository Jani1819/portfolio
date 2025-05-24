import React from "react";
import { motion } from "framer-motion";

const skillCategories = {
  "Programming Languages": ["Python", "C", "C++", "Java", "JavaScript"],
  "Web Technologies": ["HTML", "CSS", "React", "Tailwind CSS"],
  "Databases": ["MySQL", "Firebase"],
  "Cloud & DevOps": ["AWS", "Docker", "GitHub"],
  "Tools & IDEs": ["VS Code", "PyCharm", "Arduino IDE"],
  "Embedded Systems": ["Raspberry Pi", "Arduino", "Sensors Integration"]
};

const Skills = () => {
  return (
    <section id="skills" className="p-8 bg-gray-800/40">
      <motion.h2 
        className="text-3xl font-bold text-center mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      
      <motion.div 
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div 
            key={category}
            className="bg-gray-900 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
