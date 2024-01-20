import React from 'react'
import image from '../../assets/imgx1.png'

const ProjectCard = () => {
  return (
    <div className='project-card w-[95%] max-w-[60rem] h-[90%] rounded-[12px]'>
      <div className="project-details px-[20px] py-[20px] text-white">
        <div className="head-details flex flex-col sm:flex-row justify-start gap-[10px]">
          <div className="image w-[60%] sm:w-[50%] md:w-[60%] rounded-[10px] overflow-hidden">
            <img src={image} alt="" />
          </div>
          <div className="details sm:w-[50%]">
            <span className='text-[30px]'>ZORO</span>
            <p className=' font-sans text-[12px] md:text-[13px]'>Zoro is a dynamic streaming application designed for anime enthusiasts seeking a vibrant space to connect, engage, and stay updated on the latest anime news and releases. Users can dive into real-time discussions, share insights, and connect with like-minded individuals, creating a lively atmosphere around their favorite anime updates. Elevating the anime-watching experience...</p>
          </div>
        </div>

        <div className="more text-[12px] text-[#a7ff5b] py-[20px]">
          <ul className=' font-sans'>
            <li className=' font-sans'>Utilized MongoDB Aggregation Pipeline for advanced data processing.</li>
            <li className=' font-sans'>Integrated Socket.IO for real-time communication features.</li>
            <li className=' font-sans'>Successfully implemented a secure payment gateway for seamless transactions in the Zoro anime streaming app.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
