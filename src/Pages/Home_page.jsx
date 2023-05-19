import React from "react";
import AboutSec from "../component/AboutSec/AboutSec";
import About from "../component/first_section_about/About";
import Projects from "../component/Projects/Projects";
import Skills from "../component/Skills/SKills";
import Contact from "../component/contact_section/Contact";
const Home_page = () => {
  return (
    <div>
      <About />
      <Projects />
      <AboutSec />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home_page;
