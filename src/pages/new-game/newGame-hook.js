import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/input-hook";
import newGameContext from "../../store/new-game-context";

const passwordValidation = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(password);
};

const confirmPassword = (firstPassword) => {
  return (secondPassword) => {
    return firstPassword === secondPassword;
  };
};

const useNewGame = () => {
  const newGameCtx = useContext(newGameContext);

  const { resetInput: resetName, ...gameName } = useInput(
    "",
    (name) => name.trim().length
  );
  const { resetInput: resetMessage, ...message } = useInput("");
  const { resetInput: resetPassword, ...password } = useInput(
    "",
    passwordValidation
  );
  const { resetInput: resetPasswordAgain, ...passwordAgain } = useInput(
    "",
    confirmPassword(password.value)
  );

  const validateFileds = () => {
    gameName.onBlur();
    password.onBlur();
    passwordAgain.onBlur();
  };

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    if (gameName.error || password.error || passwordAgain.error) return;

    newGameCtx.initGame({
      gameName: gameName.value,
      message: message.value,
      adminPassword: password.value,
    });

    navigate("../questions");
  };
  return {
    submitHandler,
    gameName,
    message,
    password,
    passwordAgain,
    validateFileds,
  };
};
export default useNewGame;
