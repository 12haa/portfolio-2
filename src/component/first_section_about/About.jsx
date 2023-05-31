import React from "react";
import "./About.css";
import Logo from "../../assets/aboutLogo.png";
import Quote from "../../assets/quote.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen  flex  items-center justify-between flex-wrap ">
        {/* Add md:mt-auto? check kon */}
        <div className=" w-10/12 sm:w-6/12 mx-auto mt-20 lg:ml-0   ">
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: -330 }}
            transition={{ type: "twwen ", bounce: 1, delay: 0.1232 }}
            className="font-semibold text-[32px] text-white mb-3  "
          >
            Im A <span className=" text-[#c778dd]">Web Designer</span> And
            <span className="text-[#c778dd]"> Front-End Developer</span> {":)"}
          </motion.h1>

          <motion.p
            animate={{ x: 0 }}
            initial={{ x: -600 }}
            transition={{ type: "twwen ", bounce: 1, delay: 0.6232 }}
            className="text-[#abb2bf] my-6 "
          >
            I crafts responsive websites where technologies meet creativity
          </motion.p>
          <NavLink to="contact">
            <motion.button
              animate={{ x: 0 }}
              initial={{ x: -600 }}
              transition={{ type: "twwen ", bounce: 1, delay: 0.6232 }}
              className="text-white font-medium  px-4  py-2  rounded border boder-[#c778dd] hover:bg-[#c778dd33]  duration-200  sm:mb-2 "
            >
              Contact Me
            </motion.button>
          </NavLink>
        </div>
        <div className="  mx-auto border2 rounded pt-10  ">
          <div className="  ">
            <motion.img
              animate={{ x: 0 }}
              initial={{ x: 600 }}
              transition={{ type: "twwen ", bounce: 1, delay: 0.3232 }}
              src={Logo}
              alt="Logo"
            />
          </div>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 600 }}
            transition={{ type: "twwen ", bounce: 1, delay: 0.4232 }}
            className="border flex gap-2 items-center border-[#abb2bf] p-2 text-[#abb2bf]"
          >
            <div className="w-[16px] h-4 bg-[#c778dd] rounded-lg"></div>
            <motion.div className="">
              Currently Trying To Get Better{" "}
              <span className="text-white text-bold">Day By Day</span>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 600 }}
            transition={{ type: "twwen ", bounce: 1, delay: 0.5232 }}
            className="border flex gap-2 items-center border-[#abb2bf] p-2 text-[#abb2bf]"
          >
            <div className="w-[16px] h-4 bg-[#c778dd] rounded-lg"></div>
            <motion.div className="">
              Currently Trying To Get Better{" "}
              <span className="text-white text-bold">Day By Day</span>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 600 }}
            transition={{ type: "twwen ", bounce: 1, delay: 0.6232 }}
            className="border flex gap-2 items-center border-[#abb2bf] p-2 text-[#abb2bf]"
          >
            <div className="w-[16px] h-4 bg-[#c778dd] rounded-lg"></div>
            <motion.div className="">
              Currently Trying To Get Better{" "}
              <span className="text-white text-bold">Day By Day</span>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 600 }}
            transition={{ type: "twwen ", bounce: 1, delay: 0.7232 }}
            className="border flex gap-2 items-center border-[#abb2bf] p-2 text-[#abb2bf]"
          >
            <div className="w-[16px] h-4 bg-[#c778dd] rounded-lg"></div>
            <motion.div className="">
              Currently Trying To Get Better{" "}
              <span className="text-white text-bold">Day By Day</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="w-[67%] ml-[142px] px-5 py-10  ">
        <div>
          <motion.img
            layout
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring" }}
            whileInView={{ opacity: 1 }}
            className=" relative bottom-10  mx-auto pt-[110px]"
            src={Quote}
            alt="Quote"
          />
        </div>
      </div>
    </>
  );
};

export default About;
