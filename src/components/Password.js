import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";

export const usePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const showPasswordHandler = () => {
    setShowPassword((show) => !show);
  };

  return {
    password,
    showPassword,
    passwordChangeHandler,
    showPasswordHandler,
  };
};

const Password = (props) => {
  return (
    <Fragment>
      <Typography variant="h6">{props.message}</Typography>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password" color="secondary">
          Password
        </InputLabel>
        <OutlinedInput
          color="secondary"
          id="outlined-adornment-password"
          type={props.showPassword ? "text" : "password"}
          value={props.password}
          onChange={props.passwordChangeHandler}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={props.showPasswordHandler}
                edge="end"
              >
                {props.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Fragment>
  );
};

export default Password;
