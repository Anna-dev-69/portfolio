import "./experience.component.scss";
import Triangle from "../triangle/triangle.component";
import experienceList, { IExperienceList } from "../../../data/experience-list";
import { useRef, useState } from "react";
import SliderComponent from "./slider/slider.component";

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
        <Triangle />
        <div className="Experience__container-slider">
          <button
            className="Experience__btn"
            onClick={() => scrollByItem("prev")}
          >
            Prev
          </button>
          <SliderComponent ulRef={ulRef} experienceList={experienceList} />
          <button
            className="Experience__btn"
            onClick={() => scrollByItem("next")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
