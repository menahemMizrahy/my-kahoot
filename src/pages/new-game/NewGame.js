import { Typography } from "@mui/material";
import MyInput from "../../components/MyInput";
import useInput from "../../hooks/input-hook";

const passwordValidation = (password) => {
  if (password.length !== 8) return false;
};

const confirmPassword = (firstPassword) => {
  return (secondPassword) => {
    return firstPassword === secondPassword;
  };
};

const NewGame = () => {
  const gameName = useInput("");
  const gameDescription = useInput("");
  const gamePassword = useInput("");
  const gameConfirmPassword = useInput("", confirmPassword(gamePassword.value));

  return (
    <form>
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
        <MyInput sx={{ mb: "1rem" }} {...gamePassword} />
        <Typography variant="h6">And again</Typography>
        <MyInput {...gameConfirmPassword} />
      </div>
    </form>
  );
};

export default NewGame;
