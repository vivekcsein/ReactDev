import { useState, useEffect } from "react";
import FormInput from "./files/FormUser/FormInput";
import { LogINFormInput, SignUPFormInput } from "../Constants/FormLayout";
import "../Styles/Components/FormUser.scss";
import Button from "./Button";

interface data {
  id: number;
  inputType: number;
  name: string;
  type: string;
  label: string | undefined;
  placeholder: string | undefined;
  required: boolean;
}

const FormUser = () => {
  const [userData, setUserData] = useState(LogINFormInput.value);

  const onChangehandler = async (e: any) => {
    await setUserData(() => {
      return {
        ...userData,
        [e.target.name]: [e.target.value],
      };
    });
    // await console.log(`${userData.fullname} + " " ${e.target.value} `);
  };

  useEffect(() => {
    if (!userData) {
      return;
    }
    // console.log(userData);
  }, [userData]);

  const form_Submit = (e: any) => {
    e.preventDefault();
    const newRecord = { ...userData, id: new Date().getTime().toString() };
    console.log(newRecord);
  };

  const formInput = (data: data) => {
    return (
      <FormInput
        key={data.id}
        userFormInput={data}
        onChangehandler={onChangehandler}
        inputValue={userData}
      />
    );
  };

  let formType = 1;

  const userFormInputs = (formList: any) => {
    return (
      <>
        {formList.inputFields.map((data: data) => {
          return formInput(data);
        })}
        <Button btnText={formList.button} />
      </>
    );
  };

  return (
    <form onSubmit={form_Submit} className="FormUser">
      {formType === 1
        ? userFormInputs(LogINFormInput)
        : userFormInputs(SignUPFormInput)}
    </form>
  );
};

export default FormUser;
