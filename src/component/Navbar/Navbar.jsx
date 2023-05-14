import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import Close from "../../assets/close.png";
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#282c33]">
      <div className="max-w-[1560px] mx-auto flex  justify-between  my-2 items-center">
        <div className="left flex gap-2 items-center font-bold text-white text-base">
          {/* Logo */}
          <div className="image">
            <img src={Logo} className="w-9 ml-3  h-10 mt-2 pb-2" />
          </div>
          Mohammad
        </div>
        <div className="right flex items-center">
          <div className="menu flex fixed md:static left-0 right-0 top-0 bottom-0">
            <a href="#">
              <li className="text-[#abb2bf] list-none  mx-4">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                Home{" "}
              </li>
            </a>
            <a href="#">
              {" "}
              <li className="text-[#abb2bf] list-none mx-4">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                Works{" "}
              </li>
            </a>
            <a href="#">
              <li className="text-[#abb2bf] mx-4 list-none ">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                About-Me{" "}
              </li>
            </a>
            <a href="#">
              <li className="text-[#abb2bf] list-none mx-4">
                {" "}
                <span className="text-[#c77bdd] font-medium">#</span>
                Contact-Me{" "}
              </li>
            </a>
            <div className="close block md:hidden">
              <img src={Close} alt="close Button" />
            </div>
          </div>
          {/* CLose / Open Buttons */}
          <div>
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
