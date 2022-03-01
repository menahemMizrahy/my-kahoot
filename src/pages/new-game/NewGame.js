import { Typography, Card } from "@mui/material";
import MyInput from "../../components/MyInput";
import MyPaper from "../../layout/MyPaper";

const NewGame = () => {
  return (
    <MyPaper>
      <form>
        <Card sx={{ m: "1cm" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Name your game!
          </Typography>
          <MyInput fullWidth />
        </Card>
        <Card>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Anything you would like to tell the players before they start...
          </Typography>
          <MyInput fullWidth />
        </Card>
      </form>
    </MyPaper>
  );
};

export default NewGame;
