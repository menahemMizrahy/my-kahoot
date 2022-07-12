import { useEffect, useState } from "react";
// getting the props from the BooleanQuestionForm
const useBooleanQuestionForm = ({
  isOpenQuestion,
  finishQuestions,
  submitQuestion,
  setAreAnswersValid,
}) => {
  const initialAnswers = {
    trueAnswer: false,
    falseAnswer: false,
  };

  const [checked, setChecked] = useState(initialAnswers);
  const [answerError, setAnswerError] = useState(false);

  const answerCheckedHandler = (event) => {
    setAnswerError(false);
    setChecked({ ...initialAnswers, [event.target.value]: true });
  };

  //the current question to be submited to the context
  const newQuestion = {
    isOpenQuestion,
    correctAnswer: checked.trueAnswer,
  };
  //setting the error state when trying to submit without having the valid values
  const validateFileds = () => {
    setAnswerError(checked.falseAnswer === false && checked.trueAnswer === false);
  };
  // reset the form after submiting
  const resetValues = () => {
    setChecked(initialAnswers);
  };

  const submitHandler = () => {
    submitQuestion(validateFileds, newQuestion, resetValues);
  };

  const finishHandler = () => {
    finishQuestions(validateFileds, newQuestion, resetValues);
  };

  const areValuesValid = checked.falseAnswer === true || checked.trueAnswer === true;
  useEffect(() => {
    setAreAnswersValid(areValuesValid);
  }, [areValuesValid, setAreAnswersValid]);

  return {
    submitHandler,
    checked,
    answerCheckedHandler,
    answerError,
    validateFileds,
    finishHandler,
  };
};
export default useBooleanQuestionForm;
