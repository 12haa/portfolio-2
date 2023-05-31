import { NavLink } from "react-router-dom";

// import ManLogo from "./images/man.png";
const AboutSec = () => {
  return (
    <>
      <div className=" px-5 max-w-[1560px] mx-auto  py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* disc */}

            <p className="text-[#ABB2BF] ">
              Hello, i’m Mohamad!
              <br />
              <br />
              I’m a self-taught front-end developer based in Shiraz, IRAN. I can
              develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            {/* button */}
            <div className="mt-7">
              <a
                href="#"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white "
              >
                <NavLink to="/about">
                  <button>Read more -{">"}</button>
                </NavLink>
              </a>
            </div>
          </div>
          {/* right */}
          {/* <div className=" mx-auto">
            <img className="mx-auto" src={ManLogo} alt="ManLogo" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutSec;
