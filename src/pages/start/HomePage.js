import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Grid, Typography } from "@mui/material";

import Password, { usePassword } from "../../components/Password";
import MyPaper from "../../layout/MyPaper";
import MyInput from "../../components/MyInput";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  const adminPassword = usePassword();

  const [gameCode, setGameCode] = useState(querySearch.get("gameCode") || "");
  const [enterAsAdmin, setEnterAsAdmin] = useState(false);

  const gameCodeChangeHandler = (event) => {
    const value = event.target.value.trim();
    if (value.length <= 6) setGameCode(value);
  };

  const gameStartHandler = () => {
    //   if(gameCode === 6)
  };

  const enterAsAdminHandler = () => {
    setEnterAsAdmin(true);
    //
  };

  const createGameHandler = () => {
    navigate("/new-game", { replace: true });
  };

  return (
    <MyPaper>
      <Grid container alignItems="end" sx={{ height: "100%" }}>
        <Grid item xs={1}>
          <Button
            variant="outlined"
            sx={{ mt: "1rem" }}
            onClick={createGameHandler}
          >
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
          <MyInput
            label="Game code"
            value={gameCode}
            onChange={gameCodeChangeHandler}
            type="search"
          />
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
            <span style={{}}>Start Game!</span>
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
          {enterAsAdmin && (
            <Password message="enter your password:" {...adminPassword} />
          )}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </MyPaper>
  );
};

export default HomePage;
