import { nav_Links } from "../Contant/constant";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <ul className="Navbar_ul">
      {nav_Links.map((item) => (
        <li key={item.label}>
          <a href={item.href}>{item.label}</a>
          <div className="Dropdown">
            {item.dropdown ? <Dropdown propdata={item.details} /> : null}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
