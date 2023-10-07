import SearchBar from "../Components/SearchBar";
import "../Styles/Sections/Hero.scss";
import FormUser from "../Components/FormUser";
// import SelectionBox from "../Components/SelectionBox";
// import Form from "../Components/Form";

// import { season_Theme } from "../Constants/Constant";
// import { Components_List } from "../Constants/ComponentLayout";

const Hero = () => {
  // const [, , , , , , , , , SearchBar] = Components_List;
  return (
    <div className="Hero_section ">
      {/* <SearchBar /> */}
      <FormUser />
      {/* <SelectionBox options={season_Theme} /> */}
      <SearchBar />
    </div>
  );
};

export default Hero;
