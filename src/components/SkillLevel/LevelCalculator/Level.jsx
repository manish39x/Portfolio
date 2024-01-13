import { useEffect, useRef } from 'react'
import '../style.scss'

const Level = ({stack, level}) => {
  const container = useRef()
  const levelInner = useRef()
  
  useEffect(() => {
    if(container.current && levelInner.current) {
      container.current.addEventListener('mouseover', () => {
        levelInner.current.style.width = '100%'
      })
      container.current.addEventListener('mouseleave', () => {
        levelInner.current.style.width = '0%'
      })
    }
  }, [])
  return (
    <div className='hover:text-[white] text-[#a1a0a0]' ref={container}>
      <div className=" flex gap-[10px] py-[10px]">
        <span className=' transition-[.5s] text-[12px] sm:text-[14px] w-[20%] max-[20px]'>{stack}:</span>
        <div className=" flex-1 level-border ">
            <div className={`
            ${level === 'intermediate' ? 'w-[66%]':' w-[50%]'}
            ${level === 'intermediate1' ? 'w-[76%]':' w-[50%]'}
            ${level === 'intermediate2' ? 'w-[80%]':' w-[50%]'}
            ${level === 'beginner' ? 'w-[33%]':' w-[50%]'}
            ${level === 'expert' ? 'w-[99%]':' w-[50%]'}
            h-full`}>
              <div className={`level h-full`}>
                <div className="inner-level w-[0px] h-full bg-[greenyellow]" ref={levelInner}>
                  
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Level
