import { useState } from "react";
import "./burger.component.scss";
import navPanel from "../../data/nav-panel";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="BurgerMenu">
      <div className="BurgerMenu__container">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`BurgerMenu__line-container ${isOpen ? "open" : ""}`}
        >
          <div className="BurgerMenu__line"></div>
          <div className="BurgerMenu__line"></div>
          <div className="BurgerMenu__line"></div>
        </div>
      </div>

      <div className={`BurgerMenu__menu ${isOpen ? "open" : ""}`}>
        <ul>
          {navPanel.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.title}</a>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
