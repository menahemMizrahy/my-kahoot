import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

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
