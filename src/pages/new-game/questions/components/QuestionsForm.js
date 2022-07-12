import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import newGameContext from "../../../../store/new-game-context";
import MyInput from "../../../../components/MyInput";
import useInput from "../../../../hooks/input-hook";
import BooleanQuestionForm from "./booleanQuestion/BooleanQuestionForm";
import OpenQuestionForm from "./openQuestion/OpenQuestionForm";

const QuestionsForm = ({ isOpenQuestion }) => {
  const newGameCtx = useContext(newGameContext);
  const navigate = useNavigate();

  const {
    resetInput: resetQuestion,
    onBlur: questionOnBlur,
    valueIsValid: questionIsValid,
    ...question
  } = useInput("", (value) => value.trim().length, true);

  const [areAnswersValid, setAreAnswersValid] = useState(false);

  const submitQuestion = (validateFileds, newQuestion, resetValues) => {
    if (!areAnswersValid) {
      validateFileds();
      return false;
    }
    if (!questionIsValid) {
      questionOnBlur();
      return false;
    }
    newGameCtx.addQuestion({ ...newQuestion, question: question.value });
    resetValues();
    resetQuestion();
    return true;
  };

  const MIN_QUESTIONS = 2;
  const [enoughQuestions, setEnoughQuestions] = useState({
    enough: false,
    error: false,
  });

  const finishQuestions = (validateFileds, newQuestion, resetValues) => {
    //minimum questions limitation before finishing
    if (!enoughQuestions.enough) {
      //error messages
      setEnoughQuestions({ enough: false, error: true });
      validateFileds();
      questionOnBlur();
      return;
    }
    let toNavigate = true;
    //submit the last question before finishing, if entered
    if (question.value) {
      toNavigate = submitQuestion(validateFileds, newQuestion, resetValues);
    }
    if (toNavigate) navigate("../finish");
  };

  //reseting the question number error when a new question is submited
  useEffect(() => {
    setEnoughQuestions({
      enough:
        newGameCtx.questions.length >= MIN_QUESTIONS ||
        // allowing finishing when the current question fills the minimum number of questions, and the values are valid
        (newGameCtx.questions.length === MIN_QUESTIONS - 1 && areAnswersValid && questionIsValid),
      error: false,
    });
  }, [newGameCtx, areAnswersValid, questionIsValid]);

  const formProps = {
    isOpenQuestion,
    submitQuestion,
    finishQuestions,
    enoughQuestions: enoughQuestions.enough,
    setAreAnswersValid,
  };

  return (
    <div style={{ border: "1px solid lightGrey", padding: "1rem" }}>
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        Question
      </Typography>
      <MyInput {...question} fullWidth />
      {isOpenQuestion && <OpenQuestionForm {...formProps} />}
      {!isOpenQuestion && <BooleanQuestionForm {...formProps} />}
      {enoughQuestions.error && <p style={{ color: "red" }}>Not Enough Questions!</p>}
    </div>
  );
};
export default QuestionsForm;
