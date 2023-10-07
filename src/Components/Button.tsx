import "../Styles/Components/Button.scss";
interface btnText {
  id: number;
  h1?: string;
  text: string;
  type: string; //either "normal" or "active"
}
type fun = (e?: any) => void;
type prop = {
  btnText: btnText;
  onClickFunc?: fun | undefined;
};
const Button = ({ btnText, onClickFunc }: prop) => {
  // console.log(btnText.type);
  return (
    <button
      className={`button_component  button_component_${btnText.type}`}
      onClick={onClickFunc}
    >
      {btnText.h1 ? <h1>{btnText.h1}</h1> : null}
      <p className="text">{btnText.text}</p>
    </button>
  );
};

export default Button;
