import { Typography } from "@mui/material";
import { useContext } from "react";
import newGameContext from "../../../store/new-game-context";

const NewGameFinish = () => {
  const newGameCtx = useContext(newGameContext);
  for (let i = 1; i < 30; i++) {
    let gameCode = String(Math.floor(Math.random() * 1000000));
    while (gameCode.length < 6) {
      gameCode += "0";
    }
  }
  return (
    <div>
      <Typography sx={{ mt: "30px" }} variant="h1">
        {newGameCtx.initGameValue.gameName}
      </Typography>
    </div>
  );
};

export default NewGameFinish;
