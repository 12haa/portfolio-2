import React from "react";
import "./About.css";
import Logo from "../../assets/About-Logo.png";
const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen flex items-center  justify-between  flex-wrap   ">
        <div className=" w-10/12 sm:w-8/12 mx-auto mt-20 lg:mt-0">
          <h1 className="font-semibold  text-[32px] text-white mb-3">
            Im A <span className="text-[#c778dd]   ">Web Designer</span> And
            Front-End Developer
          </h1>
          <p className="text-[#abb2bf] my-6 ">
            {" "}
            I Create Responsive Websites Where Technologies Meet Creatiity
          </p>
          <button className="text-white font-medium  py-2 px-4 border border-[#c778dd] rounded-md duration-200  hover:bg-[#c778dd33]  ">
            Contact Me!
          </button>
        </div>
        <div className=" mx-auto">
          <div className=" ">
            <img className="rounded " src={Logo} alt="About-Logo" />
          </div>
          <div className="border border-[#abb2bf] p-2 text-[#abb2bf]flex  justify-centeritems-center gap-2">
            <div className="w-4 absolute mt-1  h-4 bg-[#c778dd]"></div>
            <div className="ml-6">
              Currently Trying To Learn{" "}
              <span className="text-[#c778dd]">As Much As </span> Possible
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
