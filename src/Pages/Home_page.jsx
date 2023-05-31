import React from "react";
import AboutSec from "../component/AboutSec/AboutSec";
import About from "../component/first_section_about/About";
import Projects from "../component/Projects/Projects";
import Skills from "../component/Skills/SKills";
import Contact from "../component/contact_section/Contact";
import { motion } from "framer-motion";
const Home_page = () => {
  return (
    <motion.div
      initial={{opacity :0 , }}
    animate={{opacity :1  }}
    exit = {{opacity :0}}
    >
      <About />
      <Projects />
      <AboutSec />
      <Skills />
      <Contact />
    </motion.div>
  );
};

export default Home_page;
