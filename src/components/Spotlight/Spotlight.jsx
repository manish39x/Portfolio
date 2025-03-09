import React from "react";
import "./style.scss";
import EyeBall from "../../utils/EyeBall/EyeBall";

const Spotlight = () => {
  return (
    <div className="  flex-center spotlight-container w-[100vw] ">
      <div className="px-[1rem] sm:px-[2rem] w-full h-full max-w-[110rem] ">
        <div className=" h-full spotlight w-full overflow-hidden text-white slide ">
          <div className="inp-info h-full py-[.7rem] px-[1rem] overflow-hidden ">
            <div className=" flex items-center gap-[3rem] sm:gap-[5rem] overflow-hidden">
              <h3 className="tall-text leading-[1] overflow-hidden">HELLO</h3>
              <div className="eye-box overflow-visible">
                <EyeBall />
              </div>
            </div>
            <h3 className=" overflow-hidden tall-text leading-[1]">
              I AM MANISH.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
