import "../Styles/Sections/Hero.scss";
import FormUser from "../Components/FormUser";
// import SelectionBox from "../Components/SelectionBox";
// import Form from "../Components/Form";

// import { season_Theme } from "../Constants/Constant";

const Hero = () => {
  return (
    <div className="Hero_section ">
      <FormUser />
      {/* <SelectionBox options={season_Theme} /> */}
    </div>
  );
};

export default Hero;
