import { Typography, Button } from "@mui/material";
import MyInput from "../../../../components/MyInput";
import useOpenQuestionForm from "./openQuestionForm-hook";

const OpenQuestionForm = ({ enoughQuestions, ...props }) => {
  const {
    finishHandler,
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
      {/* getting the error message when trying to finish when the button is disabled */}
      <span onClick={finishHandler}>
        <Button
          variant="contained"
          sx={{ m: "1rem" }}
          disabled={!enoughQuestions}
        >
          finish
        </Button>
      </span>
    </form>
  );
};

export default OpenQuestionForm;
