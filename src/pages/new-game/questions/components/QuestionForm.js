import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import newGameContext from "../../../../store/new-game-context";
import MyInput from "../../../../components/MyInput";
import useInput from "../../../../hooks/input-hook";
import BooleanQuestion from "./BooleanQuestion";
import OpenQuestionForm from "./OpenQuestionForm";

const QuestionForm = ({ isOpenQuestion }) => {
  const newGameCtx = useContext(newGameContext);
  const navigate = useNavigate();

  const inputValidate = (value) => value.trim().length;

  const { resetInput: resetQuestion, ...question } = useInput(
    "",
    inputValidate
  );

  const onSubmit = (question) => newGameCtx.addQuestion(question);

  const [enoughQuestionsError, setEnoughQuestionsError] = useState(false);
  const onFinish = (validateValues, validateFileds, submiting) => {
    if (newGameCtx.questions.length < 2) {
      setEnoughQuestionsError(true);
      return;
    }
    if (question.value) {
      if (!validateValues) {
        validateFileds();
        return;
      }
      submiting();
    }
    navigate("../finish", { replace: true });
  };

  useEffect(() => {
    setEnoughQuestionsError(false);
  }, [newGameCtx]);

  const formProps = {
    question,
    isOpenQuestion,
    resetQuestion,
    onSubmit,
    onFinish,
    enoughQuestionsError,
  };

  return (
    <div style={{ border: "1px solid lightGrey", padding: "1rem" }}>
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        Question
      </Typography>
      <MyInput {...question} fullWidth />
      {isOpenQuestion && <OpenQuestionForm {...formProps} />}
      {!isOpenQuestion && <BooleanQuestion {...formProps} />}
    </div>
  );
};
export default QuestionForm;
