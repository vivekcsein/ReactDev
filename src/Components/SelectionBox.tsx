import "../Styles/Components/SelectionBox.scss";
import { useState, useEffect } from "react";
interface propData {
  id: number;
  label: string;
  theme?: string | Number;
}

type props = {
  options: Array<propData> | undefined;
};

type initVal = {
  id: number;
  label?: string;
  theme?: string | Number;
};
const initVal = (): initVal => {
  return {
    id: 0,
    label: "",
    theme: "",
  };
};

const SelectionBox = ({ options }: props) => {
  const [newSelected, setNewSelected] = useState(initVal);

  const onChange = (e: any) => {
    let value = options?.find(
      (option) => option.id === parseInt(String(e.target.value))
    );
    if (!value) {
      return;
    }
    setNewSelected({ id: value.id, label: value.label, theme: value.theme });
  };

  useEffect(() => {
    if (!newSelected) {
      return;
    }
    document.body.style.background = newSelected.label
      ? `var(--${newSelected.label})`
      : `var(--bg_gradient)`;
  }, [newSelected]);

  if (options) {
    return (
      <select className="selectionBox" onChange={onChange}>
        {options.map((elem) => {
          return (
            <option value={elem.id} key={elem.id}>
              {elem.label}
            </option>
          );
        })}
      </select>
    );
  }
};
export default SelectionBox;
