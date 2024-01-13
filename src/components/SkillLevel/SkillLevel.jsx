import React from 'react'
import './style.scss';

const SkillLevel = () => {
  return (
    <div className='w-screnn border-y flex-center'>
      <div className="w-full h-full max-w-[110rem] px-[1rem] sm:px-[2rem] m-auto">
        <div className="border-x ">
          <div className="frontend py-[.7rem] px-[1rem] relative">
            <span className='text-[greenyellow] text-[14px] absolute top-[10px] left-[10px]'>02 <span className='text-white'>SKILLS</span></span>
            <div className="content-skill">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi iste corrupti ad corporis error laborum ipsam! Corporis veritatis architecto harum debitis ducimus quas quasi beatae rem tenetur amet ut, labore, enim ad. Ipsam hic facere commodi debitis error! Suscipit velit asperiores iusto adipisci.
            </div>
            <span className='text-[greenyellow] text-[14px] absolute bottom-[10px] right-[10px]'>02 <span className='text-white'>SKILLS</span></span>
          </div>
          <div className="backend py-[.7rem] px-[1rem]"></div>
        </div>
      </div>
    </div>
  )
}

export default SkillLevel
