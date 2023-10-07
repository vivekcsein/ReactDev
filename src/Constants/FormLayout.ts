interface inputField {
  id: number;
  inputType?: number;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export const userFormInput = ({
  id,
  inputType = 0,
  name = "",
  type = "text",
  label,
  placeholder,
  required = false,
}: inputField) => {
  return {
    id: id,
    inputType: inputType,
    name: name,
    type: type,
    label: label,
    placeholder: placeholder,
    required: required,
  };
};

export const LogINFormInput = {
  value: {
    id: 1,
    fullname: "",
    username: "",
    email: "",
    password1: "",
    confirmPassword: "",
  },

  button: {
    id: 0,
    h1: "",
    text: "Log IN",
    type: "normal",
  },

  inputFields: [
    userFormInput({
      id: 1,
      inputType: 1,
      name: "username/email",
      type: "text",
      label: "Enter Username/Email :",
      placeholder: "Enter Username/Email :",
      required: true,
    }),
    userFormInput({
      id: 2,
      inputType: 1,
      name: "password",
      type: "password",
      label: "Enter password :",
      placeholder: "Enter Password :",
      required: true,
    }),
  ],
};

export const SignUPFormInput = {
  value: {
    id: 2,
    fullname: "",
    username: "",
    email: "",
    password1: "",
    confirmPassword: "",
  },

  button: {
    id: 1,
    h1: "",
    text: "Sign up",
    type: "normal",
  },

  inputFields: [
    userFormInput({
      id: 1,
      inputType: 1,
      name: "fullname",
      type: "text",
      label: "Enter Your Name :",
      placeholder: "Enter Your Name :",
      required: true,
    }),
    userFormInput({
      id: 2,
      inputType: 1,
      name: "username",
      type: "text",
      label: "Enter Username :",
      placeholder: "Enter Username :",
      required: true,
    }),
    userFormInput({
      id: 3,
      inputType: 1,
      name: "email",
      type: "text",
      label: "Enter email :",
      placeholder: "Enter email :",
      required: true,
    }),
    userFormInput({
      id: 4,
      inputType: 1,
      name: "password",
      type: "password",
      label: "Enter password :",
      placeholder: "Enter Password :",
      required: true,
    }),
    userFormInput({
      id: 5,
      inputType: 1,
      name: "confirmPassword",
      type: "password",
      label: "Confirm password :",
      placeholder: "Confirm Password :",
      required: true,
    }),
  ],
};
