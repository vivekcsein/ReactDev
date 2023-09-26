// import { useState } from "react";
import SignupForm from "./files/Form/SignupForm";
import "../Styles/Components/Form.scss";
import Button from "./Button";

const Form = () => {
  const signUpText = {
    id: 1,
    text: "Sign Up",
    type: "active",
  };
  const logInText = {
    id: 1,
    text: "Log IN",
    type: "normal",
  };
  return (
    <div className="form_user">
      <div className="form_btn">
        <Button btnText={signUpText} />
        <Button btnText={logInText} />
      </div>
      <br />
      <SignupForm />
    </div>
  );
};

export default Form;
