import "../Styles/Components/BurgerIcon.scss";
type prop = {
  value: number;
};
type element = HTMLElement | Element | null;
const BurgerIcon = (prop: prop) => {
  let toggleArrow: Element;
  let toggledropdown: any;
  let button_info: any;
  let burgerID: element;
  let Navbar_ul: element;
  const burgerIconClicked = () => {
    burgerID = document.getElementById(`burgerIcon${prop.value}`);
    Navbar_ul = document.getElementsByClassName("Navbar_ul")[0];
    toggledropdown = document.getElementsByClassName("dropdown")[0];
    toggleArrow = document.getElementsByClassName("toggleArrow")[0];
    button_info = document.getElementsByClassName("button_info")[0];
    toggleArrow.innerHTML = "expand_more";
    toggledropdown.style.display = "none";
    button_info.style.opacity = 0;
    button_info.style.display = "block";
    burgerID?.classList.toggle("open");
    Navbar_ul?.classList.toggle("nav_hide");
  };
  switch (prop.value) {
    case 1:
      return (
        <div
          id="burgerIcon1"
          className="toggle_BurgerIcon"
          onClick={burgerIconClicked}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
      break;

    case 2:
      return (
        <div
          id="burgerIcon2"
          className="toggle_BurgerIcon"
          onClick={burgerIconClicked}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
      break;

    case 3:
      return (
        <div
          id="burgerIcon3"
          className="toggle_BurgerIcon"
          onClick={burgerIconClicked}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
      break;

    default:
      return (
        <div
          id="burgerIcon0"
          className="toggle_BurgerIcon"
          onClick={burgerIconClicked}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
      break;
  }
};

export default BurgerIcon;
