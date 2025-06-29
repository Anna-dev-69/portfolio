import React from "react";
import "./experience-card.component.scss";
import internet from "../../../../assets/internet.svg";
import git from "../../../../assets/github.svg";

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
            <img style={{ width: 30 }} src={internet} />
          </a>
          <a href={props.hrefGit} className="Card__title">
            <img style={{ width: 30 }} src={git} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ExperienceCard);
