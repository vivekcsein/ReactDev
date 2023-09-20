import { nav_Links } from "../Constants/Constant";
import Dropdown from "./Dropdown";
import "../Styles/Components/Navbar.scss";
// import { useMemo } from "react";

const Navbar = () => {
  const toggleArrow_Up = "expand_more";
  let toggleArrow: Element;
  let toggledropdown: any;
  let button_type2: any;
  const dropdownClicked = () => {
    toggleArrow = document.getElementsByClassName("toggleArrow")[0];
    toggledropdown = document.getElementsByClassName("dropdown")[0];
    button_type2 = document.getElementsByClassName("button_type2")[0];
    if (toggleArrow.innerHTML === "expand_more") {
      toggleArrow.innerHTML = "expand_less";
      toggledropdown.style.display = "block";
      button_type2.style.display = "none";
      button_type2.style.opacity = 0;
    } else {
      toggleArrow.innerHTML = "expand_more";
      toggledropdown.style.display = "none";
      button_type2.style.display = "block";
      button_type2.style.opacity = 0;
    }
  };

  return (
    <ul className="Navbar_ul">
      {nav_Links.map((item) => (
        <li key={item.label}>
          {/* logic for dropdown */}
          {item.dropdown ? (
            <ul>
              <li className="flex button_type1" onClick={dropdownClicked}>
                {item.label}
                <span className="material-symbols-sharp toggleArrow ">
                  {toggleArrow_Up}
                </span>
                <span className="button_type2">Click Here</span>
              </li>
              <li className="dropdown">
                <Dropdown propdata={item.details} />
              </li>
            </ul>
          ) : (
            <a href={item.href} className=" flex button_type1">
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
