import React from "react";
import Discord from "./images/Discord.png";
import Email from "./images/Email.png";
// what is discord Logo Color in Hex?
const Contact = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
      {/* Title */}
      <div className="text-white font-semibold text-[32px]  mt-12">
        <span className="text-[#c778dd]">/</span>Contact
      </div>
      <div className="text-white mt-[14px] mb-[46px]   ">Who Am I ?</div>
      {/* FLEX MAIN */}
      <div className="flex justify-between flex-wrap gap-10 ">
        {/* Left Side */}
        <div className="md:w-3/5 w-full ">
          {/* TEXT */}
          <div className="text-[#abb2bf] font-medium">
            im intested in freelance opportunities.however if you have other
            request or qusteion dont hesitate to ask me {`:))`}
          </div>
        </div>
        {/* RiGHT Side  */}
        <div className="">
          {/* BOXES */}
          <div className="p-4 border border-[#abb2bf]  ">
            <h2 className="text-[#abb2bf] pb-2  font-medium ">
              Support Me Here {`<3`}
            </h2>
          </div>
          <div className="p-4 border border-[#abb2bf]">
            <h2 className="text-[#abb2bf] font-medium pb-2">
              Message Me Here :
            </h2>
            <div className="text-[#abb2bf]">
              {/* Contacts */}
              <div className=" flex gap-1 items-center">
                {/* img */}
                <img src={Discord} className="hover:decoration-[#546E7A]" />
                <span>!12haa#7566</span>
              </div>
              <div className=" flex  gap-1 items-center">
                {/* img */}
                <img src={Email} />
                <span className=" ">12hadoto@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All MEDIA */}
      <div className=" mt-6 mb-5x">
        {/* TITLE */}
        <div className="text-[32px] font-medium text-white">
          <span className="text-[#c778dd]">#</span>All-Media{" "}
        </div>
        <div className=" flex gap-6">
          <div className="text-[#abb2bf] flex items-center gap-1">
            <img src={Discord} />
            @mmd
          </div>
          <div className="text-[#abb2bf] flex items-center gap-1">
            <img src={Email} />
            12hadoto@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
