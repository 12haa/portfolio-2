import React from "react";
import "./About.css";
import Logo from "../../assets/aboutLogo.png";
import Quote from "../../assets/quote.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Me from "../../assets/Me.png";
const About = () => {
  const instance = new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
    loop: true,
  });
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
            <span className="">
              Hello Im <span className="text-[#c778dd]">Mohammad.</span>
            </span>{" "}
            <br />
            I’m An
            <h2 className="text-[#c778dd]">
              <Typewriter
                words={[
                  "Web Designer",
                  "Front-End Developer",
                  "Athlete",
                  "Gamer",
                ]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={20}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <span className=" "></span>
            {}
          </motion.h1>

          <motion.p
            animate={{ x: 0 }}
            initial={{ x: -600 }}
            transition={{ type: "twwen ", bounce: 1, delay: 0.6232 }}
            className="text-[#abb2bf] my-6 text-[20px] "
          >
            I crafts responsive websites where technologies meet creativity.
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
          <div className=" h-[200px] border-2">
            <motion.img
              animate={{ x: 0 }}
              initial={{ x: 600 }}
              transition={{ type: "twwen ", bounce: 1, delay: 0.3232 }}
              src={Me}
              alt="Logo"
              className="h-[1200px]  w-fit absolute top-[-270px] right-[150px]"
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
