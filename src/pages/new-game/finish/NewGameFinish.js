import { Typography } from "@mui/material";
import { useContext } from "react";
import newGameContext from "../../../store/new-game-context";

const NewGameFinish = () => {
  const newGameCtx = useContext(newGameContext);

  return (
    <div>
      <Typography sx={{ mt: "30px" }} variant="h1">
        {newGameCtx.initGameValue.gameName}
      </Typography>
    </div>
  );
};

export default NewGameFinish;
