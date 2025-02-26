import React from "react";

const skills = ["Python", "C", "C++", "Java", "MySQL", "Firebase", "AWS", "GitHub"];

const Skills = () => {
  return (
    <section id="skills" className="p-8 text-center">
      <h2 className="text-3xl font-bold">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-800 text-white px-4 py-2 rounded-md">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
