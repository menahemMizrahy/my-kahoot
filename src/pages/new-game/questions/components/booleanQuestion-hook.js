import { useState } from "react";

const useBooleanQuestion = ({
  question,
  isOpenQuestion,
  onSubmit,
  navigate,
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

  const submitHandler = (event) => {
    event.preventDefault();
    if (answerError || question.error) {
      return;
    }
    onSubmit({
      question: question.value,
      isOpenQuestion,
      correctAnswer: checked.trueAnswer,
    });
    resetQuestion();
    setChecked(initialAnswers);
  };

  const finishHandler = () => {
    if (!question.value) {
      question.onBlur();
      return;
    }
    navigate("../finish");
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
