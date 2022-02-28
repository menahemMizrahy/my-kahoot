import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Button,
  Container,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const HomePage = () => {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  const [gameCode, setGameCode] = useState(querySearch.get("gameCode") || "");
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const gameCodeChangeHandler = (event) => {
    if (event.target.value.trim().length <= 6)
    setGameCode(event.target.value);
  };

  const gameStartHandler = (event) => {};

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1" sx={{ m: "1em" }}>
        Welcome!
      </Typography>
      <TextField
        label="Game code:"
        type="search"
        variant="filled"
        value={gameCode}
        onChange={gameCodeChangeHandler}
      />
      <Button variant="contained" sx={{ m: "20px" }} onClick={gameStartHandler}>
        Start Game!
      </Button>
      <Button variant="contained" sx={{ m: "20px" }}>
        Enter as Admin
      </Button>

      <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <div
        style={{ alignSelf: "start", display: "flex", flexDirection: "column" }}
      >
        <Button>Create a New Game</Button>
      </div>
    </Container>
  );
};

export default HomePage;
