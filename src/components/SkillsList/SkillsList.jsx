import React, { useEffect, useRef } from 'react';
import './style.scss'

const SkillsList = () => {
  const scrollerInner = useRef()
  const skills = [
  { icon: 'logo-html5', text: 'HTML' },
  { icon: 'logo-css3', text: 'CSS' },
  { icon: 'logo-javascript', text: 'JavaScript' },
  { icon: 'logo-react', text: 'React' },
  { icon: 'logo-nodejs', text: 'Node.js' },
  { icon: 'database', text: 'MongoDB', isFontAwesome: true },
  { icon: 'logo-html5', text: 'HTML' },
  { icon: 'logo-css3', text: 'CSS' },
  { icon: 'logo-javascript', text: 'JavaScript' },
  { icon: 'logo-react', text: 'React' },
  { icon: 'logo-nodejs', text: 'Node.js' },
  { icon: 'database', text: 'MongoDB', isFontAwesome: true },
  { icon: 'logo-html5', text: 'HTML' },
  { icon: 'logo-css3', text: 'CSS' },
  { icon: 'logo-javascript', text: 'JavaScript' },
  { icon: 'logo-react', text: 'React' },
  { icon: 'logo-nodejs', text: 'Node.js' },
  { icon: 'database', text: 'MongoDB', isFontAwesome: true },
];

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
  <div className='py-[1rem] w-screen overflow-visible'>
    <div className="list-scroller box-border px-[2.25rem] text-[#a6a6a6] flex items-center gap-[2.25rem] text-[22px] overflow-visible" ref={scrollerInner}>
      {skills.map((skill, index) => (
        <span key={index} className='flex items-center gap-[2px] shrink-0'>
          {skill.isFontAwesome ? (
            <i className={`fa-solid fa-${skill.icon} text-[18px]`}></i>
          ) : (
            <ion-icon name={skill.icon}></ion-icon>
          )}
          <span className='text-[12px]'>{skill.text}</span>
        </span>
      ))}
    </div>
  </div>
  )
};

export default SkillsList;
