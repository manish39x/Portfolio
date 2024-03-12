import React, { useEffect, useRef } from "react";
import "./style.scss";
import ProjectCard from "./ProjectCard";

import projectLogo from "../../assets/logo.webp";
import { projectData } from "./details.js";

const Projects = () => {
  const ovserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        console.log("hi");
        entry.target.classList.add("animate");
      }
    });
  });

  const headTitle = useRef(null);

  useEffect(() => {
    const head = headTitle.current;
    if (!head) return;
    const handelAnimation = () => {
      console.log("hi");
      ovserver.observe(head);
    };
    document.addEventListener("scroll", handelAnimation);
    return () => {
      document.removeEventListener("scroll", handelAnimation);
    };
  });
  return (
    <div className="border-y flex-center">
      <div className="px-[.5rem] sm:px-[2rem] w-full h-full min-h-[30rem] max-w-[110rem]">
        <div className="border-x m-auto project-parent">
          <div className="head relative py-[4rem] overflow-hidden">
            <span className="text-white text-[14px] absolute top-[10px] left-[10px]">
              <span className="text-[greenyellow]">03 </span>PEOJECTS
            </span>

            <h3 className="font-head-title text-white flex-center font-bold">
              MY PEOJECTS
            </h3>
          </div>
          <div className="interaction relative w-[95.5%] m-auto h-[2px] bg-[#80808012]">
            <div className="light h-full absolute top-0 left-0"></div>
          </div>
          <div className="projects mb-[30px] grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-items-center justify-self-center gap-[20px] px-[.5rem] sm:px-[2rem]">
            {projectData.map((project, index) => (
              <ProjectCard
                logo={project.logo}
                type={project.type}
                name={project.name}
                description={project.description}
                link={project.link}
                cover={project.cover}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
