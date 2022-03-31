import { Button, Typography } from "@mui/material";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyInput from "../../../../components/MyInput";
import useInput from "../../../../hooks/input-hook";
import newGameContext from "../../../../store/new-game-context";
import BooleanQuestion from "./BooleanQuestion";

const QuestionForm = (props) => {
  const newGameCtx = useContext(newGameContext);

  const { isOpenQuestion } = props;

  const booleanAnswerRef = useRef();

  const navigate = useNavigate();

  const inputValidate = (value) => value.trim().length;

  const question = useInput("", inputValidate);
  const correctAnswer = useInput("", inputValidate);
  const answer1 = useInput("", inputValidate);
  const answer2 = useInput("", inputValidate);
  const answer3 = useInput("", inputValidate);

  const validateFilds = () => {
    question.onBlur();
    if (!isOpenQuestion) {
      return;
    }
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

    newGameCtx.addQuestion({
      question: question.value,
      isOpenQuestion,
      correctAnswer: isOpenQuestion
        ? correctAnswer.value
        : booleanAnswerRef.current.checked,
      rest: isOpenQuestion ? [answer1.value, answer2.value, answer3.value] : [],
    });
  };

  return (
    <form
      style={{ border: "1px solid lightGrey", padding: "1rem" }}
      onSubmit={submitHandler}
    >
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        Question
      </Typography>
      <MyInput {...question} fullWidth />
      {isOpenQuestion && (
        <div>
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
        </div>
      )}
      {!isOpenQuestion && <BooleanQuestion ref={booleanAnswerRef} />}
      <Button
        type="submit"
        variant="contained"
        sx={{ m: "1rem" }}
        onClick={validateFilds}
      >
        next question
      </Button>
      <Button variant="contained" sx={{ m: "1rem" }} onClick={finishHandler}>
        finish
      </Button>
    </form>
  );
};
export default QuestionForm;
