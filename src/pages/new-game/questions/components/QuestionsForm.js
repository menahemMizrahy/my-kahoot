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
  //submit a singel question at a time
  const onSubmit = (question) => newGameCtx.addQuestion(question);

  const [enoughQuestionsError, setEnoughQuestionsError] = useState(false);

  const onFinish = (areValuesValid, validateFileds, submiting) => {
    //minimum questions limitation before finishing
    if (newGameCtx.questions.length < 2) {
      setEnoughQuestionsError(true);
      return;
    }
    //submit the last question before finishing, if entered
    if (question.value) {
      //validate the answers values
      if (!areValuesValid) {
        validateFileds();
        return;
      }
      submiting();
    }

    navigate("../finish");
  };
  //reseting the question number error when a new question is submited
  useEffect(() => {
    setEnoughQuestionsError(false);
  }, [newGameCtx]);

  const formProps = {
    question,
    isOpenQuestion,
    resetQuestion,
    onSubmit,
    onFinish,
  };

  return (
    <div style={{ border: "1px solid lightGrey", padding: "1rem" }}>
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        Question
      </Typography>
      <MyInput {...question} fullWidth />
      {isOpenQuestion && <OpenQuestionForm {...formProps} />}
      {!isOpenQuestion && <BooleanQuestionForm {...formProps} />}
      {enoughQuestionsError && (
        <p style={{ color: "red" }}>Not Enough Questions!</p>
      )}
    </div>
  );
};
export default QuestionsForm;
