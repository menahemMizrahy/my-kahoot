import { useState } from "react";

const useBooleanQuestionForm = ({
  question,
  isOpenQuestion,
  onFinish,
  submitQuestion,
  resetQuestion,
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
    checked.falseAnswer === true || checked.trueAnswer === true;

  const validateFileds = () => {
    question.onBlur();
    setAnswerError(
      checked.falseAnswer === false && checked.trueAnswer === false
    );
  };

  const newQuestion = {
    question: question.value,
    isOpenQuestion,
    correctAnswer: checked.trueAnswer,
  };

  const resetValues = () => {
    resetQuestion();
    setChecked(initialAnswers);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!areValuesValid) {
      validateFileds();
      return;
    }
    submitQuestion(newQuestion, resetValues);
  };

  const finishHandler = () => {
    onFinish(areValuesValid, validateFileds, newQuestion, resetValues);
  };

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
