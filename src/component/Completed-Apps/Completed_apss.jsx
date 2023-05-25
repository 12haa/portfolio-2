import first from "./images/RectangleOne.jpg";
import second from "./images/RectangleTwo.png";
import third from "./images/RectangleThree.png";
import Project_Card from "../Projects_Card/Project_Card";
import React from "react";
const projects = [
  {
    img: first,
    tittle: "Languages",
    langs: ["TypeScript", " ,Lua", " ,Python", " ,JavaScript"],
    isLogo: true,
  },
  {
    img: second,
    tittle: "Databases",
    langs: ["SQLite", " ,PostgreSQL", " ,Mongo"],
    isLogo: true,
  },
  {
    img: third,
    tittle: "Tools",
    langs: [
      "VSCode",
      " ,Neovim",
      " ,Linux",
      " ,Figma",
      " ,XFCE",
      " ,Arch",
      " ,Git",
    ],
    isLogo: true,
  },
  {
    img: first,
    tittle: "Other",
    langs: ["HTML", ",CSS", ",EJS", ",SCSS", ",REST", ",Jinja"],
    isLogo: true,
  },
  {
    img: second,
    tittle: "Frameworks",
    langs: [
      "React",
      ", Vue",
      " , Disnake",
      " , Discord.js",
      " , Flask",
      " ,Express.js",
    ],
    isLogo: true,
  },
  {
    img: second,
    tittle: "Frameworks",
    langs: [
      "React",
      ", Vue",
      " , Disnake",
      " , Discord.js",
      " , Flask",
      " ,Express.js",
    ],
    isLogo: true,
  },
];
const Completed_apss = () => {
  return (
    <div>
      <>
        {/* TOP / TITLE */}
        <div className="min-h-screen pt-[114px] px-5 max-w-[1560px] mx-auto ">
          <div className="">
            {/* PROJECTS */}
            <div className=" text-white font-bold text-[32px]">
              <span className="text-[#c778dd]">#</span>
              <span>Projects</span>
            </div>
            {/* LIST */}
            <div className="text-white mt-[14px]">List Of My Projects</div>
          </div>
          {/* Completed Tasks */}
          <div className="">
            {/* Title */}
            <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
              <span className="text-[#c778dd]">#</span>
              <span>Completed Apps</span>
            </div>
            {/* Projects */}
            <div className="flex flex-wrap  gap-4 my-12 ">
              {/* Cards */}
              {projects.map(
                ({
                  img,
                  langs,
                  tittle,
                  disc,
                  id,
                  githubUrl,
                  LiveDemoUrl,
                  isLogo,
                }) => {
                  return (
                    <Project_Card
                      img={img}
                      langs={langs}
                      tittle={tittle}
                      isLogo={isLogo}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Completed_apss;
