import { Typography } from "@mui/material";
import MyInput from "../../../../../components/MyInput";
import Buttons from "../Buttons";
import useOpenQuestionForm from "./openQuestionForm-hook";

const OpenQuestionForm = ({ enoughQuestions, ...props }) => {
  const { finishHandler, answer3, answer2, answer1, correctAnswer, submitHandler } =
    useOpenQuestionForm(props);

  return (
    <form>
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
      <Buttons {...{ enoughQuestions, finishHandler, submitHandler }} />
    </form>
  );
};

export default OpenQuestionForm;
