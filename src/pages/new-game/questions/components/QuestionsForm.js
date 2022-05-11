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

  const { resetInput: resetQuestion, ...question } = useInput(
    "",
    inputValidate
  );

  const submitQuestion = (newQuestion, resetValues) => {
    newGameCtx.addQuestion(newQuestion);
    resetValues();
  };

  const [enoughQuestions, setEnoughQuestions] = useState({
    enough: false,
    error: false,
  });

  const onFinish = (
    areValuesValid,
    validateFileds,
    newQuestion,
    resetValues
  ) => {
    //minimum questions limitation before finishing
    if (newGameCtx.questions.length < 2) {
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
    console.log("efferct", newGameCtx.questions.length >= 2);
    setEnoughQuestions({
      enough: newGameCtx.questions.length >= 2,
      error: false,
    });
  }, [newGameCtx]);

  const formProps = {
    question,
    isOpenQuestion,
    resetQuestion,
    submitQuestion,
    onFinish,
    enoughQuestions: enoughQuestions.enough,
  };

  return (
    <div style={{ border: "1px solid lightGrey", padding: "1rem" }}>
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        Question
      </Typography>
      <MyInput {...question} fullWidth />
      {isOpenQuestion && <OpenQuestionForm {...formProps} />}
      {!isOpenQuestion && <BooleanQuestionForm {...formProps} />}
      {enoughQuestions.error && (
        <p style={{ color: "red" }}>Not Enough Questions!</p>
      )}
    </div>
  );
};
export default QuestionsForm;
