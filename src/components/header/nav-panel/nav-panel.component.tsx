import { Link } from "react-router-dom";
import navPanel from "../../../data/nav-panel";
import "./nav-panel.component.scss";
import Logo from "../logo/logo.component";
import { useRef } from "react";
import BurgerMenu from "../../burger/burger.component";

const NavPanel: React.FC = () => {
  const refUl = useRef<HTMLUListElement>(null);

  return (
    <div className="NavPanel">
      <div className="NavPanel__container">
        <a className="NavPanel__link" href="#">
          <Logo />
        </a>
        <ul className="NavPanel__ul">
          {navPanel.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  console.log("target", target);
                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <BurgerMenu />
    </div>
  );
};

export default NavPanel;
