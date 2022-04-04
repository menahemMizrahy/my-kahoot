import { Typography, Button } from "@mui/material";
import MyInput from "../../../../components/MyInput";
import useInput from "../../../../hooks/input-hook";

const inputValidate = (value) => value.trim().length;

const OpenQuestionForm = ({ question, isOpenQuestion, onSubmit, navigate }) => {
  const correctAnswer = useInput("", inputValidate);
  const answer1 = useInput("", inputValidate);
  const answer2 = useInput("", inputValidate);
  const answer3 = useInput("", inputValidate);

  const validateFileds = () => {
    question.onBlur();
    correctAnswer.onBlur();
    answer1.onBlur();
    answer2.onBlur();
    answer3.onBlur();
  };

  const finishHandler = () => {
    navigate("../finish");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      question.error ||
      correctAnswer.error ||
      answer1.error ||
      answer2.error ||
      answer3.error
    ) {
      return;
    }
    onSubmit({
      question: question.value,
      isOpenQuestion,
      correctAnswer: correctAnswer.value,
      rest: [answer1.value, answer2.value, answer3.value],
    });
  };

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
      <Button
        type="submit"
        variant="contained"
        sx={{ m: "1rem" }}
        onClick={validateFileds}
      >
        next question
      </Button>
      <Button variant="contained" sx={{ m: "1rem" }} onClick={finishHandler}>
        finish
      </Button>
    </form>
  );
};

export default OpenQuestionForm;
