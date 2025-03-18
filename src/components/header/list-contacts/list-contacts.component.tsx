import listContacts from "../../../data/list-contacts";
import "./list-contacts.component.scss";

const ListContacts = () => {
  return (
    <ul className="ListContacts">
      {listContacts.map((item) => (
        <li key={item.id} className="ListContacts__item">
          <a href={item.href}>
            <img
              style={{ width: "28px" }}
              key={item.id}
              src={item.imgStc}
              alt=""
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListContacts;
