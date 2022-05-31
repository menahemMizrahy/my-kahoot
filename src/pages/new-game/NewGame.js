import { Button, Typography } from "@mui/material";
import MyInput from "../../components/MyInput";
import useNewGame from "./newGame-hook";

const NewGame = () => {
  //spliting the logic and functions to a separated file
  const { submitHandler, gameName, message, password, passwordAgain, validateFileds } =
    useNewGame();
  return (
    <form onSubmit={submitHandler}>
      <div style={{ margin: "2rem" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Name your game!
        </Typography>
        <MyInput fullWidth {...gameName} label="Game Name" />
      </div>
      <div style={{ margin: "6rem 0" }}>
        <Typography variant="h6" sx={{ textAlign: "center", padding: "0 1rem" }}>
          Anything you would like to tell the players before they start...
        </Typography>
        <MyInput fullWidth {...message} label="A Message" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">Let's create a password:</Typography>
        <Typography variant="h7" sx={{ mb: "10px", color: password.error ? "red" : "black" }}>
          the password should contain number/s, an uppercase letter/s and a lowercase letter/s, and
          must be atlist 8 charectores
        </Typography>
        <MyInput sx={{ mb: "1rem" }} {...password} label="Password" />
        <Typography variant="h6">And again</Typography>
        <MyInput {...passwordAgain} label="The Password Again" />
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
