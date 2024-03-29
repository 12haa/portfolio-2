import React from "react";
import Project_Card from "../Projects_Card/Project_Card";
import dummyData from "../Projects/dummy.jsx";
const Projects = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto py-10   mt-20">
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
        <div className="flex   flex-wrap justify-between gap-4 my-12">
          {/* Cards */}
          {dummyData.map(
            ({ img, langs, tittle, disc, id, githubUrl, LiveDemoUrl }) => {
              return (
                <Project_Card
                  img={img}
                  langs={langs}
                  tittle={tittle}
                  disc={disc}
                  key={id}
                  githubUrl={githubUrl}
                  LiveDemoUrl={LiveDemoUrl}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
