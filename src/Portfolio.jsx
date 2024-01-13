import { useEffect, useState } from 'react'
import Spotlight from './components/Spotlight/Spotlight'
import Introduction from './components/Introduction/Introduction'
import SkillsList from './components/SkillsList/SkillsList'
import SkillLevel from './components/SkillLevel/SkillLevel'
import Projects from './components/Projects/Projects'


const Portfolio = () => {


  return (
    <div className='relative'>
    <section id='home' className={` `}>
            <Spotlight />
            <div className="info-container overflow-hidden">
              <div className="inp-info text-[greenyellow] w-[100%] max-w-[110rem] px-[1rem] sm:px-[2rem] flex items-center justify-between gap-x-[10px] m-auto text-[20px] py-[1rem]">
                <span className='flex items-center flex-wrap gap-x-[5px]'>
                    <ion-icon name="globe-outline"></ion-icon>
                    <span className='text-[11px] sm:text-[14px] normal-text font-semibold text-[#a5a5a5]'>\doluimanish.dev@gmail.com</span>
                </span>

                <span className='flex items-center flex-wrap gap-x-[5px]'>
                    <ion-icon name="call-outline"></ion-icon>
                    <span className='text-[11px] sm:text-[14px] normal-text font-semibold text-[#a5a5a5]'>+91 9065231675</span>
                </span>

                <span className='sm:flex hidden items-center flex-wrap gap-x-[5px]'>
                    <ion-icon name="home-outline"></ion-icon>
                    <span className='text-[10px] sm:text-[13px] normal-text font-semibold text-[#a5a5a5]'>DOMJUR, HOWRAH, WEST BENGAL</span>
                </span>
              </div>
            </div>
            <Introduction />
            <SkillsList />
            <SkillLevel />
            <Projects />
    </section>
    </div>
  )
}

export default Portfolio
