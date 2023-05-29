import React from "react";
import { Route, Routes } from "react-router";

import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

import About_Page from "./Pages/About_page";
import Projects_Page from "./Pages/Projects_page";
import Contact_Page from "./Pages/Contact_page";
import Home_Page from "./Pages/Home_page";
const App = () => {
  return (
    <div className=" bg-[#282c33]   ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/projects" element={<Projects_Page />} />
        <Route path="/about" element={<About_Page />} />
        <Route path="/contact" element={<Contact_Page />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
