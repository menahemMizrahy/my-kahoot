import { useState } from "react";

const usePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordChangeHandler = (event) => setPassword(event.target.value);

  const showPasswordHandler = () => setShowPassword(!showPassword);

  return {
    password,
    showPassword,
    passwordChangeHandler,
    showPasswordHandler,
  };
};

export default usePassword;
