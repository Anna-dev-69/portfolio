import "./certificates.component.scss";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";

const Certificates = () => {
  return (
    <div id="Certificates" className="Certificates">
      <div className="Certificates__container">
        <div className="Certificates__title">Certificates</div>

        <div className="Certificates__container-img">
          <img src={s1} alt="" />
          <img src={s2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
