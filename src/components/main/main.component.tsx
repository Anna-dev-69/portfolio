import AboutMe from "./about-me/about-me.component";
import Experience from "./experience/experience.component";
import "./main.component.scss";
import MySkills from "./my-skills/my-skills.component";
import Certificates from "../certificates/certificates.component";

const Main = () => {
  return (
    <div className="Main">
      <MySkills />
      <AboutMe />
      <Experience />
      <Certificates />
    </div>
  );
};

export default Main;
