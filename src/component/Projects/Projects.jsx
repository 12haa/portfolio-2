import React from "react";

const Projects = () => {
    
  
    return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto py-10">
        {/* TOP */}

        <div className="flex items-center justify-between  ">
          {/* LEFT */}
          <div className="text-white font-medium text-[32px] flex items-center gap-2 relative">
            <div className="">
              <span className="text-[#c778dd]  ">#</span> Projects
            </div>
            <div className="line  md:w-[340px] sm:w-[250px] xs:w-[50px] h-px lg:w-[710px] bg-[#c778dd] rounded-xl"></div>
          </div>
          {/* RIGHT */}
          <div className="text-white font-medium  relative ">
            <a href="">
              {" "}
              <span className="text-[18 px] ">View All Projects ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* BOTTOM */}
      </div>
    </>
  );
};

export default Projects;
