import React from "react";
import Discord from "./images/Discord.png";
import Email from "./images/Email.png";
import Github from "./images/github.png";
const Contact = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className="">
          {/* header */}
          <div className=" mb-10">
            <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>contacts
              </div>
              <div className="line w-1/3 h-px bg-[#C778DD]"></div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex items-start flex-wrap gap-10 justify-between">
          {/* left */}
          <div className="left w-full md:w-1/2">
            <p className=" text-[#ABB2BF] text-[22px]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          {/* right */}
          <div className=" mx-auto">
            {/* box */}
            <div className="border border-[#ABB2BF] p-4">
              <h2 className=" mb-4 text-white font-semibold">
                Message Me Here
              </h2>
              {/* get in touch */}
              <div className="text-[20px]">
                {/* links */}
                <div className="flex gap-1 items-center text-[20px]">
                  <img src={Discord} alt="" />
                  <span className="text-[#ABB2BF]">!Lorem#xxxx</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={Email} alt="" />
                  <span className="text-[#ABB2BF]">gmail@gmail.com</span>
                </div>
                {/* <div className="flex gap-1 items-center">
                  <a href="https://github.com/12haa " target="_blank">
                    <img src={Github} alt="" className="w-[77%] h-[28px] ml-1" />
                  </a>
                  <span className="text-[#ABB2BF]">
                    https://github.com/12haa
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
