import { useEffect, useState } from "react";
// getting the props from the BooleanQuestionForm
const useBooleanQuestionForm = ({
  question,
  isOpenQuestion,
  onFinish,
  submitQuestion,
  setAreValuesValid,
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

  const areValuesValid =
    question.isValid && (checked.falseAnswer === true || checked.trueAnswer === true);
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
    onFinish(validateFileds, newQuestion, resetValues);
  };

  useEffect(() => {
    setAreValuesValid(areValuesValid);
  }, [areValuesValid, setAreValuesValid]);

  return {
    submitHandler,
    checked,
    areValuesValid,
    answerCheckedHandler,
    answerError,
    validateFileds,
    finishHandler,
  };
};
export default useBooleanQuestionForm;
