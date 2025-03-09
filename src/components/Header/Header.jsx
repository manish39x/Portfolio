import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import { audio, slideSound } from "../../assets";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const scrollerInner = useRef();
  const menuBar = useRef();

  const addAnimation = () => {
    if (scrollerInner.current) {
      const scrollerContent = Array.from(scrollerInner.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.current.appendChild(duplicatedItem);
      });
    }
  };

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    return;
  }, []);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    audioEl.volume = 0.3;
    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play();
    }

    setIsPlaying(!isPlaying);
  };

  const slideAudioRef = useRef(null);

  useEffect(() => {
    if (showMenu && isPlaying) {
      if (slideAudioRef.current) {
        slideAudioRef.current.currentTime = 0; // Restart sound
        slideAudioRef.current.playbackRate = 2;
        slideAudioRef.current.volume = 1; // Optional volume setting
        slideAudioRef.current.play();
      }
    }
  }, [showMenu]);

  return (
    <div className="text-white flex-center header">
      <div className="container w-full max-w-[110rem] px-[.5rem] sm:px-[2rem] py-[.7rem] flex items-center justify-between">
        <div className="LOGO flex flex-col overflow-hidden leading-6 ">
          <span className="text-[12px] overflow-hidden leading-3 text-[#ffffff]">
            MANISH'S
          </span>
          <span className="text-[22px] sm:text-[28px] overflow-hidden">
            PORTFOLIO<span className="text-[12px]">&copy;</span>
          </span>
        </div>
        {/* <div className=" overflow-hidden w-[40px] h-[20px]" >
          <Toggle />
        </div> */}
        <div className="nav">
          <nav>
            <ul className="flex items-center gap-[10px] text-[20px] ">
              <li
                className="flex-center cursor-pointer"
                onClick={() => setShowMenu(true)}
              >
                <i className="bx bx-menu text-[28px] hover:text-[greenyellow]"></i>
              </li>
              <li className="flex-center cursor-pointer">
                <audio ref={audioRef} src={audio} autoPlay loop></audio>
                <audio ref={slideAudioRef} src={slideSound}></audio>
                <i
                  className={`fa-solid fa-music ${
                    isPlaying ? "text-[greenyellow]" : "text-white"
                  } `}
                  onClick={toggleAudio}
                ></i>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } menu w-[100vw] h-screen  fixed z-[10] top-0  justify-end right-[0] overflow-hidden`}
        onClick={(e) => {
          if (!menuBar.current?.contains(e.target)) {
            setShowMenu(false);
          }
        }}
      >
        <div
          className="menu-bar relative w-[100%] sm:w-[50%] sm:min-w-[35rem] h-full bg-[black]"
          ref={menuBar}
        >
          <div className="vertical-scroller absolute bottom-[-30px] left-[30px]  flex items-center bg-[greenyellow]">
            <div
              className="inner-scroller  text-[black] flex items-center gap-[20px] py-[10px] px-[20px]"
              ref={scrollerInner}
            >
              <div className="LOGO flex flex-col overflow-hidden leading-6 ">
                <span className="text-[14px] overflow-hidden leading-3 ">
                  MANISH'S
                </span>
                <span className="text-[22px] sm:text-[28px] overflow-hidden">
                  PORTFOLIO<span className="text-[12px]">&copy;</span>
                </span>
              </div>

              <div className="LOGO flex flex-col overflow-hidden leading-6 ">
                <span className="text-[14px] overflow-hidden leading-3 ">
                  MANISH'S
                </span>
                <span className="text-[22px] sm:text-[28px] overflow-hidden">
                  PORTFOLIO<span className="text-[12px]">&copy;</span>
                </span>
              </div>

              <div className="LOGO flex flex-col overflow-hidden leading-6 ">
                <span className="text-[14px] overflow-hidden leading-3 ">
                  MANISH'S
                </span>
                <span className="text-[22px] sm:text-[28px] overflow-hidden">
                  PORTFOLIO<span className="text-[12px]">&copy;</span>
                </span>
              </div>

              <div className="LOGO flex flex-col overflow-hidden leading-6 ">
                <span className="text-[14px] overflow-hidden leading-3 ">
                  MANISH'S
                </span>
                <span className="text-[22px] sm:text-[28px] overflow-hidden">
                  PORTFOLIO<span className="text-[12px]">&copy;</span>
                </span>
              </div>
              <div className="LOGO flex flex-col overflow-hidden leading-6 ">
                <span className="text-[14px] overflow-hidden leading-3 ">
                  MANISH'S
                </span>
                <span className="text-[22px] sm:text-[28px] overflow-hidden">
                  PORTFOLIO<span className="text-[12px]">&copy;</span>
                </span>
              </div>
            </div>
          </div>

          <div className="nav-menu flex flex-col justify-between ml-[4rem] font-thin h-full py-[18px] ">
            <div className="top-menu flex  justify-between items-center px-[20px]  pb-[30px]">
              <div className="LOGO flex flex-col overflow-hidden leading-6 ">
                <span className="text-[12px] overflow-hidden leading-3 text-[#ffffff]">
                  MANISH'S
                </span>
                <span className="text-[22px] sm:text-[28px] overflow-hidden">
                  PORTFOLIO<span className="text-[12px]">&copy;</span>
                </span>
              </div>
              <div
                className="cross test w-[50px] cursor-pointer text-[20px] aspect-square rounded-full"
                onClick={() => setShowMenu(false)}
              >
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <nav className="text-[#a39d9d] flex flex-col gap-[15px]">
                <ul className="text-[25px] hover:text-[#dbdbdb] md:text-[35px] font-mono flex justify-start items-center">
                  <span className="text-[16px] text-[greenyellow] align-text-bottom pt-[10tall-textpx] pr-[10px]">
                    O1
                  </span>
                  <span>Blog</span>
                  <span className=" font-sans text-[18px]">
                    <i class="bx bx-link-external"></i>
                  </span>
                  <hr className="" />
                </ul>
                <ul className="text-[25px] hover:text-[#dbdbdb] md:text-[35px] font-mono flex justify-start items-center">
                  <span className="text-[16px] text-[greenyellow] align-text-bottom pt-[13px] pr-[10px]">
                    O2
                  </span>
                  <span>Photo Galary</span>
                  <span className=" font-sans text-[18px]">
                    <i class="bx bx-link-external"></i>
                  </span>
                  <hr className="" />
                </ul>
                <ul className="text-[25px] hover:text-[#dbdbdb] md:text-[35px] font-mono flex justify-start items-center">
                  <span className="text-[16px] text-[greenyellow] align-text-bottom pt-[13px] pr-[10px]">
                    O3
                  </span>
                  <span>Fun with Me</span>
                  <span className=" font-sans text-[18px]">
                    <i class="bx bx-link-external"></i>
                  </span>
                  <hr className="" />
                </ul>
                <ul className="text-[25px] hover:text-[#dbdbdb] md:text-[35px] font-mono flex justify-start items-center">
                  <span className="text-[16px] text-[greenyellow] align-text-bottom pt-[13px] pr-[10px]">
                    O4
                  </span>
                  <span>Hire me!</span>
                  <span className=" font-sans text-[18px]">
                    <i class="bx bx-link-external"></i>
                  </span>
                  <hr className="" />
                </ul>
              </nav>
            </div>

            <div className="bottom-menu h-[6rem] flex flex-col justify-center items-center">
              <div className=" flex gap-[20px] justify-center items-center ">
                <span className="social-links">
                  <a
                    href="https://github.com/manish39x"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                </span>
                <span className="social-links">
                  <a
                    href="https://www.linkedin.com/in/manish-dolui-1b679b296/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </span>
                <span className="social-links">
                  <a
                    href="https://github.com/manish39x"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>
              <div>
                <span className="text-[gray] text-[11px]">
                  &copy;Made by Manish
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
