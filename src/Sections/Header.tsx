import Navbar from "../Components/Navbar";
import BurgerIcon from "../Components/BurgerIcon";
import "../Styles/Sections/Header.scss";
import { Images_logo } from "../Contant/Assets";

const Header = () => {
  const burgerIconNum = Math.floor(Math.random() * 4 + 1);

  return (
    <header className="Header">
      <div className="Header_logo flex">
        <img src={Images_logo[0].href} alt="logo" />
      </div>
      <nav className="Navbar">
        <Navbar />
      </nav>
      <div className="BurgerIcon flex">
        <BurgerIcon value={burgerIconNum} />
      </div>
    </header>
  );
};

export default Header;
