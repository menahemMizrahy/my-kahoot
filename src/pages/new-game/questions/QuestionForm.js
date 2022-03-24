import { Button, Typography } from "@mui/material";
import MyInput from "../../../components/MyInput";
import useInput from "../../../hooks/input-hook";
import BooleanQuestion from "./BooleanQuestion";
import OpenQuestion from "./OpenQuestion";

const QuestioForm = (props) => {
  const question = useInput("");

  return (
    <form style={{ border: "1px solid lightGrey", padding: "1rem" }}>
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        Question
      </Typography>
      <MyInput {...question} fullWidth />
      {props.openQuestion && <OpenQuestion />}
      {!props.openQuestion && <BooleanQuestion />}
      <Button variant="contained" sx={{ m: "1rem" }} onClick={aa}>
        next question
      </Button>
    </form>
  );
};
export default QuestioForm;
