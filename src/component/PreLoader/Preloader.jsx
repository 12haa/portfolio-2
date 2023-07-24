import React, { useEffect, useState } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../animations/index";
const Preloader = () => {
  const [load, setload] = useState(false);
  useEffect(() => {
    preLoaderAnim();
    setload(false);
  }, [load]);

  return (
    <div className="preloader">
      <div className="text-container">
        <span>Welcome</span>
        <span>To My </span>
        <span className="text-[#C778DD ]">Porfolio </span>
      </div>
    </div>
  );
};

export default Preloader;
