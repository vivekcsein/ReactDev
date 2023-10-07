import "../Styles/Sections/Footer.scss";
import { footer } from "../Constants/Constant";
import "../Styles/Sections/Footer.scss";
import { ReactNode } from "react";

type elem = {
  id: number;
  name: string;
  link: string;
};
const Footer = () => {
  const listItem = (list: any): ReactNode => {
    return list.map((elem: elem) => {
      return (
        <li key={elem.id}>
          <a href={elem.link}>{elem.name}</a>
        </li>
      );
    });
  };
  return (
    <div className="footer_container">
      {footer.footer_Links.map((item) => {
        return (
          <div className="footer_Item" key={item.id}>
            <h1>{item.title}</h1>
            <ul>{listItem(item.links)}</ul>
          </div>
        );
      })}
      <p id="copyright_footer">{footer.footer_message}</p>
    </div>
  );
};

export default Footer;
