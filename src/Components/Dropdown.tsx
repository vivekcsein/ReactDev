import "../Styles/Components/Dropdown.scss";
import { NavLink } from "react-router-dom/";
interface propObj {
  value: number;
  href: string;
  label: string | Number;
  dropdown: Boolean;
  details?: any;
}

type propType = Array<propObj>;

const Dropdown = ({ propdata }: { propdata: propType }) => {
  return (
    <ul className="Dropdown_ul">
      {propdata.map((item: any) => (
        <li key={item.label}>
          <NavLink to={item.href}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
