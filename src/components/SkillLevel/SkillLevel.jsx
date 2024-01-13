import React from 'react'
import './style.scss';
import Level from './LevelCalculator/Level';

const SkillLevel = () => {
  return (
    <div className='w-screnn border-y flex-center'>
      <div className="w-full h-full max-w-[110rem] px-[1rem] sm:px-[2rem] m-auto">
        <div className="border-x ">
          <div className="frontend pt-[4rem] px-[1rem] relative ">
            <span className='text-[greenyellow] text-[14px] absolute top-[10px] left-[10px]'>02 <span className='text-white'>SKILLS: FRONTEND</span></span>
            <div className="content-skill text-white">
              <Level stack={'HTML'} level={'intermediate1'} />
              <Level stack={'CSS'} level={'intermediate'} />
              <Level stack={'JAVASCRIPT'} level={'intermediate2'} />
              <Level stack={'TAILWIND'} level={'intermediate'} />
            </div>
          </div>
          <div className="backend pt-[4rem] px-[1rem] relative">
            <span className='text-[greenyellow] text-[14px] absolute top-[10px] left-[10px]'>02 <span className='text-white'>SKILLS: BACKEND</span></span>
            <div className="content-skill text-white">
              <Level stack={'NODE JS'} level={'intermediate1'} />
              <Level stack={'MONGO DB'} level={'intermediate'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillLevel
