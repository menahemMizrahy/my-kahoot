import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/input-hook";
import newGameContext from "../../store/new-game-context";

const passwordValidation = (password) => {
  //the password must contain at list one uppercase letter, one lowercase letter and one number, and must be at list 8 characters
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(password);
};
//wil recive the first password and return the comparence function
const confirmPassword = (firstPassword, secondPassword) => {
  return firstPassword === secondPassword;
};

const useNewGame = () => {
  const newGameCtx = useContext(newGameContext);

  //excluding the valueIsValid for easyer forward to the MyInput component
  //assigning the values if already exist in the context
  const { valueIsValid: gameNameIsValid, ...gameName } = useInput(
    newGameCtx.initGameValue.gameName || "",
    (name) => name.trim().length
  );
  const message = useInput(
    newGameCtx.initGameValue.message || "" //optional
  );
  const { valueIsValid: passwordIsValid, ...password } = useInput(
    newGameCtx.initGameValue.adminPassword || "",
    passwordValidation
  );
  const { valueIsValid: passwordAgainIsValid, ...passwordAgain } = useInput(
    newGameCtx.initGameValue.adminPassword || "",
    confirmPassword.bind(null, password.value)
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

    if (gameNameIsValid && passwordIsValid && passwordAgainIsValid) {
      //dispatching the data to the context
      newGameCtx.initGame({
        gameName: gameName.value,
        message: message.value,
        adminPassword: password.value,
      });

      navigate("../questions");
    } else {
      validateFileds();
    }
  };
  return {
    submitHandler,
    gameName,
    message,
    password,
    passwordAgain,
  };
};
export default useNewGame;
