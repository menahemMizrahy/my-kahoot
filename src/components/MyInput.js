import { TextField } from "@mui/material";

const MyInput = (props) => {
  return <TextField sx={{ m: "5px" }} {...props} color="secondary" multiline />;
};

export default MyInput;
