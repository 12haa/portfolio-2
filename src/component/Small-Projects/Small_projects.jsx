import React from "react";
import Project_Card from "../Projects_Card/Project_Card";
import toDo from "../../assets/todo.png";
const Small_projcets = () => {
  const SmallProjects = [
    {
      tittle: "Languages",
      langs: ["TypeScript", " ,Lua", " ,Python", " ,JavaScript"],
      isLogo: false,
      img: toDo,
      LiveDemoUrl: "https://to-do-app-smoky-six.vercel.app/",
      githubUrl: "https://github.com/12haa/Simple-ToDo-App/tree/main",
    },
    {
      tittle: "Databases",
      langs: ["SQLite", " ,PostgreSQL", " ,Mongo"],
      isLogo: false,
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
      isLogo: false,
    },
    {
      tittle: "Other",
      langs: ["HTML", ",CSS", ",EJS", ",SCSS", ",REST", ",Jinja"],
      isLogo: false,
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
      isLogo: false,
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
      isLogo: false,
    },
  ];
  return (
    <>
      <div className=" ml-6">
        {/* PROJECTS */}
        <div className=" text-white font-bold text-[32px] ">
          <span className="text-[#c778dd]">#</span>
          <span>Small--Projects</span>
        </div>
        {/* LIST */}
        <div className="text-white mt-[14px] text-[18px] ml-1">
          List Of My <span className="text-[#c778dd]">Simple</span> Projects
        </div>
      </div>
      <div className="text-[23px] text-[#c778dd] mt-5  ">
        -------------------------------------------------------------------------------
      </div>
      {/* Completed Tasks */}
      <div className=" mt-[-40px] ml-4">
        {/* Title */}
        <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
          <span className="text-[#c778dd]">#</span>
          <span>Completed Simple Projects</span>
        </div>
        {/* Projects */}
        <div className="flex flex-wrap  gap-4 my-12 ">
          {/* Cards */}
          {SmallProjects.map(
            ({
              img,
              langs,
              tittle,
              disc,
              id,
              githubUrl,
              LiveDemoUrl,
              index,
            }) => {
              return (
                <Project_Card
                  langs={langs}
                  tittle={tittle}
                  key={index}
                  LiveDemoUrl={LiveDemoUrl}
                  githubUrl={githubUrl}
                  img={img}
                  
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Small_projcets;
