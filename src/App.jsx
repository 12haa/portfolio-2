import React from "react";
import About from "./component/first_section_about/About";
import Navbar from "./component/Navbar/Navbar";
import Projects from "./component/Projects/Projects";

const App = () => {
  return (
    <div className=" bg-[#282c33]   ">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
};

export default App;
