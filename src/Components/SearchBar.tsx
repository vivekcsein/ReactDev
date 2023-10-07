import { useRef } from "react";
import "../Styles/Components/SearchBar.scss";

type inputElement = HTMLInputElement;

const SearchBar = () => {
  const inputElement = useRef<inputElement>(null);

  const searchInput = (e: any) => {
    e.preventDefault();
    if (inputElement != undefined) {
      console.log(inputElement.current?.value);
    } else {
      return;
    }
  };

  return (
    <>
      <form action="" className="SearchBar">
        <input ref={inputElement} type="text" />
        <button className="button_component" onClick={searchInput}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
