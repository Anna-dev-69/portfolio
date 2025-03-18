import "./triangle.component.scss";
import triangle from "../../../assets/triangle.svg";

const Triangle = () => {
  return (
    <div className="Triangle">
      <div className="Triangle__line"></div>
      <div>
        <img style={{ width: "4rem" }} src={triangle} alt="" />
      </div>
      <div className="Triangle__line"></div>
    </div>
  );
};

export default Triangle;
