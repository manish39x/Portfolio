import React from "react";
import "./style.scss";

const Introduction = () => {
  return (
    <div className="border-y flex-center px-2rem w-[100vw]">
      <div className="parent-container px-[.5rem] sm:px-[2rem]">
        <div className="border-x m-auto relative py-[4rem]">
          <span className="text-white text-[14px] absolute top-[10px] left-[10px]">
            <span className="text-[greenyellow]">01 </span>INTRODUCTION
          </span>
          <div className="introduction text-[#cecece] text-[13px] sm:text-[15px] w-[94%] lg:w-[55%] m-auto">
            Hi, I'm <span className="text-[greenyellow]">Manish</span>, a
            passionate Web Developer and Data Science student at IIT Madras.
            With hands-on experience in the MERN stack, I specialize in building
            dynamic web applications that deliver great user experiences. I’m
            also deeply interested in AI/ML and high-performance systems,
            constantly learning and experimenting with new technologies. Beyond
            coding, I lead and contribute to open-source projects through my
            club, OpenSphere. My mission? To solve real-world problems through
            technology and innovation.
          </div>
          <span className="text-white text-[14px] absolute bottom-[10px] right-[10px]">
            <span className="text-[greenyellow]">01 </span>INTRODUCTION
          </span>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
