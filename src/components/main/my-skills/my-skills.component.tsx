import { useState } from "react";
import mySkills from "../../../data/my-skills";
import "./my-skills.component.scss";
import basicSkills from "../../../data/basicSkills";

const MySkills = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="MySkills" className="MySkills">
      <div className="MySkills__title">My skills</div>

      <div>
        <div className="MySkills__subtitle">Basic skills:</div>
        <ul className="MySkills__ul">
          {basicSkills.map((item, index) => {
            return (
              <li
                style={isHovered ? { transition: "all 500ms" } : {}}
                onMouseLeave={() => setIsHovered(true)}
                className="MySkills__ul-li"
                key={item.id}
              >
                <img
                  style={{ width: "7rem", filter: "var(--filter-icon)" }}
                  src={item.imgSrc}
                  alt=""
                />
                <div
                  style={{ fontSize: "1rem", marginTop: "1rem" }}
                  className="MySkills__title-skills"
                >
                  {item.title}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="MySkills__subtitle">Secondary skills:</div>
        <ul className="MySkills__ul">
          {mySkills.map((item, index) => {
            return (
              <li
                style={isHovered ? { transition: "all 500ms" } : {}}
                onMouseLeave={() => setIsHovered(true)}
                className="MySkills__ul-li"
                key={item.id}
              >
                <img
                  style={{ width: "3rem", filter: "var(--filter-icon)" }}
                  src={item.imgSrc}
                  alt=""
                />
                <div
                  style={{ fontSize: "1rem", marginTop: "1rem" }}
                  className="MySkills__title-skills"
                >
                  {item.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
