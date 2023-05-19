import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AboutSec from "./component/AboutSec/AboutSec";
// import Contact from "./component/contact_section/Contact";
// import About from "./component/first_section_about/About";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
// import Projects from "./component/Projects/Projects";
// import Skills from "./component/Skills/SKills";
import About_Page from "./Pages/About_page";
import Projects_Page from "./Pages/Projects_page";
import Contact_Page from "./Pages/Contact_page";
import Home_Page from "./Pages/Home_page";
const App = () => {
  return (
    <div className=" bg-[#282c33]   ">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/" element={<Projects_Page />} />
          <Route path="/" element={<About_Page />} />
          <Route path="/" element={<Contact_Page />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
