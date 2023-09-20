import { nav_Links } from "../Contant/constant";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <ul className="Navbar_ul">
      {nav_Links.map((item) => (
        <li key={item.label}>
          <NavLink to={item.href}>{item.label}</NavLink>
          <div className="Dropdown">
            {item.dropdown ? <Dropdown propdata={item.details} /> : null}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
