import Discord from "./images/Discord.png";
import Logo from "./images/Logo.png";
import Github from "./images/Github.png";
import Figma from "./images/Figma.png";
const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={Logo} alt="" className="w-9 ml-3  h-10 mt-2 pb-2" />
                <span>Elias</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">12hadoto@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Web designer and front-end developer based in IRAN</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3 ml-5">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2 ">
              <a href="#">
                <img src={Discord} alt="" className="mr-2" />
              </a>
              <a href="#">
                <img src={Figma} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2022. Made by Mohamad
        </div>
      </div>
    </>
  );
};

export default Footer;
