import { Button, Typography } from "@mui/material";
import { useRef, useContext } from "react";
import MyInput from "../../../../components/MyInput";
import useInput from "../../../../hooks/input-hook";
import newGameContext from "../../../../store/new-game-context";
import BooleanQuestion from "./BooleanQuestion";

const QuestionForm = (props) => {
  const newGameCtx = useContext(newGameContext);

  const { isOpenQuestion } = props;

  const booleanAnswerRef = useRef();

  const question = useInput("");
  const correctAnswer = useInput("");
  const answer1 = useInput("");
  const answer2 = useInput("");
  const answer3 = useInput("");

  const addQuestionHandler = () => {
    newGameCtx.addQuestion({
      question: question.value,
      isOpenQuestion,
      correctAnswer: isOpenQuestion
        ? correctAnswer.value
        : booleanAnswerRef.current.checked,
      rest: [],
    });
  };

  return (
    <form style={{ border: "1px solid lightGrey", padding: "1rem" }}>
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
        variant="contained"
        sx={{ m: "1rem" }}
        onClick={addQuestionHandler}
      >
        next question
      </Button>
    </form>
  );
};
export default QuestionForm;
