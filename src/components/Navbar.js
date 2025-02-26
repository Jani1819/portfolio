import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full">
      <ul className="flex justify-center space-x-6">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
