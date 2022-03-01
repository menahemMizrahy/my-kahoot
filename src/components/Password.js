import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const Password = (props) => {
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
      <InputLabel htmlFor="filled-adornment-password" color="secondary">
        Password
      </InputLabel>
      <OutlinedInput
        color="secondary"
        id="filled-adornment-password"
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
      />
    </FormControl>
  );
};

export default Password;
