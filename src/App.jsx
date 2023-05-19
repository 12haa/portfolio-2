import React from "react";
import AboutSec from "./component/AboutSec/AboutSec";
import Contact from "./component/contact_section/Contact";
import About from "./component/first_section_about/About";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Projects from "./component/Projects/Projects";
import Skills from "./component/Skills/SKills";

const App = () => {
  return (
    <div className=" bg-[#282c33]   ">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <AboutSec />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
