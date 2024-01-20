import React, { useEffect, useRef } from 'react'
import './style.scss'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const ovserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
        console.log('hi');
        entry.target.classList.add('animate')
      }
    })
  })

  const headTitle = useRef(null)

  useEffect(() => {
    const head = headTitle.current
    if(!head) return;
    const handelAnimation = () => {
      console.log('hi');
      ovserver.observe(head)
    }
    document.addEventListener('scroll', handelAnimation)
    return () => {
      document.removeEventListener('scroll', handelAnimation)
    }
  })
  return (
    <div className='border-y flex-center'>
      <div className="px-[.5rem] sm:px-[2rem] w-full h-full min-h-[30rem] max-w-[110rem]">
        <div className="border-x m-auto project-parent">
          <div className="head relative py-[4rem] overflow-hidden">
            <span className='text-white text-[14px] absolute top-[10px] left-[10px]'><span className='text-[greenyellow]'>03 </span>PEOJECTS</span>

            <h3 className='font-head-title text-white flex-center font-bold'>MY PEOJECTS</h3>
          </div>
          <div className="project-1 mb-[20px] flex-center">
            <ProjectCard />
          </div>
          <div className="project-2 mb-[20px]">

          </div>
          <div className="project-3">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
