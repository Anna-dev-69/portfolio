import "./experience.component.scss";

import Triangle from "../triangle/triangle.component";
import experienceList from "../../../data/experience-list";
import { useState } from "react";

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="Experience" className="Experience">
      <div className="Experience__container">
        <div className="Experience__title" style={{ textAlign: "center" }}>
          Experience
        </div>
        <Triangle />
        <ul className="Experience__ul" style={{ gap: "1rem" }}>
          {experienceList.map((item) => (
            <li
              onMouseLeave={() => setIsHovered(true)}
              style={isHovered ? { transition: "all 500ms" } : {}}
              className="Experience__li"
              key={item.id}
            >
              <a href={item.href}>
                <img
                  className="Experience__img"
                  style={{ width: "100%" }}
                  src={item.imgSrc}
                  alt=""
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
