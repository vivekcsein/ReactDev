import "../Styles/Components/Dropdown.scss";
interface propObj {
  value: number;
  href: string;
  label: string | Number;
}

type propType = Array<propObj>;

interface prop {
  data: propType | undefined;
}

const Dropdown = ({ data }: prop) => {
  return (
    <ul className="Dropdown_ul">
      {data != undefined
        ? data.map((item: any) => (
            <li key={item.label} className=" flex_center button_navbar">
              <a href={item.href}>{item.label}</a>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Dropdown;
