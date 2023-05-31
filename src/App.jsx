import React from "react";
import { Route, Routes, Router, useLocation } from "react-router";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

import About_Page from "./Pages/About_page";
import Projects_Page from "./Pages/Projects_page";
import Contact_Page from "./Pages/Contact_page";
import Home_Page from "./Pages/Home_page";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"
import { useScroll } from "framer-motion";
import { useState } from "react";

const App = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  // const [completed, setCompleted] = useState(0);
  // const [clicked, setCLicked] = useState();
  // const transition = "width 1s ease-in-out";

  return (
    <div className=" bg-[#282c33]    ">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home_Page />} />
          <Route path="/projects" element={<Projects_Page />} />
          <Route path="/about" element={<About_Page />} />
          <Route path="/contact" element={<Contact_Page />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;
