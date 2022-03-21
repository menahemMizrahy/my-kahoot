import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyInput from "../../components/MyInput";
import useInput from "../../hooks/input-hook";

const passwordValidation = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(password);
};

const confirmPassword = (firstPassword) => {
  return (secondPassword) => {
    return firstPassword === secondPassword;
  };
};

const NewGame = () => {
  const gameName = useInput("");
  const gameDescription = useInput("");
  const password = useInput("", passwordValidation);
  const passwordAgain = useInput("", confirmPassword(password.value));

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

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
        <MyInput fullWidth {...gameDescription} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">Let's create a password:</Typography>
        <MyInput sx={{ mb: "1rem" }} {...password} />
        <Typography variant="h6">And again</Typography>
        <MyInput {...passwordAgain} />
        <Button
          type="submit"
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
