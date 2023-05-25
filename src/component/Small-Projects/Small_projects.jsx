import React from "react";
import Project_Card from "../Projects_Card/Project_Card";
const Small_projcets = () => {
  const SmallProjects = [
    {
      tittle: "Languages",
      langs: ["TypeScript", " ,Lua", " ,Python", " ,JavaScript"],
    },
    {
      tittle: "Databases",
      langs: ["SQLite", " ,PostgreSQL", " ,Mongo"],
    },
    {
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
    },
    {
      tittle: "Other",
      langs: ["HTML", ",CSS", ",EJS", ",SCSS", ",REST", ",Jinja"],
    },
    {
      tittle: "Frameworks",
      langs: [
        "React",
        ", Vue",
        " , Disnake",
        " , Discord.js",
        " , Flask",
        " ,Express.js",
      ],
    },
    {
      tittle: "Frameworks",
      langs: [
        "React",
        ", Vue",
        " , Disnake",
        " , Discord.js",
        " , Flask",
        " ,Express.js",
      ],
    },
  ];
  return (
    <>
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
          {SmallProjects.map(
            ({ img, langs, tittle, disc, id, githubUrl, LiveDemoUrl }) => {
              return <Project_Card langs={langs} tittle={tittle} />;
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Small_projcets;
