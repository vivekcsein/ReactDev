import { nav_Links } from "../Constants/Constant";
import Dropdown from "./Dropdown";
import "../Styles/Components/Navbar.scss";

type element = HTMLElement | Element | null;
type prop = {
  value: number;
};
const Navbar = ({ value }: prop) => {
  const toggleArrow_Up = "expand_more";
  let toggleArrow: Element;
  let toggledropdown: any;
  let button_info: any;
  let burgerIconClass: element;
  const dropdownClicked = () => {
    toggleArrow = document.getElementsByClassName("toggleArrow")[0];
    toggledropdown = document.getElementsByClassName("dropdown")[0];
    button_info = document.getElementsByClassName("button_info")[0];
    burgerIconClass = document.getElementById(`burgerIcon${value}`);

    if (burgerIconClass !== null) {
      if (window.getComputedStyle(burgerIconClass).display === "block") {
        if (toggleArrow.innerHTML === "expand_more") {
          toggleArrow.innerHTML = "expand_less";
          toggledropdown.style.display = "block";
          button_info.style.display = "none";
          button_info.style.opacity = 0;
        } else {
          toggleArrow.innerHTML = "expand_more";
          toggledropdown.style.display = "none";
          button_info.style.display = "none";
          button_info.style.opacity = 0;
        }
      }
    }
  };

  return (
    <ul className="Navbar_ul">
      {nav_Links.map((item) => (
        <li key={item.label}>
          {/* logic for dropdown */}
          {item.dropdown ? (
            <ul>
              <li className="flex button_navbar" onClick={dropdownClicked}>
                {item.label}
                <span className="material-symbols-sharp toggleArrow ">
                  {toggleArrow_Up}
                </span>
                <span className="button_info">Click Here</span>
              </li>
              <li className="dropdown">
                <Dropdown data={item.details} />
              </li>
            </ul>
          ) : (
            <a href={item.href} className=" flex button_navbar">
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
