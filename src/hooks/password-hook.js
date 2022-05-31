import { useState } from "react";

const usePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordChangeHandler = (event) => setPassword(event.target.value);

  const showPasswordHandler = () => setShowPassword((show) => !show);

  return {
    password,
    showPassword,
    passwordChangeHandler,
    showPasswordHandler,
  };
};

export default usePassword;
