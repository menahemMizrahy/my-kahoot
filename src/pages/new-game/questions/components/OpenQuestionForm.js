import { Typography, Button } from "@mui/material";
import MyInput from "../../../../components/MyInput";
import useOpenQuestionForm from "./openQuestionForm-hook";

const OpenQuestionForm = (props) => {
  const {
    finishHandler,
    validateFileds,
    answer3,
    answer2,
    answer1,
    correctAnswer,
    submitHandler,
  } = useOpenQuestionForm(props);

  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        Correct Answer
      </Typography>
      <MyInput {...correctAnswer} fullWidth />
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        The rest...
      </Typography>
      <MyInput {...answer1} fullWidth />
      <MyInput {...answer2} fullWidth />
      <MyInput {...answer3} fullWidth />
      <Button type="submit" variant="contained" sx={{ m: "1rem" }}>
        next question
      </Button>
      <Button variant="contained" sx={{ m: "1rem" }} onClick={finishHandler}>
        finish
      </Button>
      {props.enoughQuestionsError && (
        <p style={{ color: "red" }}>Not Enough Questions!</p>
      )}
    </form>
  );
};

export default OpenQuestionForm;
