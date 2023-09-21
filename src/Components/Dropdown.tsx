import "../Styles/Components/Dropdown.scss";
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
        <li key={item.label} className=" flex button_navbar">
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
