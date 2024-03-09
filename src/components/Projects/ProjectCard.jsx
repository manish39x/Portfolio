import React from "react";
import cover from "../../assets/cover.jpg";

const ProjectCard = ({ logo, name, description, type, features }) => {
  return (
    <div className="project-card relative flex flex-col gap-[1rem] items-start p-[1rem]">
      <div className="background w-[100%] h-[43%] rounded-sm absolute top-0 left-0 z-[-2] overflow-hidden ">
        <img
          src={cover}
          alt=""
          className=" w-full opacity-[.04] object-cover cover-img"
        />
      </div>
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
      <div className="description text-[#a1a0a0] text-[11px]">
        {description}
      </div>
      <div className="features">
        <ul className="flex flex-col gap-[5px]">
          <li className="text-[#727070] text-[10px] font-normal">
            User-friendly design for seamless navigation and enjoyable browsing
            experience.
          </li>
          <li className="text-[#727070] text-[10px] font-normal">
            Customizable user profiles for tailored recommendations and
            watchlists.
          </li>
          <li className="text-[#727070] text-[10px] font-normal">
            Engage with fellow enthusiasts through reviews, ratings, and
            discussions.
          </li>
        </ul>
      </div>
      <button className="w-full  project-btn bg-[#736e6e1f] mt-[20px] text-[14px] text-[greenyellow]">
        <a
          href="https://zoro-anime00.web.app/"
          target="_blank"
          className=" block w-full h-full py-[10px] "
        >
          View Project
        </a>
      </button>
    </div>
  );
};

export default ProjectCard;
