import { Typography } from "@mui/material";
import MyInput from "../../components/MyInput";

const NewGame = () => {
  return (
    <form>
      <div style={{ margin: "2rem" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Name your game!
        </Typography>
        <MyInput fullWidth />
      </div>
      <div style={{ margin: "6rem 0" }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", padding: "0 1rem" }}
        >
          Anything you would like to tell the players before they start...
        </Typography>
        <MyInput fullWidth />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">Let's create a password:</Typography>
        <MyInput sx={{ mb: "1rem" }} />
        <Typography variant="h6">And again</Typography>
        <MyInput />
      </div>
    </form>
  );
};

export default NewGame;
