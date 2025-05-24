import React from "react";
import { motion } from "framer-motion";

const Contact = ({ contactRef }) => {
  return (
    <section 
      id="contact" 
      ref={contactRef}
      className="p-8 bg-gray-800/40"
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <motion.div 
        className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-blue-400">Email:</strong>
                <br />
                <a href="mailto:janibasha1819@gmail.com" className="hover:text-blue-400 transition-colors">
                  janibasha1819@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-blue-400">Phone:</strong>
                <br />
                <a href="tel:+919392454647" className="hover:text-blue-400 transition-colors">
                  +91 9392454647
                </a>
              </p>
              <p>
                <strong className="text-blue-400">Location:</strong>
                <br />
                Hyderabad, Telangana, India
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Connect With Me</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-blue-400">LinkedIn:</strong>
                <br />
                <a 
                  href="https://www.linkedin.com/in/shaik-jani-basha-a3b982200/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Shaik Jani Basha
                </a>
              </p>
              <p>
                <strong className="text-blue-400">GitHub:</strong>
                <br />
                <a 
                  href="https://github.com/Jani1819" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Jani1819
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
