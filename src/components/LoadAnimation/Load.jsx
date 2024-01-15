import { useEffect, useState } from 'react'
import './style.scss'
const Load = () => {
  const [show, setShow] = useState('')
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timeoutId = setTimeout(() => {
      setShow('opacity-change')
    },2500)
    
    return () => {
      clearTimeout(timeoutId)
    }
  },[])

  return (
    <div className={`w-[100vw] h-[100vh] bg-[#000000] flex-center fixed z-[99] top-0 left-0 overflow-hidden ${show}`} >
      <div className="logo-load">
        <div className="swipe-animation flex flex-col overflow-hidden leading-6 text-[#ffffff] ">
          <span className='text-[16px] overflow-hidden leading-5 '>MANISH'S</span>
          <span className='text-[36px] overflow-hidden leading-7'>PORTFOLIO<span className='text-[12px]'>&copy;</span></span>
        </div>
      </div>
      <div className="swiper bg-[greenyellow] h-full absolute"></div>
    </div>
  )
}

export default Load
