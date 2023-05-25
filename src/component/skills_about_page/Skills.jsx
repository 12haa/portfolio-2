import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "Languages",
      languages: ["TypeScript", "Lua", "Python", "JavaScript"],
    },
    { title: "Databases", languages: ["SQLite", "PostgreSQL", "Mongo"] },
    {
      title: "Tools",
      languages: [
        "VSCode",
        "Neovim",
        "Linux",
        "Figma",
        "XFCE",
        "Arch",
        "Git",
        "Font Awesome",
      ],
    },
    {
      title: "Other",
      languages: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
    },
    {
      title: "Frameworks",
      languages: [
        "React",
        "Vue",
        "Disnake",
        "Discord.js",
        "Flask",
        "Express.js",
      ],
    },
  ];

  return (
    <div className="px-5 max-w-[1560px] mx-auto  pt-20 py-10">
      {/* Title */}
      <div className=" mb-12   text-[32px] font-medium text-white">
        <span className="text-[#c778dd]">#</span>Skills
      </div>
      {/* Cards */}
      <div>
        {/* card */}
        <div className="flex justify-around   gap-4 md:gap-2 flex-wrap">
          {skills.map(({ title, languages }) => {
            return (
              <>
                <div className="w-[90%] md:w-[24%] sm:w-[45%] lg:w-[18%]  border border-[#abb2bf]">
                  <div className="p-2 text-white">
                    <h2 className="font-semibold">{title}</h2>
                  </div>
                  <div className="flex gap-2 border-t border-[#abb2bf] flex-wrap p-2  text-white">
                    {languages.map((e) => {
                      return <span>{e}</span>;
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
