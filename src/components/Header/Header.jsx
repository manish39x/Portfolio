import React, { useState, useRef, useEffect } from 'react'
import './style.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const scrollerInner = useRef() 
  const menuBar = useRef() 

  const addAnimation = () => {
  if(scrollerInner.current) {
    const scrollerContent = Array.from(scrollerInner.current.children)
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.current.appendChild(duplicatedItem)
    })
  }
}

useEffect(() => {
  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  return;
}, [])

  
  return (
    <div className='text-white flex-center header'>
      <div className="container w-full max-w-[110rem] px-[.5rem] sm:px-[2rem] py-[.7rem] flex items-center justify-between">
        <div className="LOGO flex flex-col overflow-hidden leading-6 ">
          <span className='text-[12px] overflow-hidden leading-3 text-[#ffffff]'>MANISH'S</span>
          <span className='text-[22px] sm:text-[28px] overflow-hidden'>PORTFOLIO<span className='text-[12px]'>&copy;</span></span>
        </div>
        {/* <div className=" overflow-hidden w-[40px] h-[20px]" >
          <Toggle />
        </div> */}
        <div className="nav">
          <nav>
            <ul className='flex items-center gap-[10px] text-[20px] '>
              <li className='flex-center cursor-pointer' onClick={() => setShowMenu(true)}>
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
      
      <div className={`${showMenu ? 'flex':'hidden'} menu w-[100vw] h-screen  fixed z-[10] top-0  justify-end right-[0] overflow-hidden`} onClick={(e) => {
       if(!menuBar.current?.contains(e.target)){
        setShowMenu(false)
       }
      }}>
        <div className="menu-bar relative w-[100%] sm:w-[50%] sm:min-w-[35rem] h-full bg-[black]" ref={menuBar}>
          <div className="vertical-scroller absolute bottom-[-30px] left-[30px]  flex items-center bg-[greenyellow]">
            <div className="inner-scroller  text-[black] flex items-center gap-[20px] py-[10px] px-[20px]" ref={scrollerInner}>
              <div className="LOGO flex flex-col overflow-hidden leading-6 ">
              <span className='text-[14px] overflow-hidden leading-3 '>MANISH'S</span>
              <span className='text-[22px] sm:text-[28px] overflow-hidden'>PORTFOLIO<span className='text-[12px]'>&copy;</span></span>
            </div>

            <div className="LOGO flex flex-col overflow-hidden leading-6 ">
              <span className='text-[14px] overflow-hidden leading-3 '>MANISH'S</span>
              <span className='text-[22px] sm:text-[28px] overflow-hidden'>PORTFOLIO<span className='text-[12px]'>&copy;</span></span>
            </div>

            <div className="LOGO flex flex-col overflow-hidden leading-6 ">
              <span className='text-[14px] overflow-hidden leading-3 '>MANISH'S</span>
              <span className='text-[22px] sm:text-[28px] overflow-hidden'>PORTFOLIO<span className='text-[12px]'>&copy;</span></span>
            </div>

            <div className="LOGO flex flex-col overflow-hidden leading-6 ">
              <span className='text-[14px] overflow-hidden leading-3 '>MANISH'S</span>
              <span className='text-[22px] sm:text-[28px] overflow-hidden'>PORTFOLIO<span className='text-[12px]'>&copy;</span></span>
            </div>
            <div className="LOGO flex flex-col overflow-hidden leading-6 ">
              <span className='text-[14px] overflow-hidden leading-3 '>MANISH'S</span>
              <span className='text-[22px] sm:text-[28px] overflow-hidden'>PORTFOLIO<span className='text-[12px]'>&copy;</span></span>
            </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Header
