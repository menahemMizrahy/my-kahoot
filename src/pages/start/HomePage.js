import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Grid, Typography } from "@mui/material";

import Password from "../../components/Password";
import MyInput from "../../components/MyInput";
import useInput from "../../hooks/input-hook";
import usePassword from "../../hooks/password-hook";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  const adminPassword = usePassword();

  const [enterAsAdmin, setEnterAsAdmin] = useState(false);
  //excluding the reset function from the game code states for easyer forward to the MyInput component
  const { valueIsValid: gameCodeIsValid, ...gameCode } = useInput(
    //setting the default game code if passed to the URL via a link
    querySearch.get("gameCode") || "",
    (value) => value.length === 6
  );

  const gameStartHandler = () => {
    //   if(gameCode === 6)
  };

  const enterAsAdminHandler = () => {
    setEnterAsAdmin(true);
  };

  const createGameHandler = () => {
    navigate("/new-game");
  };

  return (
    <Grid container alignItems="end" sx={{ height: "100%" }}>
      <Grid item xs={1}>
        <Button variant="outlined" sx={{ mt: "1rem" }} onClick={createGameHandler}>
          Create a New Game
        </Button>
      </Grid>
      <Grid
        item
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
        xs={10}
      >
        <Typography variant="h1" sx={{ m: "0.8em" }}>
          Welcome!
        </Typography>
        <MyInput {...gameCode} label="Game code" type="search" />
        <Button
          variant="contained"
          sx={{
            m: "20px",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            fontSize: "20px",
          }}
          onClick={gameStartHandler}
        >
          start game!
        </Button>
        <Button
          variant="contained"
          sx={{
            mb: "50px",
            height: "110px",
            width: "110px",
            borderRadius: "50%",
            fontSize: "20px",
          }}
          onClick={enterAsAdminHandler}
        >
          Admin
        </Button>
        {enterAsAdmin && <Password message="enter your password:" {...adminPassword} />}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default HomePage;
