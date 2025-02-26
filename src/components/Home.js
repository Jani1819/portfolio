import React, { useRef } from "react";
import { motion } from "framer-motion";

const Home = ({ contactRef }) => {
  const scrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white"
    >
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Hello, I'm Shaik Jani Basha
        </motion.h1>
        <motion.p 
          className="text-lg mt-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Electrical & Electronics Engineer | AI & Embedded Systems
        </motion.p>
        <motion.button 
          className="mt-4 inline-block bg-blue-500 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
          onClick={scrollToContact}
        >
          Contact Me
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
