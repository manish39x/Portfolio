import React from 'react'
import './style.scss'

const Header = () => {
  return (
    <div className='text-white flex-center header'>
      <div className="container w-full max-w-[110rem] px-[.5rem] sm:px-[2rem] py-[.7rem] flex items-center justify-between">
        <div className="LOGO flex flex-col overflow-hidden leading-6 ">
          <span className='text-[12px] overflow-hidden leading-3 text-[#ffffff]'>MANISH'S</span>
          <span className='text-[22px] sm:text-[28px] overflow-hidden'>PERTFOLIO<span className='text-[12px]'>&copy;</span></span>
        </div>
        {/* <div className=" overflow-hidden w-[40px] h-[20px]" >
          <Toggle />
        </div> */}
        <div className="nav">
          <nav>
            <ul className='flex items-center gap-[10px] text-[20px] '>
              <li className='flex-center cursor-pointer'>
                <i className='bx bx-menu text-[28px] hover:text-[greenyellow]'></i>
              </li>
              <li className='flex-center cursor-pointer'>
                <a href="https://github.com/Manish453400000" target='_blank' className='flex-center '>
                  <i className='bx bxl-github text-[28px] hover:text-[greenyellow]'></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
