import "./header.component.scss";
import NavPanel from "./nav-panel/nav-panel.component";
import { useState } from "react";
import ListContacts from "./list-contacts/list-contacts.component";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="Header">
      <div className="Header__overlay"></div>
      <div className="Header__container">
        <NavPanel />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div className="Header__container-title">
            <div className="Header__i-am">Hi, I am Anna</div>

            <div className="Header__developer">Web-developer</div>

            <ListContacts />
          </div>

          <div
            onMouseLeave={() => setIsHovered(true)}
            style={isHovered ? { transition: "all 300ms" } : {}}
            className="Header__container-img"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
