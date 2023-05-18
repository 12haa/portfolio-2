import React from "react";
import "./About.css";
import Logo from "../../assets/aboutLogo.png";
import Quote from "../../assets/quote.png";
const About = () => {
  return (
    <>
      <div className="px-5 max-2-[1560px] mx-auto min-h-screen  flex  items-center justify-between flex-wrap border-rose-500">
        {/* Add md:mt-auto? check kon */}
        <div className=" w-10/12 sm:w-6/12 mx-auto mt-20 lg:ml-0   ">
          <h1 className="font-semibold text-[32px] text-white mb-3  ">
            Im A <span className=" text-[#c778dd]">Web Designer</span> And
            <span className="text-[#c778dd]"> Front-End Developer</span> {":)"}
          </h1>
          <p className="text-[#abb2bf] my-6 ">
            I crafts responsive websites where technologies meet creativity
          </p>
          <button className="text-white font-medium  px-4  py-2  rounded border boder-[#c778dd] hover:bg-[#c778dd33]  duration-200  sm:mb-2 ">
            Contact Me
          </button>
        </div>
        <div className=" border-2 mx-auto ">
          <div className="border border-rose-700 ">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="border flex gap-2 items-center border-[#abb2bf] p-2 text-[#abb2bf]">
            <div className="w-[16px] h-4 bg-[#c778dd] rounded-lg"></div>
            <div className="">
              Currently Trying To Get Better{" "}
              <span className="text-white text-bold">Day By Day</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[67%] ml-[142px] px-5 py-10  ">
        <img
          className=" relative bottom-10  mx-auto "
          src={Quote}
          alt="Quote"
        />
      </div>
    </>
  );
};

export default About;
