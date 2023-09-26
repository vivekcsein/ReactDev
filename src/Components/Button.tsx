import "../Styles/Components/Button.scss";
interface btnText {
  id: number;
  h1?: string;
  text: string;
  type: string;
}
type prop = {
  btnText: btnText;
};
const Button = ({ btnText }: prop) => {
  // console.log(btnText.type);
  return (
    <button className={`button_component  button_component_${btnText.type}`}>
      {btnText.h1 ? <h1>{btnText.h1}</h1> : null}
      <p className="text">{btnText.text}</p>
    </button>
  );
};

export default Button;
