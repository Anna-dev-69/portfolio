import "./experience.component.scss";
import experienceList, { IExperienceList } from "../../../data/experience-list";
import { useRef } from "react";
import SliderComponent from "./slider/slider.component";
import arrow from "../../../assets/arrow.svg";

const Experience = () => {
  const ulRef = useRef<HTMLUListElement>(null);

  const scrollByItem = (direction: "next" | "prev") => {
    if (!ulRef.current) return;

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
          Experience
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
      </div>
    </div>
  );
};

export default Experience;
