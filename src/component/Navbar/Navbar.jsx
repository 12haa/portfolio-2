import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import Close from "../../assets/close.png";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#282c33]">
      <div className=" px-2 max-w-[1560px] mx-auto flex  justify-between  my-2 items-center">
        <div className="left flex gap-2 items-center font-bold text-white text-base">
          {/* Logo */}
          <div className="image">
            <img src={Logo} className="w-9 ml-3  h-10 mt-2 pb-2" />
          </div>
          Mohammad
        </div>
        <div className="right flex items-center">
          <div
            className={`menu duration-300 flex-col justify-center md:flex-row flex fixed  w-full ${
              !toggle
                ? `right-[-100%] top- bottom-0  `
                : ` right-0 top-0 bottom-0`
            }  bg-[#282c33]`}
          >
            <a href="#">
              <li className="text-[#abb2bf] text-[32px] md:text-base my-4 md:my-auto   list-none  mx-4">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                Home{" "}
              </li>
            </a>
            <a href="#">
              {" "}
              <li className="text-[#abb2bf]  text-[32px] md:text-base  my-4 md:my-auto list-none mx-4">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                Works{" "}
              </li>
            </a>
            <a href="#">
              <li className="text-[#abb2bf] text-[32px] md:text-base my-4 md:my-auto   mx-4 list-none ">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                About-Me{" "}
              </li>
            </a>
            <a href="#">
              <li className="text-[#abb2bf]  text-[32px] md:text-base my-4 md:my-auto  list-none mx-4">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                Contact-Me{" "}
              </li>
            </a>
            <div
              onClick={() => setToggle(false)}
              className="close block  absolute w-5 right-3 top-3"
            >
              <img src={Close} alt="close Button" />
            </div>
          </div>
          {/* CLose / Open Buttons */}
          <div onClick={() => setToggle(true)}>
            <div className="open w-8 block md:hidden">
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9]"></div>
              <div className="w-full  h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9]"></div>
              <div className="w-full  h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
