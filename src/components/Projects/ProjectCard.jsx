import React from "react";

const ProjectCard = ({ logo, name, description, type }) => {
  return (
    <div className="project-card flex flex-col gap-[1rem] items-start p-[1rem]">
      <div className="logo flex gap-[10px] items-center text-white">
        <img
          src={logo}
          alt="logo"
          className="w-[8rem] overflow-hidden rounded-[8px]"
        />
        <h3 className="text-[28px] ">
          {name}: <span className="text-[20px] text-[#ece5e5]">{type}</span>
        </h3>
      </div>
      <div className="description text-[#656565] text-[12px]">
        {description}
      </div>
    </div>
  );
};

export default ProjectCard;
