import React from 'react'
import './style.scss'

const Introduction = () => {
  return (
    <div className='border-y flex-center px-2rem w-[100vw]'>
      <div className="parent-container px-[.5rem] sm:px-[2rem]">
        <div className="border-x m-auto relative py-[4rem]">
          <span className='text-white text-[14px] absolute top-[10px] left-[10px]'><span className='text-[greenyellow]'>01 </span>INTRODUCTION</span>
           <div className="introduction text-[#767474] text-[15px] w-[80%] lg:w-[55%] m-auto">
            Hey everyone! I'm Manish, currently navigating the world of BCom, but truth be told, my heart beats faster for technology. Web development has become my playground, and I've honed my skills in frontend magic with HTML, <span className='text-[white]'>CSS</span>, <span className='text-[white]'>JAVASCRIPT</span> , Tailwind, and <span className='text-[white]'>React</span>. On the backend, I dance with <span className='text-[white]'>Node js</span>, Express, and <span className='text-[white]'>MongoDB</span>. Join me on this tech-fueled adventure, where every line of code is a step toward something extraordinary
           </div>
          <span className='text-white text-[14px] absolute bottom-[10px] right-[10px]'><span className='text-[greenyellow]'>01 </span>INTRODUCTION</span>
        </div>
      </div>
    </div>
  )
}

export default Introduction
