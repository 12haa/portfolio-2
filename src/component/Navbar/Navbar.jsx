import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import Close from "../../assets/close.png";
import BrandLogo from "../../assets/brand_logo.jpg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {};
  }, [toggle]);

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#282c33] z-[999]">
      <div className=" px-2 max-w-[1560px] mx-auto flex  justify-between  my-2 items-center">
        <div className="left flex gap-2 items-center font-bold text-white text-base">
          {/* Logo */}
          <div className="image">
            <img src={Logo} className="w-9 ml-3  h-10 mt-2 pb-2" />
          </div>
          Mohammad
        </div>
        <div className="right flex items-center relative">
          <div
            className={`menu duration-300 flex-col justify-center md:flex-row flex   lg:h-2 lg:left-[370px] 
            md:left-[25%] md:top-4
             fixed   z-10  w-full  ${
               !toggle
                 ? `right-[-100%] top-0  z-10   `
                 : ` z-[199] right-0 top-0 bottom-0 py-4`
             }  bg-[#282c33] `}
          >
            <NavLink to="/">
              <li className="text-[#abb2bf] text-[32px] md:text-base my-4 md:my-auto    list-none  mx-4">
                {" "}
                <span className="text-[#c77bdd] font-medium ">#</span>
                Home{" "}
              </li>
            </NavLink>
            <NavLink to="/projects ">
              {" "}
              <li className="text-[#abb2bf]  text-[32px] md:text-base  my-4 md:my-auto list-none mx-4">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                Works{" "}
              </li>
            </NavLink>
            <NavLink to="/about">
              <li className="text-[#abb2bf] text-[32px] md:text-base my-4 md:my-auto   mx-4 list-none ">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                About-Me{" "}
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="text-[#abb2bf]  text-[32px] md:text-base my-4 md:my-auto  list-none mx-4">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                Contact-Me{" "}
              </li>
            </NavLink>
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
