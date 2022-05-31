import { useEffect, useState } from "react";
// getting the props from the BooleanQuestionForm
const useBooleanQuestionForm = ({
  question,
  isOpenQuestion,
  onFinish,
  submitQuestion,
  resetQuestion,
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
    question.value.trim().length && (checked.falseAnswer === true || checked.trueAnswer === true);
  //the current question to be submited to the context
  const newQuestion = {
    question: question.value,
    isOpenQuestion,
    correctAnswer: checked.trueAnswer,
  };
  //setting the error state when trying to submit without having the valid values
  const validateFileds = () => {
    question.onBlur();
    setAnswerError(checked.falseAnswer === false && checked.trueAnswer === false);
  };
  // reset the form after submiting
  const resetValues = () => {
    resetQuestion();
    setChecked(initialAnswers);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!areValuesValid) {
      validateFileds();
    } else submitQuestion(newQuestion, resetValues);
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
    answerCheckedHandler,
    answerError,
    validateFileds,
    finishHandler,
  };
};
export default useBooleanQuestionForm;
