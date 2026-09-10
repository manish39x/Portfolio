import React from "react";
import "./style.scss";
import Level from "./LevelCalculator/Level";

const SkillLevel = () => {
  return (
    <div className="w-screnn border-y flex-center">
      <div className="w-full h-full max-w-[110rem] px-[.5rem] sm:px-[2rem] m-auto">
        <div className="border-x ">
          <div className="frontend pt-[4rem] px-[1rem] relative ">
            <span className="text-[greenyellow] text-[14px] absolute top-[10px] left-[10px]">
              02 <span className="text-white">SKILLS: Languages</span>
            </span>
            <div className="content-skill text-white">
              <Level stack={"Python"} level={"intermediate1"} />
              <Level stack={"Sql"} level={"intermediate1"} />
              <Level stack={"Javascript"} level={"intermediate2"} />
              <Level stack={"Typescript"} level={"intermediate"} />
            </div>
          </div>
          <div className="backend pt-[4rem] px-[1rem] relative">
            <span className="text-[greenyellow] text-[14px] absolute top-[10px] left-[10px]">
              02 <span className="text-white">SKILLS: Tools</span>
            </span>
            <div className="content-skill text-white">
              <Level stack={"Airflow"} level={"intermediate1"} />
              <Level stack={"DBT"} level={"intermediate"} />
              <Level stack={"Pyspark"} level={"intermediate"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillLevel;
