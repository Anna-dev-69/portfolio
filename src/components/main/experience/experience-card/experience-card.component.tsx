import React from "react";
import "./experience-card.component.scss";

interface CardProps {
  imgSrc: string;
  hrefDeploy: string;
  hrefGit: string;
}

const ExperienceCard: React.FC<CardProps> = (props) => {
  return (
    <div className="Card">
      <div className="Card__container">
        <div className="Card__container-img">
          <img className="Card__container-img-img" src={props.imgSrc} alt="" />
        </div>
        <div className="Card__container-content">
          <a href={props.hrefDeploy} className="Card__title">
            Deploy link
          </a>
          <a href={props.hrefGit} className="Card__title">
            Github link
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ExperienceCard);
