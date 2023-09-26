import { useState } from "react";
interface userData {
  id: number;
  name: string;
  age: number;
  username: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const [userData, setUserData] = useState<userData>({
    id: 0,
    name: "",
    age: 0,
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    // setUserData({ ...userData, [e.target.id]: e.target.value });
    setUserData(() => {
      return {
        ...(e as userData),
      };
    });
  };

  const submit_Form = () => {};

  return (
    <form onSubmit={submit_Form} className="form_signup">
      <input
        type="text"
        name="name"
        placeholder="Enter name:"
        required
        value={userData.name || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter age:"
        required
        value={userData.age || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Enter Username:"
        required
        value={userData.username || ""}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default SignupForm;
