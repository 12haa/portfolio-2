import React from "react";

const Project_Card = ({ img, disc, tittle, langs, id }) => {
  return (
    <>
      <div className="border border-[#abb2bf] p-0">
        {/* Image */}
        <div className="">
          <img src={img} />
        </div>
        {/* Skills */}
        <div className="flex gap-2  flex-wrap p-2 border-y border-[#abb2bf]">
          {langs}
        </div>
        {/* disc */}
        <div className=" p-4  ">
          <h2 className="text-[#ffffff ] pb-4  text-2xl  font-medium">
            {tittle}
          </h2>
          <p className="py-4 text-[# abb2bf]">{disc}</p>
          {/* BTNs */}
          <div className=" py-2 px-4 border border-[#c778dd] hover:bg-[#c778dd33] duration-150 ">
            <button>
              Live Demo {"<"} ~ {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_Card;
