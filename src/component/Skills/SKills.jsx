import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import Shapes from "./images/shapes.png";
const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Languages",
      languages: ["TypeScript", "Lua", "Python", "JavaScript"],
    },
    { title: "Databases", id: 2, languages: ["SQLite", "PostgreSQL", "Mongo"] },
    {
      title: "Tools",
      id: 3,
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
      id: 4,
      languages: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
    },
    {
      title: "Frameworks",
      id: 5,
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

  const handleClicked = (e) => {

    let number = Number(e?.target?.attributes[1]?.value);

    setCurrentItem(number);
  };

  const [isOpen, setIsOpen] = useState();

  const [currentItem, setCurrentItem] = useState(null);

  console.log(currentItem);
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>skills
            </div>
            <div className="line w-1/3 h-px bg-[#C778DD]"></div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
          {/* left */}
          <motion.div
            className="mx-auto "
            whileHover={{
              scale: [1, 1, 1, 1, 1],
              rotate: [290, 3, , 200],
              borderRadius: ["30%", "50%", "250%", "50%", "20%"],
            }}
          >
            <img className=" w-full mx-auto " src={Shapes} alt="" />
          </motion.div>
          {/* right & mapping */}
          <motion.div className=" mx-auto border-2 flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4  h-[300px] ">
            {skills.map(({ title, languages, id }) => {
              return (
                <Fragment key={id}>
                  <motion.div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF] hover:bg-[#C778DD] hover:text-black">
                    <motion.div className=" p-2" layout>
                      <motion.h2
                        onClick={handleClicked}
                        className=" font-semibold"
                        layout="position"
                        data-active={id}
                        
                      >
                        {title}
                      </motion.h2>
                    </motion.div>
                    <motion.div
                      className={`${
                        currentItem === id
                          ? "h-[40px ] opacity-1 "
                          : "h-[-200px] opacity-0"
                      }   flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#CBB2BF] hover:text-black `}
                      layout="position"
                    >
                      {currentItem === id &&
                        languages.map((e, index) => {
                          return <span key={index}>{e} , </span>;
                        })}
                    </motion.div>
                  </motion.div>
                </Fragment>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
