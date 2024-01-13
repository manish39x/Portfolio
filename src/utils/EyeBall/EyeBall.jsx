import React, { useEffect, useRef } from 'react'
import './style.scss'

const EyeBall = () => {
  const eyeBall = useRef()
  const eyeRetina = useRef()

  useEffect(() => {
    document.addEventListener('mouseleave', (e) => {
      const x = '50%';
      const y = '50%';
      if(eyeBall.current && eyeRetina.current) {
        eyeBall.current.style.top = y
        eyeBall.current.style.left = x
        eyeRetina.current.style.top = y
        eyeRetina.current.style.left = x
        
        eyeBall.current.style.transform = `translate(-${x}, -${y})`
        eyeRetina.current.style.transform = `translate(-${x}, -${y})`
      }

    })

    return () => {
      document.addEventListener('mouseleave', (e) => {
      const x = '50%';
      const y = '50%';
      if(eyeBall.current && eyeRetina.current) {
        eyeBall.current.style.top = y
        eyeBall.current.style.left = x
        eyeRetina.current.style.top = y
        eyeRetina.current.style.left = x
        
        eyeBall.current.style.transform = `translate(-${x}, -${y})`
        eyeRetina.current.style.transform = `translate(-${x}, -${y})`
      }

      })
    }
  },[])


  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX * 100 / window.innerWidth) + '%'
      const y = e.clientY * 100 / window.innerHeight + '%'
      // console.log(e.pageX, e.pageY);
      if(eyeBall.current && eyeRetina.current) {
        eyeBall.current.style.top = y
        eyeBall.current.style.left = x
        eyeRetina.current.style.top = y
        eyeRetina.current.style.left = x
        
        eyeBall.current.style.transform = `translate(-${x}, -${y})`
        eyeRetina.current.style.transform = `translate(-${x}, -${y})`
      }
    })
    return () => {
      document.removeEventListener('mousemove', (e) => {
      const x = (e.clientX * 100 / window.innerWidth) + '%'
      const y = e.clientY * 100 / window.innerHeight + '%'
      // console.log(e.pageX, e.pageY);
      if(eyeBall.current && eyeRetina.current) {
        eyeBall.current.style.top = y
        eyeBall.current.style.left = x
        eyeRetina.current.style.top = y
        eyeRetina.current.style.left = x
        
        eyeBall.current.style.transform = `translate(-${x}, -${y})`
        eyeRetina.current.style.transform = `translate(-${x}, -${y})`
      }
      })
    }
  },[])
  return (
    <div className='eye'>
      <div className="eye-ball-container">

          <div className="eye-ball" ref={eyeBall}>
            <div className="eye-retina" ref={eyeRetina}>
              <div className="relative w-full h-full rounded-[inherit]">
                <div className="glow-o"></div>
                <div className="glow-t"></div>
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default EyeBall
