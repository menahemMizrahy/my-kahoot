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

  const submitingQuestion = () => {
    onSubmit({
      question: question.value,
      isOpenQuestion,
      correctAnswer: checked.trueAnswer,
    });
    resetQuestion();
    setChecked(initialAnswers);
  };

  const submitHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (answerError || question.error) {
      return;
    }
    submitingQuestion();
  };

  const finishHandler = () => {
    if (question.value) {
      if (checked.falseAnswer === false && checked.trueAnswer === false) {
        validateFileds();
        return;
      }
      submitHandler();
    }
    navigate("../finish", { replace: true });
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
