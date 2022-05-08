import { useState } from "react";

const useBooleanQuestion = ({
  question,
  isOpenQuestion,
  onSubmit,
  onFinish,
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
    setChecked(() => {
      return { ...initialAnswers, [event.target.value]: true };
    });
  };

  const validateFileds = () => {
    question.onBlur();
    setAnswerError(
      checked.falseAnswer === false && checked.trueAnswer === false
    );
  };

  const submiting = () => {
    onSubmit({
      question: question.value,
      isOpenQuestion,
      correctAnswer: checked.trueAnswer,
    });
    resetQuestion();
    setChecked(initialAnswers);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (answerError || question.error) {
      return;
    }
    submiting();
  };

  const validateValues = () => {
    return checked.falseAnswer === false && checked.trueAnswer === false;
  };

  const finishHandler = () => {
    onFinish(validateValues, validateFileds, submiting);
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
export default useBooleanQuestion;
