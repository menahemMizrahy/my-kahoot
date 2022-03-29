import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyInput from "../../components/MyInput";
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

const NewGame = () => {
  const newGameCtx = useContext(newGameContext);

  const gameName = useInput("", (name) => name.trim().length);
  const message = useInput("");
  const password = useInput("", passwordValidation);
  const passwordAgain = useInput("", confirmPassword(password.value));

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

  return (
    <form onSubmit={submitHandler}>
      <div style={{ margin: "2rem" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Name your game!
        </Typography>
        <MyInput fullWidth {...gameName} />
      </div>
      <div style={{ margin: "6rem 0" }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", padding: "0 1rem" }}
        >
          Anything you would like to tell the players before they start...
        </Typography>
        <MyInput fullWidth {...message} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">Let's create a password:</Typography>
        <MyInput sx={{ mb: "1rem" }} {...password} />
        <Typography variant="h6">And again</Typography>
        <MyInput {...passwordAgain} />
        <Button
          type="submit"
          onClick={validateFileds}
          variant="contained"
          sx={{
            mt: "1em",
            height: "110px",
            width: "110px",
            borderRadius: "50%",
            fontSize: "20px",
            alignSelf: "center",
          }}
        >
          submit
        </Button>
      </div>
    </form>
  );
};

export default NewGame;
