import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/input-hook";
import newGameContext from "../../store/new-game-context";

const passwordValidation = (password) => {
  //the password must contain at list one uppercase letter, one lowercase letter and one number, and must be at list 8 characters
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(password);
};
//wil recive the first password and return the comparence function
const confirmPassword = (firstPassword) => {
  return (secondPassword) => {
    return firstPassword === secondPassword;
  };
};

const useNewGame = () => {
  const newGameCtx = useContext(newGameContext);
  //excluding the reset functions for easyer forward
  //assigning the values if already exist in the context
  const { resetInput: resetName, ...gameName } = useInput(
    newGameCtx.initGameValue.gameName || "",
    (name) => name.trim().length
  );
  const { resetInput: resetMessage, ...message } = useInput(
    newGameCtx.initGameValue.message || "" //optional
  );
  const { resetInput: resetPassword, ...password } = useInput(
    newGameCtx.initGameValue.adminPassword || "",
    passwordValidation
  );
  const { resetInput: resetPasswordAgain, ...passwordAgain } = useInput(
    newGameCtx.initGameValue.adminPassword || "",
    confirmPassword(password.value)
  );
  //force 'thuching' in the all fileds to ditect errors before submiting
  const validateFileds = () => {
    gameName.onBlur();
    password.onBlur();
    passwordAgain.onBlur();
  };

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    if (gameName.error || password.error || passwordAgain.error) return;
    //dispatching the data
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
