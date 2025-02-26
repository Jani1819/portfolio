import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = ({ contactRef }) => {
  return (
    <section ref={contactRef} id="contact" className="p-10 bg-gradient-to-r from-gray-800/40 text-white text-center">
      <motion.h2 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      
      <motion.div 
        className="max-w-md mx-auto bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <form>
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white"></textarea>
          <motion.button 
            className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white font-semibold"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div 
        className="mt-6 flex justify-center space-x-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="mailto:janibasha18012001@gmail.com" className="text-blue-400 text-3xl hover:text-blue-500"><FaEnvelope /></a>
        <a href="tel:+919391552485" className="text-green-400 text-3xl hover:text-green-500"><FaPhone /></a>
        <a href="https://www.linkedin.com/in/jani-basha-shaik-64798a208/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:text-blue-700"><FaLinkedin /></a>
      </motion.div>
    </section>
  );
};

export default Contact;
