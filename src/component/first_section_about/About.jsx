import React from "react";
import "./About.css";
import Logo from "../../assets/aboutLogo.png";
import Quote from "../../assets/quote.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Me from "../../assets/Me.png";
import Progress_bar from "../Progress_bar/Progress_bar";
const About = () => {
  const instance = new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
    loop: true,
  });
  // how to create objects in js?

  const cardData = [
    {
      number : 85,
      lang : 'HTML'
    }
    ,{
      number : '23'
      ,lang : 'js'
    }
    ,{
      number : '45'
      ,lang : 'react'
    } , 
    {
      number :'70'
      ,lang :'tailwind'

    }
]
  return (
    <>
      <div className="px-5 max-w-[1560px] pb-[63px] mx-auto min-h-screen  flex  items-center justify-between flex-wrap ">
        {/* Add md:mt-auto? check kon */}
        <div className=" w-10/12 sm:w-6/12 mx-auto mt-20 lg:ml-0 text-[20px]   ">
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: -330 }}
            transition={{ type: "twwen ", bounce: 1, delay: 0.1232 }}
            className="font-semibold text-[32px] text-white mb-3  "
          >
            <span className="text-[44px]">
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
              className="text-white font-medium  px-4  py-2  rounded border boder-[#c778dd] text-[20px] hover:bg-[#c778dd33]  duration-200  sm:mb-2 "
            >
              Contact Me
            </motion.button>
          </NavLink>
        </div>
        <div className="  mx-auto border2 rounded pb-[80px]  ">
          <div className=" h-[300px] border-2">
            <motion.img
              animate={{ x: 0 }}
              initial={{ x: 600 }}
              transition={{ type: "twwen ", bounce: 1, delay: 0.3232 }}
              src={Me}
              alt="Logo"
              className="object-cover w-[430px] max-h-screen h-[500px] ml-1 mt-3 absolute"
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
      <div className=" relative bottom-[70px] h-[220px] min-w-full justify-center   items-center flex xs:justify-evenly sm:flex-wrap sm:gap-[90px] sm:mt-[100px] xs:flex-wrap  ">
       {cardData.map((data)=> {
        return <Progress_bar number= {data.number} langs ={data.lang}  />
      
       })}
      </div>

      <div className="w-[67%]  ml-[142px] px-5 py-10  ">
        <div>
          <motion.img
            layout
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring" , delay:'1.4' }}
            whileInView={{ opacity: 1 }}
            className=" relative bottom-10  mx-auto  w-[800px]  pt-[px]"
            src={Quote}
            alt="Quote"
          />
        </div>
      </div>
    </>
  );
};

export default About;
