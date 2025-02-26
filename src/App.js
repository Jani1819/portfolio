import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  const contactRef = useRef(null);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen text-white"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image.png)` }}
      //style={{ backgroundImage: `url("/image.png")` }}


    >
      {/* Dark Overlay for Better Text Visibility */}
      <div className="bg-black bg-opacity-50 min-h-screen">
        <Navbar />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Home contactRef={contactRef} />
        </motion.div>

        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <About />
        </motion.div>

        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <Experience />
        </motion.div>

        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.05 }}>
          <Projects />
        </motion.div>

        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.05 }}>
          <Skills />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} whileHover={{ skewX: 5 }}>
          <Certificates />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <Contact contactRef={contactRef} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
