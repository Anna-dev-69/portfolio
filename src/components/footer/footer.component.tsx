import ListContacts from "../header/list-contacts/list-contacts.component";
import Triangle from "../main/triangle/triangle.component";
import "./footer.component.scss";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import address from "../../assets/address.svg";

const Footer = () => {
  return (
    <div id="Contacts" className="Footer">
      <div className="Footer__container">
        <div className="Footer__title">Contacts: </div>

        <div className="Footer__container-info">
          <div className="Footer__info">
            <div
              className="Footer__container-contacts"
              style={{ fontSize: "1.5rem" }}
            >
              <img
                className="Footer__container-contacts-img"
                src={address}
                alt=""
              />
              <div>Address: Krasnodar </div>
            </div>
            <div className="Footer__container-contacts">
              <img
                className="Footer__container-contacts-img"
                src={phone}
                alt=""
              />
              <div>tel: 8(918)386-91-47 </div>
            </div>
            <div className="Footer__container-contacts">
              <img
                className="Footer__container-contacts-img"
                src={email}
                alt=""
              />
              <div>email: angrish1993@mail.ru</div>
            </div>
          </div>
          <div className="Footer__listContact">
            <ListContacts />
          </div>
        </div>
        <div className="Footer__bottom"></div>
      </div>
    </div>
  );
};

export default Footer;
