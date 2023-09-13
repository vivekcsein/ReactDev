import "../Styles/Components/BurgerIcon.scss";
type prop = {
  value: number;
};

const BurgerIcon = (prop: prop) => {
  const burgerIconClicked = () => {
    const burgerID = document.getElementById(`burgerIcon${prop.value}`);
    const Navbar_ul = document.getElementsByClassName("Navbar_ul")[0];
    burgerID?.classList.toggle("open");
    Navbar_ul?.classList.toggle("nav_hide");
  };
  switch (prop.value) {
    case 1:
      return (
        <div id="burgerIcon1" onClick={burgerIconClicked}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
      break;

    case 2:
      return (
        <div id="burgerIcon2" onClick={burgerIconClicked}>
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
        <div id="burgerIcon3" onClick={burgerIconClicked}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
      break;

    default:
      return (
        <div id="burgerIcon0" onClick={burgerIconClicked}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
      break;
  }
};

export default BurgerIcon;
