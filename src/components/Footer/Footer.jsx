import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer className=" text-white font-mono md:px-[3.5rem] px-[1rem] py-[4rem] flex flex-col lg:flex-row gap-[10px] justify-center items-center">
      <div className=" mb-[2rem] max-w-[48rem] flex flex-col items-center lg:items-start">
        <h4 className="text-[32px] md:text-[44px] text-center lg:text-left">
          Get in Touch
        </h4>
        <p className="text-normal text-center lg:text-left text-[12px] w-[90%]">
          Thank you for stopping by. I hope you're enjoying your time here. I'm
          passionate about what I do, and I'm always looking for exciting
          freelance opportunities to collaborate on.
        </p>
        <p className="text-normal text-center lg:text-left text-[12px] w-[90%] mt-[12px]">
          If you have any projects or tasks that you think I might be a good fit
          for, I'd love to hear about them! Please feel free to reach out and
          discuss any freelance work you have in mind. I'm eager to bring my
          skills and expertise to your projects.
        </p>
        <div className="social-icons text-[20px] mt-[20px] flex gap-[2rem]">
          <i class="bx bxl-instagram cursor-pointer hover:text-[greenyellow]"></i>
          <i class="bx bxl-linkedin cursor-pointer hover:text-[greenyellow]"></i>
          <i class="bx bxl-twitter cursor-pointer hover:text-[greenyellow]"></i>
          <i class="bx bx-envelope cursor-pointer hover:text-[greenyellow]"></i>
        </div>
      </div>
      <div className="contact-form flex flex-col gap-[1rem] min-[19rem] max-w-[25rem] w-[90%]">
        <input
          type="email"
          placeholder="Enter your email"
          className="text-normal text-black border-none outline-none text-[14px] px-[8px] py-[6px] rounded-sm w-full"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          placeholder="Message"
          className="text-normal text-black border-none outline-none text-[14px] px-[8px] py-[6px] rounded-sm w-full"
        ></textarea>
        <button className="py-[6px] rounded-sm text-white bg-[#6058588a] hover:text-[black] hover:bg-[greenyellow]">
          SEND
        </button>
      </div>
      <span className="text-[#898888] text-[13px] text-normal absolute bottom-[5px] left-[50%] translate-x-[-50%]">
        Manish's Portfolio <span className="text-[10px]">&copy;</span>
      </span>
    </footer>
  );
};

export default Footer;
