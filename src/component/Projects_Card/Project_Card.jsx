import React from "react";
import githubLogo from "../../assets/github.png";
const Project_Card = ({ img, disc, tittle, langs, githubUrl, LiveDemoUrl }) => {
  return (
    <>
      <div className="border  mx-auto w-[90%] md:w-[47%] lg:w-[30%] border-[#abb2bf] p-0">
        {/* Image */}
        <div className="">
          <a href={githubUrl} target="_blank">
            <img
              src={githubLogo}
              className="absolute w-[5%] mt-[215px] right-16  cursor-pointer"
            />
          </a>
          <img src={img} />
        </div>
        {/* Skills */}
        <div className="flex gap-2  flex-wrap p-2 border-y border-[#abb2bf] text-[#abb2bf]">
          {langs}
        </div>
        {/* disc */}
        <div className=" p-4  ">
          <h2 className="text-[#ffffff9c] pb-4  text-2xl  font-medium">
            {tittle}
          </h2>
          <p className="py-4 text-[# abb2bf]">{disc}</p>
          {/* BTNs */}
          <div className=" py-2 px-4 border border-[#c778dd] hover:bg-[#c778dd33] duration-150 ">
            <a href={LiveDemoUrl} target="_blank">
              <button>
                Live Demo {"<"} ~ {">"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_Card;
