
import gitLogo from "../../assets/github.png";
import "../../App.css";
const Project_Card = ({
  img,
  disc,
  tittle,
  langs,
  githubUrl,
  LiveDemoUrl,
  isLogo,
  Logo,
}) => {
  return (
    <>
      <div className="border   mx-auto w-[90%] md:w-[47%] lg:w-[30%] border-[#abb2bf] p-0">
        {/* Image */}
        <div className="relative">
          {isLogo ? (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <img
                className="relative w-[18px] md:mt-[-105px] lg:top-[329px] lg:right-[6px] lg:w-[9%]  right-3  sm:absolute sm:top-[243px]     cursor-pointer shadow  "
                src={gitLogo}
                alt="githubLogo"
              />
            </a>
          ) : null}
          <img src={img} className="w-[100%] h-[300px]" alt="image" />
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <img
              src={gitLogo}
              className="w-[6.3%] h-[40px] absolute right-[10px] top-[260px]"
              alt="GitLogo"
            />
          </a>
        </div>
        {/* Skills */}
        <div className="flex gap-2  flex-wrap p-2 border-y border-[#abb2bf] text-[#abb2bf]">
          {langs}
        </div>
        {/* disc */}
        <div className=" p-4  ">
          <h2 className="text-[#ffffff9c] pb-4  text-2xl  font-medium">
            {" "}
            {tittle}
          </h2>
          <p className="py-4 text-[# abb2bf]">{disc}</p>
          {/* BTNs */}
          <div className=" py-2 px-4 border w-[220px]  border-[#c778dd] hover:bg-[#c778dd33] duration-150 ">
            <a href={LiveDemoUrl} target="_blank">
              <button className="">
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
