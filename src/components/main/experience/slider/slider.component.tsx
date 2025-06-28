import React from "react";
import { IExperienceList } from "../../../../data/experience-list";
import "./slider.component.scss";
import ExperienceCardComponent from "../experience-card/experience-card.component";

interface SliderProps {
  experienceList: IExperienceList[];

  ulRef: React.RefObject<HTMLUListElement | null>;
}

const Slider: React.FC<SliderProps> = (props) => {
  return (
    <div className="Slider">
      <ul className="Slider__ul" ref={props.ulRef}>
        {props.experienceList.map((item) => (
          <li key={item.id} className="Slider__li">
            <ExperienceCardComponent
              hrefDeploy={item.href}
              hrefGit={item.hrefGit}
              imgSrc={item.imgSrc}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Slider);
