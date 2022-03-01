import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";

import Password from "../../components/Password";
import MyPaper from "../../layout/MyPaper";
import MyInput from "../../components/MyInput";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  const [gameCode, setGameCode] = useState(querySearch.get("gameCode") || "");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [enterAsAdmin, setEnterAsAdmin] = useState(false);

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const showPasswordHandler = () => {
    setShowPassword((show) => !show);
  };

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
      <Typography variant="h1" sx={{ m: "1em" }}>
        Welcome!
      </Typography>
      <MyInput
        label="Game code:"
        value={gameCode}
        onChange={gameCodeChangeHandler}
        type="search"
      />
      <Button variant="contained" sx={{ m: "20px" }} onClick={gameStartHandler}>
        Start Game!
      </Button>
      <Button
        variant="contained"
        sx={{ m: "20px" }}
        onClick={enterAsAdminHandler}
      >
        Enter as Admin
      </Button>

      {enterAsAdmin && (
        <Password
          password={password}
          showPassword={showPassword}
          passwordChangeHandler={passwordChangeHandler}
          showPasswordHandler={showPasswordHandler}
        />
      )}
      <div>
        <Button variant="outlined" onClick={createGameHandler}>
          Create a New Game
        </Button>
      </div>
    </MyPaper>
  );
};

export default HomePage;
