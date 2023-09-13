import Navbar from "../Components/Navbar";
import BurgerIcon from "../Components/BurgerIcon";
import "../Styles/Sections/Header.scss";
import { Images_logo } from "../Contant/Assets";

const Header = () => {
  const burgerIconNum = 2;

  return (
    <header className="Header">
      <div className="Header_logo flex">
        <img src={Images_logo[0].href} alt="logo" />
      </div>
      <nav className="Navbar">
        <Navbar />
        <div className="BurgerIcon flex">
          <BurgerIcon value={burgerIconNum} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
