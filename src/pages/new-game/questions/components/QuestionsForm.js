import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import newGameContext from "../../../../store/new-game-context";
import MyInput from "../../../../components/MyInput";
import useInput from "../../../../hooks/input-hook";
import BooleanQuestionForm from "./BooleanQuestionForm";
import OpenQuestionForm from "./OpenQuestionForm";

const QuestionsForm = ({ isOpenQuestion }) => {
  const newGameCtx = useContext(newGameContext);
  const navigate = useNavigate();

  const inputValidate = (value) => value.trim().length;

  const { resetInput: resetQuestion, ...question } = useInput("", inputValidate, true);

  const submitQuestion = (newQuestion, resetValues) => {
    newGameCtx.addQuestion(newQuestion);
    resetValues();
  };

  const [enoughQuestions, setEnoughQuestions] = useState({
    enough: false,
    error: false,
  });

  const [areValuesValid, setAreValuesValid] = useState(false);

  const onFinish = (validateFileds, newQuestion, resetValues) => {
    //minimum questions limitation before finishing
    if (!enoughQuestions.enough) {
      //error messages
      setEnoughQuestions({ enough: false, error: true });
      validateFileds();
      return;
    }
    //submit the last question before finishing, if entered
    if (question.value) {
      if (!areValuesValid) {
        validateFileds();
        return;
      }
      submitQuestion(newQuestion, resetValues);
    }

    navigate("../finish");
  };
  //reseting the question number error when a new question is submited
  useEffect(() => {
    setEnoughQuestions({
      enough:
        newGameCtx.questions.length >= 2 ||
        // allowing finishing when the current question fills the minimum number of questions, and the values are valid
        (newGameCtx.questions.length === 1 && areValuesValid),
      error: false,
    });
  }, [newGameCtx, areValuesValid]);

  const formProps = {
    question,
    isOpenQuestion,
    resetQuestion,
    submitQuestion,
    onFinish,
    enoughQuestions: enoughQuestions.enough,
    setAreValuesValid,
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
