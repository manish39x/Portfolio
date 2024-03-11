import React from "react";

const ProjectCard = ({ logo, name, description, type, link, cover }) => {
  return (
    <div className="project-card max-w-[40rem] relative flex flex-col justify-between gap-[1rem] items-start p-[1rem]">
      <div className="background w-[100%] h-[100%] rounded-sm absolute top-0 left-0 z-[-2] overflow-hidden ">
        <div className="inner-div w-full h-full relative overflow-hidden">
          <img
            src={cover}
            alt=""
            className=" w-full opacity-[.7] object-cover absolute top-0 left-0 cover-img"
          />
          <div className="layer w-[100%] h-[100%] absolute bottom-[0px] left-0"></div>
        </div>
      </div>
      <div className="details w-full h-full flex flex-col justify-between gap-[1rem] items-start">
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
              User-friendly design for seamless navigation and enjoyable
              browsing experience.
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
            href={link}
            target="_blank"
            className=" block w-full h-full py-[10px] "
          >
            View Project
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
