import React from "react";
import Group from "./images/Group.png";
const Facts = [
  {
    fact: "I like winter more than summer",
  },
  {
    fact: "I often bike with my friends",
  },
  {
    fact: "I was in Egypt, Poland and Turkey",
  },
  {
    fact: "I like pizza and pasta",
  },
  {
    fact: "I’m still studing in school",
  },
  {
    fact: "I don’t have any siblings",
   
  },
  {
    fact: "My favorite movie is The Green Mile",
  },
];
const FunFacts = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10 ">
      <div className=" mb-12   text-[32px] font-medium text-white">
        <span className="text-[#c778dd]">#</span>Fun-Facts
      </div>
      <div className="flex   justify-between items-center  gap-y-10 px-[25px] pt-[140px]   flex-row ">
        {/* Left */}
        <div className=" flex flex-row gap-4 items-center justify-between  flex-wrap  h-[250px]  w-[80%]   ">
          {Facts.map((fact) => {
            return (
              <div className="fact border-[#abb2bf] border p-2 text-[#abb2bf] text-base font-normal h-[55px]  ">
                {fact.fact} 
              </div>
            );
          })}
        </div>
        {/* Right */}
        <div className=" w-[30%] ml-[230px]">
          <img src={Group} />
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
