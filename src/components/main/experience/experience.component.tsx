import "./experience.component.scss";
import experienceList, { IExperienceList } from "../../../data/experience-list";
import { useRef, useState } from "react";
import SliderComponent from "./slider/slider.component";
import arrow from "../../../assets/arrow.svg";
import ExperienceTrack from "./experience-track/experience-track.component";

const Experience = () => {
  const ulRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollByItem = (direction: "next" | "prev") => {
    if (!ulRef.current) return;

    const newIndex =
      direction === "next"
        ? Math.min(currentIndex + 1, experienceList.length - 1)
        : Math.max(currentIndex - 1, 0);

    setCurrentIndex(newIndex);

    const itemWidth = ulRef.current.firstElementChild?.clientWidth! + 16 || 0;

    ulRef.current.scrollBy({
      left: direction === "next" ? itemWidth : -itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <div id="Experience" className="Experience">
      <div className="Experience__container">
        <div className="Experience__title" style={{ textAlign: "center" }}>
          Projects
        </div>

        <div className="Experience__container-slider">
          <button
            className="Experience__btn"
            onClick={() => scrollByItem("prev")}
          >
            <img
              style={{
                width: 40,
                transform: "rotate(180deg)",
                filter: "var(--filter-img)",
              }}
              src={arrow}
            />
          </button>
          <SliderComponent ulRef={ulRef} experienceList={experienceList} />
          <button
            className="Experience__btn"
            onClick={() => scrollByItem("next")}
          >
            <img
              style={{ width: 40, filter: "var(--filter-img)" }}
              src={arrow}
            />
          </button>
        </div>
        <ExperienceTrack currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default Experience;
