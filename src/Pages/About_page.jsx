import React from "react";
import About from "../component/about_page/About";
import Skills from "../component/skills_about_page/Skills";
import FunFacts from "../component/Fun-facts/FunFacts";
import { motion } from "framer-motion";
const About_page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <About />
      <Skills />
      <FunFacts />
    </motion.div>
  );
};

export default About_page;
