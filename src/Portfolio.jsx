import { useEffect, useRef, useState } from "react";
// import {}
import Spotlight from "./components/Spotlight/Spotlight";
import Introduction from "./components/Introduction/Introduction";
import SkillsList from "./components/SkillsList/SkillsList";
import SkillLevel from "./components/SkillLevel/SkillLevel";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ContactForm/Contact";
import Footer from "./components/Footer/Footer";

const Portfolio = () => {
  const sectionOne = useRef();
  const [issectionEnd, setIsSectionEnd] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rect = sectionOne.current.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
        setIsSectionEnd(true);
      } else {
        setIsSectionEnd(false);
      }
    });
    window.removeEventListener("scroll", () => {
      const rect = sectionOne.current.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
        setIsSectionEnd(true);
      } else {
        setIsSectionEnd(false);
      }
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <section
        id="home"
        className={`${issectionEnd ? "" : ""} `}
        ref={sectionOne}
      >
        <Spotlight />
        <div className="info-container overflow-hidden">
          <div className="inp-info text-[greenyellow] w-[100%] max-w-[110rem] px-[1rem] sm:px-[2rem] flex items-center justify-between gap-x-[10px] m-auto text-[20px] py-[1rem]">
            <span className="flex items-center flex-wrap gap-x-[5px]">
              <ion-icon name="globe-outline"></ion-icon>
              <span className="text-[11px] sm:text-[14px] normal-text font-semibold text-[#a5a5a5]">
                manish39x@gmail.com
              </span>
            </span>

            <span className="flex items-center flex-wrap gap-x-[5px]">
              <ion-icon name="call-outline"></ion-icon>
              <span className="text-[11px] sm:text-[14px] normal-text font-semibold text-[#a5a5a5]">
                +91 9062231672
              </span>
            </span>

            <span className="sm:flex hidden items-center flex-wrap gap-x-[5px]">
              <ion-icon name="home-outline"></ion-icon>
              <span className="text-[10px] sm:text-[13px] normal-text font-semibold text-[#a5a5a5]">
                DOMJUR, HOWRAH, WEST BENGAL
              </span>
            </span>
          </div>
        </div>
        <Introduction />
        <SkillsList />
        <SkillLevel />
        <Projects />
      </section>
      <section className="sectionTwo absolute bg-[red] bottom-0 translate-y-[100%]">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
